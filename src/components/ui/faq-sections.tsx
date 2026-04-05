import React from "react";

const App = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "Bu danışmanlık kimler için uygun?",
      answer:
        "Tekstil sektöründe marka kurmak isteyen girişimciler, mevcut markasını daha sistemli büyütmek isteyenler ve üretim tarafında tıkanan ekipler için uygundur.",
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

  return (
    <div className="mx-auto flex max-w-5xl flex-col items-start justify-center gap-10 px-4 md:flex-row md:px-0">
      <img
        className="h-auto w-full max-w-sm rounded-[1.75rem] object-cover shadow-soft"
        src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=830&h=844&auto=format&fit=crop"
        alt="Sıkça sorulan sorular görseli"
      />
      <div className="w-full">
        {/* <p className="section-kicker">Sıkça Sorulan Sorular</p> */}
        <h1 className="font-display text-[2.5rem] leading-[0.95] text-foreground md:text-[3.5rem]">
          Aradığınız cevap burada olabilir
        </h1>
        <p className="mt-3 max-w-xl text-base leading-7 text-muted-foreground">
          Misafir Kurucu danışmanlığıyla ilgili en sık gelen soruları burada
          topladım. Program yapısı, görüşme düzeni ve başlangıç seviyesiyle
          ilgili temel başlıkları hızlıca inceleyebilirsiniz.
        </p>
        {faqs.map((faq, index) => (
          <div
            className="cursor-pointer border-b border-border/80 py-5"
            key={index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-lg font-semibold text-foreground">
                {faq.question}
              </h3>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${
                  openIndex === index ? "rotate-180" : ""
                } shrink-0 transition-all duration-500 ease-in-out`}
              >
                <path
                  d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                  stroke="#3B2E2A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p
              className={`max-w-xl text-sm leading-7 text-muted-foreground transition-all duration-500 ease-in-out ${
                openIndex === index
                  ? "max-h-[300px] translate-y-0 pt-4 opacity-100"
                  : "max-h-0 -translate-y-2 overflow-hidden opacity-0"
              }`}
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
