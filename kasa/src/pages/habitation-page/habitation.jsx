import './habitation.css';
import Header from "../components/Header.jsx";
import Banner from "../components/Banner.jsx";
import Footer from "../components/Footer.jsx";
import DropdownMenu from "../components/DropdownMenu.jsx";
import HabitationHeader from "../components/HabitationHeader.jsx";

function Habitation() {
  return ( <div>
    <Header />
    <Banner />
    <div className='habitation-content'>
    <HabitationHeader />
      <div className='dropdown-menus'>
        <DropdownMenu content='Description'/>
        <DropdownMenu content="Equipement"/>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default Habitation;
