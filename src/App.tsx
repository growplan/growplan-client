import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardPage, DashboardLayout } from "./app/dashboard";
import RootPage from "./app/page";
import RootLayout from "./app/layout";
import { RecordPage } from "./app/dashboard/records";
import { SurveyPage } from "./app/dashboard/surveys";

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
        <Route path="/surveys/:surveyType">
          <Route index element={<SurveyPage />} />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}
