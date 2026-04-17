import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminRouteGuard } from "@/features/admin/admin-route-guard";
import { SiteLayout } from "@/components/site-layout";
import { AboutPage } from "@/pages/about-page";
import { AdminPage } from "@/pages/admin-page";
import { AdminPostEditorPage } from "@/pages/admin-post-editor-page";
import { BlogPage } from "@/pages/blog-page";
import { BlogDetailPage } from "@/pages/blog-detail-page";
import { ConsultationPage } from "@/pages/consultation-page";
import { FaqPage } from "@/pages/faq-page";
import { HomePage } from "@/pages/home-page";
import { NotFoundPage } from "@/pages/not-found-page";
import { ProgramDetailPage } from "@/pages/program-detail-page";
import { ProgramsPage } from "@/pages/programs-page";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/hakkimda" element={<AboutPage />} />
          <Route path="/programlar" element={<ProgramsPage />} />
          <Route path="/programlar/:slug" element={<ProgramDetailPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
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

        <Route path="/admin" element={<AdminPage />} />
        <Route element={<AdminRouteGuard />}>
          <Route path="/admin/posts/new" element={<AdminPostEditorPage />} />
          <Route path="/admin/posts/:id" element={<AdminPostEditorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
