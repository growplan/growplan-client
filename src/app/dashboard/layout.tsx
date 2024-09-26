import Dashboard from "@/components/dashboard";
import { ReactNode } from "react";
export default function Layout({ children }: { children: ReactNode }) {
  return <Dashboard.Layout>{children}</Dashboard.Layout>;
}
