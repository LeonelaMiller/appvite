import { Navbar } from "../src/components/Navbar";
import { ItemListConteiner } from "./components/ItemListConteiner";

function App () {
  return (
    <>
    <div className=" bg-slate-900">
      <Navbar/>
    </div>
   <ItemListConteiner greeting={"My ecommerce"}/>
   
    </>
    
  );
};
export default App