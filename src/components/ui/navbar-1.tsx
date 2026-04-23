import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, Scissors, X } from "lucide-react";
import { AppLink } from "@/components/ui/app-link";
import SubtleButton from "@/components/ui/subtle-button";
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
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [desktopProgramsOpen, setDesktopProgramsOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const desktopProgramsButtonRef = useRef<HTMLButtonElement | null>(null);
  const desktopProgramsCloseTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  useEffect(() => {
    return () => {
      if (desktopProgramsCloseTimeoutRef.current !== null) {
        window.clearTimeout(desktopProgramsCloseTimeoutRef.current);
      }
    };
  }, []);

  const clearDesktopProgramsCloseTimeout = () => {
    if (desktopProgramsCloseTimeoutRef.current !== null) {
      window.clearTimeout(desktopProgramsCloseTimeoutRef.current);
      desktopProgramsCloseTimeoutRef.current = null;
    }
  };

  const openDesktopPrograms = () => {
    clearDesktopProgramsCloseTimeout();
    setDesktopProgramsOpen(true);
  };

  const closeDesktopPrograms = () => {
    clearDesktopProgramsCloseTimeout();
    setDesktopProgramsOpen(false);
  };

  const scheduleDesktopProgramsClose = () => {
    clearDesktopProgramsCloseTimeout();
    desktopProgramsCloseTimeoutRef.current = window.setTimeout(() => {
      setDesktopProgramsOpen(false);
    }, 160);
  };

  return (
    <header className="sticky top-0 z-50 border-b-[1.5px] border-foreground/20 bg-[#fef3e9] shadow-[0_10px_22px_-22px_rgba(43,31,22,0.2)]">
      <div className="mx-auto flex w-full max-w-[90rem] items-center px-3 py-3 md:px-4 lg:px-5">
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

              const dropdownRootPath = `/${item.children[0]?.href.split("/").filter(Boolean)[0] ?? ""}`;
              const isDropdownActive =
                location.pathname === dropdownRootPath ||
                item.children.some(
                  (child) =>
                    location.pathname === child.href ||
                    location.pathname.startsWith(`${child.href}/`),
                );

              return (
                <div
                  key={item.label}
                  className="relative"
                  onBlur={(event) => {
                    const nextFocused = event.relatedTarget;

                    if (!event.currentTarget.contains(nextFocused)) {
                      scheduleDesktopProgramsClose();
                    }
                  }}
                  onFocusCapture={openDesktopPrograms}
                  onKeyDown={(event) => {
                    if (event.key === "Escape") {
                      closeDesktopPrograms();
                      desktopProgramsButtonRef.current?.focus();
                    }
                  }}
                  onMouseEnter={openDesktopPrograms}
                  onMouseLeave={scheduleDesktopProgramsClose}
                >
                  <button
                    ref={desktopProgramsButtonRef}
                    aria-expanded={desktopProgramsOpen}
                    aria-haspopup="menu"
                    className={cn(
                      "flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
                      desktopProgramsOpen || isDropdownActive
                        ? "bg-white text-primary shadow-[0_8px_24px_-20px_rgba(43,31,22,0.45)]"
                        : "text-foreground/82 hover:bg-white/80 hover:text-primary",
                    )}
                    onClick={() =>
                      desktopProgramsOpen ? closeDesktopPrograms() : openDesktopPrograms()
                    }
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
                      <div className="absolute left-1/2 top-full z-20 w-[22rem] -translate-x-1/2 pt-3">
                        <motion.div
                          initial={{ opacity: 0, y: 12, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.98 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className="overflow-hidden rounded-[2rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,251,247,0.98),rgba(252,240,228,0.98))] p-3 shadow-[0_22px_55px_-30px_rgba(43,31,22,0.34)] backdrop-blur"
                        >
                          <div className="space-y-1">
                            {item.children.map((child) => (
                              <NavLink
                                key={child.label}
                                to={child.href}
                                onClick={closeDesktopPrograms}
                                className={({ isActive }) =>
                                  cn(
                                    "block rounded-[1.4rem] border border-transparent px-4 py-3 text-sm font-semibold transition-all duration-200",
                                    isActive
                                      ? "border-primary/12 bg-primary/10 text-primary"
                                      : "text-foreground/88 hover:border-primary/10 hover:bg-white/85 hover:text-primary",
                                  )
                                }
                              >
                                {child.label}
                              </NavLink>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          <SubtleButton
            href="/gorusme-planlayin"
            size="default"
          >
            Görüşme Planlayın
          </SubtleButton>
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
                <span className="font-display text-[2.35rem] sm:text-3xl">Menü</span>
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
                        className="block rounded-2xl bg-white/75 px-5 py-4 text-base font-semibold sm:text-lg"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {item.label}
                      </NavLink>
                    );
                  }

                  return (
                    <div
                      key={item.label}
                      className="rounded-[1.75rem] border border-foreground/12 bg-[#fff8f1] p-2 shadow-[0_16px_34px_-28px_rgba(43,31,22,0.24)]"
                    >
                      <button
                        className="flex w-full items-center justify-between px-3 py-3 text-left text-base font-semibold sm:text-lg"
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
                                  className="block rounded-2xl bg-primary/6 px-4 py-3 text-xs font-medium text-foreground/88 transition-colors hover:bg-primary/10 hover:text-primary sm:text-sm"
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
                <SubtleButton
                  href="/gorusme-planlayin"
                  size="default"
                  fullWidth
                  className="h-11 px-6 text-[0.95rem] sm:h-12 sm:px-8 sm:text-base"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Görüşme Planlayın
                </SubtleButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
