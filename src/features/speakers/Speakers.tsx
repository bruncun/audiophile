import SpeakersList from "./SpeakersList";
import Category from "../shared/Category";

function Speakers() {
  return <Category name="speakers" productList={<SpeakersList />} />;
}

export default Speakers;
