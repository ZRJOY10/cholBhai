import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import LoadingSpinner from './components/ui/LoadingSpinner';
import { useLoading } from './hooks/useLoading';
import BlogListPage from './pages/blog/BlogList.page';
import BlogSinglePage from './pages/blog/BlogSingle.page';
import FAQPage from './pages/FAQ.page';
import HomePage from './pages/home/Home.page';

function App() {
  const { isLoading } = useLoading();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/blog" element={<BlogListPage />} />
            <Route path="/blog/:id" element={<BlogSinglePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
