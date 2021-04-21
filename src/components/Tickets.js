import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

// TREDJE SIDAN

const Tickets = () => {


    const order = useSelector((state) => { return state.order });

    const { id } = useParams();



  useEffect(() => {
    order.filter((nameObj) => {
      return nameObj.id === parseInt(id);
    });


  }, []);

  const orders = order[0]

  return (
    <section>
      <h3 className="ticket-header">Thank you for ordering!</h3>

      <div className="ticket-wrapper">

        <div className="inside-ticket-wrapper">
          <span>What</span>
          <h2 className="ticket-name">{orders.name}</h2>
          <p className="dots"></p>
        </div>

        <div className="inside-second-wrapper">
          <span>Where</span>
          <p className="ticket-location">{orders.location}</p>
          <p className="dots"></p>
        </div>

        <div className="third-ticket-wrapper">
          <div className="date-wrapper">
            <span>When</span>
            <p className="datetimeinfo">{orders.date}</p>
          </div>

          <div className="from-time-wrapper">
            <span>From</span>
            <p className="datetimeinfo">{orders.timefrom}</p>
          </div>

          <div className="to-time-wrapper">
            <span>To</span>
            <p className="datetimeinfo">{orders.timeto}</p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Tickets;