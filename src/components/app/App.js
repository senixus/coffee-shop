import { Route, Switch } from "react-router-dom";
import { Suspense, lazy } from "react";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Spinner from "../spinner/Spinner";
const Home = lazy(() => import("../../pages/Home"));
const Contact = lazy(() => import("../../pages/Contact"));
const Shop = lazy(() => import("../../pages/Shop"));
const CartPage = lazy(() => import("../../pages/Cart"));
const LoginPage = lazy(() => import("../../pages/LoginPage"));
const RegisterPage = lazy(() => import("../../pages/RegisterPage"));
const WishListPage = lazy(() => import("../../pages/WishListPage"));
const Error = lazy(() => import("../error/Error"));

function App() {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
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
      </Suspense>
    </div>
  );
}

export default App;
