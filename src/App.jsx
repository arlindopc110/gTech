import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { ProductViewPage } from "./pages/ProductViewPage"
import { ProductListingPage } from "./pages/ProductListingPage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/product-view-page" element={<ProductViewPage />}/>
          <Route path="/products" element={<ProductListingPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
