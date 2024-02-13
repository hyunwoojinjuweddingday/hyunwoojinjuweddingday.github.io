import styled from 'styled-components';
import './App.css';
import { useState } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import mapImg from './Img/map.png';
import icon from '../src/Img/icon/free-icon-send-3945563.png'
import Modal from './Modal_jinju.jsx';
import ModalMale from './ModalH.jsx'
import gif from './Img/gif.GIF';
import imgcenter from './Img/img_center.jpg';
import imgmain from './Img/img_main.jpg';
import s01 from './Img/s01.jpg';
import s02 from './Img/s02.jpg';
import s03 from './Img/s03.jpg';
import s04 from './Img/s04.jpg';
import s05 from './Img/s05.jpg';



function App() {
const [male, setMale] = useState(false);
const [female, setFemale] = useState(false);
const onClcikMale = () => {
  setMale(male=>!male);
}
const onClcikFemale = () => {
  setFemale(female=>!female);
}

const settings = {
  dots: true,
  infinite: true,
  fade: true,
  speed: 1000,
  autoplay: false,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: false,
  prevArrow: false,
  arrows: false,
};


  return (
    <Box className='App'>
      <Top>
        <MainImg src={imgcenter} loading="lazy"/>
        <MainText>현우 진주 우리 결혼합니다.</MainText>
        <InfoBox>
          <Info>
            <div>이용섭 • 이복성의 아들</div>
            <div style={{fontWeight:'700'}}>이현우</div>
          </Info>
          <Info>
            <div>서병환 • 정미영의 딸</div>
            <div style={{fontWeight:'bold'}}>서진주</div>
          </Info>
        </InfoBox>
        <Data>
          <div>2024년 04월 06일 토요일 </div>
          <div>오전 11시</div>
          <div>아현정</div>
        </Data>
      </Top>
      <Bottom>
      <Map>
        <a href='https://naver.me/FmgVoXAc' target='_blank'><img src={mapImg}/></a>
        <p style={{fontSize:'12px', color:'gray'}}>이미지 클릭시 네이버 지도로 연결됩니다.</p>
        <p className='box'>
          <p>예식장 주소</p>
          <p>대구광역시 수성구 동대구로 194-7 <b>아현정</b> (황금동 660)</p>
          <p>주차안내</p>
          <p>어린이회관 공영주차장 (2시간 무료주차) <br/>대구 수성구 황금동 635-6</p>
        </p>
      </Map>
      <div>마음 전해주실 곳 </div>
      <Num>
      <span onClick={onClcikMale}> <img src={icon}/> 신랑측 </span>
      <span onClick={onClcikFemale}> <img src={icon}/> 신부측 </span>
      </Num>
      {male ? <ModalMale setMale={setMale} male={male} />:null}
      {female ? <Modal setFemale={setFemale} female={female} />:null}
      </Bottom>
      <Img className='gif'src={gif}/>
      <ImgSlider>
      <Slider {...settings}>
      <div>
        <img src={s01}/>
        </div>
        <div>
        <img src={imgmain}/>
        </div>
        <div>
        <img src={s02}/>
        </div>
        <div>
        <img src={s03}/>
        </div>
        <div>
        <img src={s04}/>
        </div>
        <div>
        <img src={s05}/>
        </div>
      </Slider>
      </ImgSlider>
    </Box>
  );
}

const Box = styled.div`
margin: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
max-width: 100%;
height: auto;
color: #311D00;
.infoBox{
  max-width: 90%;
}
`
const Top = styled.div`
  font-family: 'BookkMyungjo';
`
const Bottom = styled.div`
  font-family: 'nanumMyeongjo';
  display: flex;
  flex-direction: column;
  align-items: center;
`
const MainImg = styled.img `
  max-width: 100%;
  height: auto;

`
const Img = styled.img`
 touch-action: none;
  max-width: 80%;
  height: auto;
  width: 80%;
  height: 70%;
  margin-top: 40px;
  margin-bottom: 50px;
`

const MainText = styled.div`
margin-top: 50px;
line-height: 35px;
font-weight: 300;
p{
  margin-top: 20px;
}
`

const InfoBox = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
margin: 50px 0;
`

const Info = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
div{
  margin-top: 15px;
}
`

const Data = styled.div`
margin-top: 70px;
div{
  margin: 10px;
}
`

const Map = styled.div`
height: 100%;
margin-top: 30px;
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 15px;
:nth-child(3){
  margin-top: 35px;
}
img{
  touch-action: none;
  width: 80%;
  height: 80%;
}
.box{
  margin-top: 20px;
}
`
const Num = styled.div`
max-width: 100%;
display: flex;
align-items: center;
justify-content: space-around;
margin-top: 15px;
margin-bottom: 25px;
span{
  display: flex;
  align-items: center;
  margin-right: 20px;
  img{
  width: 13px;
  height: 12px;
  margin-right:10px;
}}
`

const ImgSlider = styled.div`
width: 100%;
height: 250px;
margin-top: 30px;
  .slick-slider {
    height: 100%;
    touch-action: none;
    margin: 0;
  }
  .slick-slide img {
  object-fit: cover;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 0;
}

  .SlickArrow {
    display: inline-block;
    position: absolute;
    cursor: pointer;
  }
  .NextArrow {
    right: -40px;
    top: 50%;
    transform: rotate(-180deg) translate(0%, 50%);
  }
  .PrevArrow {
    left: -60px;
    top: 50%;
    transform: translate(0%, -50%);
  }

  .slick-dots {
    text-align: center;
    padding: 0;
    list-style: none;
    position: relative;
    bottom: 350px;
    li {
      float: none;
      display: inline-block;
      height: 10px;
      + li button {
        margin-left: 10px;
      }

      &.slick-active {
        button {
        }
      }
    }
  }
`;


export default App;
