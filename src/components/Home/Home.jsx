import React,{useEffect,useState} from "react";
import Header from "../Header/Header";
import Card from "../Content/Card";
import Axios from "../../Axios";


function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Axios
      .get("/data")
      .then((response) => {
        setCards(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <Header />
      <div className="h-96 w-full bg-blue-200">

      </div>
      <div className="content">
      <div className="content-main">
        <div className="card-grid">
          {cards.length > 0 ? (
            cards.map((card) => (
              <Card key={card._id} card={card} />
            ))
          ) : (
            <p>Loading data..</p>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
