import { FaEnvelope, FaTiktok, FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { AppLink } from "@/components/ui/app-link";

const company = [
  { title: "Hakkımda", href: "/hakkimda" },
  { title: "Blog", href: "/blog" },
  { title: "SSS", href: "/sikca-sorulan-sorular" },
];

const resources = [
  { title: "Ücretsiz İçerikler", href: "/blog" },
  { title: "Görüşme Planlayın", href: "/gorusme-planlayin" },
];

const socialLinks = [
  {
    icon: <RiInstagramFill className="size-4" />,
    link: "https://www.instagram.com/misafirkurucu/",
  },
  {
    icon: <FaYoutube className="size-4" />,
    link: "https://www.youtube.com/@misafirkurucu",
  },
  {
    icon: <FaTiktok className="size-4" />,
    link: "https://www.tiktok.com/@misafirkurucu",
  },
  {
    icon: <FaEnvelope className="size-4" />,
    link: "mailto:misafirkurucu@gmail.com",
  },
];

export function MinimalFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative px-3 pb-10 pt-20 md:px-4">
      <div className="mx-auto w-full max-w-[90rem]">
        <div className="relative w-full overflow-hidden rounded-t-[2.25rem] border border-b-0 border-border/70 md:rounded-t-[2.75rem]">
          <div className="bg-[radial-gradient(35%_80%_at_30%_0%,rgba(97,70,45,0.08),transparent)]">
            <div className="grid grid-cols-6 gap-8 p-5 md:p-8">
              <div className="col-span-6 flex flex-col gap-5 md:col-span-4">
                <div className="flex items-center gap-4">
                  <AppLink href="/" className="inline-flex">
                    <img
                      alt="Misafir Kurucu"
                      className="h-20 w-auto sm:h-24"
                      src="/images/mk-logo.svg"
                    />
                  </AppLink>
                </div>
                <p className="max-w-sm text-base leading-7 text-muted-foreground">
Tekstil girişimcileri için üretimden satışa, fikirden markaya — uçtan uca danışmanlık.
                </p>
                <div className="flex gap-2">
                  {socialLinks.map((item, index) => (
                    <a
                      key={index}
                      className="rounded-md border border-border/80 p-1.5 transition-colors hover:bg-primary/10"
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="col-span-3 w-full md:col-span-1">
                <span className="mb-1 text-sm tracking-[0.24em] text-muted-foreground">
                  Sayfalar
                </span>
                <div className="mt-4 flex flex-col gap-1">
                  {company.map(({ href, title }) => (
                    <AppLink
                      key={title}
                      className="w-max py-1 text-base duration-200 hover:underline"
                      href={href}
                    >
                      {title}
                    </AppLink>
                  ))}
                </div>
              </div>

              <div className="col-span-3 w-full md:col-span-1">
                <span className="mb-1 text-sm tracking-[0.24em] text-muted-foreground">
                  İletişim
                </span>
                <div className="mt-4 flex flex-col gap-1">
                  {resources.map(({ href, title }) => (
                    <AppLink
                      key={title}
                      className="w-max py-1 text-base duration-200 hover:underline"
                      href={href}
                    >
                      {title}
                    </AppLink>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-14 h-px bg-border/80" />
          <div className="flex flex-col justify-between gap-2 px-5 pb-5 pt-3 md:px-8">
            <p className="text-center text-base font-light text-muted-foreground">
              © {year} Misafir Kurucu. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
