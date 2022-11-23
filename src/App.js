import Content from "./components/Content/Content";
import Header from "./components/Header/Header";

import SubHeading from "./components/SubHeading";
function App() {
  return (
    <div>
      <Header />
      <div className="responsive-wrapper">

        <SubHeading />
        <Content />
      </div>
    </div>
  );
}
export default App;
