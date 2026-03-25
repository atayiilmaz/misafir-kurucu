import { PageIntro } from "@/components/page-intro";
import { FaqItem } from "@/components/faq-item";
import { faqs } from "@/content/site";

export function FaqPage() {
  return (
    <>
      <PageIntro
        eyebrow="Sıkça Sorulan Sorular"
        title="Karar vermeden önce en çok merak edilenler"
        description="Çalışma biçimi, program çıktıları ve başlangıç seviyesiyle ilgili en sık gelen soruları burada topladım."
      />

      <section className="section-shell py-10">
        <div className="space-y-4">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} {...faq} />
          ))}
        </div>
      </section>
    </>
  );
}
