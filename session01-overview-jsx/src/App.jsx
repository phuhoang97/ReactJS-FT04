import "./App.css";
// import Baitap1 from "./Baitap/Baitap1";
import ParentComp from "./components/ParentComp";
// import DemoJSX from "./components/DemoJSX";

function App() {
  return (
    <div className='App'>
      {/* Gọi component để sử dụng */}
      {/* <DemoJSX /> */}
      <ParentComp />
      {/* <Baitap1 /> */}
    </div>
  );
}

export default App;
