import { useParams } from "react-router-dom";
import accommodations from "../../datas/accommodations.json";
import Carousel from "../components/Carousel.jsx";
import DropdownMenu from "../components/DropdownMenu.jsx";
import Footer from "../components/Footer.jsx";
import HabitationHeader from "../components/HabitationHeader.jsx";
import Header from "../components/Header.jsx";
import "../components/styles.css";

function Habitation() {
  const { id } = useParams();
  const renterFounded = accommodations.find((renter) => renter.id === id);

  return (
    <div>
      <Header />
      <Carousel images={renterFounded.pictures} />
      <div className="habitation-content">
        <HabitationHeader renterFounded={renterFounded} />
        <div className="dropdown-menus">
          <DropdownMenu
            title="Description"
            widthMobile="auto"
            widthDesktop="45%"
          >
            <span className="dropdown-item"> {renterFounded.description} </span>
          </DropdownMenu>
          <DropdownMenu
            title="Equipement"
            widthMobile="auto"
            widthDesktop="45%"
          >
            {renterFounded &&
              renterFounded.equipments.map((equipment, index) => (
                <span key={index} className="dropdown-item">
                  {equipment}
                </span>
              ))}
          </DropdownMenu>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Habitation;
