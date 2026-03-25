import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { SiteLayout } from "@/components/site-layout";
import { AboutPage } from "@/pages/about-page";
import { BlogPage } from "@/pages/blog-page";
import { ConsultationPage } from "@/pages/consultation-page";
import { FaqPage } from "@/pages/faq-page";
import { HomePage } from "@/pages/home-page";
import { NotFoundPage } from "@/pages/not-found-page";
import { ProgramDetailPage } from "@/pages/program-detail-page";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/hakkimda" element={<AboutPage />} />
          <Route path="/programlar" element={<Navigate to="/#programlar" replace />} />
          <Route path="/programlar/:slug" element={<ProgramDetailPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route
            path="/sikca-sorulan-sorular"
            element={<FaqPage />}
          />
          <Route
            path="/gorusme-planlayin"
            element={<ConsultationPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
