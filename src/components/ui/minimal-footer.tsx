import {
  Instagram,
  Linkedin,
  Mail,
  Scissors,
  Send,
  Youtube,
} from "lucide-react";
import { AppLink } from "@/components/ui/app-link";

const company = [
  { title: "Hakkımda", href: "/hakkimda" },
  { title: "Programlar", href: "/programlar" },
  { title: "Blog", href: "/blog" },
  { title: "Sıkça Sorulan Sorular", href: "/sikca-sorulan-sorular" },
];

const resources = [
  { title: "Ücretsiz İçerikler", href: "/blog" },
  { title: "Görüşme Planlayın", href: "/gorusme-planlayin" },
  {
    title: "Instagram",
    href: "https://www.instagram.com/misafirkurucu/",
  },
  { title: "E-posta", href: "mailto:misafirkurucu@gmail.com" },
];

const socialLinks = [
  {
    icon: <Instagram className="size-4" />,
    link: "https://www.instagram.com/misafirkurucu/",
  },
  {
    icon: <Linkedin className="size-4" />,
    link: "https://www.instagram.com/misafirkurucu/",
  },
  {
    icon: <Youtube className="size-4" />,
    link: "https://www.youtube.com/@misafirkurucu",
  },
  {
    icon: <Send className="size-4" />,
    link: "https://www.instagram.com/misafirkurucu/",
  },
  {
    icon: <Mail className="size-4" />,
    link: "mailto:misafirkurucu@gmail.com",
  },
];

export function MinimalFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-shell pb-10 pt-20">
      <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 shadow-soft">
        <div className="grid gap-8 p-6 md:grid-cols-[1.4fr_0.6fr_0.6fr] md:p-10">
          <div className="space-y-5">
            <AppLink href="/" className="flex w-max items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Scissors className="size-5" />
              </span>
              <div>
                <p className="font-display text-3xl leading-none">MK</p>
                <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  Misafir Kurucu
                </p>
              </div>
            </AppLink>
            <p className="max-w-md text-sm leading-7 text-muted-foreground">
              Sevinç tarafından verilen, tekstil sektöründe girişimcilik
              hedefleyenler için üretim, marka ve satış tarafını bir araya
              getiren uygulanabilir danışmanlık.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  className="rounded-full border border-border p-2 transition-colors hover:bg-muted"
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              Sayfalar
            </span>
            <div className="mt-4 flex flex-col gap-3">
              {company.map(({ href, title }) => (
                <AppLink key={title} className="w-max text-sm hover:underline" href={href}>
                  {title}
                </AppLink>
              ))}
            </div>
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              İletişim
            </span>
            <div className="mt-4 flex flex-col gap-3">
              {resources.map(({ href, title }) => (
                <AppLink key={title} className="w-max text-sm hover:underline" href={href}>
                  {title}
                </AppLink>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border/70 px-6 py-5 text-center text-sm text-muted-foreground md:px-10">
          © {year} Misafir Kurucu. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
