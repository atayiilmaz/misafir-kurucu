import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ChevronDown, Menu, Scissors, X } from "lucide-react";
import { AppLink } from "@/components/ui/app-link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href?: string;
  children?: readonly { label: string; href: string }[];
};

interface Navbar1Props {
  items: readonly NavItem[];
}

export function Navbar1({ items }: Navbar1Props) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [desktopProgramsOpen, setDesktopProgramsOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 md:px-4">
      <div className="mx-auto flex w-full max-w-[90rem] items-center rounded-full border border-foreground/15 bg-[#eef2f6] px-4 py-3 shadow-soft md:px-5">
        <AppLink href="/" className="flex items-center gap-3">
          <motion.div
            className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 bg-white text-primary"
            whileHover={{ rotate: 8, scale: 1.04 }}
            transition={{ duration: 0.25 }}
          >
            <Scissors className="h-5 w-5" />
          </motion.div>
          <p className="font-display text-lg font-semibold leading-none text-foreground sm:text-xl">
            Misafir Kurucu
          </p>
        </AppLink>

        <div className="ml-auto hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-7">
            {items.map((item) => {
              if (!item.children) {
                return (
                  <NavLink
                    key={item.label}
                    to={item.href ?? "/"}
                    className={({ isActive }) =>
                      cn(
                        "text-sm font-semibold transition-colors hover:text-primary",
                        isActive ? "text-primary" : "text-foreground/82",
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                );
              }

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setDesktopProgramsOpen(true)}
                  onMouseLeave={() => setDesktopProgramsOpen(false)}
                >
                  <button
                    className="flex items-center gap-1 text-sm font-semibold text-foreground/82 transition-colors hover:text-primary"
                    onClick={() => setDesktopProgramsOpen((value) => !value)}
                    type="button"
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        desktopProgramsOpen && "rotate-180",
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {desktopProgramsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 12 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 top-full mt-4 w-64 -translate-x-1/2 rounded-3xl border border-border/70 bg-white/95 p-3 shadow-soft"
                      >
                        {item.children.map((child) => (
                          <NavLink
                            key={child.label}
                            to={child.href}
                            className={({ isActive }) =>
                              cn(
                                "block rounded-2xl px-4 py-3 text-sm font-medium transition-colors hover:bg-muted",
                                isActive ? "bg-muted text-primary" : "text-foreground",
                              )
                            }
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          <AppLink
            href="/gorusme-planlayin"
            className={buttonVariants()}
          >
            Görüşme Planlayın
          </AppLink>
        </div>

        <button
          className="ml-auto inline-flex items-center rounded-full p-2 text-foreground md:hidden"
          onClick={() => setIsMobileOpen(true)}
          type="button"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 24, stiffness: 280 }}
            className="fixed inset-0 z-50 bg-background/95 px-6 py-8 backdrop-blur"
          >
            <div className="mx-auto flex h-full max-w-md flex-col">
              <div className="mb-12 flex items-center justify-between">
                <span className="font-display text-3xl">Menü</span>
                <button
                  className="rounded-full border border-border bg-white p-2"
                  onClick={() => setIsMobileOpen(false)}
                  type="button"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-4">
                {items.map((item) => {
                  if (!item.children) {
                    return (
                      <NavLink
                        key={item.label}
                        to={item.href ?? "/"}
                        className="block rounded-2xl bg-white/75 px-5 py-4 text-lg font-semibold"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {item.label}
                      </NavLink>
                    );
                  }

                  return (
                    <div
                      key={item.label}
                      className="rounded-[1.75rem] border border-border/70 bg-white/75 p-2"
                    >
                      <button
                        className="flex w-full items-center justify-between px-3 py-3 text-left text-lg font-semibold"
                        onClick={() => setMobileProgramsOpen((value) => !value)}
                        type="button"
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 transition-transform",
                            mobileProgramsOpen && "rotate-180",
                          )}
                        />
                      </button>

                      <AnimatePresence>
                        {mobileProgramsOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="space-y-2 px-3 pb-3">
                              {item.children.map((child) => (
                                <NavLink
                                  key={child.label}
                                  to={child.href}
                                  className="block rounded-2xl bg-muted px-4 py-3 text-sm font-medium"
                                  onClick={() => setIsMobileOpen(false)}
                                >
                                  {child.label}
                                </NavLink>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              <div className="mt-auto pt-8">
                <AppLink
                  href="/gorusme-planlayin"
                  className={cn(buttonVariants(), "w-full")}
                  onClick={() => setIsMobileOpen(false)}
                >
                  Görüşme Planlayın
                </AppLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
