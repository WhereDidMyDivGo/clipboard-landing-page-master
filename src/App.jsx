import "./App.css";
import Header from "./components/header/Header";
import Buttons from "./components/buttons/Buttons";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <img src="/src/assets/images/bg-header-desktop.png" className="bg-img" />

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
