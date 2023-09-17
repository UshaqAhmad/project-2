import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Clip from "./components/Clip";
import Footer from "./components/Footer";
import HomeSection from "./components/HomeSection";
import Navbar from "./components/Navbar";
import SecondLastBanner from "./components/SecondLastBanner";
import Text from "./components/Text";
import Form from "./components/Form";
import {Routes, Route} from "react-router-dom"



function App() {
  return (
    <div className="App">
  
<Navbar/>
<Banner/>
<HomeSection/>
<Clip/>
<Cards/>
<Text/>
<SecondLastBanner/>
<Footer/>
<Routes>
<Route path ="/Form" element={<Form/>} />

</Routes>


      
    </div>
  );
} 

export default App;
