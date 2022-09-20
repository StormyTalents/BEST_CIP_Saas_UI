import React, { useRef } from "react";
import { siteSettings } from "@settings/site-settings";
import HeaderMenu from "@components/layout/header/header-menu";
import Logo from "@components/ui/logo";
import { useUI } from "@contexts/ui.context";
import { ROUTES } from "@utils/routes";
import { useActiveScroll } from "@utils/use-active-scroll";
import dynamic from "next/dynamic";
import { useAuth } from "@framework/auth/use-auth";
import Link from "@components/ui/link";
const AuthMenu = dynamic(() => import("./auth-menu"), { ssr: false });
const CartButton = dynamic(() => import("@components/cart/cart-button"), {
  ssr: false,
});

type DivElementRef = React.MutableRefObject<HTMLDivElement>;
const { site_header } = siteSettings;
const Header: React.FC = () => {
  const { openSidebar, setDrawerView, openModal, setModalView } = useUI();

  const { status } = useAuth();
  const isAuthorized = status === "authenticated";

  const siteHeaderRef = useRef() as DivElementRef;
  useActiveScroll(siteHeaderRef);

  function handleLogin() {
    setModalView("LOGIN_VIEW");
    return openModal();
  }
  function handleMobileMenu() {
    setDrawerView("MOBILE_MENU");
    return openSidebar();
  }

  return (
    <header
      id="siteHeader"
      ref={siteHeaderRef}
      className="w-full h-16 relative z-20"
    >
      <div className="innerSticky text-gray-white body-font fixed bg-gray-800 w-full h-16 z-20 px-4 md:px-8 2xl:px-16 transition duration-200 ease-in-out">
        <div className="flex items-center justify-center mx-auto relative max-w-[1920px] h-full w-full">
          <button
            aria-label="Menu"
            className="menuBtn flex lg:hidden flex-col items-center justify-center px-5 2xl:px-7 flex-shrink-0 h-full outline-none focus:outline-none absolute -left-6"
            onClick={handleMobileMenu}
          >
            <span className="menuIcon">
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </span>
          </button>

          <Logo />

          {/* Main menu */}
          <div className="hidden lg:flex mr-auto items-center ml-4">
            <HeaderMenu
              data={site_header.menu}
              className="hidden lg:flex md:ms-2 xl:ms-4"
            />
            <Link
              href="/pricing"
              className="flex items-center text-md text-white bg-primary py-2 px-4 ml-4 rounded transition-colors duration-300"
            >
              Pricing
            </Link>
          </div>

          {/* Utility menu */}
          <div className="hidden lg:flex items-center space-s-4 me-3 flex-shrink-0">
            <div className="profileBtn flex-shrink-0 mt-1 group relative">
              <AuthMenu
                isAuthorized={isAuthorized}
                href={ROUTES.ACCOUNT}
                className="text-sm xl:text-base text-white font-semibold -mt-1 flex justify-center items-center h-10"
                btnProps={{
                  className:
                    "text-sm xl:text-base text-white focus:outline-none px-2 pb-1",
                  children: "Login",
                  onClick: handleLogin,
                }}
              />
            </div>
            <CartButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
