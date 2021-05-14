import './App.css';
import {Route, Switch} from 'react-router-dom'
import ImageSlider from './Components/ImageSlider'
import { SliderData } from './Components/Sliderdata';
import HomePage from './Components/HomePage';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="appBody">
      <Nav/>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/projects" render={routerProps => ( <ImageSlider slides={SliderData}/>)}></Route>
      </Switch>
    </div>
  );
}

export default App;
