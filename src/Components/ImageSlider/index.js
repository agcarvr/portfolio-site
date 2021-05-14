import { SliderData } from "../Sliderdata";
import {useState} from 'react';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import styles from './slider.module.css'


export default function ImageSlider({slides}){
    const [current, setCurrent] = useState(0)
    const length = slides.length
    
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }

    return(
        <div className={styles.slider}>
            <center><h3>Click on each project to view it in your browser</h3></center>
            <FaArrowAltCircleLeft className={styles.leftarrow} onClick={prevSlide} />

            <FaArrowAltCircleRight className={styles.rightarrow} onClick={nextSlide}/>

            {SliderData.map((slide, idx) => {
                return (
                    <div className={idx === current ? styles.slideActive : styles.slide} key={idx}>

                        {idx === current && (<a href={slide.url} target="_blank" rel="norefferer"><img src={slide.image} className={styles.image}/> </a>)}

                    </div>
                )
            })}

        </div>
    )
}