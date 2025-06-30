import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import AddProduct from "./Components/AddProduct";
import EditProduct from "./Components/EditProduct";
import ProductList from "./Components/ProductList";
import ViewProduct from "./Components/ViewProduct";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
        <Route path="/view-product/:id" element={<ViewProduct />} /> {/* ✅ Add this */}
      </Routes>
    </>
  );
}

export default App;
