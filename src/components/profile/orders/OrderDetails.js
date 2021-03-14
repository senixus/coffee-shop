import Profile from "../../auth/Profile";
import "./order.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails } from "../../../redux/actions/orders/getOrderDetails";
import { useEffect } from "react";

const OrderDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const getOrderDetail = (id) => dispatch(getOrderDetails(id));
  const detail = useSelector((state) => state.orders.orderDetails);
  const { orders } = detail;

  useEffect(() => {
    getOrderDetail(id);
  }, [id]);

  return (
    <Profile>
      <ul className="order-list titles">
        <li className="order-list__item">Product Name</li>
        <li className="order-list__item">Quantity</li>
        <li className="order-list__item">Price</li>
      </ul>
      {orders &&
        orders.order.map((ord) => (
          <ul key={detail.id} className="order-list">
            <li className="order-list__item">{ord.coffeeName}</li>
            <li className="order-list__item">{ord.quantity ?? 1}</li>
            <li className="order-list__item">
              $ {ord.price.toFixed(2) || ord.price}
            </li>
          </ul>
        ))}
      <div class="border"></div>
      <ul className="order-info">
        <li>{orders && orders.time}</li>
        <li>$ {orders && orders.total.toFixed(2)}</li>
      </ul>
    </Profile>
  );
};

export default OrderDetails;
