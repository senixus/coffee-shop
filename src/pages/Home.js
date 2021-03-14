import CoffeeProducts from "../components/coffeeProducts/CoffeeProducts";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ImageSection from "../components/imageSection/ImageSection";
import ReactHelmet from "../components/helmet/ReactHelmet";

const Home = () => {
  return (
    <>
      <ReactHelmet title="Home" />
      <Header />
      <ImageSection />
      <CoffeeProducts />
      <Footer />
    </>
  );
};

export default Home;
