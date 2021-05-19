import React, { useEffect, useState } from "react";
import OrderItems from "./OrderItems";
import "./OrderSummary.css";

const OrderSummary = () => {
  const [Order, setOrder] = useState({});

  let { restaurant, items = [], user } = Order;

  useEffect(() => {
    fetch("http://resturant243.herokuapp.com/orderDetails")
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);

  const getTotalIteam = items.reduce(
    (accumulator, current) => {
      return accumulator + Number(current.quantity);
    },

    0
  );
  const getTotalPrice = items.reduce(
    (accumulator, current) => {
      return accumulator + Number(current.price);
    },

    0
  );
  const payableTotal = getTotalPrice + (getTotalPrice / 100) * 2.5;

  return (
    <>
      <div id="user-info">
        <div className="container p-3 pt-4">
          <div className="main-body">
            <div className="row gutters-sm">
              <div className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body m-2">
                    <div>
                      <h4 className="text-primary">Restaurant Details:</h4>
                      <p>
                        <strong>Name </strong>:{restaurant?.name}
                      </p>
                      <p>
                        <strong>Address </strong>:{restaurant?.street},{" "}
                        {restaurant?.city}, {restaurant?.state}-
                        {restaurant?.zipcode}
                      </p>
                    </div>
                    <hr />
                    <div>
                      <h4 className="text-primary">Customer Details: </h4>
                      <p>
                        <strong>Name </strong>:{user?.name} ;{" "}
                        <strong>ID </strong> : {user?.id}
                      </p>
                      <p>
                        <strong>phone </strong>:{user?.phone}
                      </p>
                      <p>
                        <strong>Address </strong>:{user?.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body m-2">
                    <h4 className="text-primary">Order Items</h4>
                    <hr />

                    {items?.map((iteam) => (
                      <OrderItems iteam={iteam} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body m-2">
                    <h4 className="text-primary">Order Payment</h4>

                    <div>
                      <p className="d-flex justify-content-between">
                        <strong>Total Items </strong>: {getTotalIteam} pcs
                      </p>
                      <p className="d-flex justify-content-between">
                        <strong>Total Price </strong>:{getTotalPrice}&nbsp; INR
                      </p>
                      <p className="d-flex justify-content-between">
                        <strong>Tax : &nbsp;</strong> 2.5%
                      </p>
                      <hr />
                      <p className="d-flex justify-content-between">
                        <strong>Payable Total : &nbsp;</strong> {payableTotal}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
