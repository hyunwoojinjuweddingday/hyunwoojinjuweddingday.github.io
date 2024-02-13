import styled from 'styled-components';
import icon from './Img/icon/free-icon-copy-content-60990.png';
import React, { useState } from 'react';


const handleCopyClipBoard = async (text) => {
	try {
		await navigator.clipboard.writeText(text);
		alert("복사되었습니다.");
	} catch (err) {
		console.log(err);
	}
};

const Modal_Jinju = ( female ) => {


    return (
    <ModalBox className='infoBox'> 
      {female ? (
        <Data> 
            <Info>
              <p></p>
              <p>신한 110-463-549357</p>
              <p>서진주</p>
              <p onClick={()=>handleCopyClipBoard('신한 110-463-549357 서진주')}><img src={icon} alt='icon'/> </p>
            </Info>
            <Info>
              <p>父</p>
              <p>농협 823-12-139643</p>
              <p>서병환</p>
              <p onClick={()=>handleCopyClipBoard('농협 823-12-139643 서병환')}><img src={icon} alt='icon'/> </p>
            </Info>
            <Info>
              <p>母</p>
              <p>농협 302-0480-5680-01</p>
              <p>정미영</p>
              <p onClick={()=>handleCopyClipBoard('농협 302-0480-5680-01 정미영')}><img src={icon} alt='icon'/> </p>
            </Info>
        </Data>): null}
      </ModalBox>
    )
        
}

export default Modal_Jinju;

const ModalBox = styled.div`
border: 4px solid  #311D00;;
width: 370px;
height: 180px;
border-radius: 15px;
margin-bottom: 30px;
`
 
const Data = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: left;
`

const Info = styled.div`
width: 330px;
padding: 0 10px;
margin-top: 5px;
display: flex;
align-items: center;
text-align: left;
img{
  width: 15px;
  height: 15px;
  margin: 0 10px
}
p:nth-child(1){
  margin-right: auto;
  width: 30px;
}
p:nth-child(2){
  margin-right: auto;
}
p:nth-child(3){
  margin-left: auto;
}
`