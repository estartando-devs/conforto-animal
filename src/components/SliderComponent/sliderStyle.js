import styled from 'styled-components';
import next from '../../assets/images/next.png';

export const SliderContainer = styled.div`
display:flex;
justify-content:center;
.slider-wrapper {
  width: 100vw;
  height: 35vh;
  
  position: relative;
  overflow: hidden;
  background-color:#EBEBEB;
}
div.slide.current.slider-content{
    background-size:contain;
}
.previousButton, .nextButton {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		z-index: 3;
        background: url(${next}) no-repeat center center / 12px;
        border:2px solid #00FFDA;
        padding:1px;
        border-radius:17px;
		width: 32px;
		height: 32px;
		text-indent: -9999px;
		cursor: pointer;
}
.previousButton {
  left: 0;
  -webkit-transform: rotate(180deg) translateY(calc(50% + 0px));
          transform: rotate(180deg) translateY(calc(50% + 0px));
}

.nextButton {
  right: 0;
}

@media (max-height: 500px) {
  .slider-wrapper, .slide {
    height: calc(100vh - 75px);
  }    
}
@media (min-width: 768px) {
  .slider-wrapper {
    height: 30vh;
    width: 50vw;
  }   
}

@media (max-height: 600px) {
  .slider-content .inner h1 {
    font-size: 32px;
  }    
}

@media (max-width: 640px) {
  .slider-content .inner h1 {
    font-size: 32px;
  }
}`