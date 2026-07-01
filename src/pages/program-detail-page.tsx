import { ArrowRight } from "lucide-react";
import { Navigate, useParams } from "react-router-dom";
import { ProgramHeroScene } from "@/components/programs/program-scenes";
import SubtleButton from "@/components/ui/subtle-button";
import { programs, type ProgramSlug } from "@/content/programs";
import { SITE_NAME, SITE_URL, absoluteUrl, useSeo } from "@/lib/seo";

type PainItem = {
  question: string;
  answer: string;
};

type StatItem = {
  value: string;
  label: string;
};

type ProcessItem = {
  number: string;
  title: string;
  body: string;
};

type ProcessGroup = {
  label: string;
  items: ProcessItem[];
};

type OutputItem = {
  title: string;
  description: string;
};

type TimelineItem = {
  title: string;
  description: string;
};

type AddonItem = {
  title: string;
  description: string;
};

type ListPanel = {
  title: string;
  items: string[];
};

type ProgramEditorialContent = {
  pain: PainItem[];
  intro: {
    title: string;
    paragraphs: string[];
    stats: StatItem[];
  };
  process?: {
    label: string;
    groups: ProcessGroup[];
  };
  sessions?: {
    label: string;
    items: ProcessItem[];
  };
  outputs?: {
    label: string;
    intro: string;
    items: OutputItem[];
  };
  timeline?: {
    label: string;
    items: TimelineItem[];
  };
  addons?: {
    label: string;
    intro: string;
    sub: string;
    items: AddonItem[];
  };
  how: {
    panels: [ListPanel, ListPanel];
    note?: string;
  };
  cta: {
    title: string;
    sub: string;
    buttonLabel: string;
  };
};

const detailContent: Record<ProgramSlug, ProgramEditorialContent> = {
  "program-1": {
    pain: [
      {
        question: "Ürün seçtim ama koleksiyonu nasıl kurgulayacağımı bilmiyorum.",
        answer: "Ticari olarak güçlü bir koleksiyon birlikte oluşturulur.",
      },
      {
        question: "Üretici buldum ama süreci nasıl yöneteceğimi bilmiyorum.",
        answer: "Sipariş, numune ve teslimat süreci birlikte yönetilir.",
      },
      {
        question: "Sosyal medyada ne paylaşacağımı, nasıl görüneceğimi bilmiyorum.",
        answer: "Marka dili, görsel kimlik ve içerik yönü netleştirilir.",
      },
      {
        question: "Hangi e-ticaret platformuna gireceğimi bilmiyorum.",
        answer: "Hangi platformda nasıl konumlanacağın planlanır.",
      },
    ],
    intro: {
      title: "Bu bir şablon değil. Sadece senin markan için çalışıyoruz.",
      paragraphs: [
        "16 yıllık sektör deneyimimle; koleksiyondan üretime, e-ticaretten sosyal medyaya kadar tüm süreci birlikte yürütüyoruz. Hazır tavsiye değil, markanıza özel kararlar.",
        "Karşında kalabalık bir ekip değil, her detayı bizzat bilen bir yol arkadaşı bulacaksın.",
      ],
      stats: [
        {
          value: "16",
          label: "yıllık tekstil sektörü deneyimi",
        },
        {
          value: "Sıfır",
          label: "hazır şablon. Her marka farklı, her süreç farklı.",
        },
      ],
    },
    process: {
      label: "Birlikte ne yapıyoruz?",
      groups: [
        {
          label: "Birinci Aşama: Markan Kurulur",
          items: [
            {
              number: "01",
              title: "Marka Kimliği",
              body: "Kim olduğun, kime sattığın, neden tercih edileceğin netleştirilir. Markan pazarda doğru konumlandırılır.",
            },
            {
              number: "02",
              title: "Ürün & Üretim",
              body: "Koleksiyon kurgulanır. Doğru üretici ve kaynağa yönlendirme yapılır. Süreç başından sonuna takip edilir.",
            },
            {
              number: "03",
              title: "İş Modeli",
              body: "Maliyetler analiz edilir, karlı fiyatlandırma kurulur. Stok ve nakit akışı planlanır, pahalı hatalardan korunursun.",
            },
          ],
        },
        {
          label: "İkinci Aşama: Satışa Hazırlık",
          items: [
            {
              number: "04",
              title: "E-Ticaret Stratejisi",
              body: "Hangi e-ticaret platformlarına gireceğin, nasıl listeleneceğin ve satışı arttıran taktikler belirlenir.",
            },
            {
              number: "05",
              title: "Sosyal Medya & İşbirlikleri",
              body: "Hangi platformda nasıl konumlanacağın belirlenir. İçerik dili netleştirilir, hangi influencerlarla çalışman gerektiği planlanır.",
            },
            {
              number: "06",
              title: "Lansman Operasyonu",
              body: "İlk içerik takvimi, lansman günü akışı ve takip sistemi planlanır. Markan doğru zamanda duyurulur.",
            },
          ],
        },
      ],
    },
    outputs: {
      label: "Çalışma çıktıları",
      intro: "Süreç sonunda elinde ne olduğunu bilirsin.",
      items: [
        {
          title: "Marka kimlik dokümanı",
          description: "Kimsin, kime satıyorsun, nasıl konuşuyorsun",
        },
        {
          title: "Koleksiyon kurgulama dokümanı",
          description: "Ticari olarak güçlü ürün yapısı",
        },
        {
          title: "Maliyet ve fiyatlandırma tablosu",
          description: "Karlılığı koruyan yapı",
        },
        {
          title: "Rakip ve pazar analizi",
          description: "Nerede durduğun ve nasıl ayrışacağın",
        },
        {
          title: "E-ticaret platform rehberi",
          description: "Platform seçimi ve satış arttırma stratejisi",
        },
        {
          title: "Sosyal medya strateji dokümanı",
          description: "Platform, içerik dili ve görsel kimlik yönü",
        },
        {
          title: "Çekim ve içerik rehberi",
          description: "Fotoğraf, video ve içerik üretim kılavuzu",
        },
        {
          title: "Lansman planı",
          description: "Zamanlama, kanal ve duyuru stratejisi",
        },
      ],
    },
    how: {
      panels: [
        {
          title: "Nasıl çalışıyoruz?",
          items: [
            "Haftada 2 kez bire bir Zoom görüşmesi",
            "Günlük WhatsApp desteği",
            "Tüm kararlar birlikte alınır",
            "1 aylık dönemlerle ilerliyoruz",
            "Her ay sonunda birlikte değerlendiriyoruz, zorlama yok",
          ],
        },
        {
          title: "Bu program sana göre mi?",
          items: [
            "Bir şeyler yapıyorsun ama doğru mu, emin değilsen",
            "Nereden başlayacağını bilmiyorsan",
            "Deneme yanılma yerine doğru adımları atmak istiyorsan",
            "Üretim ve tedarik süreçlerinde rehberliğe ihtiyacın varsa",
          ],
        },
      ],
      note: "Her markanın süreci farklıdır. 1 ayda tamamlayan da olur, daha fazlasına ihtiyaç duyan da. Birlikte ilerledikçe netleşir.",
    },
    cta: {
      title: "Başlamaya hazır mısın?",
      sub: "Önce bir tanışma görüşmesi yapalım. Seni ve markanı dinleyelim.",
      buttonLabel: "Görüşme Planla",
    },
  },
  "program-2": {
    pain: [
      {
        question: "Sosyal medya hesaplarım var ama müşteriye dönüşmüyor.",
        answer: "İçerik amaçsız değil, stratejiye bağlı hale getirilir.",
      },
      {
        question: "Satışlar bir noktadan sonra durdu, neden büyüyemediğimi bilmiyorum.",
        answer: "Büyümeyi engelleyen darboğazlar tek tek bulunur.",
      },
      {
        question: "Marka algım, ürün kalitemin gerisinde kalıyor.",
        answer: "Görsel dil ve iletişim, ürünle aynı seviyeye taşınır.",
      },
      {
        question: "Her şey bana bağlı, sistemim yok.",
        answer: "Kişiye değil, sürece bağlı bir operasyon kurulur.",
      },
    ],
    intro: {
      title: "Üretmek ve satmak yetmez. Marka olman gerekir.",
      paragraphs: [
        "Çoğu marka burada takılıyor: ürün var, satış var, ama \"marka\" yok. Niş belirsiz, sistem dağınık, büyüme tesadüfe bağlı.",
        "16 yıllık sektör deneyimimle markanı bulunduğu noktadan stratejik ve karlı bir büyüme modeline taşıyoruz.",
      ],
      stats: [
        {
          value: "16",
          label: "yıllık tekstil sektörü deneyimi",
        },
        {
          value: "1 Ay",
          label: "dönemlerle çalışıyoruz, zorlama yok",
        },
      ],
    },
    process: {
      label: "Birlikte ne yapıyoruz?",
      groups: [
        {
          label: "Birinci Aşama: Markan Netleşir",
          items: [
            {
              number: "01",
              title: "360° Marka Analizi",
              body: "Satış, müşteri ve pazar verilerin incelenir. Büyümeni engelleyen darboğazlar netleştirilir.",
            },
            {
              number: "02",
              title: "Marka Konumlandırma",
              body: "Niş ve kimlik netleştirilir. Görsel dil ve iletişim, ürün kalitenle aynı seviyeye taşınır.",
            },
            {
              number: "03",
              title: "Büyüme Kurgusu",
              body: "Markana özel, ölçeklenebilir bir büyüme sistemi kurulur. Hangi kararların öncelikli olduğu netleşir.",
            },
          ],
        },
        {
          label: "İkinci Aşama: Uygulama ve Sistem",
          items: [
            {
              number: "04",
              title: "Koleksiyon Stratejisi",
              body: "Sepet ortalamasını arttıran, yüksek karlı ürün ve koleksiyon yapısı oluşturulur.",
            },
            {
              number: "05",
              title: "Dijital Varlık",
              body: "Hangi kanalda nasıl var olunacağı belirlenir. Mevcut hesaplar ve satış kanalları dönüşüm için yeniden yapılandırılır.",
            },
            {
              number: "06",
              title: "Sistemleşme",
              body: "Marka, kişiye değil sürece bağlı, sürdürülebilir bir operasyon yapısına kavuşturulur.",
            },
          ],
        },
      ],
    },
    timeline: {
      label: "Süreç",
      items: [
        {
          title: "Analiz",
          description: "Mağaza veya üretim yeri ziyareti (tercihli) ve kapsamlı marka, satış, pazar analizi yapılır.",
        },
        {
          title: "Strateji & Yol Haritası",
          description: "Dijital varlık planı, koleksiyon stratejisi ve büyüme kurgusu oluşturulur.",
        },
        {
          title: "Uygulama & Sistemleşme",
          description: "Operasyon yapısı kurulur, kanallar optimize edilir. Düzenli görüşmelerle ilerleme takip edilir.",
        },
        {
          title: "Ölçüm & Büyüme",
          description: "Sonuçlar ölçülür, sistem rafine edilir. Markan sana yön vermeye başlar.",
        },
      ],
    },
    addons: {
      label: "Ek Destek",
      intro: "İhtiyaç duyduğunda, ekibimle birlikte ilerliyoruz.",
      sub: "Strateji ve danışmanlığın ötesinde uygulamaya da destek gerekiyorsa, alanında uzman ekip arkadaşlarımla çalışabilirsin. Bu destekler ek ücrete tabidir.",
      items: [
        {
          title: "Web Sitesi Tasarımı & Geliştirme",
          description: "Markana özel, dönüşüm odaklı site kurulumu",
        },
        {
          title: "UI/UX Tasarım",
          description: "Kullanıcı deneyimi ve arayüz tasarımı",
        },
        {
          title: "Kurumsal Kimlik Tasarımı",
          description: "Logo, renk, tipografi ve marka kılavuzu",
        },
        {
          title: "Mobil Uygulama Tasarımı",
          description: "Markana özel app arayüzü",
        },
        {
          title: "Meta Reklam Yönetimi",
          description: "Instagram ve Facebook reklam stratejisi ve yönetimi",
        },
        {
          title: "Sosyal Medya Yönetimi",
          description: "İçerik üretimi ve hesap yönetimi",
        },
      ],
    },
    how: {
      panels: [
        {
          title: "Nasıl çalışıyoruz?",
          items: [
            "Haftada 2 kez bire bir Zoom görüşmesi",
            "Tercihli yerinde mağaza / üretim yeri analizi",
            "Günlük sohbet ve karar desteği",
            "1 aylık dönemlerle ilerliyoruz",
            "Her ay sonunda birlikte değerlendiriyoruz, zorlama yok",
          ],
        },
        {
          title: "Bu program sana göre mi?",
          items: [
            "Tekstil ya da moda alanında ürün üretiyor ve markanızı daha güçlü konumlandırmak istiyorsanız",
            "Satışlarınızın potansiyelinizin altında kaldığını hissediyorsanız",
            "Sosyal medyada görünür olmanıza rağmen doğru kitleye ulaşmakta zorlanıyorsanız",
            "Markanızın dili, hedef kitlesi, içerikleri ve büyüme yönü konusunda daha net bir sisteme ihtiyaç duyuyorsanız",
          ],
        },
      ],
    },
    cta: {
      title: "Markanı büyütmeye hazır mısın?",
      sub: "Önce bir tanışma görüşmesi yapalım. Seni ve markanı dinleyelim.",
      buttonLabel: "Görüşme Planla",
    },
  },
  "program-3": {
    pain: [
      {
        question: "Hesabım sadece ürün paylaşan bir vitrin gibi duruyor.",
        answer: "Markanın hikayesi, dili ve estetiği netleştirilir.",
      },
      {
        question: "Sosyal medyada ne paylaşacağıma karar veremiyorum.",
        answer: "İçerik dili ve platform stratejisi birlikte kurulur.",
      },
      {
        question: "Hangi e-ticaret platformunda nasıl görüneceğimi bilmiyorum.",
        answer: "Platform bazlı konumlanma planı oluşturulur.",
      },
      {
        question: "Ürünüm güzel ama bir türlü satışa dönmüyor.",
        answer: "Marka algısı güçlendiğinde, ürün de farklı bir değerle görülür.",
      },
    ],
    intro: {
      title: "Vitrin olmaktan çık, marka ol.",
      paragraphs: [
        "Birçok marka sosyal medyada ürünlerini gösteriyor; ama kim olduğu, kime hitap ettiği, nasıl bir dünya kurduğu, takipçiye ne hissettirdiği net görünmüyor. Bu da hesabın yalnızca bir ürün vitrini gibi algılanmasına neden oluyor.",
        "Mevcut sosyal medya hesabını, içerik dilini, görsel düzenini, hedef kitleni ve dijital algını birlikte değerlendiriyor; daha profesyonel, tutarlı ve satışa destek olan bir yapıya kavuşman için yeniden düzenleme planı hazırlıyoruz.",
      ],
      stats: [
        {
          value: "5",
          label: "seans, her biri 1 saat",
        },
        {
          value: "Strateji",
          label: "Uygulama değil, plan ve yön.",
        },
      ],
    },
    sessions: {
      label: "5 seansta ne yapıyoruz?",
      items: [
        {
          number: "Seans 01",
          title: "Marka Kimliği",
          body: "Kim olduğun, kime sattığın, nasıl bir dünya kurduğun ve takipçiye ne hissettirdiğin netleştirilir. Markanın pazarda nasıl bir yer tuttuğu ve rakiplerinden nasıl ayrıştığı belirlenir. Hesabın bir ürün vitrini olmaktan çıkıp hikayesi olan bir markaya dönüşmesinin temeli burada atılır.",
        },
        {
          number: "Seans 02",
          title: "Pazarlama Planı",
          body: "Markanı nasıl tanıtacağın, hangi mesajlarla kime ulaşacağın planlanır. Önceliklendirilmiş, uygulanabilir bir pazarlama yol haritası oluşturulur.",
        },
        {
          number: "Seans 03",
          title: "Sosyal Medya Stratejisi",
          body: "Yaratıcı içerikler ve etkili stratejilerle dijitalde nasıl iz bırakacağın netleşir. İçerik stratejisi, görsel tasarım yönü ve marka kimliği bir araya gelir; hedef kitlenin beklentilerini ve hangi iletişim dilini kullanman gerektiğini birlikte belirleriz. Amaç, takipçiyle \"konuşmak\" değil organik olarak büyümek ve dönüştürmek. Yerini bildiğin bir marka; özgün, farklılaşmış ve akılda kalıcı olur.",
        },
        {
          number: "Seans 04",
          title: "E-Ticaret Stratejisi",
          body: "Hangi e-ticaret platformlarında nasıl var olacağın planlanır. Listeleme, konumlanma ve satışı arttıracak yaklaşımlar belirlenir.",
        },
        {
          number: "Seans 05",
          title: "Toparlama & Yol Haritası",
          body: "Tüm strateji tek bir yol haritasında birleştirilir. Önceliklerin netleşir, elinde uygulamaya hazır bir plan kalır.",
        },
      ],
    },
    how: {
      panels: [
        {
          title: "Nasıl çalışıyoruz?",
          items: [
            "5 seans, her biri 1 saat",
            "Bire bir Zoom görüşmesi",
            "Her seans bir öncekinin üzerine inşa edilir",
            "Süreç sonunda elinde uygulamaya hazır bir plan kalır",
          ],
        },
        {
          title: "Bu program sana göre mi?",
          items: [
            "Ürün güzel ama hesap bir vitrin gibi kalıyorsa, marka olarak hissettirmiyorsa",
            "Takipçi var ama bu, satışa ya da güvene dönüşmüyorsa",
            "Paylaştıkça paylaşıyorsun ama bir yöne doğru ilerlemediğini hissediyorsan",
            "Markanın hangi platformda nasıl konumlanması gerektiği belirsizse",
          ],
        },
      ],
    },
    cta: {
      title: "Markanı konumlandırmaya hazır mısın?",
      sub: "Önce bir tanışma görüşmesi yapalım. Seni ve markanı dinleyelim.",
      buttonLabel: "Görüşme Planla",
    },
  },
};

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="mb-10 text-[11px] font-medium uppercase tracking-[0.14em] text-[#888]">
      {children}
    </div>
  );
}

function DividerLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-6 py-8 first:pt-0">
      <div className="h-px flex-1 bg-[#e8ddd0]" />
      <div className="whitespace-nowrap text-center text-[11px] font-medium uppercase tracking-[0.1em] text-[#B86F2E]">
        {children}
      </div>
      <div className="h-px flex-1 bg-[#e8ddd0]" />
    </div>
  );
}

function ProgramEditorialDetail({ content }: { content: ProgramEditorialContent }) {
  return (
    <section className="mx-auto w-full max-w-[1000px] px-6 pb-20 text-[#1a1a1a]">
      <div className="border-b border-[#e8ddd0] py-14">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-[#e8ddd0] bg-[#e8ddd0] md:grid-cols-2">
          {content.pain.map((item) => (
            <div key={item.question} className="bg-[#fffaf5] p-6">
              <div className="text-[15px] font-medium leading-[1.4] text-[#1a1a1a]">
                {item.question}
              </div>
              <div className="mt-1 text-[13px] leading-[1.5] text-[#888]">
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid items-center gap-10 border-b border-[#e8ddd0] py-14 md:grid-cols-2 md:gap-16">
        <div>
          <div className="font-display text-[28px] leading-[1.25] text-[#1a1a1a]">
            {content.intro.title}
          </div>
          <div className="mt-5 space-y-4 text-[15px] leading-[1.75] text-[#555]">
            {content.intro.paragraphs.map((paragraph) => (
              <div key={paragraph}>{paragraph}</div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          {content.intro.stats.map((stat) => (
            <div key={`${stat.value}-${stat.label}`} className="rounded-2xl bg-[#f5ede3] p-6">
              <div className="font-display text-[36px] leading-none text-[#B86F2E]">
                {stat.value}
              </div>
              <div className="mt-2 text-[13px] leading-[1.5] text-[#555]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {content.process ? (
        <div className="border-b border-[#e8ddd0] py-14">
          <SectionLabel>{content.process.label}</SectionLabel>
          {content.process.groups.map((group) => (
            <div key={group.label}>
              <DividerLabel>{group.label}</DividerLabel>
              <div className="grid gap-10 py-6 md:grid-cols-3">
                {group.items.map((item) => (
                  <div key={item.number}>
                    <div className="font-serif text-[14px] text-[#B86F2E]">
                      {item.number}
                    </div>
                    <div className="mt-4 font-serif text-[24px] leading-[1.2] text-[#1a1a1a]">
                      {item.title}
                    </div>
                    <div className="mt-4 text-[14px] leading-[1.7] text-[#555]">
                      {item.body}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : null}

      {content.sessions ? (
        <div className="border-b border-[#e8ddd0] py-14">
          <SectionLabel>{content.sessions.label}</SectionLabel>
          <div>
            {content.sessions.items.map((item) => (
              <div
                key={item.number}
                className="grid gap-6 border-b border-[#e8ddd0] py-7 last:border-b-0 md:grid-cols-[90px_1fr]"
              >
                <div className="pt-1 font-serif text-[13px] tracking-[0.05em] text-[#B86F2E]">
                  {item.number}
                </div>
                <div>
                  <div className="font-serif text-[22px] leading-[1.2] text-[#1a1a1a]">
                    {item.title}
                  </div>
                  <div className="mt-3 max-w-[640px] text-[14px] leading-[1.7] text-[#555]">
                    {item.body}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {content.outputs ? (
        <div className="border-b border-[#e8ddd0] py-14">
          <div className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em] text-[#888]">
            {content.outputs.label}
          </div>
          <div className="mb-8 max-w-[520px] font-display text-[22px] leading-[1.3] text-[#1a1a1a]">
            {content.outputs.intro}
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {content.outputs.items.map((item) => (
              <div key={item.title} className="rounded-[10px] border border-[#e8ddd0] p-5">
                <div className="text-[13px] font-medium leading-[1.4] text-[#1a1a1a]">
                  {item.title}
                </div>
                <div className="mt-1 text-[12px] leading-[1.5] text-[#888]">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {content.timeline ? (
        <div className="border-b border-[#e8ddd0] py-14">
          <SectionLabel>{content.timeline.label}</SectionLabel>
          <div className="grid overflow-hidden rounded-2xl border border-[#e8ddd0] md:grid-cols-4">
            {content.timeline.items.map((item) => (
              <div key={item.title} className="border-b border-[#e8ddd0] p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
                <div className="text-[14px] font-medium text-[#1a1a1a]">
                  {item.title}
                </div>
                <div className="mt-2 text-[12.5px] leading-[1.55] text-[#888]">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {content.addons ? (
        <div className="border-b border-[#e8ddd0] py-14">
          <div className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em] text-[#888]">
            {content.addons.label}
          </div>
          <div className="max-w-[600px] font-display text-[22px] leading-[1.3] text-[#1a1a1a]">
            {content.addons.intro}
          </div>
          <div className="mt-3 max-w-[600px] text-[14px] leading-[1.6] text-[#888]">
            {content.addons.sub}
          </div>
          <div className="mt-8 grid overflow-hidden rounded-2xl border border-[#e8ddd0] sm:grid-cols-2 lg:grid-cols-3">
            {content.addons.items.map((item) => (
              <div key={item.title} className="border-b border-[#e8ddd0] p-6 sm:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-last-child(-n+3)]:border-b-0">
                <div className="text-[14px] font-medium text-[#1a1a1a]">
                  {item.title}
                </div>
                <div className="mt-1.5 text-[12.5px] leading-[1.5] text-[#888]">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <div className="border-b border-[#e8ddd0] py-14">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-[#e8ddd0] bg-[#e8ddd0] md:grid-cols-2">
          {content.how.panels.map((panel) => (
            <div key={panel.title} className="bg-[#fffaf5] p-8">
              <div className="font-display text-[19px] leading-[1.3] text-[#1a1a1a]">
                {panel.title}
              </div>
              <div className="mt-5 flex flex-col gap-3">
                {panel.items.map((item) => (
                  <div key={item} className="grid grid-cols-[1.25rem_1fr] text-[14px] leading-[1.55] text-[#555]">
                    <div className="pt-0.5 text-[11px] text-[#B86F2E]">-</div>
                    <div>{item}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {content.how.note ? (
          <div className="mt-8 rounded-r-[10px] border-l-2 border-[#B86F2E] bg-[#f5ede3] px-6 py-5 text-[14px] leading-[1.65] text-[#555]">
            {content.how.note}
          </div>
        ) : null}
      </div>

      <div className="pt-16">
        <div className="max-w-[480px] font-display text-[30px] leading-[1.2] text-[#1a1a1a]">
          {content.cta.title}
        </div>
        <div className="mt-3 text-[15px] text-[#555]">
          {content.cta.sub}
        </div>
        <SubtleButton href="/gorusme-planlayin" size="lg" className="mt-8">
          {content.cta.buttonLabel}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </SubtleButton>
      </div>
    </section>
  );
}

export function ProgramDetailPage() {
  const { slug } = useParams();
  const program = slug ? programs[slug as ProgramSlug] : null;

  useSeo({
    title: program ? program.name : "Program bulunamadı",
    description: program
      ? program.listingDescription
      : "Aradığınız program bulunamadı.",
    path: program?.href ?? "/programlar",
    image: program?.heroImage ?? "/images/herosection.jpeg",
    noindex: !program,
    keywords: program
      ? [program.name, program.listingSubtitle, "moda markası danışmanlığı"]
      : undefined,
    structuredData: program
      ? {
          "@context": "https://schema.org",
          "@type": "Service",
          name: program.name,
          description: program.listingDescription,
          provider: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
          },
          url: absoluteUrl(program.href),
          image: absoluteUrl(program.heroImage),
          areaServed: "TR",
          serviceType: "Moda markası danışmanlığı",
        }
      : undefined,
  });

  if (!program) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <ProgramHeroScene program={program} />
      <ProgramEditorialDetail content={detailContent[program.slug]} />
    </>
  );
}
