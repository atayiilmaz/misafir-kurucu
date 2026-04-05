import {
  BookOpenText,
  BriefcaseBusiness,
  Factory,
  Megaphone,
  NotebookTabs,
  PackageCheck,
} from "lucide-react";

export const navItems = [
  { label: "Anasayfa", href: "/" },
  { label: "Hakkımda", href: "/hakkimda" },
  {
    label: "Programlar",
    children: [
      { label: "Strateji", href: "/programlar/program-1" },
      { label: "Strateji + Kurulum", href: "/programlar/program-2" },
      {
        label: "Büyüme / Yeniden Yapılandırma",
        href: "/programlar/program-3",
      },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Sıkça Sorulan Sorular", href: "/sikca-sorulan-sorular" },
] as const;

export const featureItems = [
  {
    id: 1,
    icon: BriefcaseBusiness,
    title: "İş modelini netleştiriyoruz",
    description:
      "Fikrinizi gerçek pazar koşullarında test ediyor, hedef müşteri, fiyat segmenti ve kanal seçimini birlikte belirliyoruz.",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    icon: Factory,
    title: "Üretim hattını doğru kuruyoruz",
    description:
      "Numune, termin, maliyet ve kalite adımlarını parçalayarak sürdürülebilir bir üretim sistemi kuruyoruz.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    icon: Megaphone,
    title: "İçerik ve satış stratejisini bağlıyoruz",
    description:
      "Sosyal medya görünürlüğünü satışa bağlayan içerik planı, teklif dili ve lansman akışı oluşturuyoruz.",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
  },
];

export const accordionPrograms = [
  {
    id: 1,
    title: "Strateji",
    caption:
      "Moda markası kurmak isteyen ama nereden başlayacağını bilmeyenler için stratejik temel programı.",
    imageUrl:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Strateji + Kurulum",
    caption:
      "Strateji sonrası markasını gerçek kurulum planına dönüştürmek isteyenler için uygulama odaklı program.",
    imageUrl:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Büyüme",
    caption:
      "Mevcut moda veya tekstil markasını yeniden konumlandırmak ve büyütmek isteyenler için yeniden yapılanma programı.",
    imageUrl:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
  },
];

export const plans = [
  {
    title: "Strateji",
    price: "01",
    priceDescription: "Marka Stratejisi Programı",
    description:
      "Moda markası kurmak isteyen ama nereden başlayacağını bilmeyenler için fikri netleştiren stratejik temel programı.",
    features: [
      "Marka fikrinin uygulanabilirliği",
      "Doğru niş ve hedef müşteri",
      "Ürün kategorisi başlangıç netliği",
      "Başlangıç yol haritası",
    ],
    buttonText: "Programı İncele",
    href: "/programlar/program-1",
    imageSrc:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=400&q=80",
    imageAlt: "Program 1",
  },
  {
    title: "Strateji + Kurulum",
    price: "02",
    priceDescription: "Kurulum Programı",
    description:
      "Marka fikrini gerçek bir moda markasına dönüştürmek isteyenler için strateji ve kurulum sürecini birleştiren kapsamlı program.",
    features: [
      "İlk koleksiyon planı",
      "Üretim ve tedarik planı",
      "Maliyet ve fiyatlandırma",
      "Satış ve iletişim stratejisi",
    ],
    buttonText: "Programı İncele",
    href: "/programlar/program-2",
    imageSrc:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=400&q=80",
    imageAlt: "Program 2",
    highlight: true,
  },
  {
    title: "Büyüme / Yeniden Yapılandırma",
    price: "03",
    priceDescription: "Büyüme Programı",
    description:
      "Mevcut moda veya tekstil markasını daha güçlü bir kimliğe, daha sade bir ürün yapısına ve daha net bir büyüme yönüne taşımak için.",
    features: [
      "Mevcut durum analizi",
      "Ürün gamı sadeleştirme",
      "Marka hikayesi güçlendirme",
      "Büyüme stratejisi oluşturma",
    ],
    buttonText: "Programı İncele",
    href: "/programlar/program-3",
    imageSrc:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    imageAlt: "Program 3",
  },
];

export const programDetails = {
  "program-1": {
    title: "Strateji",
    description:
      "Bir moda markası aceleyle kurulmaz. Doğru temeller üzerine kurulduğunda sürdürülebilir olur. Bu program, moda markası fikrini netleştirmek ve sağlam bir stratejik temel oluşturmak için tasarlanmıştır.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
    audienceTitle: "Kimler için",
    audience: [
      "Moda markası kurmak isteyen fakat nereden başlayacağını bilmeyenler",
      "Fikrinin gerçekten güçlü ve uygulanabilir olup olmadığını anlamak isteyenler",
      "Trendler, tavsiyeler ve fikirler arasında kaybolanlar",
      "Para harcamadan önce doğru kararları vermek isteyenler",
      "Kuruluş aşamasında hatalı kararlar almak istemeyenler",
      "Hangi ürünle ve hangi müşteri kitlesiyle başlaması gerektiğini netleştirmek isteyenler",
    ],
    topicsTitle: "Bu programda hangi konularda birlikte çalışacağız",
    topics: [
      "Marka fikrinin uygulanabilirliği",
      "Moda markası için doğru nişin belirlenmesi",
      "Hedef müşteri ve pazar yönünün tanımlanması",
      "Markanın amacı ve konumlandırması",
      "Hangi ürün kategorisi ile başlanması gerektiği",
      "Fikrin güçlü ve zayıf yönlerinin analizi",
      "Markayı kurmak için gerekli zaman ve bütçe planı",
      "Gerekli olabilecek eğitimler ve gelişim alanları",
      "Markaya özel başlangıç yol haritası",
    ],
    outputsTitle: "Program sonunda elde edeceğin çıktılar",
    outcomes: [
      "Net bir marka yönü",
      "Tanımlanmış bir niş ve hedef müşteri",
      "Fikrinin güçlü ve zayıf yönlerinin analizi",
      "Hangi ürünle başlanması gerektiğine dair netlik",
      "Markayı kurmak için gerekli zaman ve bütçe planı",
      "Uygulanabilir bir başlangıç yol haritası",
    ],
    closing:
      "Bu programın sonunda elinde netleşmiş bir marka fikri ve uygulanabilir bir plan olur. Böylece moda markanı aceleyle değil, bilinçli ve sağlam bir temel üzerine kurabilirsin.",
  },
  "program-2": {
    title: "Strateji + Kurulum",
    description:
      "Bu program, Marka Stratejisi Programı’nda yapılan stratejik çalışmayı da içerir. Strateji netleştirildikten sonra markanın kurulum sürecini birlikte planlar ve hayata geçiririz.",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80",
    audienceTitle: "Kimler için",
    audience: [
      "Marka fikrini artık hayata geçirmek isteyenler",
      "Moda sektöründe deneyimi olmayan fakat kendi markasını kurmak isteyenler",
      "İlk koleksiyonunu nasıl oluşturacağını bilmeyenler",
      "Üretim, atölye ve tedarik süreçlerini nasıl yöneteceğini öğrenmek isteyenler",
      "Ürün seçimi, fiyatlandırma ve satış konularında yön arayanlar",
      "Moda markasını plansız değil, doğru bir sistemle kurmak isteyenler",
    ],
    topicsTitle: "Bu programda hangi konularda birlikte çalışacağız",
    topics: [
      "Marka stratejisinin uygulamaya aktarılması",
      "Ürün kategorisi ve ürün yapısının belirlenmesi",
      "İlk koleksiyonun planlanması",
      "Koleksiyon yapısı ve ürün seçimi",
      "Üretim sürecinin planlanması",
      "Atölye ve üretim süreçleri konusunda yönlendirme",
      "Ürün maliyet hesapları ve fiyatlandırma stratejisi",
      "Üretim ve tedarik planının oluşturulması",
      "Satış kanalları ve satış stratejisinin belirlenmesi",
      "Sosyal medya ve marka iletişim planı",
      "Pazaryerleri konusunda yönlendirme",
      "Markaya özel kurulum yol haritası",
      "Gerçek taleplere dayalı bir niş tanımlamak",
      "Güçlü bir marka stratejisi inşa etmek",
      "Hedef müşteri ve hedef pazar belirlemek",
      "Marka hikayesi ve marka kimliğini oluşturmak",
      "Ürün kategorisini ve ürün yapısını belirlemek",
      "Gerekli durumlarda mevcut atölye ve üretim bağlantıları konusunda yönlendirme sağlamak",
    ],
    outputsTitle: "Program sonunda elde edeceğin çıktılar",
    outcomes: [
      "Net bir marka yönü",
      "Tanımlanmış bir niş ve hedef müşteri",
      "Güçlü bir marka hikayesi ve görsel kimlik",
      "Gerçekçi bir ilk koleksiyon planı",
      "Üretim ve tedarik planı",
      "Üretime hazır sistemler",
      "Maliyet ve fiyatlandırma netliği",
      "Satış kanalları ve satış stratejisi",
      "Lansman aşamasına geçme konusunda güven",
    ],
    closing:
      "Bu programın sonunda elinde uygulanabilir ve gerçekçi bir marka kurulum planı olur. Böylece moda markanı plansız değil, doğru bir sistemle hayata geçirebilirsin.",
  },
  "program-3": {
    title: "Büyüme / Yeniden Yapılandırma",
    description:
      "Bir moda markası kurulduktan sonra en önemli şey doğru yönü bulmak ve büyüme stratejisini oluşturabilmektir. Bu program mevcut markayı analiz ederek daha güçlü bir konuma taşımak için tasarlanmıştır.",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
    audienceTitle: "Kimler için",
    audience: [
      "Halihazırda bir moda veya tekstil markası olanlar",
      "Markasını daha güçlü bir kimliğe kavuşturmak isteyenler",
      "Tanınırlığını ve satışlarını artırmak isteyen markalar",
      "Satış yapan fakat büyüme sağlayamayan markalar",
      "Ürün yapısı zamanla karmaşık hale gelmiş markalar",
      "Ürün gamını sadeleştirmek isteyen markalar",
      "Markasını yeniden konumlandırmak isteyenler",
    ],
    topicsTitle: "Bu programda hangi konularda birlikte çalışacağız",
    topics: [
      "Markanın mevcut durum analizi",
      "Marka konumlandırmasının yeniden değerlendirilmesi",
      "Hedef müşteri ve pazarın netleştirilmesi",
      "Marka hikayesi ve marka kimliğinin güçlendirilmesi",
      "Ürün gamının analiz edilmesi ve sadeleştirilmesi",
      "Güçlü ve satış potansiyeli yüksek ürünlerin belirlenmesi",
      "Koleksiyon mimarisinin yeniden düzenlenmesi",
      "Fiyatlandırma stratejisinin gözden geçirilmesi",
      "Satış kanallarının değerlendirilmesi",
      "Markaya özel büyüme stratejisinin oluşturulması",
    ],
    outputsTitle: "Program sonunda elde edeceğin çıktılar",
    outcomes: [
      "Daha net bir marka kimliği",
      "Sadeleşmiş ve güçlü bir ürün yapısı",
      "Markanın odak noktası",
      "Daha güçlü bir marka hikâyesi",
      "Satış potansiyeli yüksek ürün yapısı",
      "Markaya özel büyüme stratejisi",
      "Tanınırlığı ve satışları artırmaya yönelik net bir plan",
    ],
    closing:
      "Bu programın sonunda marka daha güçlü bir yön ve büyüme potansiyeli kazanır.",
  },
} as const;

export const blogPosts = [
  {
    title: "Tekstil markası kurarken ilk 90 günde neye odaklanmalısınız?",
    excerpt:
      "Marka heyecanını kaybetmeden pazar, ürün ve üretim tarafını dengelemenin pratik çerçevesi.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
    icon: NotebookTabs,
  },
  {
    title: "Atölye ile çalışırken termin krizlerini azaltan 5 sistem",
    excerpt:
      "Teslim tarihi kaçmadan önce görünmeyen riskleri yakalamak için kullandığım kontrol akışları.",
    image:
      "https://images.unsplash.com/photo-1503342394128-c104d54dba01?auto=format&fit=crop&w=900&q=80",
    icon: PackageCheck,
  },
  {
    title: "Sosyal medyada içerik üretirken satış hedefi nasıl korunur?",
    excerpt:
      "Sadece görünür olmak değil, doğru kitleyi satın almaya taşıyan içerik planı nasıl kurulur?",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
    icon: BookOpenText,
  },
];

export const faqs = [
  {
    question: "Bu danışmanlık kimler için uygun?",
    answer:
      "Tekstil sektöründe marka kurmak isteyen girişimciler, mevcut markasını daha sistemli büyütmek isteyenler ve üretim tarafında sıkışan ekipler için uygundur.",
  },
  {
    question: "Görüşmeler online mı yapılıyor?",
    answer:
      "Evet. Ana yapı online ilerliyor. İhtiyaca göre yüz yüze workshop veya ekip oturumları ayrıca planlanabiliyor.",
  },
  {
    question: "Program sonunda elimde ne olacak?",
    answer:
      "Net bir yol haritası, uygulanabilir aksiyon planı, karar almanızı kolaylaştıran şablonlar ve takip edilebilir hedefler olacak.",
  },
  {
    question: "Henüz markam yoksa yine de başlayabilir miyim?",
    answer:
      "Evet. Özellikle sıfırdan başlayanlar için marka fikrini sağlam temele oturtan bir başlangıç kurgusu var.",
  },
];
