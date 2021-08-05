import { useHistory, useLocation } from "react-router-dom";
import Navbar from "components/shared/navbar/Navbar";
import Footer from "components/shared/Footer";
import { useEffect } from "react";

export function ScrollRestoration(): null {
  const history = useHistory();
  const location = useLocation();

  useEffect(
    function () {
      history.listen(({ pathname }, action) => {
        if (action === "PUSH" && pathname !== location.pathname)
          window.scrollTo(0, 0);
      });
    },
    [location.pathname, history]
  );

  return null;
}

interface AppLayoutProps {
  children: JSX.Element;
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <ScrollRestoration />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default AppLayout;
