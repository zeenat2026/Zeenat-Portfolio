
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";


export default function Contact() {
  return (
    <section id="contact" className="bg-base-200 px-4 py-20 sm:px-8 scroll-mt-20 min-h-[calc(100vh-5rem)] flex items-center">
      <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-2">
          <ContactInfo />
        </div>
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}