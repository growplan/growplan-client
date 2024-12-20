import { cn } from "fast-jsx/util";

function Content() {
  return <div>Loading...</div>;
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
