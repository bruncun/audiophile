import cashOnDelivery from "assets/checkout/icon-cash-on-delivery.svg";

function CheckoutForm() {
  return (
    <div className="d-flex align-items-center">
      <div className="flex-shrink-0">
        <img src={cashOnDelivery} alt="Cash on Delivery" />
      </div>
      <div className="flex-grow-1 ms-4">
        <p className="text-black-50 mb-0">
          The ‘Cash on Delivery’ option enables you to pay in cash when our
          delivery courier arrives at your residence. Just make sure your
          address is correct so that your order will not be cancelled.
        </p>
      </div>
    </div>
  );
}

export default CheckoutForm;
