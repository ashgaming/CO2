import './App.css';
import AddProduct from './component/Adding/AddProduct';
import AddSales from './component/Adding/AddSales';
import Navbar from './component/Structure/Navbar';
import Option from './component/Pages/Option';
import Stocks from './component/Inventory/Stocks';
import Footer from './component/Structure/footer';
import Login from './component/Account/Login';
import Data from './component/Inventory/Data';
import Home from './component/Structure/Home';
import Discount from './component/Pages/Discount';
import MenuCard from './component/Pages/MenuCard';
import Feedback from './component/Feedback/Feedback';
import SignUp from './component/Account/SignUp';
import Api from './component/Api';
import AdminPage from './component/Account/AdminPage';
import Check from './component/Feedback/Checked';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {

  return (
    <>

      <Router>
          <Navbar title="CO2" />
        <Routes>


          <Route path="/Login" element={<Login ltype='cust'
            end={
              <p>Don't Have account <Link to="/SignUp" >Sign up</Link></p>
            }
          />} />
       

        

          <Route path="/" element={<Home />} />

          <Route path="/Option" element={<Option />} />

          <Route path="/AddSales" element={<AddSales />} />

          <Route path="/AddProduct" element={<AddProduct />} />

          <Route path="/Stocks" element={<Stocks />} />

          <Route path="/Data" element={<Data />} />

          <Route path="/Feedback" element={<Feedback />} />

          <Route path="/Discount" element={<Discount />} />

          <Route path="/MenuCard" element={<MenuCard />} />

          <Route path="/SignUp" element={<SignUp Rtype='Cust'
            end={
              <p>Don't Have account <br /> <Link to="/Login" > Login</Link></p>
            }
          />} />

          <Route path="/EmpRegister" element={<SignUp title='Employee' Rtype='Emp'
            end={
              <p>Don't Have account <br /> <Link to="/Login" > Login</Link></p>
            }
          />} />

          <Route path="/AdminPage" element={<AdminPage />} />

          <Route path="/Admin"
            element={
              <Login title='Admin Login'
                ltype='Admin'
                end={
                  <p>Forget Password <Link to="/SignUp" >Sign up</Link></p>
                }
              />} />



          <Route path="/Api" element={<Api />} />
          <Route path="/check" element={<Check/>} />
        </Routes>
        <Footer />
        <checkValid/>
      </Router>

    </>
  );
}

export default App;
//<AddProduct/>/
