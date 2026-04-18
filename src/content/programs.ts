export type ProgramSlug = "program-1" | "program-2" | "program-3";

export type ProgramPackageItem = {
  title: string;
  description: string;
};

export type ProgramListBlock = {
  title: string;
  items: string[];
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
  benefits?: ProgramListBlock;
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
      heading: string;
      items: string[];
    }>;
  };
  process?: {
    title: string;
    intro: string[];
    steps: string[];
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
    heroImage:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=80",
    heroImageAlt: "Moda markası kurulum sürecini çağrıştıran editoryal görsel",
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
      items: [
        "Sermayeni korursun",
        "Kaostan kurtulursun",
        "Süreçlerindeki dağınıklığı net bir sisteme dönüştürürsün",
        "Zaman kazanırsın",
        "Deneme-yanılma ile aylar kaybetmezsin.",
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
      title: "Neden Benimle Çalışmalısınız?",
      paragraphs: [sharedMentorParagraph, sharedClosingParagraph],
    },
    package: {
      title: "Paket İçeriği",
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
      title: "NEYE YATIRIM YAPIYORSUNUZ",
      columns: [
        {
          heading: "NEYE YATIRIM YAPIYORSUNUZ",
          items: [
            "haftada 2 gün 1 saat zoom üzerindenden birebir görüşme",
            "Kaynaklar ve çalışma sayfaları",
            "Günlük sohbet desteği",
            "Markanın tüm kararlarını yöneten net bir marka çerçevesi",
            "Sürekli geri bildirim ve karar desteği",
          ],
        },
        {
          heading: "HANGİ KAYNAKLARA ERİŞİRSİN?",
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
    listingSubtitle: "Satış sürecindeki karmaşayı sonlandırın.",
    listingDescription:
      "Sistemleştirilmiş süreçlerle kârlılığınızı artırın, markanızı stratejik ve kontrollü şekilde ölçeklendirin.",
    teaserPoints: [
      "Stratejik Büyüme",
      "Maksimum Kârlılık",
      "Sistemleşme",
    ],
    showcaseImage:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
    showcaseImageAlt: "Marka büyümesini çağrıştıran moda görseli",
    heroImage:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1400&q=80",
    heroImageAlt: "Marka büyütme stratejisini temsil eden editoryal moda görseli",
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
      subtitle: "Satış sürecindeki karmaşayı sonlandırın.",
      description:
        "Sistemleştirilmiş süreçlerle kârlılığınızı artırın, markanızı stratejik ve kontrollü şekilde ölçeklendirin.",
      ctaLabel: "Görüşme Planlayın",
      ticker: [
        "Stratejik Büyüme",
        "Maksimum Kârlılık",
        "Global Algı",
        "Operasyonel Netlik",
      ],
      strips: [
        "Stratejik Büyüme",
        "Maksimum Kârlılık",
        "Operasyonel Netlik",
      ],
    },
    benefits: {
      title: "Bu paket sana ne sağlar?",
      items: [
        "Stratejik Büyüme",
        "Maksimum Kârlılık",
        "Sistemleşme",
        "Global Algı",
        "Koleksiyon Disiplini",
        "Sermaye Koruması",
        "Operasyonel Netlik",
      ],
    },
    audience: {
      title: "Kimler için?",
      items: [
        "Halihazırda satış yapan markalar",
        "Büyümesini hızlandırmak isteyenler",
        "Tıkanıklık yaşayan ve yön arayan markalar",
        "Global marka olmayı hedefleyenler",
        "Süreçlerini sistemleştirmek isteyenler",
        "Marka algısı zayıf olanlar",
      ],
    },
    narrative: {
      title: "Neden Benimle Çalışmalısınız?",
      paragraphs: [sharedMentorParagraph, sharedClosingParagraph],
    },
    package: {
      title: "Paket İçeriği",
      items: [
        {
          title: "360° Marka Analizi",
          description:
            "Satış, müşteri ve pazar verileri analiz edilerek büyüme darboğazları netleştirilir",
        },
        {
          title: "Koleksiyon Stratejisi",
          description:
            "Sepet ortalamasını artıran, yüksek kârlı ürün ve koleksiyon yapısı oluşturulur",
        },
        {
          title: "Sistemleşme",
          description:
            "Marka, kişilere bağlı olmayan sürdürülebilir bir operasyon yapısına kavuşturulur",
        },
        {
          title: "Marka Konumlandırma",
          description:
            "Görsel dil ve iletişim global & premium seviyeye taşınır",
        },
        {
          title: "Büyüme Kurgusu",
          description:
            "Markaya özel, ölçeklenebilir bir büyüme sistemi kurulur",
        },
        {
          title: "Kitle & Güven",
          description:
            "Tutarlı iletişimle güçlü ve sadık bir müşteri kitlesi oluşturulur",
        },
        {
          title: "Kanal Genişleme",
          description:
            "Online, fiziksel ve yurtdışı satış kanalları netleştirilir",
        },
        {
          title: "Kanal Optimizasyonu",
          description:
            "Mevcut kanallar performansa göre yeniden yapılandırılır",
        },
        {
          title: "Verimlilik",
          description:
            "Düşük performanslı alanlar elimine edilerek odak artırılır",
        },
      ],
    },
    support: {
      title: "NEYE YATIRIM YAPIYORSUNUZ",
      columns: [
        {
          heading: "NEYE YATIRIM YAPIYORSUNUZ",
          items: [
            "haftada 2 gün 1 saat zoom üzerindenden birebir görüşme",
            "Kaynaklar ve çalışma sayfaları",
            "Günlük sohbet desteği",
            "Markanın tüm kararlarını yöneten net bir marka çerçevesi",
            "Sürekli geri bildirim ve karar desteği",
          ],
        },
      ],
    },
    finalCta: {
      title: "Markanızı stratejik ve kontrollü şekilde ölçeklendirmek istiyorsanız, tüm süreçte birebir yanınızdayım.",
      description:
        "Sistemleştirilmiş süreçlerle kârlılığınızı artırın ve markanızı kontrollü şekilde büyütün.",
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
      "Her markanın farklıdır. Bu yüzden sana hazır paket değil, tam ihtiyacın olan noktada birebir stratejik destek sunulur",
    teaserPoints: [
      "Marka Stratejisi & Konumlandırma",
      "Ürün & Koleksiyon Yönetimi",
      "Satış & Büyüme Stratejileri",
    ],
    showcaseImage:
      "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=1200&q=80",
    showcaseImageAlt: "Stratejik ortaklık ve birebir danışmanlık sürecini temsil eden görsel",
    heroImage:
      "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=1400&q=80",
    heroImageAlt: "Birebir danışmanlık sürecini çağrıştıran moda görseli",
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
        "Her markanın farklıdır. Bu yüzden sana hazır paket değil, tam ihtiyacın olan noktada birebir stratejik destek sunulur",
      ctaLabel: "Seansını Planla",
      ticker: [
        "Sadece ihtiyaç duyduğun konuda",
        "Tam ihtiyaç duyduğun zamanda",
        "Net ve uygulanabilir çözümler",
      ],
      strips: [
        "Sadece ihtiyaç duyduğun konuda",
        "Tam ihtiyaç duyduğun zamanda",
        "Net ve uygulanabilir çözümler",
      ],
    },
    narrative: {
      title: "Nasıl Çalışır?",
      paragraphs: [
        "Bu modelde süreç tamamen sana göre şekillenir.",
        "Uzun programlara girmek zorunda değilsin.",
      ],
    },
    process: {
      title: "Nasıl Çalışır?",
      intro: [
        "Bu modelde süreç tamamen sana göre şekillenir.",
        "Uzun programlara girmek zorunda değilsin.",
      ],
      steps: [
        "Sadece ihtiyaç duyduğun konuda,",
        "Tam ihtiyaç duyduğun zamanda,",
        "Net ve uygulanabilir çözümler alırsın.",
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
      description:
        "Hazır paket yerine, tam ihtiyacın olan noktada birebir stratejik destek sunulur.",
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
