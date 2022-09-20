import Widgets from "./widgets";
import Copyright from "./copyright";
import { footer } from "./data";
const { widgets, payment } = footer;

const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-gray-300 mt-9 md:mt-11 lg:mt-16 3xl:mt-20 pt-10">
    <Widgets widgets={widgets} />
    <Copyright payment={payment} />
  </footer>
);

export default Footer;
