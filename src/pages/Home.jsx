import Hero from "../components/Hero.jsx"
import AboutUs from "../components/AboutUs.jsx"
import Services from "../components/Services.jsx"
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import GoogleReviews from "../components/GoogleReviews.jsx";
import ReviewsForm from "../components/ReviewsForm.jsx";

const Home = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.state]);

  return (
    <>
      <Hero />
      <Services />
      <AboutUs />
      <GoogleReviews />
      <ReviewsForm />
    </>
  )
}

export default Home