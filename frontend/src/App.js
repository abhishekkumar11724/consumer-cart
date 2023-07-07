import "./App.css";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import Home from "./component/Home/Home";
import React from "react";
import Footer from "./component/layout/Footer/Footer";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";
import LoginSignUp from "./component/User/LoginSignUp";

import { useSelector } from "react-redux";
import UserOptions from "./component/layout/Header/UserOptions";
import Profile from "./component/User/Profile";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import { loadUser } from "./actions/userAction";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword";
import Cart from "./component/Cart/Cart";
import store from "./store";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());
  }, []);
  return (
    <Router>
      <Header />

      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
        <Route exact path="/" Component={Home} />

        <Route exact path="/product/:id" Component={ProductDetails} />

        <Route exact path="/products" Component={Products} />

        <Route path="/products/:keyword" Component={Products} />

        <Route exact path="/search" Component={Search} />

        <Route exact path="/login" Component={LoginSignUp} />

        <Route exact path="/cart" Component={Cart} />

        <Route
          path="/account"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/me/update"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <UpdateProfile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/password/update"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <UpdatePassword />
            </ProtectedRoute>
          }
        />

        <Route path="/password/forgot/" Component={ForgotPassword} />
        <Route exact path="/password/reset/:token" Component={ResetPassword} />

        {/* <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/account" element={<Profile />} />
        </Route> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
