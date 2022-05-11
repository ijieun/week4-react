import { useState } from "react";
import React from "react";
import "./Introduce.css";
import me from "./images/me.jpg";
import insta from "./images/insta.jpg";
import myongji from "./images/myongji.png";
import puppy from "./images/puppy.jpg";
import nolla from "./images/nolla.jpg";
import spam from "./images/instaSpam.jpg";
import Fade from "react-reveal/Fade"; // Import react-reveal(Fade)


/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
const colorW = "white";
const colorO = "orange";


function Introduce(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [instaId, setInstaId] = useState("");

  function onChangeName(e) {
    setName(e.target.value);
  }

  function onChangeAge(e) {
    setAge(e.target.value);
  }

  function onChangeInstaId(e) {
    setInstaId(e.target.value);
  }

  return (
    <div>
      <div className="App">
        <div
          css={css`
            padding: 32px;
            background-color: #ffa300;
            font-size: 32px;
            border-radius: 4px;
            &:hover {
              color: ${colorW};
            }
          `}
        >
          멋쟁이사자처럼 웹 아기사자 <br />
          이지은을 소개합니다 :-D{" "}
        </div>
        <Fade bottom>
        <div class="introduceBox">
          안녕하세요! 저는 <br />
          <img src={me} width="200px"></img>
          <br /> {props.name} <br />
          입니다.
        </div>
        <div class="introduceBox">
          제 나이는 {props.age}살 20학번이구요,
          <br />
          <img src={myongji} width="500px"></img>
          <br />
          {props.major}예요.
          <br />
        </div>
        <div class="introduceBox">
          <img src={insta} width="250px"></img> <br />
          저의 인스타그램 아이디는 <br />
          @i_ji_silver
          <br />
          입니다 :-){" "}
        </div>{" "}
        <hr />
        </Fade>

        <Fade bottom>
        <div>
          <div id="your_introduce">
            <div
              class="introduceBox"
              css={css`
                padding: 32px;
                margin-bottom: 70px;
                background-color: #6db500;
                font-size: 32px;
                border-radius: 4px;
                &:hover {
                  color: ${colorO};
                }
              `}
            >
              여러분들도 소개해주세요.
              <br />
            </div>
            이름 : <input onChange={onChangeName} value={name} />
            <button onClick={onChangeName}>확인</button>
            <div>
              {name}님 안녕하세요 :)
              <br />
              <br />
              <img src={puppy} width="400px"></img>{" "}
            </div>
          </div>

          <div class="introduceBox">
            나이 : <input onChange={onChangeAge} value={age} />
            <button>확인</button>
            <div>
              {age}살 이시군요.
              <br />
              <br />
              <img src={nolla} width="250px"></img> <br />
            </div>
          </div>

          <div class="introduceBox">
            인스타그램 : <input onChange={onChangeInstaId} value={instaId} />
            <button>확인</button>
            <div>
              @{instaId} 반가워요. 저랑 맞팔로우해요~
              <br />
              스팸아님
              <br />
              <img src={spam} width="250px"></img> <br />
            </div>
          </div>
        </div>
        </Fade>
      </div>
    </div>
  );
}

export default Introduce;
