import FluidAnimation, { defaultConfig } from "../../components/FluidAnimation";

export default function Home() {
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 fluid-animation bg-red">
      <FluidAnimation config={defaultConfig} />
    </div>
  );
}
