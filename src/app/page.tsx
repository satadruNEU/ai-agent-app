import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/components/HomePage';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] overflow-hidden">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}