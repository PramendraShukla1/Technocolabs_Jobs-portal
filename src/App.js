import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import Footer from "./components/Footer";
import AppServices from "./components/Home";
import "./styles/app.css"

function App() {
  return (
    <div className="App">
     <Header/>
     <AppServices />
     <Footer />
     <Searchbar/>
    </div>
  );
}

export default App;
