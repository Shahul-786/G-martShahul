import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Category from "./pages/Category";
import Home from "./pages/Home";
import Cart from "./pages/Cart"
import SubCategory from "./pages/SubCategory";
import { premiumFruits } from "./utils/premiumfruitsdata";//premiumfruits data
import { Beauty } from "./utils/beauty";//beauty data
import { SportsToysLuggages } from "./utils/sportstoysluggages"; //sportstoysLuggages data
import MainCategory from "./pages/MainCategory";
import Header from "./components/Header";
import ProductDetail from "./pages/ProductDetail";
import { Fashion } from "./utils/fashion";
import { Electronics } from "./utils/Electronics";
function App() {
  console.log("premiumfruits data :", premiumFruits);
  return (
  
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* premiumfruits routings */}
          <Route
            path="/premiumfruits"
            element={<MainCategory products={premiumFruits} />}
          />
          <Route
            path="/premiumfruits/:category"
            element={<Category products={premiumFruits} />}
          />
          <Route
            path="/premiumfruits/:category/:subcategory"
            element={<SubCategory products={premiumFruits} />}
          />
          <Route
            path="/premiumfruits/:category/:subcategory/:product"
            element={<ProductDetail />}
          />
           {/*beauty routings */}
           <Route
            path="/Beauty"
            element={<MainCategory products={Beauty} />}
          />
          <Route
            path="/Beauty/:category"
            element={<Category products={Beauty} />}
          />
          <Route
            path="/Beauty/:category/:subcategory"
            element={<SubCategory products={Beauty} />}
          />
          <Route
            path="/Beauty/:category/:subcategory/:product"
            element={<ProductDetail />}
          />
          {/*fashion routings */}
          <Route
            path="/Fashion"
            element={<MainCategory products={Fashion} />}
          />
          <Route
            path="/Fashion/:category"
            element={<Category products={Fashion} />}
          />
          <Route
            path="/Fashion/:category/:subcategory"
            element={<SubCategory products={Fashion} />}
          />
          <Route
            path="/Fashion/:category/:subcategory/:product"
            element={<ProductDetail />}
          />
           {/*Electronics routings */}
           <Route
            path="/Electronics"
            element={<MainCategory products={Electronics} />}
          />
          <Route
            path="/Electronics/:category"
            element={<Category products={Electronics} />}
          />
          <Route
            path="/Electronics/:category/:subcategory"
            element={<SubCategory products={Electronics} />}
          />
          <Route
            path="/Electronics/:category/:subcategory/:product"
            element={<ProductDetail />}
          />
           {/* sportsToysLuggages */}
          <Route
            path="/SportsToysLuggages"
            element={<MainCategory products={SportsToysLuggages} />}
          />
          <Route
            path="/SportsToysLuggages/:category"
            element={<Category products={SportsToysLuggages} />}
          />
          <Route
            path="/SportsToysLuggages/:category/:subcategory"
            element={<SubCategory products={SportsToysLuggages} />}
          />
          <Route
            path="/SportsToysLuggages/:category/:subcategory/:product"
            element={<ProductDetail />}
          />
              <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </Router>
    </>

  );
}

export default App;
