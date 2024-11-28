import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardPage, DashboardLayout } from "./app/dashboard";
import RootPage from "./app/page";
import RootLayout from "./app/layout";
import { RecordPage } from "./app/dashboard/records";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<RootPage />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="records" element={<RecordPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
