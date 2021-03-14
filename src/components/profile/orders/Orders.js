import { getUserOrders } from "../../../redux/actions/orders/getUserOrders";
import Profile from "../../auth/Profile";
import "./order.scss";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  const dispatch = useDispatch();
  const getOrders = (user) => dispatch(getUserOrders(user));
  const orders = useSelector((state) => state.orders.orders);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    getOrders(user.uid);
  }, [user]);

  return (
    <Profile>
      <table className="orders">
        <thead>
          <tr>
            <th>Product</th>
            <th>Date</th>
            <th>Order No</th>
            <th>Price</th>
            <th>See</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order) => (
              <tr key={order.id}>
                <td>{order.order.length} product(s)</td>
                <td>{order.time}</td>
                <td>{order.orderNo}</td>
                <td>${order.total.toFixed(2) || order.total}</td>
                <td>
                  <Link to={`/order-detail/${order.id}`} className="table-btn">
                    see more
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Profile>
  );
};

export default Orders;
