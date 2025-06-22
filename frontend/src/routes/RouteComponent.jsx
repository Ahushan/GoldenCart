import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import HelpCenter from "../pages/HelpCenter";
import OrderTracking from "../pages/OrderTracking";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";


const RouteComponent = () => {
  return (
    < div className="select-none">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/order-tracking" element={<OrderTracking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default RouteComponent;
