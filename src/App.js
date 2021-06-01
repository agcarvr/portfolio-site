import './App.css';
import {Route, Switch} from 'react-router-dom'
import ImageSlider from './Components/ImageSlider'
import { SliderData } from './Components/Sliderdata';
import HomePage from './Components/HomePage';
import Nav from './Components/Nav';
import Resume from './Components/Resume';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="appBody">
      <Nav/>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path='/resume' render={routerprops => (
          <Resume/>)}></Route>
        <Route path="/projects" render={routerProps => ( <ImageSlider slides={SliderData}/>)}></Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
