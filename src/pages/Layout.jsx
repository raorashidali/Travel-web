import React from 'react'
import Navebar from '../commponents/Navbar/Navebar'
import {Outlet} from "react-router-dom"
import Footer from '../commponents/Footer/Footer';
import Popup from '../commponents/Popup/Popup';
function Layout() {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      <Navebar handleOrderPopup={handleOrderPopup}/>
      <Outlet/>
      <Footer/>
      <Popup oderPopup={orderPopup} setoderPopup={setOrderPopup}/>
    </>
  );
};

export default Layout
