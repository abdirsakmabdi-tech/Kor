import EnginePage from "@/components/EnginePage";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { engines } from "@/data/engines";

const engine = engines.find((item) => item.id === "studio");

export const metadata = {
  title: "Product Studio | KOR Digital",
  description: engine.lead,
};

export default function ProductStudioPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <EnginePage engine={engine} />
      </main>
      <SiteFooter />
    </>
  );
}
