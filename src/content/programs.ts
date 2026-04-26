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

export type ProgramHowItWorksStep = {
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
  howItWorks?: {
    order: string;
    title: string;
    intro: string[];
    steps: ProgramHowItWorksStep[];
  };
  sessionContent?: {
    title: string;
    cards: ProgramBenefitCard[];
  };
  whyMe?: {
    title: string;
    quote: string;
    accent: string;
    paragraphs: string[];
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
    heroTitle: "Markanı Kur",
    href: "/programlar/program-1",
    menuLabel: "Markanı Kur",
    listingSubtitle:
      "Fikrini Gerçek Bir Markaya Dönüştür: 0'dan Başarılı Bir Lansmana",
    listingDescription:
      "Deneme-yanılma ile zaman ve para kaybetme. 16 yıllık sektör tecrübemle, markanı sağlam temeller üzerine birlikte kuralım.",
    teaserPoints: [
      "Sermayeni korursun",
      "Kaostan kurtulursun",
      "Zaman kazanırsın",
    ],
    showcaseImage:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
    showcaseImageAlt:
      "Moda markası kurulumuna eşlik eden editoryal moda görseli",
    heroImage: "/images/markanikur.png",
    heroImageAlt: "Markanı Kur programı hero görseli",
    storyImage: "/images/sitecontent.png",
    storyImageAlt:
      "Marka planlaması ve koleksiyon hazırlığını gösteren masaüstü düzeni",
    audienceImage:
      "https://images.unsplash.com/photo-1753162657464-7f829c766d54?auto=format&fit=crop&w=1600&q=80",
    audienceImageAlt: "Moda markası kurulum sürecinde çalışan tasarımcı",
    supportImage:
      "https://images.unsplash.com/photo-1764740109279-c7a8abd78821?auto=format&fit=crop&w=1600&q=80",
    supportImageAlt:
      "Teknik çizim ve üretim planlamasını temsil eden yaratıcı çalışma masası",
    hero: {
      subtitle:
        "Fikrini Gerçek Bir Markaya Dönüştür: 0'dan Başarılı Bir Lansmana",
      description:
        "Deneme-yanılma ile zaman ve para kaybetme. 16 yıllık sektör tecrübemle, markanı sağlam temeller üzerine birlikte kuralım.",
      ctaLabel: "Görüşme Planlayın",
      ticker: [
        "16 yıllık sektör tecrübesi",
        "üretim tecrübesi",
        "ticari öngörüler",
        "kişiselleştirilmiş danışmanlık",
      ],
      strips: ["Sermayeni korursun", "Kaostan kurtulursun", "Zaman kazanırsın"],
    },
    benefits: {
      title: "Bu paket sana ne sağlar?",
      cards: [
        {
          title: "Sermayeni korursun",
          description:
            "Başlangıçta yapılan pahalı hataların önüne geçer, bütçeni doğru önceliklere yönlendirirsin.",
        },
        {
          title: "Kaostan kurtulursun",
          description:
            "Nereden başlayacağını, hangi sırayla ilerleyeceğini ve hangi kararları ertelemen gerektiğini netleştirirsin.",
        },
        {
          title: "Süreçlerindeki dağınıklığı net bir sisteme dönüştürürsün",
          description:
            "Fikir, üretim, fiyatlandırma, satış ve lansman adımlarını birbirine bağlı çalışan bir plana çevirirsin.",
        },
        {
          title: "Zaman kazanırsın",
          description:
            "Aylar sürecek araştırma ve kararsızlık yerine, uygulanabilir bir yol haritasıyla daha hızlı aksiyon alırsın.",
        },
        {
          title: "Deneme-yanılma ile aylar kaybetmezsin.",
          description:
            "Daha önce test edilmiş saha deneyimiyle ilerler, markanı kurarken hangi risklerden uzak durman gerektiğini bilirsin.",
        },
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
            "Websitesi dahil olmak üzere tüm satış kanalları ve lansman adımları baştan sona kurgulanır.",
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
      title:
        "Markanı sağlam temeller üzerine kurmak istiyorsanız, tüm süreçte birebir yanınızdayım.",
      description:
        "Bir ajanstan değil, sektörün mutfağından gelen bir uzmandan kişiselleştirilmiş danışmanlık alacaksınız.",
      buttonLabel: "Görüşme Planlayın",
    },
  },
  "program-2": {
    slug: "program-2",
    order: "02",
    name: "Markanı Büyüt",
    heroTitle: "Markanı Büyüt",
    href: "/programlar/program-2",
    menuLabel: "Markanı Büyüt",
    listingSubtitle: "Markanız Var, Ama Henüz Tam Potansiyeline Ulaşmadı.",
    listingDescription:
      "Satışlarınızı bir üst seviyeye taşımak, dijital varlığınızı güçlendirmek ya da markanızı daha profesyonel bir yapıya oturtmak isteyen kurucular için.",
    teaserPoints: ["Dijital Varlık", "Stratejik Büyüme", "Sistemleme"],
    showcaseImage:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
    showcaseImageAlt: "Marka büyümesini çağrıştıran moda görseli",
    heroImage: "/images/markanibuyut.png",
    heroImageAlt: "Markanı Büyüt programı hero görseli",
    storyImage: "/images/sitecontent.png",
    storyImageAlt:
      "İçerik, koleksiyon ve marka düzenini gösteren çalışma alanı",
    audienceImage:
      "https://images.unsplash.com/photo-1759752393718-7b57f6da3caa?auto=format&fit=crop&w=1600&q=80",
    audienceImageAlt:
      "Büyüme potansiyeli taşıyan butik mağaza ve koleksiyon düzeni",
    supportImage:
      "https://images.unsplash.com/photo-1683921070230-9f046e462e46?auto=format&fit=crop&w=1600&q=80",
    supportImageAlt:
      "Planlama, not alma ve karar süreçlerini temsil eden masaüstü çalışma alanı",
    hero: {
      subtitle: "Markanız Var, Ama Henüz Tam Potansiyeline Ulaşmadı.",
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
          title: "Dijital Varlık",
          description:
            "Sosyal medya ve online kanallarda dönüşüm odaklı, tutarlı bir iz",
          highlight: true,
        },
        {
          title: "Stratejik Büyüme",
          description: "Markana özel, ölçeklenebilir sistem",
        },
        {
          title: "Maksimum Kârlılık",
          description: "Düşük performanslı alanlar elenir, odak artar",
        },
        {
          title: "Sistemleme",
          description: "Kişilere değil, sürece bağlı operasyon",
        },
        {
          title: "Global Algı",
          description: "Görsel dil ve iletişim premium seviyeye",
        },
        {
          title: "Koleksiyon Disiplini",
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
      title: "Süreç nasıl işliyor?",
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
    name: "Stratejik Çözümler",
    heroTitle: "Stratejik Çözümler",
    href: "/programlar/program-3",
    menuLabel: "Stratejik Çözümler",
    listingSubtitle: "İhtiyacın Kadar, Doğru Noktada Danışmanlık",
    listingDescription:
      "Her markanın farklıdır. Bu yüzden sana hazır paket değil, tam ihtiyacın olan noktada birebir stratejik destek sunulur.",
    teaserPoints: [
      "Sadece ihtiyaç duyduğun konuda",
      "Tam ihtiyaç duyduğun zamanda",
      "Net ve uygulanabilir çözümler",
    ],
    showcaseImage:
      "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=1200&q=80",
    showcaseImageAlt:
      "Stratejik ortaklık ve birebir danışmanlık sürecini temsil eden görsel",
    heroImage: "/images/stratejik.png",
    heroImageAlt: "Stratejik Ortaklık programı hero görseli",
    storyImage:
      "https://images.unsplash.com/photo-1683921070230-9f046e462e46?auto=format&fit=crop&w=1600&q=80",
    storyImageAlt:
      "Stratejik karar alma ve planlamayı çağrıştıran masaüstü düzeni",
    audienceImage: "/images/sitecontent.png",
    audienceImageAlt:
      "Stratejik danışmanlık ve koleksiyon planlamasını çağrıştıran flatlay",
    supportImage:
      "https://images.unsplash.com/photo-1764740109279-c7a8abd78821?auto=format&fit=crop&w=1600&q=80",
    supportImageAlt:
      "Marka stratejisi ve uygulama planlarını temsil eden teknik çalışma masası",
    hero: {
      subtitle: "İhtiyacın Kadar, Doğru Noktada Danışmanlık",
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
      cards: [
        {
          title: "Sadece ihtiyaç duyduğun konuda",
          description:
            "Tüm süreci baştan almak yerine, tam sıkıştığın noktadan devreye girerek hızla ilerliyoruz.",
        },
        {
          title: "Tam ihtiyaç duyduğun zamanda",
          description:
            "Aylık danışmanlık taahhüdü olmadan, kritik kararlar öncesinde uzman görüşü alırsın.",
        },
        {
          title: "Net ve uygulanabilir çözümler",
          description:
            "Hazır şablon değil, markanıza özel ve doğrudan kullanabileceğiniz stratejik çıktılar.",
        },
      ],
    },
    audience: {
      title: "Kimler için?",
      items: [
        "Markası için spesifik konuda takılan kurucular",
        "Belirli bir karar öncesi uzman görüşü almak isteyenler",
        "Aylık danışmanlığa ihtiyaç duymayan ama tavsiyeye ihtiyaç duyanlar",
        "Mevcut sürecini belirli bir konuda hızla güçlendirmek isteyenler",
        "Paket yerine esnek ve odaklı destek tercih edenler",
      ],
    },
    advisoryAreas: {
      title: "Hangi alanlarda danışabilirsiniz?",
      items: [
        "Marka Stratejisi & Konumlandırma",
        "Ürün & Koleksiyon Yönetimi",
        "Fiyatlandırma & Kârlılık Yönetimi",
        "Üretim & Tedarik Yapısı",
        "Satış & Büyüme Stratejileri",
        "Marka İmajı & İletişim Dili",
        "Global Pazar Stratejileri",
        "Fiziksel mağaza / showroom stratejileri",
        "Markana özel konular",
      ],
    },
    howItWorks: {
      order: "04",
      title: "Nasıl çalışır?",
      intro: [
        "Bu modelde süreç tamamen sana göre şekillenir. Bir seansta istediğin konuya odaklanır, net bir eylem planıyla çıkarsın.",
        "Spesifik sorunuza uygulanabilir bir yol çizilir. Hazır şablon değil, markanıza özel çözümler sunulur.",
      ],
      steps: [
        {
          label: "ADIM 1",
          title: "Konu & İhtiyaç Belirlenir",
          description:
            "Hangi konuda takıldığını, nerede destek aradığını kısaca paylaşırsın.",
        },
        {
          label: "ADIM 2",
          title: "Seans Planlanır",
          description:
            "Zoom üzerinden 90 dakikalık birebir görüşme takvime eklenir.",
        },
        {
          label: "ADIM 3",
          title: "Odaklı Çalışma",
          description:
            "Seans boyunca yalnızca o konuya odaklanılır, somut stratejiler ve eylem adımları belirlenir.",
        },
        {
          label: "ADIM 4",
          title: "Özet & Takip",
          description:
            "Görüşme sonrası seans özeti ve uygulanabilir notlar iletilir.",
        },
      ],
    },
    sessionContent: {
      title: "Seans içeriği",
      cards: [
        {
          eyebrow: "01",
          title: "Birebir Zoom Seansı",
          description:
            "90 dakikalık odaklı görüşmede yalnızca sizin konunuza ve markanıza çözüm üretilir.",
        },
        {
          eyebrow: "02",
          title: "Seans Öncesi Hazırlık",
          description:
            "Görüşmeyi verimli tutmak için kısa bir ön değerlendirme formu paylaşılır.",
        },
        {
          eyebrow: "03",
          title: "Eylem Planı & Özet",
          description:
            "Görüşme sonrası uygulanabilir adımlar ve kararlar yazılı olarak iletilir.",
        },
        {
          eyebrow: "04",
          title: "İlgili Kaynaklar",
          description:
            "Konuya özel şablon, döküman veya kılavuz varsa paylaşılır.",
        },
        {
          eyebrow: "05",
          title: "Kısa Süreli Takip Desteği",
          description:
            "Seans sonrasında 48 saat boyunca mesaj üzerinden soru sorma imkânı.",
        },
        {
          eyebrow: "06",
          title: "Ek Seans Esnekliği",
          description:
            "İhtiyaç duyduğunuzda yeni seans eklenebilir. Taahhüt yok, esneklik var.",
        },
      ],
    },
    whyMe: {
      title: "Neden benimle?",
      quote: '"Bir ajans değil, sektörün mutfağından gelen bir uzman."',
      accent: "mutfağından",
      paragraphs: [
        "Tekstil sektörü deneme-yanılma yöntemini kaldırmayacak kadar hızlı ve maliyetlidir. Size sadece teorik bilgi vermiyorum; 16 yıllık network'ümü, üretim tecrübemi ve ticari öngörülerimi doğrudan markanıza aktarıyorum.",
        "Karşınızda kalabalık ekipler değil, her detaya bizzat hâkim olan bir yol arkadaşı bulacaksınız. Taahhüt olmadan, tam ihtiyacınız olduğu anda yanınızdayım.",
      ],
    },
    support: {
      title: "Neye yatırım yapıyorsunuz?",
      columns: [
        {
          heading: "Neye yatırım yapıyorsunuz?",
          items: [
            "90 dakikalık birebir Zoom görüşmesi",
            "Seans öncesi kısa değerlendirme formu",
            "Seans sonrası yazılı özet & eylem planı",
            "Konuya özel kaynaklar ve dökümanlar",
            "48 saatlik mesaj takip desteği",
            "Aylık taahhüt yok — ihtiyaç duyduğunda kullan",
          ],
        },
        {
          heading: "Hangi kaynaklara erişirsin?",
          items: [
            "Konuya özel strateji şablonları",
            "Fiyatlandırma ve kârlılık analiz araçları",
            "Koleksiyon planlama dökümanları",
            "Üretim ve tedarikçi değerlendirme kılavuzları",
            "Marka konumlandırma çerçeveleri",
            "Güvenilir üretici ve tedarikçi bağlantıları",
          ],
        },
      ],
    },
    finalCta: {
      title: "Seansını Planla",
      description: "",
      buttonLabel: "Seansını Planla",
    },
  },
};

export const programList = (Object.values(programs) as ProgramData[]).sort(
  (a, b) => a.order.localeCompare(b.order),
);

export const plans: PricingPlan[] = [
  {
    title: "Markanı Kur",
    price: "01",
    priceDescription:
      "Fikrini Gerçek Bir Markaya Dönüştür: 0'dan Başarılı Bir Lansmana",
    description:
      "Kim için?\nDoğru temellerle fark yaratan bir tekstil markası kurmak isteyenler için",
    features: [
      "Stratejik Marka Çerçevesi",
      "Koleksiyon planlaması ve üretimi",
      "Maliyetli erken hataları önlemeye yönelik\nsistemler",
      "Tahmini Toplam Tasarruf: ₺240.000 –\n₺400.000+",
      "Zaman Kaybı (12 - 18 Ay): Paha Biçilemez",
    ],
    buttonText: "Paketi İncele",
    href: "/programlar/program-1",
    imageSrc: programs["program-1"].heroImage,
    imageAlt: programs["program-1"].heroImageAlt,
  },
  {
    title: "Markanı Büyüt",
    price: "02",
    priceDescription: "Markanız Var, Ama Henüz Tam Potansiyeline Ulaşmadı",
    description:
      "Kim için?\nSatışlarınızı bir üst seviyeye taşımak, dijital varlığınızı güçlendirmek ya da\nmarkanızı daha profesyonel bir yapıya oturtmak isteyen kurucular için.",
    features: [
      "Satış Kanalları ve Büyüme Stratejileri",
      "Marka Algısı ve Görsel Kimlik Revizyonu",
      "Operasyonel Süreçlerin Sistematize Edilmesi",
      "Veri Odaklı Dijital Dönüşüm ve Pazarlama Planı",
      "Tahmini Verimlilik Artışı: %40 - %60"
    ],
    buttonText: "Programı İncele",
    href: "/programlar/program-2",
    imageSrc: programs["program-2"].heroImage,
    imageAlt: programs["program-2"].heroImageAlt,
    highlight: true,
  },
  {
    title: "Stratejik Çözümler",
    price: "03",
    priceDescription: "İhtiyacın Kadar, Doğru Noktada Danışmanlık",
    description:
      "Kim için?\nSpesifik bir sorunu olan, net bir cevap arayan veya süreci tamamen kendi ihtiyaçlarına göre şekillendirmek isteyen profesyoneller için.",
    features: [
"Birebir Sorun Analizi ve Teknik Çözümler",

"Ürün & Koleksiyon Yönetimi Özel Danışmanlığı",

"Hızlı Aksiyon Planı ve Uygulanabilir Çözüm Seti",

"Kritik Karar Anlarında Uzman Mentorluğu",

"Hızlı Çözüm: Kısa Süre İçinde Aksiyon Planı",

"Odak Noktası: %100 İhtiyaca Özel Kurgu"
    ],
    buttonText: "Programı İncele",
    href: "/programlar/program-3",
    imageSrc: programs["program-3"].heroImage,
    imageAlt: programs["program-3"].heroImageAlt,
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
  { label: "SSS", href: "/sikca-sorulan-sorular" },
] as const;
