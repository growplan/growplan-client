import { State } from "fast-jsx/interface";
import { cn } from "fast-jsx/util";

export default function Header({ state }: { state: State<string> }) {
  const [keyword, setKeyword] = state;
  const container = {
    positions: "fixed top-0 left-0",
    displays: "flex items-center",
    borders: "border-b-1 border-black-1",
    sizes: "h-[84px] w-full",
    backgrounds: "bg-white",
    paddings: "px-5",
  };
  const inputBox = {
    displays: "flex items-center",
    backgrounds: "bg-black-1",
    texts: "text-black-5",
    sizes: "h-[44px] w-full",
    boundaries: "rounded-full",
    paddings: "px-5",
  };
  return (
    <>
      <div className={cn(container)}>
        <div className={cn(inputBox)}>
          <input
            className="focus:outline-none bg-transparent w-full h-full"
            value={keyword}
            placeholder="발달센터를 검색해 보세요"
            onChange={(e) => setKeyword(e.target.value)}
          />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z"
              stroke="#647693"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22 22L16 16"
              stroke="#647693"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="h-[84px]" />
    </>
  );
}
