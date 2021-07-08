import "./HomeLayout.scss";

interface HomeLayoutProps {
  header: React.ReactNode;
  categoryCardList: React.ReactNode;
  zx9SpeakerCard: React.ReactNode;
  zx7SpeakerCard: React.ReactNode;
  yx1ImageCard: React.ReactNode;
  yx1CtaCard: React.ReactNode;
  about: React.ReactNode;
}

function HomeLayout({
  header,
  categoryCardList,
  zx9SpeakerCard,
  zx7SpeakerCard,
  yx1ImageCard,
  yx1CtaCard,
  about,
}: HomeLayoutProps) {
  return (
    <div data-cy="home">
      <div className="bg-dark header-wrapper">{header}</div>
      <div className="container-md">
        <div className="py-5 mt-5">{categoryCardList}</div>
        <div className="py-5">
          <div className="mb-4">{zx9SpeakerCard}</div>
          <div className="mb-4">{zx7SpeakerCard}</div>
          <div className="row">
            <div className="col-md-6 mb-4">{yx1ImageCard}</div>
            <div className="col-md-6 mb-4">{yx1CtaCard}</div>
          </div>
        </div>
        <div className="py-5">{about}</div>
      </div>
    </div>
  );
}

export default HomeLayout;
