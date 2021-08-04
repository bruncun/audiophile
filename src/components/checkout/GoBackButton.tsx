import { useHistory } from "react-router-dom";

function GoBackButton() {
  const history = useHistory();

  function onGoBackClick() {
    history.goBack();
  }

  return (
    <button
      onClick={onGoBackClick}
      type="button"
      data-cy="go-back-button"
      className="text-black-50 d-inline-block text-decoration-none p-0 btn btn-link text-capitalize fs-base ls-0 text-primary-hover"
    >
      Go Back
    </button>
  );
}

export default GoBackButton;
