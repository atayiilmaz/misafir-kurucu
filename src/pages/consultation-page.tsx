import { PageIntro } from "@/components/page-intro";

export function ConsultationPage() {
  return (
    <>
      <PageIntro
        eyebrow="Görüşme Planlayın"
        title="Markanız için bir sonraki net adımı birlikte belirleyelim"
        description="Ücretsiz ön görüşmede mevcut durumunuzu, hedefinizi ve hangi programın size daha uygun olduğunu değerlendiriyoruz."
      />

      <section className="section-shell py-10">
        <div className="overflow-hidden rounded-[2rem] border border-border/70 bg-white/85 p-3 shadow-soft md:p-4">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=misafirkurucu%40gmail.com&ctz=Europe%2FIstanbul"
            style={{ border: 0 }}
            width="100%"
            height="720"
            frameBorder="0"
            scrolling="no"
            className="min-h-[720px] w-full rounded-[1.5rem]"
            title="Misafir Kurucu Google Calendar"
          />
        </div>
      </section>
    </>
  );
}
