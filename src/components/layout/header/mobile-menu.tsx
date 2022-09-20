import { useState } from "react";
import { FaPalette } from "react-icons/fa";
import Link from "@components/ui/link";
import { siteSettings } from "@settings/site-settings";
import Scrollbar from "@components/common/scrollbar";
import { IoIosArrowDown } from "react-icons/io";
import { useUI } from "@contexts/ui.context";
import { useTranslation } from "next-i18next";

export default function MobileMenu() {
  const [activeMenus, setActiveMenus] = useState<any>([]);
  const { site_header } = siteSettings;
  const { closeSidebar, setModalView, openModal } = useUI();
  const { t } = useTranslation("menu");

  function handleLogin() {
    closeSidebar();
    setModalView("LOGIN_VIEW");
    return openModal();
  }

  const handleArrowClick = (menuName: string) => {
    let newActiveMenus = [...activeMenus];

    if (newActiveMenus.includes(menuName)) {
      var index = newActiveMenus.indexOf(menuName);
      if (index > -1) {
        newActiveMenus.splice(index, 1);
      }
    } else {
      newActiveMenus.push(menuName);
    }

    setActiveMenus(newActiveMenus);
  };

  const ListMenu = ({
    dept,
    data,
    hasSubMenu,
    menuName,
    menuIndex,
    className = "",
    badge,
  }: any) =>
    data.label && (
      <li className={`mb-0.5 ${className}`}>
        <div className="flex items-center justify-between relative">
          <Link
            href={data.path}
            className="w-full text-[15px] menu-item relative py-3 ps-5 md:ps-6 pe-4 transition duration-300 ease-in-out flex"
          >
            <span className="flex items-center w-full" onClick={closeSidebar}>
              {data.icon && <FaPalette className="mr-2" />}
              {t(`${data.label}`)}
              {badge && (
                <span className="ml-2 bg-celery-700 text-white text-xs rounded px-2 flex items-center">
                  {badge}
                </span>
              )}
            </span>
          </Link>
          {hasSubMenu && (
            <div
              className="cursor-pointer w-full h-full text-lg flex items-center justify-end absolute start-0 top-0 pe-5"
              onClick={() => handleArrowClick(menuName)}
            >
              <IoIosArrowDown
                className={`transition duration-200 ease-in-out transform text-heading ${
                  activeMenus.includes(menuName) ? "-rotate-180" : "rotate-0"
                }`}
              />
            </div>
          )}
        </div>
        {hasSubMenu && (
          <SubMenu
            dept={dept}
            data={data.subMenu}
            toggle={activeMenus.includes(menuName)}
            menuIndex={menuIndex}
          />
        )}
      </li>
    );

  const SubMenu = ({ dept, data, toggle, menuIndex }: any) => {
    if (!toggle) {
      return null;
    }

    dept = dept + 1;

    return (
      <ul className="pt-0.5">
        {data?.map((menu: any, index: number) => {
          const menuName: string = `sidebar-submenu-${dept}-${menuIndex}-${index}`;

          return (
            <ListMenu
              dept={dept}
              data={menu}
              hasSubMenu={menu.subMenu}
              menuName={menuName}
              key={menuName}
              menuIndex={index}
              className={dept > 1 && "ps-4"}
            />
          );
        })}
      </ul>
    );
  };

  return (
    <>
      <div className="flex flex-col justify-between w-full h-full bg-white">
        <Scrollbar className="menu-scrollbar flex-grow mb-auto">
          <div className="flex flex-col py-7 px-0 lg:px-2 text-heading">
            <ul className="mobileMenu">
              {site_header.mobileMenu.map((menu, index) => {
                const dept: number = 1;
                const menuName: string = `sidebar-menu-${dept}-${index}`;

                return (
                  <ListMenu
                    dept={dept}
                    data={menu}
                    menuName={menuName}
                    key={menuName}
                    menuIndex={index}
                    badge={menu.badge}
                  />
                );
              })}

              <li className="mb-0.5">
                <div className="flex items-center justify-between relative">
                  <button
                    type="button"
                    className="w-full text-[15px] menu-item relative py-3 ps-5 md:ps-6 pe-4 transition duration-300 ease-in-out flex"
                    onClick={handleLogin}
                  >
                    <span
                      className="flex items-center w-full"
                      onClick={closeSidebar}
                    >
                      Login
                    </span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </Scrollbar>
      </div>
    </>
  );
}
