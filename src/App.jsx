import Home from "./components/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Brands from "./components/Brands";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Home />
      <Brands />
      <Services />
      <Footer />
    </>
  );
}

export default App;
