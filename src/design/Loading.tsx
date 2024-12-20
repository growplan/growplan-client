import { cn } from "fast-jsx/util";

function Content() {
  const container = {
    displays: "flex flex-col items-center gap-y-3.5",
  };
  return (
    <div className={cn(container)}>
      <img
        src="/images/logos/growplan-symbol.png"
        alt="growplan-symbol"
        width={80}
        height={80}
      />
      <div className="text-xl font-bold text-blue-5">Loading...</div>
    </div>
  );
}

function Loading() {
  const container = {
    displays: "flex items-center justify-center",
    sizes: "w-full h-full",
  };
  return (
    <div className={cn(container)}>
      <Content />
    </div>
  );
}

function LoadingScreen() {
  const container = {
    displays: "flex items-center justify-center",
    sizes: "w-screen min-h-screen",
  };
  return (
    <div className={cn(container)}>
      <Content />
    </div>
  );
}
Loading.Screen = LoadingScreen;
export default Loading;
