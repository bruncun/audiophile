interface CheckoutLayoutProps {
  checkoutForm: React.ReactNode;
  checkoutSummary: React.ReactNode;
  checkoutConfirmation: React.ReactNode;
  goBackButton: React.ReactNode;
}

function CheckoutLayout({
  checkoutForm,
  checkoutSummary,
  checkoutConfirmation,
  goBackButton,
}: CheckoutLayoutProps) {
  return (
    <div data-cy="checkout">
      {checkoutConfirmation}
      <div className="container-md pt-xxl-2">
        <div className="mt-3 mt-md-5 mb-4 mb-xxl-5 pb-xxl-2 pt-xxl-4">
          {goBackButton}
        </div>
        <div className="row">
          <div className="col-lg-8 mb-xxl-6 pb-xxl-5">
            <div className="pb-xxl-3">{checkoutForm}</div>
          </div>
          <div className="col-lg-4 mb-6 pb-md-4">{checkoutSummary}</div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutLayout;