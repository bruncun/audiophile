interface CheckoutLayoutProps {
  purchaseForm: React.ReactNode;
  summary: React.ReactNode;
  confirmation: React.ReactNode;
  goBackButton: React.ReactNode;
}

function CheckoutLayout({
  purchaseForm,
  summary,
  confirmation,
  goBackButton,
}: CheckoutLayoutProps) {
  return (
    <div data-cy="checkout">
      {confirmation}
      <div className="container-md pt-xxl-2">
        <main>
          <div className="mt-3 mt-md-5 mb-4 mb-xxl-5 pb-xxl-2 pt-xxl-4">
            {goBackButton}
          </div>
          <div className="row">
            <div className="col-xxl-8 mb-xxl-6 pb-xxl-5">
              <div className="pb-xxl-3">{purchaseForm}</div>
            </div>
            <aside className="col-xxl-4 mb-6 pb-md-4">{summary}</aside>
          </div>
        </main>
      </div>
    </div>
  );
}

export default CheckoutLayout;
