import { cn } from "fast-jsx/util";
import Header from "./organism/Header.organism";
import Map from "./organism/Map.organism";
import CentersOrganism from "./organism/Centers.organism";
import { useState } from "react";
import { Center } from "@/interface/Center";
export default function CenterPage() {
  const [keyword, setKeyword] = useState<string>("");
  const [selectedCenter, setSelectedCenter] = useState<Center>();
  const container = {
    sizes: "w-screen",
  };
  return (
    <div className={cn(container)}>
      <Header state={[keyword, setKeyword]} />
      <Map center={selectedCenter} />
      <CentersOrganism
        keyword={keyword}
        state={[selectedCenter, setSelectedCenter]}
      />
    </div>
  );
}
