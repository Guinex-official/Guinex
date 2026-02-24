import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col overflow-x-hidden" suppressHydrationWarning>
            <Header />
            <Hero />
            <Services />
            <Footer />
        </main>
    );
}
