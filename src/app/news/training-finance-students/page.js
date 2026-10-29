import NewsStory from "@/components/NewsStory";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Training finance students how to use AI | KOR Digital",
  description:
    "KOR trained a group of finance students from EAU-Garowe on how to use AI.",
};

export default function TrainingFinanceStudentsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <NewsStory />
      </main>
      <SiteFooter />
    </>
  );
}
