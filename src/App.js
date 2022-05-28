import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./pages/Access/Login";
import SignUp from "./pages/Access/SignUp";
import Dashboard from "./Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import Purchase from "./pages/Purchase/Purchase";
import Footer from "./pages/Shared/Footer";
import Navbar from "./pages/Shared/Navbar";
import NotFound from "./pages/Shared/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyOrders from "./Dashboard/MyOrders";
import AddReview from "./Dashboard/AddReview";
import MyProfile from "./Dashboard/MyProfile";
import Users from "./Dashboard/Users";
import Payment from "./Dashboard/Payment";
import RequireAuth from "./pages/Access/RequireAuth";
import Blogs from "./pages/Home/Blogs";
import MyPortfolio from "./pages/Home/MyPortfolio";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="signup" element={<SignUp></SignUp>}></Route>
        <Route path="blogs" element={<Blogs></Blogs>}></Route>
        <Route path="myPortfolio" element={<MyPortfolio></MyPortfolio>}></Route>
        <Route
          path="purchase/:id"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route path="dashboard" element={<Dashboard></Dashboard>}>
          <Route path="myOrders" element={<MyOrders></MyOrders>}></Route>
          <Route path="payment/:payId" element={<Payment></Payment>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="users" element={<Users></Users>}></Route>
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
