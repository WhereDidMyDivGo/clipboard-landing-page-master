import "./App.css";
import Header from "./components/header/Header";
import Buttons from "./components/buttons/Buttons";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

//////////////// images ////////////////
import bgHeaderDesktop from "./assets/images/bg-header-desktop.png";

function App() {
  return (
    <>
      <img src={bgHeaderDesktop} className="bg-img" />

      <main>
        <Header />
        <Buttons />
        <Main />
        <Buttons />
      </main>

      <Footer />
    </>
  );
}

export default App;
