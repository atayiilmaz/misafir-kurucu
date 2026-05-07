import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { CheckCircle, Download, Mail, ArrowRight, Calendar, Target, BarChart3, Lightbulb } from "lucide-react";
import { RevealSection } from "@/components/gsap/reveal-section";
import { Button } from "@/components/ui/button";
import { subscribeEmail } from "@/features/subscribers/api";
import { SITE_NAME, SITE_URL, useSeo } from "@/lib/seo";

const DOWNLOAD_URL = "/downloads/rehber.pdf";
const PREVIEW_IMAGE = "/images/free-resource-preview.jpg";

const benefits = [
  {
    icon: Calendar,
    title: "12 satış ve kampanya dönemine özel strateji",
    description: "Mayıs–Aralık 2026 boyunca tüm kritik satış dönemleri için hazır stratejiler.",
  },
  {
    icon: Target,
    title: "Kategori bazlı hedefleme",
    description: "Kadın, erkek, çocuk, ev tekstili, spor giyim ve atölyeler için özelleştirilmiş yaklaşımlar.",
  },
  {
    icon: BarChart3,
    title: "İçerik formatı ve platform önerileri",
    description: "Her dönem için doğru platform, doğru içerik türü ve zamanlama tavsiyeleri.",
  },
  {
    icon: Lightbulb,
    title: "Sosyal medya ve içerik strateji rehberi",
    description: "Zamanlama, hazırlık notları ve sosyal medya planlaması için pratik kılavuz.",
  },
];

const fieldClassName =
  "h-12 w-full rounded-full border border-border/80 bg-white px-4 text-sm text-foreground outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/15";

export function FreeResourcePage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [alreadySubscribed, setAlreadySubscribed] = useState(false);

  useSeo({
    title: "2026 Tekstil / Moda Satış Takvimi — Ücretsiz İndir",
    description:
      "Mayıs–Aralık 2026 satış takvimi, kampanya stratejileri, kategori bazlı hedefleme ve sosyal medya rehberi. Ücretsiz indirin.",
    path: "/ucretsiz-kaynak",
    keywords: [
      "2026 satış takvimi",
      "moda satış takvimi",
      "tekstil kampanya takvimi",
      "moda içerik stratejisi",
      SITE_NAME.toLowerCase(),
    ],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: `2026 Satış Takvimi | ${SITE_NAME}`,
      url: `${SITE_URL}/ucretsiz-kaynak`,
      inLanguage: "tr-TR",
    },
  });

  const subscribeMutation = useMutation({
    mutationFn: ({ email: e, firstName: fn, lastName: ln }: { email: string; firstName: string; lastName: string }) =>
      subscribeEmail(e, fn, ln),
    onSuccess: (response) => {
      setSubmitted(true);
      setAlreadySubscribed(Boolean(response.alreadySubscribed));
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !firstName.trim() || !lastName.trim()) return;
    subscribeMutation.mutate({ email: email.trim(), firstName: firstName.trim(), lastName: lastName.trim() });
  };

  const canSubmit = email.trim() && firstName.trim() && lastName.trim();

  return (
    <>
      <RevealSection as="section" className="section-shell section-space">
        <div className="mx-auto grid max-w-[84rem] gap-10 lg:grid-cols-2 lg:items-center xl:gap-14">
          <div className="pt-2 lg:pt-8">
            <h1 className="font-display text-[2.6rem] leading-[0.97] text-foreground sm:text-[3.2rem] md:text-[4rem]">
              2026 Tekstil / Moda Satış Takvimi
            </h1>
            <p className="mt-6 max-w-[31rem] text-base leading-8 text-muted-foreground md:text-[1.08rem]">
              Mayıs–Aralık 2026 kampanya, içerik ve satış rehberinizi indirin.
              12 satış dönemine özel stratejiler, kategori bazlı hedefleme ve
              sosyal medya planlaması tek bir dokümanda.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="mt-8 space-y-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Adınız"
                    className={fieldClassName}
                    disabled={subscribeMutation.isPending}
                  />
                  <input
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Soyadınız"
                    className={fieldClassName}
                    disabled={subscribeMutation.isPending}
                  />
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="E-posta adresiniz"
                      className={`${fieldClassName} pl-12`}
                      disabled={subscribeMutation.isPending}
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={subscribeMutation.isPending}
                  >
                    {subscribeMutation.isPending
                      ? "Gönderiliyor..."
                      : "Ücretsiz İndir"}
                    {!subscribeMutation.isPending && (
                      <ArrowRight className="ml-2 h-4 w-4" />
                    )}
                  </Button>
                </div>

                {subscribeMutation.isError && (
                  <p className="text-sm text-red-600">
                    {(subscribeMutation.error as Error).message}
                  </p>
                )}

                <p className="text-xs leading-6 text-muted-foreground">
                  Bilgileriniz yalnızca kaynak paylaşımı için kullanılacaktır.
                </p>
              </form>
            ) : (
              <div className="mt-8 glass-panel p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <CheckCircle className="mt-0.5 h-8 w-8 shrink-0 text-green-600" />
                  <div>
                    <h2 className="font-display text-2xl">
                      {alreadySubscribed
                        ? "Zaten kayıtlısınız!"
                        : "Kaydınız tamamlandı!"}
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      {alreadySubscribed
                        ? "Bu e-posta adresiyle daha önce kayıt olmuşsunuz. Takviminizi aşağıdan indirebilirsiniz."
                        : "2026 Satış Takvimi'ni indirmek için aşağıdaki butona tıklayın."}
                    </p>
                    <a
                      href={DOWNLOAD_URL}
                      download
                      className="mt-5 inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold text-primary-foreground surface-primary-gradient transition hover:-translate-y-0.5"
                    >
                      <Download className="h-4 w-4" />
                      Takvimi İndir (PDF)
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[28rem]">
              <img
                src={PREVIEW_IMAGE}
                alt="2026 Tekstil / Moda Satış Takvimi"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection as="section" className="section-shell section-space">
        <div className="mx-auto max-w-[56rem] text-center">
          <h2 className="section-title">
            Takvimde neler var?
          </h2>
          <p className="mt-6 text-base leading-8 text-muted-foreground md:text-[1.08rem]">
            Mayıs–Aralık 2026 arası tüm satış ve kampanya dönemlerini kapsayan,
            alt sektörlere göre özelleştirilmiş kapsamlı bir rehber.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-[64rem] gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="glass-panel p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10">
                <benefit.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 font-display text-lg leading-tight">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </RevealSection>
    </>
  );
}
