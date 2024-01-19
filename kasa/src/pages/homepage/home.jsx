import Accommodations from "../components/Accommodations.jsx";
import Header from "../components/Header.jsx";
import Banner from "../components/Banner.jsx";
import imgBanner1 from "../../images/imgBanner1.png";
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <div>
      <Header />
      <Banner imageURL={imgBanner1} children='Chez vous, partout et ailleurs' />
      <Accommodations />
      <Footer />
    </div>
  );
}

export default Home;
