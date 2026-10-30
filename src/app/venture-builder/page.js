import EnginePage from "@/components/EnginePage";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { engines } from "@/data/engines";

const engine = engines.find((item) => item.id === "venture");

export const metadata = {
  title: "Venture Builder | KOR Digital",
  description: engine.lead,
};

export default function VentureBuilderPage() {
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
