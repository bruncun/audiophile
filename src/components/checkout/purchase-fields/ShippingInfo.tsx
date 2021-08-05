import Input from "components/checkout/Input";

const ZIPCODE_REGEX = /^\d{5}(?:[- ]?\d{4})?$/;

function ShippingInfo() {
  return (
    <>
      <h6 className="text-primary fw-bold mb-3 fs-7">Shipping Info</h6>
      <div className="mb-4">
        <Input
          id="your-address"
          name="address"
          label="Your Address"
          autocomplete="street-address"
        />
      </div>
      <div className="row gx-3">
        <div className="col-md-6 mb-2">
          <Input
            id="zip-code"
            name="zipCode"
            type="tel"
            label="ZIP Code"
            autocomplete="postal-code"
            pattern={ZIPCODE_REGEX}
          />
        </div>
        <div className="col-md-6 mb-4">
          <Input
            id="city"
            name="city"
            label="City"
            autocomplete="address-level-2"
          />
        </div>
      </div>
      <div className="row mb-4 pb-2">
        <div className="col-md-6 mb-4">
          <Input
            id="country"
            name="country"
            label="Country"
            autocomplete="country-id"
          />
        </div>
      </div>
    </>
  );
}

export default ShippingInfo;
