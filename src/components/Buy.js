import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import { useHistory, useParams } from "react-router-dom";

// ANDRA SIDAN

const Buy = () => {

    const order = useSelector((state) => { return state.order });

    console.log(order)
    

  const { id } = useParams();
  const history = useHistory();




  useEffect(() => {
      order.filter((nameObj) => {
      return nameObj.id === parseInt(id);
    });


  }, []);

  const orders = order[0]

  return (
    <section>
      <div className="buy-wrapper">
        <h3 className="buytitle">You are about to purchase</h3>

        <div className="buyassetswrapper">
          <h2 className="buynametitle">{orders.name}</h2>
          <p className="greendate">
            {orders.date} {orders.timefrom} - {orders.timeto}
          </p>
          <p className="buylocation">@ {orders.location}</p>
          <p className="costbuy">{orders.cost}</p>
        </div>

        <div className="onlyButton">
          <button type="submit" onClick={() => history.push(`/tickets/${orders.id}`)}>Beställ</button>
        </div>

      </div>
    </section>
  );
};

export default Buy;