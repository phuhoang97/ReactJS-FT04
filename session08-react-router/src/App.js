import "./App.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import ContactUser from "./components/ContactUser";
import ContactProduct from "./components/ContactProduct";
import ContactIndex from "./components/ContactIndex";
import ErrorPage from "./components/ErrorPage";
import DemoNavigate from "./components/DemoNavigate";
import CourseDetail from "./components/DynamicRouter/CourseDetail";
import CourseDetailByTypeId from "./components/DynamicRouter/CourseDetailByTypeId";
import Course from "./components/DynamicRouter/Course";
import PrivateRouter from "./components/PrivateRouter/PrivateRouter";
import Account from "./components/PrivateRouter/Account";
import Person from "./components/PrivateRouter/Person";

function App() {
  const activeBgColor = ({ isActive }) => ({
    color: isActive ? "rgb(121 14 14)" : "rgb(211 201 201)",
    backgroundColor: isActive ? "rgb(211 201 201)" : "rgb(121 14 14)",
  });

  return (
    <div>
      {/* Sử dụng Link */}
      {/* <ul>
        <li>
          <Link to='/'>HomePage</Link>
        </li>
        <li>
          <Link to='/about'>AboutPage</Link>
        </li>
        <li>
          <Link to='/contact'>ContactPage</Link>
          <ul>
            <li>
              <Link to="/contact/contact-user">Contact User</Link>
            </li>
            <li>
              <Link to="/contact/contact-product">Contact Product</Link>
            </li>
          </ul>
        </li>
      </ul> */}

      {/* Sử dụng NavLink */}
      <ul>
        <li>
          <NavLink to='/' style={activeBgColor}>
            HomePage
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' style={activeBgColor}>
            AboutPage
          </NavLink>
        </li>
        <li>
          <NavLink to='/contact' style={activeBgColor}>
            ContactPage
          </NavLink>
          <ul>
            <li>
              <NavLink to='/contact/contact-user' style={activeBgColor}>
                Contact User
              </NavLink>
            </li>
            <li>
              <NavLink to='/contact/contact-product' style={activeBgColor}>
                Contact Product
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>

      {/* Sử dụng Navigate */}
      <DemoNavigate />

      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/contact' element={<ContactPage />}>
          {/* Index Router Contact */}
          <Route index element={<ContactIndex />} />
          {/* Nested Router */}
          <Route path='contact-user' element={<ContactUser />}>
            Contact User
          </Route>
          <Route path='contact-product' element={<ContactProduct />}>
            Contact Product
          </Route>
        </Route>

        <Route path='/course' element={<Course />}></Route>
        <Route path='/course/:id' element={<CourseDetail />}></Route>
        <Route
          path='/course/:id/:type'
          element={<CourseDetailByTypeId />}
        ></Route>

        <Route element={<PrivateRouter />}>
          <Route path='/account' element={<Account />}></Route>
          <Route path='/person' element={<Person />}></Route>
        </Route>

        {/* Tạo route khi đường dẫn không tồn tại */}
        <Route path='*' element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
