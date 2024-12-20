import { Button } from "fast-jsx";
import { cn } from "fast-jsx/util";
import { useNavigate } from "react-router-dom";

export default function ResultButtonContainer() {
  const router = useNavigate();
  const container = {
    displays: "flex flex-col gap-y-3",
    paddings: "px-[20px] pt-[56px]",
  };
  const buttonStyle = {
    displays: "flex gap-x-1 justify-center items-center",
    sizes: "w-full h-[80px]",
    fonts: "text-black-8",
    backgrounds: "bg-blue-1",
    boundaries: "rounded-[10px]",
  };
  return (
    <div className={cn(container)}>
      <div className="flex gap-[11px]">
        <button
          className={cn(buttonStyle)}
          onClick={() => router("/dashboard/records")}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 19.497C3 20.6016 3.89543 21.497 5 21.497H19.46C20.5646 21.497 21.46 20.6016 21.46 19.497V5C21.46 3.89543 20.5646 3 19.46 3H5C3.89543 3 3 3.89543 3 5V19.497Z"
              fill="#699BFF"
            />
            <path
              d="M12.6291 8.71438L15.3756 11.4609L17.09 9.74649L14.3435 7L12.6291 8.71438Z"
              fill="#292E3A"
            />
            <path
              d="M7 14.3443L7.00237 17.0876L9.7457 17.0908L14.5358 12.3007L11.7901 9.55416L7 14.3443Z"
              fill="#292E3A"
            />
          </svg>
          <div>자세한 기록 남기기</div>
        </button>
        <button
          className={cn(buttonStyle)}
          onClick={() => router("/dashboard/centers")}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 19.497C3 20.6016 3.89543 21.497 5 21.497H19.46C20.5646 21.497 21.46 20.6016 21.46 19.497V5C21.46 3.89543 20.5646 3 19.46 3H5C3.89543 3 3 3.89543 3 5V19.497Z"
              fill="#699BFF"
            />
            <path
              d="M12.6291 8.71438L15.3756 11.4609L17.09 9.74649L14.3435 7L12.6291 8.71438Z"
              fill="#292E3A"
            />
            <path
              d="M7 14.3443L7.00237 17.0876L9.7457 17.0908L14.5358 12.3007L11.7901 9.55416L7 14.3443Z"
              fill="#292E3A"
            />
          </svg>
          <div>센터 확인하기</div>
        </button>
      </div>
      <Button
        title="홈으로 돌아가기"
        onClick={() => router("/dashboard")}
        option={{
          width: "w-full",
          height: "h-[60px]",
          background: "bg-blue-5",
          textColor: "text-white",
          font: "text-lg",
          boundary: "rounded-[8px]",
        }}
      />
    </div>
  );
}
