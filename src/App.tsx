import "./App.css";
import BackDrop from "./components/body/backdrop/BackDrop";
import Header from "./components/header/Header";
import SubHeader from "./components/sub header/SubHeader";

function App() {
  return (
    <div className="h-full">
      <Header />
      <SubHeader />
      <BackDrop />
    </div>
  );
}

export default App;
