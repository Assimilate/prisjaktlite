import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchPage } from "./SearchPage";
import { ProductPage } from "./ProductPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
