import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "../src/components/Navbar";
import { ItemListConteiner } from "./components/ItemListConteiner";
import { Error404 } from "./components/Error404";
import { ItemDetailConteiner } from "./components/ItemDetailConteiner";

function App () {
  return (
    <BrowserRouter>
    <div className=" bg-slate-900">
      <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<ItemListConteiner greeting={"Productos"}/>} />
        <Route path="/category/:id" element={<ItemListConteiner greeting={"Productos"}/>} />
        <Route path="/Items/:id" element={<ItemDetailConteiner />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App