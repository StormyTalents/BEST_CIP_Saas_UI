import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { ManagedUIContext } from "@contexts/ui.context";
import { useEffect, useRef } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { ToastContainer } from "react-toastify";
import { ReactQueryDevtools } from "react-query/devtools";
import { appWithTranslation } from "next-i18next";
import { pixelPageview } from "@utils/fb-pixel";
import NProgress from "nprogress";

import ManagedModal from "@components/common/modal/managed-modal";
import ManagedDrawer from "@components/common/drawer/managed-drawer";
import { DefaultSeo } from "@components/common/default-seo";

// Load Open Sans and satisfy typeface font
import "@fontsource/inter";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/satisfy";
// external
import "react-toastify/dist/ReactToastify.css";
// base css file
import "@styles/scrollbar.css";
import "@styles/swiper-carousel.css";
import "@styles/custom-plugins.css";
import "@styles/nprogress.css";
// TODO: customize this
import "@styles/themes/algolia.css";
import "@styles/instantsearch.css";

import "@styles/tailwind.css";
import { getDirection } from "@utils/get-direction";
import { SessionProvider } from "next-auth/react";
import { NextQueryParamProvider } from "next-query-params";

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

const Noop: React.FC = ({ children }) => <>{children}</>;
NProgress.configure({ showSpinner: false });

const CustomApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  const queryClientRef = useRef<any>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          onError: (error) => {
            // @todo error handling
            console.error(error);
          },
        },
      },
    });
  }
  const router = useRouter();
  const dir = getDirection(router.locale);
  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);
  const Layout = (Component as any).Layout || Noop;

  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  // Track routing changes on facebook pixel
  useEffect(() => {
    pixelPageview();

    const handleRouteChange = () => {
      pixelPageview();
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <NextQueryParamProvider>
      <SessionProvider session={session}>
        <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
          <QueryClientProvider client={queryClientRef.current}>
            <Hydrate state={pageProps.dehydratedState}>
              <ManagedUIContext>
                <Layout pageProps={pageProps}>
                  <DefaultSeo />
                  <Component {...pageProps} key={router.route} />
                  <ToastContainer />
                </Layout>
                <ManagedModal />
                <ManagedDrawer />
              </ManagedUIContext>
            </Hydrate>
            {/* <ReactQueryDevtools /> */}
          </QueryClientProvider>
        </AnimatePresence>
      </SessionProvider>
    </NextQueryParamProvider>
  );
};

export default appWithTranslation(CustomApp);
