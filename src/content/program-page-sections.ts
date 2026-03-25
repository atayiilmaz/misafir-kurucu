export type ProgramSlug = "program-1" | "program-2" | "program-3";

type RotatingCardContent = {
  id: number;
  title: string;
  subtitle: string;
  content: string;
};

type QuickPoint = {
  title: string;
  description: string;
};

type StatItem = {
  value: string;
  label: string;
};

type StoryFrame = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
  itemIndexes: number[];
};

type ProcessStepFrame = {
  id: string;
  name: string;
  title: string;
  description: string;
  topicIndexes: number[];
};

type FeatureImageSet = {
  alt: string;
  step1img1: string;
  step1img2: string;
  step2img1: string;
  step2img2: string;
  step3img: string;
  step4img: string;
};

type ProgramPageSectionConfig = {
  heroEyebrow: string;
  heroLead: string;
  heroCards: RotatingCardContent[];
  heroQuickPoints: QuickPoint[];
  heroStats: StatItem[];
  heroQuote: string;
  heroQuoteAuthor: string;
  heroImage: string;
  heroImageAlt: string;
  storyEyebrow: string;
  storyTitle: string;
  storyDescription: string;
  storyFrames: StoryFrame[];
  processEyebrow: string;
  processTitle: string;
  processDescription: string;
  processSteps: ProcessStepFrame[];
  processImages: FeatureImageSet;
  resultsTitle: string;
};

export const programPageSections: Record<ProgramSlug, ProgramPageSectionConfig> = {
  "program-1": {
    heroEyebrow: "Marka stratejisi",
    heroLead:
      "Fikri büyüleyen tarafı değil, seni gerçekten ileri taşıyacak temel kararları birlikte netleştiriyoruz.",
    heroCards: [
      {
        id: 0,
        title: "Başlangıç Netliği",
        subtitle: "İlk karar katmanı",
        content:
          "Marka fikrinin gerçekten sürdürülebilir olup olmadığını birlikte değerlendiririz.",
      },
      {
        id: 1,
        title: "Niş ve Kitle",
        subtitle: "Pazar odağı",
        content:
          "Doğru ürün ve doğru müşteri yönünü acele etmeden netleştiririz.",
      },
      {
        id: 2,
        title: "Yol Haritası",
        subtitle: "Uygulanabilir plan",
        content:
          "Zaman, bütçe ve başlangıç adımlarını dağılmadan görülebilir hale getiririz.",
      },
    ],
    heroQuickPoints: [
      {
        title: "Fikir karmaşasını azaltır",
        description:
          "Trendler ve tavsiyeler arasında kaybolmak yerine sana ait net yönü çıkarır.",
      },
      {
        title: "İlk ürün kararını kolaylaştırır",
        description:
          "Neyle başlaman gerektiğini ve neden oradan başlamanın daha doğru olduğunu açığa çıkarır.",
      },
      {
        title: "Boşa harcamayı sınırlar",
        description:
          "Yanlış sırayla ilerlemek yerine zaman ve bütçeyi daha bilinçli kullanmanı sağlar.",
      },
    ],
    heroStats: [
      { value: "1:1", label: "yakın mentorluk akışı" },
      { value: "9", label: "temel strateji başlığı" },
      { value: "16+", label: "yıllık saha deneyimi" },
    ],
    heroQuote:
      "Marka kurulumunda en pahalı hata, erken heyecanla yanlış başlangıç yapmaktır. Bu program o zemini temizler.",
    heroQuoteAuthor: "Sevinç · Misafir Kurucu",
    heroImage:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
    heroImageAlt: "Strateji programı için moda odaklı editoryal görsel",
    storyEyebrow: "Kimler için",
    storyTitle: "Bu programı kimin için tasarladığımızı ilk bakışta anlayabilmelisin",
    storyDescription:
      "Aynı ihtiyaç altında toplanmayan fikirler çok erken dağılır. Bu bölüm, programın tam olarak hangi başlangıç noktasına karşılık geldiğini görünür kılar.",
    storyFrames: [
      {
        id: 1,
        title: "Nereden başlayacağını bilmiyorsan",
        description:
          "Marka fikri var ama doğru ilk adımı bulamıyorsan, önce karar sırasını sadeleştirmek gerekir.",
        imageUrl:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
        itemIndexes: [0, 2],
      },
      {
        id: 2,
        title: "Fikrinin gücünü ölçmek istiyorsan",
        description:
          "Sadece hevesle değil, uygulanabilirlikle ilerlemek isteyen girişimciler için kritik analiz katmanı burada başlar.",
        imageUrl:
          "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80",
        reverse: true,
        itemIndexes: [1, 3],
      },
      {
        id: 3,
        title: "Yanlış başlangıç yapmak istemiyorsan",
        description:
          "Kuruluş aşamasındaki kararlar daha sonra maliyet yaratmasın diye ürün, kitle ve tempo tarafını birlikte netleştiririz.",
        imageUrl:
          "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",
        itemIndexes: [4, 5],
      },
    ],
    processEyebrow: "Süreç akışı",
    processTitle: "Strateji programı bir sohbet değil, sıralı bir karar mimarisidir",
    processDescription:
      "Her adım, bir sonraki kararı daha kolay ve daha güvenli hale getirmek için kurgulanır.",
    processSteps: [
      {
        id: "1",
        name: "Aşama 1",
        title: "Marka fikrini test ederiz",
        description:
          "Önce fikrin pazar karşılığını, niş gücünü ve gerçek başlangıç potansiyelini ele alırız.",
        topicIndexes: [0, 1],
      },
      {
        id: "2",
        name: "Aşama 2",
        title: "Kime ve neden hitap ettiğini netleştiririz",
        description:
          "Hedef kitle, pazar yönü ve markanın amacı görünür hale geldikçe dağınık kararlar azalır.",
        topicIndexes: [2, 3],
      },
      {
        id: "3",
        name: "Aşama 3",
        title: "Ürün başlangıcını tanımlarız",
        description:
          "Hangi kategoriyle başlamanın daha mantıklı olduğunu ve fikrin zayıf alanlarını birlikte görürüz.",
        topicIndexes: [4, 5],
      },
      {
        id: "4",
        name: "Aşama 4",
        title: "Planı uygulanabilir hale getiririz",
        description:
          "Zaman, bütçe, gelişim alanları ve başlangıç yol haritası ile elinde net bir çerçeve oluşur.",
        topicIndexes: [6, 7, 8],
      },
    ],
    processImages: {
      alt: "Strateji programı süreç görselleri",
      step1img1:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80",
      step1img2:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
      step2img1:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
      step2img2:
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",
      step3img:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80",
      step4img:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
    },
    resultsTitle: "Program sonunda acele eden biri değil, neyi neden kurduğunu bilen biri olarak çıkarsın.",
  },
  "program-2": {
    heroEyebrow: "Strateji + kurulum",
    heroLead:
      "Fikri sadece netleştirmekle kalmayız; koleksiyon, üretim ve satış planını gerçek bir kurulum sistemine dönüştürürüz.",
    heroCards: [
      {
        id: 0,
        title: "Kurulum Sırası",
        subtitle: "Temelden uygulamaya",
        content:
          "Stratejiden üretime uzanan adımları tek akışta planlarız.",
      },
      {
        id: 1,
        title: "Koleksiyon Netliği",
        subtitle: "İlk ürün yapısı",
        content:
          "İlk koleksiyonun kapsamı, ürün seçimi ve yapı mantığı belirsiz kalmaz.",
      },
      {
        id: 2,
        title: "Satışa Hazırlık",
        subtitle: "Sistem kurma",
        content:
          "Maliyet, fiyatlandırma ve kanal kararları markayı lansmana hazırlayan omurgaya dönüşür.",
      },
    ],
    heroQuickPoints: [
      {
        title: "Kurulum sürecini tekleştirir",
        description:
          "Üretim, atölye, maliyet ve satış konularını birbirinden kopuk değil, tek plan içinde ele alır.",
      },
      {
        title: "İlk koleksiyonu gerçekçi kılar",
        description:
          "Ne üreteceğini, nasıl üreteceğini ve hangi ölçekle başlayacağını somutlaştırır.",
      },
      {
        title: "Lansmana güven kazandırır",
        description:
          "Sadece marka kurmuş olmak değil, sistemiyle beraber hazır olmak hedeflenir.",
      },
    ],
    heroStats: [
      { value: "18", label: "uygulama başlığı" },
      { value: "3", label: "kurulum odağı" },
      { value: "1", label: "tekleşen yol haritası" },
    ],
    heroQuote:
      "Marka kurmak, fikirden ürüne ve satışa uzanan zinciri doğru sırada kurabildiğinde anlamlı hale gelir.",
    heroQuoteAuthor: "Sevinç · Kurulum Mentorluğu",
    heroImage:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80",
    heroImageAlt: "Strateji ve kurulum programı için moda prodüksiyon görseli",
    storyEyebrow: "Kimler için",
    storyTitle: "Markasını gerçekten ayağa kaldırmak isteyenler için tasarlandı",
    storyDescription:
      "Bu program, sadece ilham arayanlar için değil; ürün, üretim ve satış tarafını hayata geçirmek isteyenler için kurgulandı.",
    storyFrames: [
      {
        id: 1,
        title: "Fikri hayata geçirmek istiyorsan",
        description:
          "Sadece marka fikrine sahip olmak yetmiyorsa, onu işleyen sisteme dönüştürmek gerekir.",
        imageUrl:
          "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=1200&q=80",
        itemIndexes: [0, 1],
      },
      {
        id: 2,
        title: "İlk koleksiyon tarafında netlik arıyorsan",
        description:
          "Ne üreteceğini, nasıl kurgulayacağını ve üretim sürecini nasıl yöneteceğini birlikte çözümleriz.",
        imageUrl:
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
        reverse: true,
        itemIndexes: [2, 3],
      },
      {
        id: 3,
        title: "Plansız değil sistemli kurmak istiyorsan",
        description:
          "Ürün seçimi, fiyatlandırma ve satış kararları birbiriyle bağlı ilerlediğinde marka daha sağlam kurulur.",
        imageUrl:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
        itemIndexes: [4, 5],
      },
    ],
    processEyebrow: "Kurulum akışı",
    processTitle: "Bu program stratejiyle başlar, sonra gerçek sisteme dönüşür",
    processDescription:
      "Koleksiyon planından maliyet hesabına, satış kanalından iletişim planına kadar kurulumun bütün halkaları görünür olur.",
    processSteps: [
      {
        id: "1",
        name: "Aşama 1",
        title: "Stratejiyi uygulamaya çeviririz",
        description:
          "Marka yönü kağıt üzerinde kalmaz; ürün ve yapı kararlarına doğrudan bağlanır.",
        topicIndexes: [0, 1, 2, 3],
      },
      {
        id: "2",
        name: "Aşama 2",
        title: "Üretim sistemini kurarız",
        description:
          "Atölye, tedarik, koleksiyon ve süreç planı birlikte çalışacak şekilde ele alınır.",
        topicIndexes: [4, 5, 6, 7],
      },
      {
        id: "3",
        name: "Aşama 3",
        title: "Satış ve iletişim yönünü netleştiririz",
        description:
          "Satış kanalı, sosyal medya planı ve pazar yeri değerlendirmeleri aynı hedefe bağlanır.",
        topicIndexes: [8, 9, 10, 11],
      },
      {
        id: "4",
        name: "Aşama 4",
        title: "Markayı lansmana hazırlarız",
        description:
          "Niş, hikâye, görsel kimlik ve gerekli bağlantılarla birlikte kurulum yol haritası tamamlanır.",
        topicIndexes: [12, 13, 14, 15, 16, 17],
      },
    ],
    processImages: {
      alt: "Strateji ve kurulum programı süreç görselleri",
      step1img1:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
      step1img2:
        "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=1200&q=80",
      step2img1:
        "https://images.unsplash.com/photo-1503342394128-c104d54dba01?auto=format&fit=crop&w=1200&q=80",
      step2img2:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
      step3img:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
      step4img:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
    },
    resultsTitle: "Program sonunda elinde sadece bir marka fikri değil, çalışmaya hazır bir kurulum sistemi olur.",
  },
  "program-3": {
    heroEyebrow: "Büyüme / yeniden yapılandırma",
    heroLead:
      "Var olan markayı daha net bir kimlik, daha sade ürün yapısı ve daha güçlü büyüme odağıyla yeniden konumlandırıyoruz.",
    heroCards: [
      {
        id: 0,
        title: "Durum Analizi",
        subtitle: "Mevcut tabloyu okuruz",
        content:
          "Önce markanın bugün nerede tıkandığını, neyin büyümeyi zorlaştırdığını ortaya çıkarırız.",
      },
      {
        id: 1,
        title: "Sadeleştirme",
        subtitle: "Odak kurarız",
        content:
          "Ürün gamını ve hikâyeyi sadeleştirerek markanın daha güçlü bir çekirdeğe oturmasını sağlarız.",
      },
      {
        id: 2,
        title: "Büyüme Planı",
        subtitle: "Yeni yön",
        content:
          "Satış potansiyeli yüksek ürünleri ve doğru büyüme stratejisini birlikte belirleriz.",
      },
    ],
    heroQuickPoints: [
      {
        title: "Markanın odağını geri getirir",
        description:
          "Zamanla dağılmış ürün ve iletişim yapısını tekrar merkezine toplar.",
      },
      {
        title: "Satış potansiyelini görünür kılar",
        description:
          "Hangi ürünlerin büyümeye hizmet ettiğini, hangilerinin enerjiyi dağıttığını netleştirir.",
      },
      {
        title: "Yeni yönü somutlaştırır",
        description:
          "Yeniden konumlandırma kararlarını gerçek satış ve iletişim planına bağlar.",
      },
    ],
    heroStats: [
      { value: "7", label: "kritik büyüme çıktısı" },
      { value: "1", label: "yeniden odak ekseni" },
      { value: "16+", label: "yıllık saha perspektifi" },
    ],
    heroQuote:
      "Büyüme bazen daha fazla eklemek değil, artık işlemeyen yapıyı cesurca sadeleştirmektir.",
    heroQuoteAuthor: "Sevinç · Büyüme Mentorluğu",
    heroImage:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
    heroImageAlt: "Büyüme programı için editoryal moda görseli",
    storyEyebrow: "Kimler için",
    storyTitle: "Kurulu ama sıkışmış markalar için yeniden yön bulma alanı",
    storyDescription:
      "Büyüme problemi her zaman görünür olmaz. Bazen konu, fazla ürün; bazen karışık kimlik; bazen de yorgun satış yapısıdır.",
    storyFrames: [
      {
        id: 1,
        title: "Markası var ama ivmesi zayıflayanlar için",
        description:
          "Satış yapan ama büyüme kuramayan markalarda önce tıkanıklığın kaynağına bakarız.",
        imageUrl:
          "https://images.unsplash.com/photo-1503342394128-c104d54dba01?auto=format&fit=crop&w=1200&q=80",
        itemIndexes: [0, 3],
      },
      {
        id: 2,
        title: "Kimliğini güçlendirmek isteyenler için",
        description:
          "Tanınırlık ve satış yalnızca görünürlükle değil, daha net bir kimlikle desteklenir.",
        imageUrl:
          "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
        reverse: true,
        itemIndexes: [1, 2],
      },
      {
        id: 3,
        title: "Ürün yapısını yeniden kurmak isteyenler için",
        description:
          "Zamanla karmaşıklaşan ürün yapısını sadeleştirerek daha güçlü satış odakları çıkarırız.",
        imageUrl:
          "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80",
        itemIndexes: [4, 5, 6],
      },
    ],
    processEyebrow: "Büyüme akışı",
    processTitle: "Mevcut markayı analiz edip yeni ekseni adım adım kurarız",
    processDescription:
      "Her bölüm mevcut tabloyu sadeleştirir, daha okunur hale getirir ve markanın yeni yönünü belirginleştirir.",
    processSteps: [
      {
        id: "1",
        name: "Aşama 1",
        title: "Mevcut tabloyu okuruz",
        description:
          "Markanın bugünkü durumu, konumlandırması ve hedef pazarı yeniden değerlendirilir.",
        topicIndexes: [0, 1, 2],
      },
      {
        id: "2",
        name: "Aşama 2",
        title: "Kimliği güçlendiririz",
        description:
          "Marka hikâyesi ve marka kimliği daha tutarlı, daha güçlü bir odak etrafında kurulur.",
        topicIndexes: [3, 4],
      },
      {
        id: "3",
        name: "Aşama 3",
        title: "Ürün yapısını sadeleştiririz",
        description:
          "Satış potansiyeli yüksek ürünleri öne çıkarırken koleksiyon mimarisini temizleriz.",
        topicIndexes: [5, 6, 7],
      },
      {
        id: "4",
        name: "Aşama 4",
        title: "Büyüme planını netleştiririz",
        description:
          "Fiyatlandırma, satış kanalları ve markaya özel büyüme stratejisi somut hale gelir.",
        topicIndexes: [8, 9],
      },
    ],
    processImages: {
      alt: "Büyüme programı süreç görselleri",
      step1img1:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
      step1img2:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
      step2img1:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80",
      step2img2:
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",
      step3img:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
      step4img:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80",
    },
    resultsTitle: "Program sonunda markanın neyi temsil ettiği, neyi bırakması gerektiği ve nereye büyüyeceği çok daha net görünür.",
  },
};
