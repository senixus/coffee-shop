import StripeCheckout from "react-stripe-checkout";
import { selectCartTotalPrice } from "../../redux/reducers/selectors/cartSelector";
import { useSelector, useDispatch } from "react-redux";
import { saveUserOrders } from "../../redux/actions/orders/saveUserOrders";
import { format } from "date-fns";
import toast, { Toaster } from "react-hot-toast";
import { clearCart } from "../../redux/actions/cart/removeFromCart";
import { Link } from "react-router-dom";

const CheckoutButton = () => {
  const publishableKey = "TEST KEY";
  const total = useSelector((state) => selectCartTotalPrice(state.cart));
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const saveOrder = (cart, user, date, orderNo, total) =>
    dispatch(saveUserOrders(cart, user, date, orderNo, total));
  const date = new Date();
  const orderTime = format(date, "MM/dd/yyyy");
  const orderNo = Math.floor(Math.random() * 999999);
  const cart = useSelector((state) => state.cart.cart);
  const totalAmount = total * 100;

  const onToken = (token) => {
    if (token) {
      saveOrder(cart, user.uid, orderTime, orderNo, total);
      toast.success("Payment Success!");
      dispatch(clearCart());
    }
  };

  return (
    <>
      <Toaster />
      {user ? (
        <StripeCheckout
          label="Pay Now"
          name="Coffee Shop"
          billingAddress
          shippingAddress
          description={`Your total is $ ${total.toFixed(2)}`}
          amount={totalAmount}
          panelLabel="Pay Now"
          token={onToken}
          stripeKey={publishableKey}
        />
      ) : (
        <p style={{ fontSize: "1.2rem" }}>
          You must{" "}
          <Link to="/login" style={{ color: "black" }}>
            login
          </Link>{" "}
          to checkout
        </p>
      )}
    </>
  );
};

export default CheckoutButton;
