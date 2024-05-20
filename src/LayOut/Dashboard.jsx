import { FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart, FaStreetView,  } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart()
  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-amber-500">
        <ul className="menu p-4">
          <li>
            <NavLink to="/dashboard/userHome">
            <FaHome></FaHome>
                User Home</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
                 <FaCalendar></FaCalendar>
                User Home</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/dashboard/cart">
            <FaShoppingCart></FaShoppingCart>
                My Cart ({cart.length}) </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/dashboard/review">
                <FaStreetView></FaStreetView>
                Add a  Review</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/dashboard/cart">
               <FaList></FaList>
                My Bookings</NavLink>{" "}
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
            <FaHome></FaHome>
                 Home</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/">
              <FaSearch></FaSearch>
                 Menu</NavLink>{" "}
          </li>
        </ul>
      </div>

      {/* dashboard content */}

      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
