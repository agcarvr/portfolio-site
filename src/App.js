import './App.css';
import ImageSlider from './Components/ImageSlider'
import { SliderData } from './Components/Sliderdata';


function App() {
  return (
    <div>
      <ImageSlider slides={SliderData} />
    </div>
  );
}

export default App;
