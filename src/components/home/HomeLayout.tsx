import "./HomeLayout.scss";

interface HomeLayoutProps {
  header: React.ReactNode;
  categoryList: React.ReactNode;
  zx9SpeakerCard: React.ReactNode;
  zx7SpeakerCard: React.ReactNode;
  yx1ImageCard: React.ReactNode;
  yx1CtaCard: React.ReactNode;
  about: React.ReactNode;
}

function HomeLayout({
  header,
  categoryList,
  zx9SpeakerCard,
  zx7SpeakerCard,
  yx1ImageCard,
  yx1CtaCard,
  about,
}: HomeLayoutProps) {
  return (
    <div data-cy="home">
      <div className="header-wrapper header">{header}</div>
      <div className="container-md">
        <div className="py-5 my-4 pt-md-6 mt-md-4 mb-md-0">{categoryList}</div>
        <div className="py-5">
          <div className="mb-4 pb-md-2">{zx9SpeakerCard}</div>
          <div className="mb-4 pb-md-2">{zx7SpeakerCard}</div>
          <div className="row gx-md-3">
            <div className="col-md-6 mb-4">{yx1ImageCard}</div>
            <div className="col-md-6 mb-4">{yx1CtaCard}</div>
          </div>
        </div>
        <div className="pt-5 pb-6 mb-4">{about}</div>
      </div>
    </div>
  );
}

export default HomeLayout;
