import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';

// FÖRSTA SIDAN

const Events = () => {

    const order = useSelector((state) => { return state.order });

    const history = useHistory();


  return (
    <section>
      <h1>Order</h1>
      {order.map((namesDetail) => {
        return (
          <div className="bindevents" key={namesDetail.id} onClick={() => history.push(`/buy/${namesDetail.id}`)}>
            
            <div className="insidedate">
              <div className="datecolumn">{namesDetail.ticketsdate}</div>
            </div>

            <div className="bindNameCost">
              <h2 className="firstpagenametitles">{namesDetail.name}</h2>
              <p className="firstpagelocation">{namesDetail.location}</p>

              <div className="bindTimeCost">
                <p className="time">
                  {namesDetail.timefrom} - {namesDetail.timeto}
                </p>
                <p className="rightcost">{namesDetail.cost}</p>
              </div>

            </div>

          </div>
        );
      })}
    </section>
  );
};

export default Events;