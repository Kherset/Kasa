import './home.css';
import Accommodations from "../components/Accommodations.jsx";
import Header from "../components/Header.jsx";
import Banner from "../components/Banner.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
  return ( <div>
    <Header />
    <Banner />
    <Accommodations />
    <Footer />
    </div>
  );
}

export default Home;
