import { useRouteError } from "react-router-dom";
import Header from "../components/Header.jsx";
import Error from "../components/Error.jsx";
import Footer from "../components/Footer.jsx";
import "../components/styles.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <Header />
      <Error />
      <Footer />
    </div>
  );
}
