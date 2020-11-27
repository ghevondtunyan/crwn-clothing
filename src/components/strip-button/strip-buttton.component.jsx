import React from "react";
import StripeCheckout from "react-stripe-checkout";
import icon from "../../assets/crown .svg";

const StripCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HrmIKBu3knsTyvtCNfYHceRhHQcReOlcVd4s7d6oO9ieVqqCAi5JT1jC9TXUit6bnbgyvL3GOzew4eHPT5FGP9300V1p4Dql6";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing"
      billingAddress
      shippingAddress
      image={icon}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripCheckoutButton;
