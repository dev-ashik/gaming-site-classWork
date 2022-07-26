import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import GameLeft from './Components/GameLeft/GameLeft';
import AllGames from './Components/AllGames/AllGames';
import Cosplay from './Components/Cosplay/Cosplay';
import RightContent from './Components/RightContent/RightContent';
import Gameborder from './Components/Gameborder/Gameborder';
import Graphics from './Components/Graphics/Graphics';
import GameVidio from './Components/GameVidio/GameVidio';
import Footer from './Components/Footer/Footer';
import FloatingAdd from './Components/FloatingAdd/FloatingAdd';
import { useState } from 'react';

function App() {
  const [showAdd, setShowAdd] = useState(true);
  return (
    <div className="App">
      <Header />
      <div className='main_container'>
        <div className='container_left'>
          <GameLeft />
          <AllGames />
          <Cosplay />
        </div>
        <div className='container_right'>
          <RightContent />
          <Gameborder />
          <Graphics />
          <GameVidio />
        </div>
      </div>


      <Footer />
      {
        showAdd && <FloatingAdd setShowAdd={setShowAdd}/>
      }
      
    </div>
  );
}

export default App;
