export type ProgramSlug = "program-1" | "program-2" | "program-3";

export type ProgramPackageItem = {
  title: string;
  description: string;
};

export type ProgramBenefitCard = {
  eyebrow?: string;
  title: string;
  description?: string;
  highlight?: boolean;
};

export type ProgramListBlock = {
  title: string;
  intro?: string[];
  items: string[];
};

export type ProgramAnalysisMode = {
  heading: string;
  title: string;
  description: string;
};

export type ProgramProcessStep = {
  label: string;
  title: string;
  description: string;
};

export type ProgramData = {
  slug: ProgramSlug;
  order: string;
  name: string;
  heroTitle: string;
  href: string;
  menuLabel: string;
  listingSubtitle: string;
  listingDescription: string;
  teaserPoints: string[];
  showcaseImage: string;
  showcaseImageAlt: string;
  heroImage: string;
  heroImageAlt: string;
  storyImage: string;
  storyImageAlt: string;
  audienceImage: string;
  audienceImageAlt: string;
  supportImage: string;
  supportImageAlt: string;
  hero: {
    subtitle: string;
    description: string;
    ctaLabel: string;
    ticker: string[];
    strips: string[];
  };
  benefits?: {
    title: string;
    intro?: string[];
    cards: ProgramBenefitCard[];
    outro?: string[];
  };
  audience?: ProgramListBlock;
  narrative?: {
    title: string;
    paragraphs: string[];
  };
  package?: {
    title: string;
    items: ProgramPackageItem[];
  };
  support?: {
    title: string;
    columns: Array<{
      heading?: string;
      items: string[];
    }>;
  };
  process?: {
    title: string;
    intro: string[];
    steps: ProgramProcessStep[];
  };
  analysisModes?: {
    title: string;
    columns: ProgramAnalysisMode[];
  };
  advisoryAreas?: ProgramListBlock;
  finalCta: {
    title: string;
    description: string;
    buttonLabel: string;
  };
};

export type PricingPlan = {
  title: string;
  price: string;
  priceDescription: string;
  description: string;
  features: string[];
  buttonText: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  highlight?: boolean;
};

const sharedMentorParagraph =
  "Tekstil sektörü deneme-yanılma yöntemini kaldırmayacak kadar hızlı ve maliyetlidir. Ben size sadece teorik bilgi vermiyorum; 16 yıllık network'ümü, üretim tecrübemi ve ticari öngörülerimi doğrudan markanıza aktarıyorum. Karşınızda kalabalık ekipler değil, her detaya bizzat hakim olan bir yol arkadaşı bulacaksınız.";

const sharedClosingParagraph =
  "Tekstil dünyasına adım atarken markanızı sağlam temeller üzerine kurmak istiyorsanız, tüm süreçte birebir yanınızdayım. Bir ajanstan değil, sektörün mutfağından gelen bir uzmandan kişiselleştirilmiş danışmanlık alacaksınız.";

export const programs: Record<ProgramSlug, ProgramData> = {
  "program-1": {
    slug: "program-1",
    order: "01",
    name: "Markanı Kur",
    heroTitle: "MARKANI KUR",
    href: "/programlar/program-1",
    menuLabel: "Markanı Kur",
    listingSubtitle: "Fikrini Gerçek Bir Markaya Dönüştür: 0'dan Başarılı Bir Lansmana",
    listingDescription:
      "Deneme-yanılma ile zaman ve para kaybetme. 16 yıllık sektör tecrübemle, markanı sağlam temeller üzerine birlikte kuralım.",
    teaserPoints: [
      "Sermayeni korursun",
      "Kaostan kurtulursun",
      "Zaman kazanırsın",
    ],
    showcaseImage:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
    showcaseImageAlt: "Moda markası kurulumuna eşlik eden editoryal moda görseli",
    heroImage: "/images/markanikur.png",
    heroImageAlt: "Markanı Kur programı hero görseli",
    storyImage:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1400&q=80",
    storyImageAlt: "Moda markası kurma sürecine odaklanan stüdyo çekimi",
    audienceImage:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=80",
    audienceImageAlt: "Hedef kitle ve başlangıç kararlarını çağrıştıran görsel",
    supportImage:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1400&q=80",
    supportImageAlt: "Çalışma sistemi ve kaynakları temsil eden moda görseli",
    hero: {
      subtitle: "Fikrini Gerçek Bir Markaya Dönüştür: 0'dan Başarılı Bir Lansmana",
      description:
        "Deneme-yanılma ile zaman ve para kaybetme. 16 yıllık sektör tecrübemle, markanı sağlam temeller üzerine birlikte kuralım.",
      ctaLabel: "Görüşme Planlayın",
      ticker: [
        "16 yıllık sektör tecrübesi",
        "üretim tecrübesi",
        "ticari öngörüler",
        "kişiselleştirilmiş danışmanlık",
      ],
      strips: [
        "Sermayeni korursun",
        "Kaostan kurtulursun",
        "Zaman kazanırsın",
      ],
    },
    benefits: {
      title: "Bu paket sana ne sağlar?",
      cards: [
        { title: "Sermayeni korursun" },
        { title: "Kaostan kurtulursun" },
        { title: "Süreçlerindeki dağınıklığı net bir sisteme dönüştürürsün" },
        { title: "Zaman kazanırsın" },
        { title: "Deneme-yanılma ile aylar kaybetmezsin." },
      ],
    },
    audience: {
      title: "Kimler için?",
      items: [
        "Marka kurmak isteyen ama nereden başlayacağını netleştiremeyenler",
        "Doğru adımları atmak yerine deneme-yanılma ile ilerleyenler",
        "İlk kez girişim yaparken pahalı hatalar yapmak istemeyenler",
        "Yanında süreci bilen birinin olmasına ihtiyaç duyanlar",
        "Bir düzine farklı konuya daldıkça kafası daha da karışanlar",
      ],
    },
    narrative: {
      title: "Neden benimle çalışmalısınız?",
      paragraphs: [sharedMentorParagraph, sharedClosingParagraph],
    },
    package: {
      title: "Paket içeriği",
      items: [
        {
          title: "Marka fikri netleştirilir",
          description:
            "Dağınık fikirler toparlanır; ne satıldığı, kime hitap edildiği ve neden tercih edileceği açık şekilde tanımlanır.",
        },
        {
          title: "Marka gerçekçi bir zemine oturtulur",
          description:
            "Güçlü ve zayıf yönler analiz edilir, pazardaki fırsatlar ve riskler belirlenir ve buna göre bir yol haritası oluşturulur.",
        },
        {
          title: "Marka pazarda ayrıştırılır",
          description:
            "Sıradan bir marka yerine, müşterinin zihninde yer eden, net bir vaadi olan ve rakiplerinden farklı konumlanan bir yapı kurulur.",
        },
        {
          title: "Doğru üretici ve tedarikçi belirlenir",
          description:
            "Üretim yapılacak atölyeler, tedarikçiler ve işleyiş süreçleri netleştirilir.",
        },
        {
          title: "Satacak koleksiyon kurgulanır",
          description:
            "Sadece estetik değil, ticari olarak güçlü ürünler seçilir; model ve üretim adetleri planlanır.",
        },
        {
          title: "Kârlılığı koruyan sistem kurulur",
          description:
            "Maliyetler analiz edilir, fiyatlandırma doğru yapılır ve sürdürülebilir bir kâr yapısı oluşturulur.",
        },
        {
          title: "Marka algısı oluşturulur",
          description:
            "Görsel dil, duruş ve marka hissi netleştirilir; güçlü ve güven veren bir imaj inşa edilir.",
        },
        {
          title: "Lansman ve satış süreci planlanır",
          description:
            "Web sitesi dahil olmak üzere tüm satış kanalları ve lansman adımları baştan sona kurgulanır.",
        },
        {
          title: "Sosyal medya satışa dönüştürülür",
          description:
            "İçerik planı, takipçiyi müşteriye çevirecek şekilde yapılandırılır.",
        },
      ],
    },
    support: {
      title: "Neye yatırım yapıyorsunuz?",
      columns: [
        {
          heading: "Neye yatırım yapıyorsunuz?",
          items: [
            "Haftada 2 gün 1 saat Zoom üzerinden birebir görüşme",
            "Kaynaklar ve çalışma sayfaları",
            "Günlük sohbet desteği",
            "Markanın tüm kararlarını yöneten net bir marka çerçevesi",
            "Sürekli geri bildirim ve karar desteği",
          ],
        },
        {
          heading: "Hangi kaynaklara erişirsin?",
          items: [
            "Marka kurulum ve büyütme şablonları",
            "Ürün, koleksiyon ve fiyatlandırma analiz dökümanları",
            "Numune ve üretim süreci kılavuzları",
            "Çekim, içerik ve marka dili rehberleri",
            "Satış ve lansman planları",
            "Güvenilir üretici ve tedarikçi bağlantıları",
            "Mevcut markalar için yeniden yapılandırma dökümanları",
          ],
        },
      ],
    },
    finalCta: {
      title: "Markanı sağlam temeller üzerine kurmak istiyorsanız, tüm süreçte birebir yanınızdayım.",
      description:
        "Bir ajanstan değil, sektörün mutfağından gelen bir uzmandan kişiselleştirilmiş danışmanlık alacaksınız.",
      buttonLabel: "Görüşme Planlayın",
    },
  },
  "program-2": {
    slug: "program-2",
    order: "02",
    name: "Markanı Büyüt",
    heroTitle: "MARKANI BÜYÜT",
    href: "/programlar/program-2",
    menuLabel: "Markanı Büyüt",
    listingSubtitle: "Markanız var, ama henüz tam potansiyeline ulaşmadı.",
    listingDescription:
      "Satışlarınızı bir üst seviyeye taşımak, dijital varlığınızı güçlendirmek ya da markanızı daha profesyonel bir yapıya oturtmak isteyen kurucular için.",
    teaserPoints: [
      "Dijital Varlık",
      "Stratejik Büyüme",
      "Sistemleme",
    ],
    showcaseImage:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
    showcaseImageAlt: "Marka büyümesini çağrıştıran moda görseli",
    heroImage: "/images/markanibuyut.png",
    heroImageAlt: "Markanı Büyüt programı hero görseli",
    storyImage:
      "https://images.unsplash.com/photo-1503342394128-c104d54dba01?auto=format&fit=crop&w=1400&q=80",
    storyImageAlt: "Satış ve büyüme sistemini çağrıştıran moda çekimi",
    audienceImage:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1400&q=80",
    audienceImageAlt: "Mevcut markalar ve operasyonel büyümeyi temsil eden görsel",
    supportImage:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80",
    supportImageAlt: "Operasyon, koleksiyon ve kanal yönetimini temsil eden görsel",
    hero: {
      subtitle: "Markanız var, ama henüz tam potansiyeline ulaşmadı.",
      description:
        "Satışlarınızı bir üst seviyeye taşımak, dijital varlığınızı güçlendirmek ya da\nmarkanızı daha profesyonel bir yapıya oturtmak isteyen kurucular için.\n\n16 yıllık sektör deneyimiyle; markanızı bulunduğu noktadan stratejik ve kârlı bir\nbüyüme modeline taşıyoruz.",
      ctaLabel: "Görüşme Planlayın",
      ticker: [
        "Dijital Varlık",
        "Stratejik Büyüme",
        "Maksimum Kârlılığı",
        "Sistemleme",
      ],
      strips: [
        "Global Algı",
        "Koleksiyon Disiplini",
        "Stratejik Büyüme",
        "Maksimum Kârlılığı",
      ],
    },
    benefits: {
      title: "Bu paket sana ne sağlar?",
      cards: [
        {
          eyebrow: "Yeni Odak",
          title: "DİJİTAL VARLIK",
          description: "Sosyal medya ve online kanallarda dönüşüm odaklı, tutarlı bir iz",
          highlight: true,
        },
        {
          title: "STRATEJİK BÜYÜME",
          description: "Markana özel, ölçeklenebilir sistem",
        },
        {
          title: "MAKSİMUM KÂRLILIĞI",
          description: "Düşük performanslı alanlar elenir, odak artar",
        },
        {
          title: "SİSTEMLEME",
          description: "Kişilere değil, sürece bağlı operasyon",
        },
        {
          title: "GLOBAL ALGI",
          description: "Görsel dil ve iletişim premium seviyeye",
        },
        {
          title: "KOLEKSİYON DİSCİPLİNİ",
          description: "Sepet ortalamasını artıran ürün yapısı",
        },
      ],
    },
    audience: {
      title: "Kimler için?",
      intro: [
        "Markası olan, belirli bir müşteri kitlesine sahip ama büyümesi duraklamış ya da potansiyelinin altında kalan markalar için tasarlandı. Özellikle şu durumları yaşıyorsanız:",
      ],
      items: [
        "Dijitalde varlık gösteremiyor ya da dönüşüm alamıyorsunuz",
        "Sosyal medya hesaplarınız var ama müşteriye dönüşmüyor",
        "Satışlar bir noktadan sonra platoya girdi",
        "Her şey sizi bekliyor, süreçler kişilere bağlı",
        "Global marka olmayı hedefliyorsunuz",
        "Marka algınız ürün kalitenizin gerisinde kalıyor",
      ],
    },
    narrative: {
      title: "Neden benimle çalışmalısınız?",
      paragraphs: [
        "Tekstil sektörü deneme-yanılma yöntemini kaldırmayacak kadar hızlı ve maliyetlidir. Size sadece teorik bilgi vermiyorum; 16 yıllık network’ümü, üretim tecrübemi ve ticari öngörülerimi doğrudan markanıza aktarıyorum. Karşınızda kalabalık ekipler değil, her detaya bizzat hâkim olan bir yol arkadaşı bulacaksınız.",
        "Bir ajans değil, sektörün mutfağından gelen bir uzmandan kişiselleştirilmiş danışmanlık alacaksınız. Tekstil dünyasında markanızı sağlam temeller üzerine kurmak istiyorsanız, tüm süreçte birebir yanınızdayım.",
      ],
    },
    analysisModes: {
      title: "Analiz yöntemi",
      columns: [
        {
          heading: "YERİNDE ZİYARET",
          title: "Mağaza / üretim yeri analizi",
          description:
            "Fiziksel ortamı, operasyonu ve müşteri deneyimini yerinde gözlemlemek için tercihli olarak sunulur. Bazı sorunlar ancak yerinde görülür.",
        },
        {
          heading: "ONLINE",
          title: "Zoom üzerinden birebir",
          description:
            "Haftada 2 gün, 1'er saatlik görüşme + günlük mesaj desteği. Yerinde ziyaret istemeyenler için sürecin tamamı online yürütülür.",
        },
      ],
    },
    package: {
      title: "Paket içeriği",
      items: [
        {
          title: "360° Marka analizi",
          description:
            "Satış, müşteri ve pazar verileri analiz edilerek büyüme darboğazları netleştirilir.",
        },
        {
          title: "Dijital varlık & sosyal medya stratejisi",
          description:
            "Hangi kanalda nasıl var olunacağı, içerik dili ve yayın sıklığı belirlenir. Mevcut hesaplar dönüşüm için yeniden yapılandırılır.",
        },
        {
          title: "Koleksiyon stratejisi",
          description:
            "Sepet ortalamasını artıran, yüksek kârlı ürün ve koleksiyon yapısı oluşturulur.",
        },
        {
          title: "Sistemleşme",
          description:
            "Marka, kişilere bağlı olmayan sürdürülebilir bir operasyon yapısına kavuşturulur.",
        },
        {
          title: "Marka konumlandırma",
          description:
            "Görsel dil ve iletişim global & premium seviyeye taşınır.",
        },
        {
          title: "Büyüme kurgusu",
          description:
            "Markaya özel, ölçeklenebilir bir büyüme sistemi kurulur.",
        },
        {
          title: "Kanal genişleme & optimizasyonu",
          description:
            "Online, fiziksel ve yurtdışı satış kanalları netleştirilir; mevcut kanallar performansa göre yeniden yapılandırılır.",
        },
        {
          title: "Kitle & güven inşası",
          description:
            "Tutarlı iletişimle güçlü ve sadık bir müşteri kitlesi oluşturulur.",
        },
      ],
    },
    process: {
      title: "Süreç nasıl işliyor? — yaklaşık 12 hafta",
      intro: [],
      steps: [
        {
          label: "Hafta 1–2",
          title: "Yerinde & online analiz",
          description:
            "Mağaza veya üretim yeri ziyareti (tercihli) + kapsamlı marka, satış ve pazar analizi. Dijital kanallar, sosyal medya ve mevcut iletişim dili incelenir. Tüm darboğazlar ortaya konur.",
        },
        {
          label: "Hafta 3–5",
          title: "Strateji & yol haritası",
          description:
            "Dijital varlık planı, koleksiyon stratejisi ve büyüme kurgusu oluşturulur. Hangi kanalda nasıl var olunacağı, içerik dili ve öncelikler belirlenir.",
        },
        {
          label: "Hafta 6–9",
          title: "Uygulama & sistemleşme",
          description:
            "Operasyon yapısı kurulur, kanallar optimize edilir, marka konumlandırması hayata geçirilir. Haftalık birebir görüşmelerle ilerleme takip edilir.",
        },
        {
          label: "Hafta 10–12",
          title: "Ölçüm & büyüme",
          description:
            "Sonuçlar ölçülür, sistem rafine edilir. Markan seni beklemez — sen markana yön verirsin.",
        },
      ],
    },
    support: {
      title: "Neye yatırım yapıyorsunuz?",
      columns: [
        {
          items: [
            "Haftada 2 gün, 1 saatlik birebir Zoom görüşmesi",
            "Tercihli yerinde mağaza / üretim yeri analizi",
            "Kaynaklar ve kişiselleştirilmiş çalışma sayfaları",
            "Günlük sohbet & karar desteği",
            "Markanın tüm kararlarını yöneten net bir marka çerçevesi",
            "Sürekli geri bildirim — 12 hafta boyunca",
          ],
        },
      ],
    },
    finalCta: {
      title: "Markanı Büyüt",
      description:
        "16 yıllık sektör deneyimiyle; markanızı bulunduğu noktadan stratejik ve kârlı bir büyüme modeline taşıyoruz.",
      buttonLabel: "Görüşme Planlayın",
    },
  },
  "program-3": {
    slug: "program-3",
    order: "03",
    name: "Stratejik Ortaklık",
    heroTitle: "STRATEJİK ORTAKLIK",
    href: "/programlar/program-3",
    menuLabel: "Stratejik Ortaklık",
    listingSubtitle: "İhtiyacın Kadar, doğru noktada Danışmanlık",
    listingDescription:
      "Her markanın farklıdır. Bu yüzden sana hazır paket değil, tam ihtiyacın olan noktada birebir stratejik destek sunulur.",
    teaserPoints: [
      "Sadece ihtiyaç duyduğun konuda",
      "Tam ihtiyaç duyduğun zamanda",
      "Net ve uygulanabilir çözümler",
    ],
    showcaseImage:
      "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=1200&q=80",
    showcaseImageAlt: "Stratejik ortaklık ve birebir danışmanlık sürecini temsil eden görsel",
    heroImage: "/images/stratejik.png",
    heroImageAlt: "Stratejik Ortaklık programı hero görseli",
    storyImage:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80",
    storyImageAlt: "Stratejik ortaklık modelini anlatan stüdyo görseli",
    audienceImage:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1400&q=80",
    audienceImageAlt: "Stratejik destek ve karar anlarını temsil eden görsel",
    supportImage:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=80",
    supportImageAlt: "Marka stratejisi ve büyüme kararlarını temsil eden görsel",
    hero: {
      subtitle: "İhtiyacın Kadar, doğru noktada Danışmanlık",
      description:
        "Her markanın farklıdır. Bu yüzden sana hazır paket değil, tam ihtiyacın olan noktada birebir stratejik destek sunulur.",
      ctaLabel: "Seansını Planla",
      ticker: [
        "Marka Stratejisi & Konumlandırma",
        "Ürün & Koleksiyon Yönetimi",
        "Satış & Büyüme Stratejileri",
      ],
      strips: [
        "Sadece ihtiyaç duyduğun konuda",
        "Tam ihtiyaç duyduğun zamanda",
        "Net ve uygulanabilir çözümler",
      ],
    },
    benefits: {
      title: "90 dakikada ne elde edersiniz?",
      intro: [
        "Bu modelde süreç tamamen sana göre şekillenir.",
      ],
      cards: [
        {
          title: "Sadece ihtiyaç duyduğun konuda",
        },
        {
          title: "Tam ihtiyaç duyduğun zamanda",
        },
        {
          title: "Net ve uygulanabilir çözümler alırsın.",
        },
      ],
      outro: [
        "Spesifik sorunuza uygulanabilir bir yol çizilir.",
        "Hazır şablon değil, markanıza özel, doğrudan kullanabileceğiniz çözümler sunulur.",
      ],
    },
    audience: {
      title: "Kimler için?",
      items: [
        "Markası için spesifik konuda takılan kurucular",
        "Belirli bir karar öncesi uzman görüşü almak isteyenler",
        "Aylık danışmanlığa ihtiyaç duymayan ama tavsiyeye ihtiyaç duyanlar için",
      ],
    },
    advisoryAreas: {
      title: "Aşağıdaki Alanlar ve Benzeri Konularda Danışabilirsiniz:",
      items: [
        "Marka Stratejisi & Konumlandırma",
        "Ürün & Koleksiyon Yönetimi",
        "Fiyatlandırma & Karlılık Yönetimi",
        "Üretim & Tedarik Yapısı",
        "Satış & Büyüme Stratejileri",
        "Marka İmajı & İletişim Dili",
        "Global Pazar Stratejileri",
        "Fiziksel mağaza /showroom stratejileri",
        "Markana özel konular",
      ],
    },
    finalCta: {
      title: "Seansını Planla",
      description: "",
      buttonLabel: "Seansını Planla",
    },
  },
};

export const programList = (Object.values(programs) as ProgramData[]).sort((a, b) =>
  a.order.localeCompare(b.order),
);

export const plans: PricingPlan[] = [
  {
    title: "Markanı Kur",
    price: "01",
    priceDescription: "Fikrini Gerçek Bir Markaya Dönüştür: 0'dan\nBaşarılı Bir Lansmana",
    description:
      "Kimin için?\nSağlam temeller atmak ve acele etmeden doğru\nbir başlangıç yapmak isteyen kurucular.",
    features: [
      "Stratejik Marka Çerçevesi",
      "Koleksiyon planlaması ve üretimi",
      "Maliyetli erken hataları önlemeye yönelik\nsistemler",
      "Markanı kurarken deneme-yanılma ile sermayeni\nkaybetme; 16 yıllık tecrübemle bu bütçeyi\nkoruyalım:",
      "Tahmini Toplam Kazanç: ₺240.000 –\n₺400.000+",
      "Zaman Kaybı (12 - 18 Ay): Paha Biçilemez",
    ],
    buttonText: "Programı İncele",
    href: "/programlar/program-1",
    imageSrc: programs["program-1"].showcaseImage,
    imageAlt: programs["program-1"].showcaseImageAlt,
  },
  {
    title: "Markanı Büyüt",
    price: "02",
    priceDescription: "Markanız var, ama henüz tam potansiyeline ulaşmadı.",
    description:
      "Kim için?\nSatışlarınızı bir üst seviyeye taşımak, dijital varlığınızı güçlendirmek ya da\nmarkanızı daha profesyonel bir yapıya oturtmak isteyen kurucular için.",
    features: [
      "Satışlar sistematik olarak büyütülür",
      "Marka algısı oluşturulur",
      "Süreçler sisteme oturtulur",
      "Dijitalde dönüşüm odaklı bir varlık oluşturulur",
    ],
    buttonText: "Programı İncele",
    href: "/programlar/program-2",
    imageSrc: programs["program-2"].showcaseImage,
    imageAlt: programs["program-2"].showcaseImageAlt,
    highlight: true,
  },
  {
    title: "Stratejik Ortaklık",
    price: "03",
    priceDescription: "İhtiyacın Kadar, doğru noktada Danışmanlık",
    description:
      "Spesifik bir sorunuz var, net bir cevap\nistiyorsunuz.\nBu modelde süreç tamamen sana göre\nşekillenir.\nSadece ihtiyaç duyduğun konuda\nNet ve uygulanabilir çözümler alırsın.",
    features: [
      "Marka Stratejisi & Konumlandırma",
      "Ürün & Koleksiyon Yönetimi",
      "Satış & Büyüme Stratejileri",
      "Net ve uygulanabilir çözümler",
    ],
    buttonText: "Programı İncele",
    href: "/programlar/program-3",
    imageSrc: programs["program-3"].showcaseImage,
    imageAlt: programs["program-3"].showcaseImageAlt,
  },
];

export const navItems = [
  { label: "Anasayfa", href: "/" },
  { label: "Hakkımda", href: "/hakkimda" },
  {
    label: "Programlar",
    children: programList.map((program) => ({
      label: program.menuLabel,
      href: program.href,
    })),
  },
  { label: "Blog", href: "/blog" },
  { label: "Sıkça Sorulan Sorular", href: "/sikca-sorulan-sorular" },
] as const;
