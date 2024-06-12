import Customers from "@/components/customers";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main className=" text-white leading-relaxed tracking-wide">
      <Hero />
      <Customers />
      <Testimonials />
      <Features />
      <Footer />
    </main>
  );
}
