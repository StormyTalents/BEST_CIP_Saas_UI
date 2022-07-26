import { useTranslation } from "next-i18next";

interface HeaderProps {
  pageSubHeader?: string;
  pageHeader: string;
}

const PageHeader: React.FC<HeaderProps> = ({
  pageSubHeader = "text-page-explore",
  pageHeader = "text-page-header",
}) => {
  const { t } = useTranslation("common");
  return (
    <div
      className="flex justify-center relative bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: "url(/assets/images/page-header.jpg)",
      }}
    >
      <div className="absolute top-0 start-0 bg-black w-full h-full opacity-50 transition-opacity duration-500 group-hover:opacity-80" />
      <div className="w-full flex items-center justify-center relative z-10 py-5 md:py-7 lg:py-10 xl:py-12 2xl:py-16">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white text-center">
          {/* <span className="font-satisfy block font-normal mb-3">
						{t(`${pageSubHeader}`)}
					</span> */}
          {t(`${pageHeader}`)}
        </h2>
      </div>
    </div>
  );
};

export default PageHeader;
