import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { i18n } from "next-i18next";
import { getDirection } from "@utils/get-direction";

export default class CustomDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		return await Document.getInitialProps(ctx);
	}
	render() {
		const { locale } = this.props.__NEXT_DATA__;
		if (process.env.NODE_ENV !== "production") {
			i18n!.reloadResources(locale);
		}
		return (
			<Html dir={getDirection(locale)}>
				 <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', { 
              page_path: window.location.pathname,
            });
          `,
            }}
          />

          {/* Facebook pixel */}
          {/* eslint-disable @next/next/no-img-element */}
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FB_PIXEL_ID}&ev=PageView&noscript=1`}
              alt="pixel"
            />
          </noscript>
          {/* eslint-enable */}
        </Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
