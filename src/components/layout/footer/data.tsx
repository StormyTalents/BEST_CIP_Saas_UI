import {
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoYoutube,
  IoMailSharp,
  IoChatboxEllipses,
} from "react-icons/io5";

export const footer = {
  widgets: [
    {
      id: 1,
      widgetTitle: "widget-title-solutions",
      lists: [
        {
          id: 1,
          title: "link-design-library",
          path: "/search",
        },
        {
          id: 2,
          title: "link-clipart-developers-api",
          path: "/svg-clipart-developers-api",
        },
        {
          id: 3,
          title: "link-custom-design",
          path: "/custom-design",
        },
        {
          id: 4,
          title: "link-resources",
          path: "/resources",
        },
      ],
    },
    {
      id: 2,
      widgetTitle: "widget-title-company",
      lists: [
        {
          id: 1,
          title: "link-about",
          path: "/about",
        },
        {
          id: 2,
          title: "link-pricing",
          path: "/pricing",
        },
        {
          id: 6,
          title: "link-contact",
          path: "/contact-us",
        },
      ],
    },
    {
      id: 3,
      widgetTitle: "widget-title-help",
      lists: [
        {
          id: 1,
          title: "link-support",
          path: "https://support.designious.com",
        },
        {
          id: 2,
          title: "link-refunds",
          path: "/refund-policy",
        },
        {
          id: 3,
          title: "link-license",
          path: "/license",
        },
      ],
    },
    {
      id: 4,
      widgetTitle: "widget-title-social",
      lists: [
        {
          id: 3,
          title: "link-twitter",
          path: "https://twitter.com/designious",
          icon: <IoLogoTwitter />,
        },
        {
          id: 4,
          title: "link-facebook",
          path: "https://www.facebook.com/Designious/",
          icon: <IoLogoFacebook />,
        },
        {
          id: 5,
          title: "link-youtube",
          path: "https://youtube.com/designious-art",
          icon: <IoLogoYoutube />,
        },
      ],
    },
  ],
  payment: [
    {
      id: 1,
      path: "/",
      image: "/assets/images/payment/mastercard.png",
      name: "payment-master-card",
      width: 34,
      height: 20,
    },
    {
      id: 2,
      path: "/",
      image: "/assets/images/payment/visa.png",
      name: "payment-visa",
      width: 50,
      height: 20,
    },
    {
      id: 3,
      path: "/",
      image: "/assets/images/payment/paypal.png",
      name: "payment-paypal",
      width: 76,
      height: 20,
    },
  ],
};
