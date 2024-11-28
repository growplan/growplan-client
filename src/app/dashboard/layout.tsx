import Dashboard from "@/components/dashboard";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <Dashboard.Layout>
      <Outlet />
    </Dashboard.Layout>
  );
}
