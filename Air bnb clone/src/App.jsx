import Header from './Header';
import './App.css';
import Hero from './HeroSection';
import Cards from './Card-Section';
import data from './data';

function App() {
  const fetchData = data.map(itemData => {
    return <Cards 
    key={itemData.id}
     {...itemData}
      />;
  });

  return (
    <>
      <Header />
      <Hero />
      {fetchData}
    </>
  );
}

export default App;
