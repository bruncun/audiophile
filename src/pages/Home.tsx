import Header from "components/home/Header";
import CategoryList from "components/shared/CategoryList";
import HomeLayout from "components/home/HomeLayout";
import About from "components/shared/about/About";
import Zx9SpeakerCard from "components/home/Zx9SpeakerCard";
import Zx7SpeakerCard from "components/home/Zx7SpeakerCard";
import Yx1ImageCard from "components/home/Yx1ImageCard";
import Yx1CtaCard from "components/home/Yx1CtaCard";

function Home() {
  return (
    <HomeLayout
      header={<Header />}
      categoryList={<CategoryList />}
      zx7SpeakerCard={<Zx7SpeakerCard />}
      zx9SpeakerCard={<Zx9SpeakerCard />}
      yx1CtaCard={<Yx1CtaCard />}
      yx1ImageCard={<Yx1ImageCard />}
      about={<About />}
    />
  );
}

export default Home;
