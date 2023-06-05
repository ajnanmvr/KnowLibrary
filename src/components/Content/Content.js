import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import Card from './Card';
import SideBar from './SideBar'
function Content() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Fetch data from the API using axios
    axios.get('/data')
      .then(response => {
        setCards(response.data.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="content">
      <SideBar />
      <div className="content-main">
        <div className="card-grid">
          {cards.map((card) => (
            <Card key={card._id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
