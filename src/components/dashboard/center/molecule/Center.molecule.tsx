import Svg from "@/asset/Svg";
import { Center } from "@/interface/Center";
import { cn } from "fast-jsx/util";

export default function CenterMolecule({
  name,
  images,
  location,
  tags,
}: Center) {
  const container = {
    displays: "flex flex-col gap-y-4",
    sizes: "w-[353px] h-[280px] ",
  };
  return (
    <div className={cn(container)}>
      <div className="h-[163px] flex gap-5">
        {images.map((image) => (
          <img
            key={image}
            className="h-[163px] w-[290px] bg-black-5"
            src={image}
          />
        ))}
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold truncate">{name}</div>
          <Svg.Icon.Heart />
        </div>
        <div className="text-sm">{location}</div>
        <div className="flex flex-wrap gap-[6px] mt-5">
          {tags.map((tag) => (
            <div
              key={tag}
              className="text-sm leading-none px-[15px] py-[6px] flex w-auto bg-blue-2 text-blue-5 rounded-[5px]"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
