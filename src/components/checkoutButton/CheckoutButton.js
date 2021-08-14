import StripeCheckout from "react-stripe-checkout";
import { selectCartTotalPrice } from "../../redux/reducers/selectors/cartSelector";
import { useSelector, useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { clearCart } from "../../redux/actions/cart/removeFromCart";
import { Link } from "react-router-dom";

const CheckoutButton = () => {
  const publishableKey = "KEY";
  const total = useSelector((state) => selectCartTotalPrice(state.cart));
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const totalAmount = total * 100;

  const onToken = (token) => {
    if (token) {
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
          You must
          <Link to="/login" style={{ color: "black", margin: ".5rem" }}>
            login
          </Link>
          to checkout
        </p>
      )}
    </>
  );
};

export default CheckoutButton;
