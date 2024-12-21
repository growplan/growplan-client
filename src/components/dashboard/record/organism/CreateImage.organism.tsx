import { State } from "fast-jsx/interface";
import { cn } from "fast-jsx/util";
import { ChangeEvent, useRef, useState } from "react";

interface CreateImageProps {
  state: State<File[]>;
}
export default function CreateImage({ state }: CreateImageProps) {
  const [files, setFiles] = state;
  const container = {
    displays: "flex flex-col",
    sizes: "w-full",
  };

  return (
    <div className={cn(container)}>
      <div className="flex items-center gap-x-1">
        <div className="text-lg font-bold">사진/영상 추가</div>
        <div className="text-sm text-black-5">(최대 5개까지)</div>
      </div>
      <div className="flex gap-x-3.5 h-[234px] w-full mt-4">
        <ImageBox state={[files, setFiles]} />
        {files.map((file, index) => (
          <ImageBox key={file.name + index} state={[files, setFiles]} />
        ))}
      </div>
    </div>
  );
}

interface ImageBoxProps {
  state: State<File[]>;
}
function ImageBox({ state }: ImageBoxProps) {
  const ref = useRef<HTMLInputElement>(null);
  const [files, setFiles] = state;
  const [selectedImageDisplay, setSelectedImageDisplay] = useState<
    string | ArrayBuffer | null
  >(null);
  const container = {
    sizes: "w-[113px] h-[112px]",
    boundaries: "rounded-[5px] overflow-hidden",
  };
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFiles([...files, file]);
        setSelectedImageDisplay(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div
      onClick={() => {
        if (!selectedImageDisplay) ref.current?.click();
      }}
      className={cn(container)}
    >
      {selectedImageDisplay ? (
        <img
          src={selectedImageDisplay as string}
          alt="image"
          className="w-full h-full object-cover"
        />
      ) : files.length < 5 ? (
        <div className="flex justify-center items-center w-full h-full bg-black-2">
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.54688 0.15625H10.4375V15.75H6.54688V0.15625ZM0.6875 6.01562H16.3125V9.90625H0.6875V6.01562Z"
              fill="#8393AD"
            />
          </svg>
        </div>
      ) : null}
      <input
        ref={ref}
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />
    </div>
  );
}
