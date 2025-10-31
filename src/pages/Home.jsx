import Header from "../components/Header";
import Landing from "../components/Landing";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import GalleryPreview from "../components/GalleryPreview";
import Services from "../components/Services.jsx";

export default function Home() {
  return (
    <div>
      <Header />
      <Landing />
      <AboutUs />
      <Services />
      <GalleryPreview />
      <Footer />
    </div>
  );
}
