import styled from 'styled-components';
import icon from './Img/icon/free-icon-copy-content-60990.png';
import React, { useState } from 'react';
import close from '../src/Img/close.png'


const handleCopyClipBoard = async (text) => {
	try {
		await navigator.clipboard.writeText(text);
		alert("복사되었습니다.");
	} catch (err) {
		console.log(err);
	}
};

const ModalH = () => {
  const [male, setMale] = useState(true)

  const onClickbtn = () => {
    setMale(male=>!male);
  }

    return (
      <>
      {male ? (
        <Box className='infoBox'>
          <Container>
          <ModalBox>
        <div className='title'>
        <h4>신랑측 마음 전하실 곳</h4>
        <img src={close} onClick={onClickbtn}/>
        </div>
        <Data> 
          <Info>
            <p>이현우</p>
            <div>
            <p>신한 110-257-975501</p>
            <p onClick={()=>handleCopyClipBoard('신한 110-257-975501 이현우')}><img src={icon} alt='icon'/></p>
            </div>
          </Info>
          <Info>
            <p>父 이용섭</p>
            <div>
            <p>하나 513-910008-36508</p>
            <p onClick={()=>handleCopyClipBoard('하나 513-910008-36508 이용섭')}><img src={icon} alt='icon'/></p>
            </div>
          </Info>
          <Info>
            <p>母 이복성</p>
            <div>
            <p>대구 249-13-116837</p>
            <p onClick={()=>handleCopyClipBoard('대구 249-13-116837 이복성')}><img src={icon} alt='icon'/></p>
            </div>
          </Info>
        </Data>
        </ModalBox>
          </Container>

        </Box>  ): null}
      </>
    ) 
}

export default ModalH;

const Box = styled.div`

`
const Container = styled.div`
    position: fixed;
  top:0; left: 0; bottom: 0; right: 0;
  width: 100%;
  height: 1000px;
  background: rgba(0, 0, 0, 0.35); 

`

const ModalBox = styled.div`
position: fixed;
top: 50%;
left: 50%;
-webkit-transform: translate(-50%, -50%);
-moz-transform: translate(-50%, -50%);
-ms-transform: translate(-50%, -50%);
-o-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
width: 300px;
height: 350px;
border-radius: 25px;
margin-bottom: 30px;
background-color: 	#f4f4f3;
padding: 0 15px;
z-index: 9999;
.title{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  img{
    width: 15px;
    height: 15px;
  }
}
`

const Data = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: left;
`

const Info = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
text-align: left;
p{
margin: 0;
}
div{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px #311D00 solid;
  margin-bottom: 20px;
}
img{
  width: 15px;
  height: 15px;
  padding-top: 8px;
  margin-left: 5px;
}
`

const Btn = styled.button`
  width: 50%;
  height: 35px;
  margin-top: 15px;
  border-radius: 30px;
  border: #311D00 solid 2px;
  color: #311D00;
  background-color: #fff;
  font-family: 'BookkMyungjo';
`