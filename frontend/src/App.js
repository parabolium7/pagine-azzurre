import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { listProductCategories } from "./actions/productActions";

import Header from "./components/Header";
import Aside from "./components/Aside";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(listProductCategories());
  }, [dispatch]);

  return (
    <div className="grid-container">
      <Header setSidebarIsOpen={setSidebarIsOpen} />

      <Aside
        sidebarIsOpen={sidebarIsOpen}
        setSidebarIsOpen={setSidebarIsOpen}
      />

      <MainContent />

      <Footer />
    </div>
  );
}

export default App;
