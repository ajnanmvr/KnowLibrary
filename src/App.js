import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Heading from "./components/Heading";
import HorizondalTabs from "./components/HorizondalTabs";
import SubHeading from "./components/SubHeading";
function App() {
  return (
    <div>
      <Header />
      {/* <main className="main"> */}
      <div className="responsive-wrapper">
        {/* <Heading/> */}
        {/* <HorizondalTabs/> */}
        <SubHeading />
        <Content />
      </div>
      {/* </main> */}
    </div>
  );
}
export default App;
