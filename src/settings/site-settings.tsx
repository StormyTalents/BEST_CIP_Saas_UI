import { ILFlag } from "@components/icons/ILFlag";
import { SAFlag } from "@components/icons/SAFlag";
import { CNFlag } from "@components/icons/CNFlag";
import { USFlag } from "@components/icons/USFlag";
import { DEFlag } from "@components/icons/DEFlag";
import { ESFlag } from "@components/icons/ESFlag";
import menu from "@settings/menu.json";
import mobileMenu from "@settings/mobile-menu.json";

export const siteSettings = {
  name: "Designious",
  description:
    "Download t-shirt designs for merch, vector clipart, templates, fonts, textures, logos, and Photoshop brushes. Commercial license for print on demand websites.",
  author: {
    name: "ioxo media, inc.",
    websiteUrl: "https://ioxomedia.com",
    address: "",
  },
  logo: {
    url: "/assets/images/designious-logo.svg",
    urlDark: "/assets/images/designious-logo-dark.svg",
    alt: "Designious",
    href: "/",
    width: 147,
    height: 24,
  },
  defaultLanguage: "en",
  currencyCode: "USD",
  site_header: {
    menu,
    mobileMenu,
    languageMenu: [
      {
        id: "ar",
        name: "عربى - AR",
        value: "ar",
        icon: <SAFlag width="20px" height="15px" />,
      },
      {
        id: "zh",
        name: "中国人 - ZH",
        value: "zh",
        icon: <CNFlag width="20px" height="15px" />,
      },
      {
        id: "en",
        name: "English - EN",
        value: "en",
        icon: <USFlag width="20px" height="15px" />,
      },
      {
        id: "de",
        name: "Deutsch - DE",
        value: "de",
        icon: <DEFlag width="20px" height="15px" />,
      },
      {
        id: "he",
        name: "rעברית - HE",
        value: "he",
        icon: <ILFlag width="20px" height="15px" />,
      },
      {
        id: "es",
        name: "Español - ES",
        value: "es",
        icon: <ESFlag width="20px" height="15px" />,
      },
    ],
  },
};
