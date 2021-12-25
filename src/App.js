import Header from './components/Header';
import Card from './components/Card';
import data from './data';
import { useState } from "react"

function App() {
  const [blogState, setBlogState] = useState(data);
  
  // Update the state of favorite when click on
  function toggleFavorite(id) {
    setBlogState((prevState) => {
      return prevState.map((currState) => {
        return currState.id === id ? { ...currState, isFavorite: !currState.isFavorite } : currState 
      })
    })
  }

  const blogData = blogState.map(card => {
    return <Card
     key={card.id}
      {...card}
      toggle={() => toggleFavorite(card.id)}
    />
  });
  return (
    <div>
      <Header />
      <div className="container">
        {blogData}
      </div>
    </div>
  );
}

export default App;
