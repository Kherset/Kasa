import imgBanner1 from "../../images/imgBanner1.png";
import Accommodations from "../components/Accommodations.jsx";
import Banner from "../components/Banner.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

function Home() {
  return (
    <div>
      <Header />
      <Banner imageURL={imgBanner1} children="Chez vous, partout et ailleurs" />
      <Accommodations />
      <Footer />
    </div>
  );
}

export default Home;
