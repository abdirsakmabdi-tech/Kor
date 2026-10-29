import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import WorkPage from "@/components/WorkPage";

export const metadata = {
  title: "Our Work | KOR Digital",
  description: "Explore some of the work from KOR Digital.",
};

export default function Work() {
  return (
    <>
      <SiteHeader />
      <main>
        <WorkPage />
      </main>
      <SiteFooter />
    </>
  );
}
