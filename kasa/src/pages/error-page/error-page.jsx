import { useRouteError } from "react-router-dom";
import "./error-page.css";
import Header from "../components/Header.jsx";
import Error from "../components/Error.jsx";
import Footer from "../components/Footer.jsx";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
    <Header />
    <Error errorNumber= {error.status} />
    <Footer />
    </div>
  );
}
