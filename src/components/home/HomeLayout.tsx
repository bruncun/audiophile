import "./HomeLayout.scss";

interface HomeLayoutProps {
  homeHeader: React.ReactNode;
  categoryList: React.ReactNode;
  zx9SpeakerCard: React.ReactNode;
  zx7SpeakerCard: React.ReactNode;
  yx1Image: React.ReactNode;
  yx1CtaCard: React.ReactNode;
  about: React.ReactNode;
}

function HomeLayout({
  homeHeader,
  categoryList,
  zx9SpeakerCard,
  zx7SpeakerCard,
  yx1Image,
  yx1CtaCard,
  about,
}: HomeLayoutProps) {
  return (
    <div data-cy="home" className="pt-6">
      <header className="home-header-wrapper home-header">{homeHeader}</header>
      <main className="container-md mt-5 pt-1 mt-md-6 pt-md-2 pt-xxl-4">
        <nav className="mt-3 mb-6 pb-4 pt-md-1 pb-md-0 mt-xxl-4 pb-xxl-4">
          {categoryList}
        </nav>
        <div className="pb-5 pb-md-4" aria-label="more-featured-products">
          <div className="mb-4 pb-md-2">{zx9SpeakerCard}</div>
          <div className="mb-4 pb-md-2">{zx7SpeakerCard}</div>
          <div className="row gx-md-3">
            <div className="col-md-6 mb-4">{yx1Image}</div>
            <div className="col-md-6 mb-4">{yx1CtaCard}</div>
          </div>
        </div>
        <div className="pt-5 pb-4 pb-md-0 mb-6 mt-xxl-4 pb-xxl-4">{about}</div>
      </main>
    </div>
  );
}

export default HomeLayout;
