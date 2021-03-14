import StripeCheckout from "react-stripe-checkout";
import { selectCartTotalPrice } from "../../redux/reducers/selectors/cartSelector";
import { useSelector, useDispatch } from "react-redux";
import { saveUserOrders } from "../../redux/actions/orders/saveUserOrders";
import { format } from "date-fns";
import toast, { Toaster } from "react-hot-toast";
import { clearCart } from "../../redux/actions/cart/removeFromCart";

const CheckoutButton = () => {
  const publishableKey =
    "pk_test_51IAyzOGfCP0Fsyu4L2CRNv4iBDrkk41TgXWHVRhViEanoWjEKuwO9KgiR03aPrGC5VfgT5COjUBSZ46t00AY9FWz00QAq3etm6";
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
      toast.success("Order Success!");
      dispatch(clearCart());
    }
  };

  return (
    <>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontSize: "1.2rem",
          },
        }}
      />
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
    </>
  );
};

export default CheckoutButton;
