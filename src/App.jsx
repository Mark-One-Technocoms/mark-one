import { Outlet } from "react-router-dom";
import { Header, Footer, ScrollToTop } from "./components";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <div className="max-w-[1920px] mt-12 sm:mt-16 mx-auto px-4 md:px-6 lg:px-12 xl:px-24">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
