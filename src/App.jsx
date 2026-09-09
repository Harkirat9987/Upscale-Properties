import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import OurTeam from "./pages/OurTeam";
import Testimonials from "./pages/Testimonials";
import Pricing from "./pages/Pricing";
import FAQs from "./pages/FAQs";
import ContactUs from "./pages/ContactUs";
import ServicesOne from "./pages/ServicesOne";
import ServicesTwo from "./pages/ServicesTwo";
import OurWorkOne from "./pages/OurWorkOne";
import OurWorkTwo from "./pages/OurWorkTwo";
import OurWorkThree from "./pages/OurWorkThree";
import Gallery from "./pages/Gallery";
import SingleProject from "./pages/SingleProject";
import BlogStandard from "./pages/BlogStandard";
import BlogGrid from "./pages/BlogGrid";
import SinglePost from "./pages/SinglePost";
import Shop from "./pages/Shop";
import ProductSingle from "./pages/ProductSingle";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import MyAccount from "./pages/MyAccount";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:city" element={<ProjectDetail />} />
        <Route path="our-team" element={<OurTeam />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="faqs" element={<FAQs />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="services-1" element={<ServicesOne />} />
        <Route path="services-2" element={<ServicesTwo />} />
        <Route path="our-work-1" element={<OurWorkOne />} />
        <Route path="our-work-2" element={<OurWorkTwo />} />
        <Route path="our-work-3" element={<OurWorkThree />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="single-project" element={<SingleProject />} />
        <Route path="blog-standard" element={<BlogStandard />} />
        <Route path="blog-grid" element={<BlogGrid />} />
        <Route path="blog/:slug" element={<SinglePost />} />
        <Route path="shop" element={<Shop />} />
        <Route path="product/:slug" element={<ProductSingle />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="my-account" element={<MyAccount />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
