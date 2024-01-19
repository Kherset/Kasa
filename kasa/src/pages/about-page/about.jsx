import Header from "../components/Header.jsx";
import Banner from "../components/Banner.jsx";
import imgBanner2 from "../../images/imgBanner2.png";
import DropdownMenu from "../components/DropdownMenu.jsx";
import Footer from "../components/Footer.jsx";

const dropdownContent = {
  1: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
  2: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
  3: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
};

export default function About() {
  return (
    <div>
      <Header />
      <Banner imageURL={imgBanner2} />
      <div className="about-content">
        <DropdownMenu title='Fiabilité' widthDesktop='80%'>
          <span className='dropdown-item'>{dropdownContent[1]}</span>
        </DropdownMenu>
        <DropdownMenu title='Respect' widthDesktop='80%'>
          <span className='dropdown-item'>{dropdownContent[2]}</span>
        </DropdownMenu>
        <DropdownMenu title='Service' widthDesktop='80%'>
          <span className='dropdown-item'>{dropdownContent[2]}</span>
        </DropdownMenu>
        <DropdownMenu title='Sécurité' widthDesktop='80%'>
          <span className='dropdown-item'>{dropdownContent[3]}</span>
        </DropdownMenu>
      </div>
      <Footer />
    </div>
  );
}
