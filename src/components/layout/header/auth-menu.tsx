import { useTranslation } from "next-i18next";
import { useAuth } from "@framework/auth/use-auth";
import Link from "@components/ui/link";
import Image from "next/image";
import authMenu from "@settings/auth-menu.json";
import { useMemo } from "react";
interface Props {
  href: string;
  className?: string;
  btnProps: React.ButtonHTMLAttributes<any>;
  isAuthorized: boolean;
}

const menuItemClassName =
  "flex items-center justify-between py-2 ps-5 xl:ps-7 pe-3 xl:pe-3.5 text-sm w-full hover:text-heading hover:bg-gray-300";

const AuthMenu: React.FC<Props> = ({
  isAuthorized,
  href,
  className,
  btnProps,
}) => {
  const { t } = useTranslation();
  const { handleLogout, sessionData } = useAuth();

  const avatar = useMemo(() => {
    if (!sessionData || !sessionData.user || !sessionData.user.image) {
      return null;
    }

    return sessionData.user.image;
  }, [sessionData]);

  return isAuthorized ? (
    <>
      <Link href={href} className={className}>
        {/* eslint-disable @next/next/no-img-element */}
        {avatar ? (
          <img
            src={avatar}
            alt="User"
            width={32}
            height={32}
            className="rounded-full"
          />
        ) : (
          <Image
            src="/assets/images/default-avatar.png"
            alt="User"
            width={32}
            height={32}
          />
        )}
        {/* eslint-enable */}
      </Link>
      <ul className="subMenu authMenu shadow-header bg-gray-200 absolute z-0 opacity-0 w-48 py-3 invisible group-hover:opacity-100 group-hover:visible">
        {authMenu.map((data) => (
          <Link href={data.path} className={menuItemClassName} key={data.id}>
            {t(data.label)}
          </Link>
        ))}
        <button
          type="button"
          className={menuItemClassName}
          onClick={handleLogout}
        >
          {t("text-logout")}
        </button>
      </ul>
    </>
  ) : (
    <button {...btnProps} />
  );
};

export default AuthMenu;
