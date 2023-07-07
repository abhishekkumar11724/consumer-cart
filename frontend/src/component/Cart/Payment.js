import React, { Fragment, useEffect, useRef } from "react";
import CheckoutSteps from "../Cart/CheckoutSteps";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import { Typography } from "@material-ui/core";
import { useAlert } from "react-alert";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import "./payment.css";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import EventIcon from "@material-ui/icons/Event";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { useNavigate } from "react-router-dom";
// import { createOrder, clearErrors } from "../../actions/orderAction";

const Payment = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const alert = useAlert();
  const payBtn = useRef(null);
  const elements = useElements();
  const stripe = useStripe();

  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);

  const paymentData = {
    amount: Math.round(orderInfo.totalPrice * 100),
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    payBtn.current.disable = true;

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/v1/payment/process",
        paymentData,
        config
      );
      // console.log(data);

      const client_secret = data.client_secret;

      if (!stripe || !elements) return;

      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: user.name,
            email: user.email,
            address: {
              line1: shippingInfo.address,
              city: shippingInfo.city,
              postal_code: shippingInfo.pinCode,
              country: shippingInfo.country,
            },
          },
        },
      });

      if (result.error) {
        payBtn.current.disabled = false;

        alert.error(result.error.message);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          navigate("/success");
        } else {
          alert.error("There's some issue while processing payment");
        }
      }
    } catch (error) {
      console.log(error);
      payBtn.current.disabled = false;
      alert.error(error.response.data.message);
    }
  };

  // useEffect(() => {
  //   if (error) {
  //     alert.error(error);
  //     dispatch(clearErrors());
  //   }
  // }, [dispatch, error, alert]);

  return (
    <Fragment>
      <MetaData title="Payment" />
      <CheckoutSteps activeStep={2} />
      <div className="paymentContainer">
        <form onSubmit={(e) => submitHandler(e)} className="paymentForm">
          <Typography> Card Info</Typography>
          <div>
            <CreditCardIcon />
            <CardNumberElement className="paymentInput" />
          </div>
          <div>
            <EventIcon />
            <CardExpiryElement className="paymentInput" />
          </div>

          <div>
            <VpnKeyIcon />
            <CardCvcElement className="paymentInput" />
          </div>
          <input
            type="submit"
            value={`pay - ₹${orderInfo && orderInfo.totalPrice}`}
            ref={payBtn}
            className="paymentFormBtn"
          />
        </form>
      </div>
    </Fragment>
  );
};

export default Payment;
