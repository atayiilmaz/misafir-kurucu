import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAdminSession } from "@/features/admin/admin-session";

export function AdminRouteGuard() {
  const location = useLocation();
  const { session } = useAdminSession();

  if (!session) {
    return <Navigate to="/admin" replace state={{ from: location.pathname }} />;
  }

  return <Outlet />;
}
