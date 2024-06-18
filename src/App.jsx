import Header from "./components/header";
import About from "./components/about";
import Contact from "./components/contact";
import Image1 from "./components/image1";
import Image2 from "./components/image2";
import Image3 from "./components/image3";
import './profile.css';


function App() {


  return (
    <div id="prof">
    <Header />
    <About />
    <Contact />
      <div id="gallery">    
      <Image1 />
      <Image2 />
      <Image3 />
      </div>
    </div>
  )
}

export default App
