import Image from "next/image";
import Link from "@components/ui/link";
import cn from "classnames";
import { siteSettings } from "@settings/site-settings";

type Props = {
  dark?: boolean;
  size?: "regular" | "large";
};

const Logo: React.FC<React.AnchorHTMLAttributes<{}> & Props> = ({
  dark,
  size,
  className,
  ...props
}) => {
  const { height, width } = siteSettings.logo;

  return (
    <Link
      href={siteSettings.logo.href}
      className={cn("inline-flex focus:outline-none", className)}
      {...props}
    >
      <Image
        src={dark ? siteSettings.logo.urlDark : siteSettings.logo.url}
        alt={siteSettings.logo.alt}
        height={size === "large" ? height * 2 : height}
        width={size === "large" ? width * 2 : width}
        layout="intrinsic"
        loading="eager"
        quality={100}
      />
    </Link>
  );
};

export default Logo;
