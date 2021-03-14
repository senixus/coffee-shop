import Footer from "../components/footer/Footer";
import ReactHelmet from "../components/helmet/ReactHelmet";
import Products from "../components/products/Products";

const Shop = () => {
  return (
    <>
      <ReactHelmet title="Shop" />
      <Products />
      <Footer />
    </>
  );
};

export default Shop;
