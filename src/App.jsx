import "./App.css";
import { MenuBar, Main, Footer } from "./components/layout";

function App() {
  return (
    <div className="container mx-auto">
      <MenuBar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
