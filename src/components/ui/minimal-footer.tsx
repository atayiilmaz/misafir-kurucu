import {
  Instagram,
  Linkedin,
  Mail,
  Grid2x2Plus,
  Scissors,
  Send,
  Youtube,
} from "lucide-react";
import { RevealSection } from "@/components/gsap/reveal-section";
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
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/sevincgurguzel/",
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
    link: "https://www.linkedin.com/in/sevincgurguzel/",
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
    <RevealSection
      as="footer"
      className="relative pb-10 pt-20"
      itemSelector="[data-gsap-item]"
      start="top 92%"
    >
      <div className="section-shell">
        <div className="relative mx-auto max-w-6xl border-border/70 md:border-x">
          <div className="absolute inset-x-0 top-0 h-px bg-border/80" />
          <div className="bg-[radial-gradient(35%_80%_at_30%_0%,rgba(97,70,45,0.08),transparent)]">
            <div className="grid max-w-6xl grid-cols-6 gap-8 p-5 md:p-8">
              <div
                className="col-span-6 flex flex-col gap-5 md:col-span-4"
                data-gsap-item
              >
                <div className="flex items-center gap-4">
                  <AppLink href="/" className="w-max text-primary/30">
                    <Grid2x2Plus className="size-8" />
                  </AppLink>
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Scissors className="size-4" />
                    </span>
                    <div>
                      <p className="font-display text-3xl leading-none">MK</p>
                      <p className="text-xs tracking-[0.24em] text-muted-foreground">
                        MISAFIR KURUCU
                      </p>
                    </div>
                  </div>
                </div>
                <p className="max-w-sm text-sm leading-7 text-muted-foreground">
                  Sevinç tarafından verilen, tekstil sektöründe girişimcilik
                  hedefleyenler için üretim, marka ve satış tarafını bir araya
                  getiren uygulanabilir danışmanlık.
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

              <div className="col-span-3 w-full md:col-span-1" data-gsap-item>
                <span className="mb-1 text-xs tracking-[0.24em] text-muted-foreground">
                  Sayfalar
                </span>
                <div className="mt-4 flex flex-col gap-1">
                  {company.map(({ href, title }) => (
                    <AppLink
                      key={title}
                      className="w-max py-1 text-sm duration-200 hover:underline"
                      href={href}
                    >
                      {title}
                    </AppLink>
                  ))}
                </div>
              </div>

              <div className="col-span-3 w-full md:col-span-1" data-gsap-item>
                <span className="mb-1 text-xs tracking-[0.24em] text-muted-foreground">
                  İletişim
                </span>
                <div className="mt-4 flex flex-col gap-1">
                  {resources.map(({ href, title }) => (
                    <AppLink
                      key={title}
                      className="w-max py-1 text-sm duration-200 hover:underline"
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
          <div className="flex max-w-6xl flex-col justify-between gap-2 px-5 pb-5 pt-3 md:px-8">
            <p
              className="text-center text-sm font-light text-muted-foreground"
              data-gsap-item
            >
              © {year} Misafir Kurucu. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
