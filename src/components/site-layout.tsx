import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { PageTransitionShell } from "@/components/gsap/page-transition-shell";
import { Navbar1 } from "@/components/ui/navbar-1";
import { MinimalFooter } from "@/components/ui/minimal-footer";
import { navItems } from "@/content/site";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);

      if (element) {
        requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        });
        return;
      }
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, location.hash]);

  return null;
}

export function SiteLayout() {
  const location = useLocation();

  return (
    <div className="pb-6">
      <ScrollToTop />
      <Navbar1 items={navItems} />
      <main>
        <PageTransitionShell routeKey={location.pathname}>
          <Outlet />
        </PageTransitionShell>
      </main>
      <MinimalFooter />
    </div>
  );
}
