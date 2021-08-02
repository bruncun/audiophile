import HomeHeader from "components/home/HomeHeader";
import CategoryList from "components/shared/CategoryList";
import HomeLayout from "components/home/HomeLayout";
import About from "components/shared/About";
import Zx9SpeakerCard from "components/home/Zx9SpeakerCard";
import Zx7SpeakerCard from "components/home/Zx7SpeakerCard";
import Yx1Image from "components/home/Yx1Image";
import Yx1CtaCard from "components/home/Yx1CtaCard";

function Home() {
  return (
    <HomeLayout
      homeHeader={<HomeHeader />}
      categoryList={<CategoryList />}
      zx7SpeakerCard={<Zx7SpeakerCard />}
      zx9SpeakerCard={<Zx9SpeakerCard />}
      yx1CtaCard={<Yx1CtaCard />}
      yx1Image={<Yx1Image />}
      about={<About />}
    />
  );
}

export default Home;
