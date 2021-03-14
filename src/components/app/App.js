import { Route, Switch } from "react-router-dom";
import Home from "../../pages/Home";
import Contact from "../../pages/Contact";
import Shop from "../../pages/Shop";
import Error from "../error/Error";
import CartPage from "../../pages/Cart";
import PrivateRoute from "../privateRoute/PrivateRoute";
import ProfilePage from "../../pages/ProfilePage";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import WishListPage from "../../pages/WishListPage";
import Orders from "../profile/orders/Orders";
import Email from "../profile/update/Email";
import Password from "../profile/update/Password";
import OrderDetails from "../profile/orders/OrderDetails";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/cart" component={CartPage} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <PrivateRoute path="/email" component={Email} />
        <PrivateRoute path="/password" component={Password} />
        <PrivateRoute path="/orders" component={Orders} />
        <PrivateRoute path="/order-detail/:id" component={OrderDetails} />
        <PrivateRoute path="/profile" component={ProfilePage} />
        <PrivateRoute path="/wishlist" component={WishListPage} />
        <Route path="*" component={Error} />
      </Switch>
    </div>
  );
}

export default App;
