import "./origins.scss";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrigins } from "../../redux/actions/origins/getOrigins";
import { getCoffeeByOriginId } from "../../redux/actions/coffee/getCoffeeByOriginId";

const Origins = () => {
  const dispatch = useDispatch();
  const getAllOrigin = () => dispatch(getOrigins());
  const origins = useSelector((state) => state.origin.origins);
  const getCoffeeByOrigin = (id) => dispatch(getCoffeeByOriginId(id));

  useEffect(() => {
    getAllOrigin();
  }, []);

  return (
    <section className="origins">
      <h2>Origins</h2>

      <ul className="origins-list">
        {origins &&
          origins.map((origin) => (
            <li
              className="origins-list__item"
              onClick={() => getCoffeeByOrigin(origin.docId)}
              key={origin.id}
            >
              {origin.originName}
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Origins;
