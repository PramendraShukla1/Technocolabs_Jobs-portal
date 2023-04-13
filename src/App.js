import Footer from "./components/Footer";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import Subscription from "./components/Subscription";
import "./styles/app.css"

function App() {
  return (
    <div className="App">
     <Header/>
     <Searchbar/>
     <Subscription/>
    <Footer/>
    </div>
  );
}

export default App;
