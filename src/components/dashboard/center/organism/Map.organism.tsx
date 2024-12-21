import { Map as KakaoMap, MapMarker } from "react-kakao-maps-sdk";
import { cn } from "fast-jsx/util";
import { Center } from "@/interface/Center";
import { useEffect, useState } from "react";

export default function Map({ center }: { center?: Center }) {
  const [position, setPosition] = useState({ lat: 37.5665, lng: 126.978 });
  const container = {
    positions: "fixed top-[84px] left-0",
    sizes: "w-screen h-[200px] ",
  };
  useEffect(() => {
    if (!window.kakao) return;
    if (!center) return;
    const geocoder = new window.kakao.maps.services.Geocoder();
    geocoder.addressSearch(center.location, (result, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const { y: lat, x: lng } = result[0];
        setPosition({ lat: parseFloat(lat), lng: parseFloat(lng) }); // 좌표 업데이트
      } else {
        console.error("주소를 변환할 수 없습니다.");
      }
    });
  }, [center]);

  return (
    <>
      <div className={cn(container)}>
        <div className="relative w-full h-full">
          <KakaoMap center={position} style={{ width: "100%", height: "100%" }}>
            <MapMarker position={position}></MapMarker>
          </KakaoMap>
        </div>
      </div>
      <div className="w-[393px] h-[200px]" />
    </>
  );
}
