import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { type AdminSession } from "@/features/blog/types";

const ADMIN_SESSION_STORAGE_KEY = "misafir-kurucu-admin-session";

interface AdminSessionContextValue {
  session: AdminSession | null;
  setSession: (session: AdminSession) => void;
  clearSession: () => void;
}

const AdminSessionContext = createContext<AdminSessionContextValue | null>(null);

export function AdminSessionProvider({ children }: { children: ReactNode }) {
  const [session, setSessionState] = useState<AdminSession | null>(() => {
    if (typeof window === "undefined") {
      return null;
    }

    const rawValue = window.sessionStorage.getItem(ADMIN_SESSION_STORAGE_KEY);

    if (!rawValue) {
      return null;
    }

    try {
      const parsedSession = JSON.parse(rawValue) as AdminSession;

      if (Date.parse(parsedSession.expiresAt) <= Date.now()) {
        window.sessionStorage.removeItem(ADMIN_SESSION_STORAGE_KEY);
        return null;
      }

      return parsedSession;
    } catch {
      window.sessionStorage.removeItem(ADMIN_SESSION_STORAGE_KEY);
      return null;
    }
  });

  const setSession = useCallback((nextSession: AdminSession) => {
    setSessionState(nextSession);
    window.sessionStorage.setItem(
      ADMIN_SESSION_STORAGE_KEY,
      JSON.stringify(nextSession),
    );
  }, []);

  const clearSession = useCallback(() => {
    setSessionState(null);
    window.sessionStorage.removeItem(ADMIN_SESSION_STORAGE_KEY);
  }, []);

  const value = useMemo(
    () => ({
      session,
      setSession,
      clearSession,
    }),
    [clearSession, session, setSession],
  );

  return (
    <AdminSessionContext.Provider value={value}>
      {children}
    </AdminSessionContext.Provider>
  );
}

export function useAdminSession() {
  const context = useContext(AdminSessionContext);

  if (!context) {
    throw new Error("useAdminSession must be used within AdminSessionProvider");
  }

  return context;
}
