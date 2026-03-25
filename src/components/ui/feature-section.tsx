import { motion } from "framer-motion";
import {
  Bell,
  FileBarChart,
  Factory,
  Ruler,
  Share2,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const tasks = [
  {
    title: "Koleksiyon planı",
    subtitle: "Sezona uygun ürün kurgusu ve fiyatlandırma",
    icon: <Ruler className="h-4 w-4" />,
  },
  {
    title: "Üretim adımları",
    subtitle: "Atölye, termin ve kalite takip akışı",
    icon: <Factory className="h-4 w-4" />,
  },
  {
    title: "Ekip yapılanması",
    subtitle: "Doğru görev dağılımı ve rol tanımları",
    icon: <Users className="h-4 w-4" />,
  },
  {
    title: "İçerik akışı",
    subtitle: "Sosyal medya ile marka hikayesini büyütme",
    icon: <Share2 className="h-4 w-4" />,
  },
  {
    title: "Satış dashboard'u",
    subtitle: "Kârlılık, stok ve sipariş takibi",
    icon: <FileBarChart className="h-4 w-4" />,
  },
  {
    title: "Kritik uyarılar",
    subtitle: "Termin ve tedarik risklerine erken müdahale",
    icon: <Bell className="h-4 w-4" />,
  },
];

export default function FeatureSection() {
  return (
    <section className="section-shell py-20" id="hakkimda">
      <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="relative w-full max-w-md">
          <Card className="overflow-hidden bg-white/80">
            <CardContent className="relative h-[360px] overflow-hidden p-0">
              <motion.div
                className="absolute inset-x-0 flex flex-col gap-2"
                animate={{ y: ["0%", "-50%"] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 15,
                    ease: "linear" as const,
                  }}
              >
                {[...tasks, ...tasks].map((task, index) => (
                  <div
                    key={`${task.title}-${index}`}
                    className="flex items-center gap-4 border-b border-border/70 px-5 py-4"
                  >
                    <div className="h-12 w-12 rounded-2xl bg-muted" />
                    <div className="flex-1">
                      <p className="font-semibold">{task.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {task.subtitle}
                      </p>
                    </div>
                    <span className="text-primary">{task.icon}</span>
                  </div>
                ))}
              </motion.div>

              <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-background via-background/80 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background via-background/80 to-transparent" />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Badge variant="secondary">Hakkımda</Badge>
          <h2 className="font-display text-5xl leading-none">
            Sahadaki üretim deneyimini, girişimcinin diline çeviren mentorluk
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
            16 yılı aşkın tekstil geçmişim boyunca koleksiyon hazırlama,
            üretim, tedarik, marka konumlandırma ve satış tarafında aktif
            çalıştım. Bugün sosyal medyada içerik üretirken aynı zamanda
            tekstilde kendi markasını kurmak isteyen girişimcilere daha net,
            ölçülebilir ve uygulanabilir bir yol sunuyorum.
          </p>
          <div className="flex flex-wrap gap-3">
            <Badge>Marka Kurulumu</Badge>
            <Badge>Üretim Planlama</Badge>
            <Badge>Satış Stratejisi</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
