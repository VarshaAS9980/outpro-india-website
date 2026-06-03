import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.js';
import PageLoader from './components/PageLoader.js';

const Home = lazy(() => import('./pages/Home.js'));
const About = lazy(() => import('./pages/About.js'));
const Services = lazy(() => import('./pages/Services.js'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail.js'));
const Portfolio = lazy(() => import('./pages/Portfolio.js'));
const PortfolioDetail = lazy(() => import('./pages/PortfolioDetail.js'));
const Testimonials = lazy(() => import('./pages/Testimonials.js'));
const Blog = lazy(() => import('./pages/Blog.js'));
const BlogPost = lazy(() => import('./pages/BlogPost.js'));
const Careers = lazy(() => import('./pages/Careers.js'));
const Partners = lazy(() => import('./pages/Partners.js'));
const Contact = lazy(() => import('./pages/Contact.js'));
const NotFound = lazy(() => import('./pages/NotFound.js'));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<PortfolioDetail />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
