import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardPage, DashboardLayout } from "./app/dashboard";
import RootPage from "./app/page";
import RootLayout from "./app/layout";
import {
  RecordPage,
  RecordPageById,
  RecordPostPage,
} from "./app/dashboard/records";
import { SurveyPage, SurveyResultPage } from "./app/surveys";
import { AuthPage, SignInPage } from "./app/sign-in";
import { MyPagePage } from "./app/dashboard/mypage";
import { CenterPage } from "./app/dashboard/centers";
import { ReportPage } from "./app/reports";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<RootPage />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="records">
            <Route index element={<RecordPage />} />
            <Route path=":recordId" element={<RecordPageById />} />
            <Route path="post" element={<RecordPostPage />} />
          </Route>
          <Route path="centers" element={<CenterPage />} />
          <Route path="mypage" element={<MyPagePage />} />
        </Route>
        <Route path="/surveys/:surveyType">
          <Route index element={<SurveyPage />} />
          <Route path="result" element={<SurveyResultPage />} />
        </Route>
        <Route path="/reports">
          <Route index element={<ReportPage />} />
        </Route>
        <Route path="/sign-in">
          <Route index element={<SignInPage />} />
          <Route path="auth/:provider" element={<AuthPage />} />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}
