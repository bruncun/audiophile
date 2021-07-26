import Input from "./Input";

const EMAIL_REGEX = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

const PHONE_REGEX = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

function BillingDetails() {
  return (
    <>
      <h6 className="text-primary fw-bold mb-3 fs-7">Billing Details</h6>
      <div className="row gx-3">
        <div className="col-md-6 mb-4">
          <Input name="name" label="Name" autofocus />
        </div>
        <div className="col-md-6 mb-4">
          <Input
            type="email"
            name="email"
            label="Email Address"
            pattern={EMAIL_REGEX}
          />
        </div>
      </div>
      <div className="row mb-4 pb-2">
        <div className="col-md-6 mb-md-4">
          <Input
            type="tel"
            name="phoneNumber"
            label="Phone Number"
            pattern={PHONE_REGEX}
          />
        </div>
      </div>
    </>
  );
}

export default BillingDetails;
