import Cart from "../components/cart/Cart";
import ReactHelmet from "../components/helmet/ReactHelmet";
const CartPage = () => {
  return (
    <>
      <ReactHelmet title="Cart" />
      <Cart />
    </>
  );
};

export default CartPage;
