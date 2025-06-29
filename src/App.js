import BlogSection from './components/BlogSection';
import CookieNotice from './components/CookieNotice';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Newsletter from './components/Newsletter';
import LoadingSpinner from './components/ui/LoadingSpinner';
import VehicleTypes from './components/VehicleTypes';
import { useLoading } from './hooks/useLoading';

function App() {
  const { isLoading } = useLoading();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <VehicleTypes />
        <BlogSection />
        <Newsletter />
      </main>
      <Footer />
      <CookieNotice />
    </div>
  );
}

export default App;
