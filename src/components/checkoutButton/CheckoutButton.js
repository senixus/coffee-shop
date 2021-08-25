import StripeCheckout from "react-stripe-checkout";
import { selectCartTotalPrice } from "../../redux/reducers/selectors/cartSelector";
import { useSelector, useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { clearCart } from "../../redux/actions/cart/removeFromCart";
import { Link } from "react-router-dom";
import React from "react";

const CheckoutButton = () => {
  const publishableKey = process.env.REACT_APP_PAYMENT_KEY;
  const total = useSelector((state) => selectCartTotalPrice(state.cart));
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const onToken = (token) => {
    if (token) {
      toast.success("Payment Success!");
      dispatch(clearCart());
    }
  };

  return (
    <React.Fragment>
      <Toaster />
      {user ? (
        <StripeCheckout
          label="Pay Now"
          name="Coffee Shop"
          billingAddress
          shippingAddress
          description={`Your total is $ ${total?.toFixed(2)}`}
          amount={total * 100}
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
    </React.Fragment>
  );
};

export default CheckoutButton;
