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
      { label: "Program 1 · Marka Başlangıcı", href: "/programlar/program-1" },
      { label: "Program 2 · Üretim Planı", href: "/programlar/program-2" },
      {
        label: "Program 3 · Lansman Mentorluğu",
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
    title: "Program 1",
    caption: "Tekstil markasını sıfırdan kurmak isteyenler için başlangıç programı.",
    imageUrl:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Program 2",
    caption:
      "Üretim tarafını kontrol altına almak, maliyeti ve terminleri netleştirmek isteyen markalar için.",
    imageUrl:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Program 3",
    caption:
      "Lansman, ilk satışlar ve içerik planını birlikte yürütmek isteyen girişimciler için yoğun mentorluk.",
    imageUrl:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "Atölye",
    caption:
      "Ekip içi eğitim, kurum içi workshop ve özel oturumlar için ayrı yapılandırılmış format.",
    imageUrl:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
  },
];

export const plans = [
  {
    title: "Program 1",
    price: "4 Hafta",
    priceDescription: "Marka Başlangıcı",
    description:
      "Yeni başlayan girişimciler için marka kimliği, ürün grubu ve başlangıç üretim planını netleştiren temel paket.",
    features: [
      "Hedef kitle ve konumlandırma",
      "Mini koleksiyon kurgusu",
      "Fiyat ve maliyet temeli",
      "İlk aksiyon planı",
    ],
    buttonText: "Programı İncele",
    href: "/programlar/program-1",
    imageSrc:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=400&q=80",
    imageAlt: "Program 1",
  },
  {
    title: "Program 2",
    price: "6 Hafta",
    priceDescription: "Üretim Planı",
    description:
      "Üretim akışını kurmak, tedarikçileri yönetmek ve operasyonu kontrol altına almak isteyen markalar için.",
    features: [
      "Numune ve termin yönetimi",
      "Atölye iletişim planı",
      "Kalite kontrol check-list'i",
      "Stok ve sipariş akışı",
    ],
    buttonText: "Programı İncele",
    href: "/programlar/program-2",
    imageSrc:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=400&q=80",
    imageAlt: "Program 2",
    highlight: true,
  },
  {
    title: "Program 3",
    price: "8 Hafta",
    priceDescription: "Lansman Mentorluğu",
    description:
      "Marka hazırlığını lansman ve satış süreciyle bağlayan, içerik ve satış akışını birlikte kurduğumuz yoğun çalışma.",
    features: [
      "Lansman takvimi",
      "İçerik ve teklif dili",
      "Satış hedefleri ve takip",
      "Canlı geri bildirim oturumları",
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
    title: "Program 1 · Marka Başlangıcı",
    description:
      "Fikir aşamasındaki tekstil girişimcileri için ilk ürün, hedef kitle, konumlandırma ve başlangıç planını netleştiren yapı.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
    outcomes: [
      "Net bir marka çerçevesi",
      "İlk koleksiyon karar listesi",
      "Maliyet ve fiyat temel tablosu",
      "İlk 30 gün eylem planı",
    ],
  },
  "program-2": {
    title: "Program 2 · Üretim Planı",
    description:
      "Numune, termin, atölye ve kalite tarafında dağınık ilerleyen süreçleri ölçülebilir hale getirir.",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80",
    outcomes: [
      "Üretim akış haritası",
      "Tedarikçi ve atölye iletişim sistemi",
      "Kontrol listeleri",
      "Operasyonel risk azaltma planı",
    ],
  },
  "program-3": {
    title: "Program 3 · Lansman Mentorluğu",
    description:
      "İçerik üretimi, teklif dili ve satış başlangıcını tek takvimde toplayan yoğun mentorluk programı.",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
    outcomes: [
      "Lansman haftası takvimi",
      "İçerik ve satış mesajı eşleşmesi",
      "İlk satış hedefleri",
      "Canlı geri bildirim döngüsü",
    ],
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
