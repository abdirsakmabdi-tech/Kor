import ContactPage from "@/components/ContactPage";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Contact Us | KOR Digital",
  description: "Get in touch with KOR Digital.",
};

export default function Contact() {
  return (
    <>
      <SiteHeader />
      <main>
        <ContactPage />
      </main>
      <SiteFooter />
    </>
  );
}
