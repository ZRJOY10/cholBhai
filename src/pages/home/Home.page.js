import BlogSection from '../../components/BlogSection';
import CampusServices from '../../components/CampusServices';
import FAQSection from '../../components/FAQSection';
import Hero from '../../components/Hero';
import HowItWorks from '../../components/HowItWorks';
import Newsletter from '../../components/Newsletter';
import RideSmarter from '../../components/RideSmarter';

const HomePage = () => {
  return (
    <>
      <Hero />
      <RideSmarter />
      <CampusServices />
      <HowItWorks />
      <BlogSection />
      <FAQSection />
      <Newsletter />
    </>
  );
};

export default HomePage;
