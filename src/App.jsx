import { Outlet } from "react-router-dom";
import { Header, Footer, ScrollToTop } from "./components";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
