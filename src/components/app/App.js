import { Route, Switch } from "react-router-dom";
import Home from "../../pages/Home";
import Contact from "../../pages/Contact";
import Shop from "../../pages/Shop";
import Error from "../error/Error";
import CartPage from "../../pages/Cart";
import PrivateRoute from "../privateRoute/PrivateRoute";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import WishListPage from "../../pages/WishListPage";

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
        <PrivateRoute path="/wishlist" component={WishListPage} />
        <Route path="*" component={Error} />
      </Switch>
    </div>
  );
}

export default App;
