import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RouteComponent from "./routes/RouteComponent";

function App() {
  return (
    <>
      <RouteComponent />
      <div className="fixed bottom-4 right-4 z-[9999] text-white text-sm font-mono bg-black p-2 rounded shadow-lg">
        <div className="block sm:hidden">
          xs (&lt;640px) — <span className="font-bold">320px</span>
        </div>
        <div className="hidden sm:block md:hidden">
          sm (640px–767px) — <span className="font-bold">640px</span>
        </div>
        <div className="hidden md:block lg:hidden">
          md (768px–1023px) — <span className="font-bold">768px</span>
        </div>
        <div className="hidden lg:block xl:hidden">
          lg (1024px–1279px) — <span className="font-bold">1024px</span>
        </div>
        <div className="hidden xl:block 2xl:hidden">
          xl (1280px–1535px) — <span className="font-bold">1280px</span>
        </div>
        <div className="hidden 2xl:block 3xl:hidden">
          2xl (≥1536px) — <span className="font-bold">1536px</span>
        </div>
        <div className="hidden 3xl:block">
          3xl (≥1800px) — <span className="font-bold">1800px</span>
        </div>
      </div>
    </>
  );
}

export default App;
