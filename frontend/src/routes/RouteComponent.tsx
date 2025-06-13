import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import HelpCenter from "../pages/HelpCenter";
import OrderTracking from "../pages/OrderTracking";
import Fashoin from "../pages/NavPages/Fashion";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Men from "../pages/NavPages/Men";
import Women from "../pages/NavPages/Women";
import Childern from "../pages/NavPages/Childern";

const RouteComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/order-tracking" element={<OrderTracking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/fashions" element={<Fashoin />} />
        <Route path="/mens" element={<Men />} />
        <Route path="/women" element={<Women />} />

        <Route path="/childern" element={<Childern />} />
      </Routes>
    </>
  );
};

export default RouteComponent;
