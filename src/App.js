import styled from 'styled-components';
import { useState } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import mapImg from './map.png'
import icon from '../src/Img/icon/free-icon-send-3945563.png'
import secImg from './mainImg.jpg'
import mainImg from './mg.jpg'
import Modal from './modal.jsx';

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
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: false,
  prevArrow: false,
  arrows: false,
};

  return (
    <Box>
      <Top>
        <MainImg src={mainImg}/>
        <MainText>현우 진주 우리 결혼합니다.</MainText>
        <InfoBox>
          <Info>
            <div>이용섭•이복성의 아들</div>
            <div style={{fontWeight:'bold'}}>이현우</div>
          </Info>
          <Info>
            <div>서병환•정미영의 딸</div>
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
          <div>대구광역시 수성구 동대구로 194-7 <b>아현정</b> (황금동 660)</div>
          <p>주차안내</p>
          <p>어린이회관 공영주차장 (2시간 무료주차) <br/>대구 수성구 황금동 635-6</p>
        </p>
      </Map>
      <div>마음 전해주실 곳 </div>
      <Num>
      <span onClick={onClcikMale}> <img src={icon}/> 신랑측 </span>
      {male ? <Modal/>:null}
      <span onClick={onClcikFemale}> <img src={icon}/> 신부측 </span>
      {male ? <Modal/>:null}
      </Num>
      </Bottom>
      {/* <Slider {...settings}>
        <InnerText>
          <img src={mainImg}/>
        </InnerText>
        <InnerText>
        <img src={mapImg}/>
        </InnerText>
        <InnerText>
        <img src={img}/>
        </InnerText>
      </Slider> */}
      <Img  src={secImg}/>
    </Box>
  );
}

const Box = styled.div`
position: absolute;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
width: 100%;
height: 100%;
font-family: "Nanum Myeongjo", serif;
color: #311D00;
`
const Top = styled.div`
font-family: "Nanum Myeongjo", serif;
`
const Bottom = styled.div`
  font-family: "Noto Sans KR", sans-serif;
`
const MainImg = styled.img `
  width: 100%;
  height: 100%;

`
const Img = styled.img`
  width: 70%;
  height: 70%;
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
img{
  width: 80%;
  height: 80%;
}
.box{
  margin-top: 40px;
}
`
const Num = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
margin-bottom: 25px;
`

const InnerText = styled.div`
width: 100px;
height: 100px;
border: 1px solid beige;
display: flex;
img{
  width: 100px;
  height: 50px;
}
`


export default App;
