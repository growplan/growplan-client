import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Loading } from "fast-jsx";

export default function MeasurePage() {
  const location = useLocation();
  const router = useNavigate();
  useEffect(() => {
    if (location.pathname !== "/dashboard") {
      setTimeout(() => {
        alert("서비스 준비 중입니다.");
        setTimeout(() => {
          router("/");
        });
      }, 1000);
    }
  }, []);
  return <Loading.Spinner />;
}
