import './App.css';
import './css/component_css/GameGrid.css'
import './css/component_css/GameContainer.css'
import './css/component_css/Card.css'
import './css/component_css/GridItems.css'
import './css/component_css/HandList.css'
import './css/component_css/SideBar.css'
import './css/component_css/SplashContainer.css'
import SplashContainer from './containers/SplashContainer';
import GameContainer from './containers/GameContainer';

function App() {
  if(true){
    return <SplashContainer/>
  } else {
  return (
    <>
    <GameContainer/>
    </>
  );
  }
}

export default App;
