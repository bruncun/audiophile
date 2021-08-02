function CheckoutForm() {
  return (
    <div className="d-flex align-items-center">
      <div className="flex-shrink-0">
        <img
          src="/assets/checkout/icon-cash-on-delivery.svg"
          alt="Cash on Delivery"
          width="48"
          height="48"
        />
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
