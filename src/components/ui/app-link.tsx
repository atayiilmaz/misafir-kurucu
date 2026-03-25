import * as React from "react";
import { Link } from "react-router-dom";

type AppLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

function isInternalHref(href: string) {
  return href.startsWith("/");
}

export function AppLink({
  href,
  children,
  onClick,
  ...props
}: AppLinkProps) {
  if (isInternalHref(href)) {
    return (
      <Link to={href} onClick={onClick} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} onClick={onClick} {...props}>
      {children}
    </a>
  );
}
