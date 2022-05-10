import { useState } from "react";
import React from "react";
import './Introduce.css';
import me from './images/me.jpg'
import insta from './images/insta.jpg'
import myongji from './images/myongji.png'
import puppy from './images/puppy.jpg'

function Introduce(props) {
    // const Introduce = () =>{
    
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [instaId, setInstaId] = useState("");


    function onChangeName(e){
        setName(e.target.value);
        
    };

    function onChangeAge(e){
        setAge(e.target.value);
    }

    function onChangeInstaId(e){
        setInstaId(e.target.value);
    }

    function imgs(){
        alert("hello");
    }

   


   
    return(
        <div>
            <h3>멋쟁이사자처럼 웹 아기사자 <br/>
                이지은을 소개합니다 :-D
            </h3>
            <p>안녕하세요! 저는 <br/>
            <img src={me} width='200px'></img>

            <br/>  {props.name} <br/>입니다.</p>
            <p>제 나이는 22살 20학번이구요,<br/>
            <img src={myongji} width='500px'></img><br/>
                융합소프트웨어학부 데이터테크놀로지학과예요.

            </p> 
                
            <img src={insta} width='250px'></img>
            <p>저의 인스타그램 아이디는 <br/>
            i_ji_silver<br/>
            입니다 :-)  </p> <hr/>

                

            <div>
                여러분들도 소개해주세요.<br/>
                이름 : <input onChange={onChangeName} value={name}/><button>확인</button>
            <p>{name}님 안녕하세요 :) </p>
            </div>

            <div>
                나이 : <input onChange={onChangeAge} value={age}/><button>확인</button>
                
                <p>{age}살 이시군요.</p>

            </div>

            <div>
                인스타그램 : <input onChange={onChangeInstaId} value={instaId}/><button>확인</button>
                <p>@{instaId} 반가워요. 저랑 맞팔로우해요~</p>

            </div>


        </div>
    )

    ///////////////////////
    // const [name, setName] = useState("");
    // const [age, setAge] = useState("");
    // const [part, setPart] = useState("");
    // const [hobby1, setHobby1] = useState("");
    // const [hobby2, setHobby2] = useState("");
    // const [hobby3, setHobby3] = useState("");



    // function onChangename(e) {
    //     setName(e.target.value);
    // }

    // function onChangeage(e) {
    //     setAge(e.target.value);
    // }

    // function onChangepart(e) {
    //     setPart(e.target.value);
    // }

    // function onChangehobby1(e) {
    //     setHobby1(e.target.value);
    // }

    // function onChangehobby2(e) {
    //     setHobby2(e.target.value);
    // }

    // function onChangehobby3(e) {
    //     setHobby3(e.target.value);
    // }

    // function onClicktitle() {
    //     let title = document.getElementById('introTitle');
    //     title.innerHTML = '안녕하세요! '+name+'님';
       
    // }


    // return (
    //     <>
    //         <div>
    //             <br></br>
    //             이름을 입력해주세요 :
    //             <input onChange={onChangename} value={name} />
    //             <br></br>
    //             나이를 입력해주세요 :
    //             <input onChange={onChangeage} value={age} />
    //             <br></br>
    //             파트를 입력해주세요 :
    //             <input onChange={onChangepart} value={part} />
    //             <br></br>
    //             첫번째 취미를 입력해주세요 :
    //             <input onChange={onChangehobby1} value={hobby1} />
    //             <br></br>
    //             두번째 취미를 입력해주세요 :
    //             <input onChange={onChangehobby2} value={hobby2} />
    //             <br></br>
    //             세번째 취미를 입력해주세요 :
    //             <input onChange={onChangehobby3} value={hobby3} />
    //         </div>
    //         <h1 id="introTitle" onClick={onClicktitle}>
    //             {name}의 자기소개 페이지</h1>
    //             <div class="wrapImg">
    //         </div>
    //         <div id='introContent'>
    //             <p>이름 : {name}</p>
    //             <p>나이 : {age}</p>
    //             <p>파트 : {part} </p>
    //         </div>


    //         <h3>취미</h3>
    //         <div id="wrapSpecial">
    //             <div class="specialContent">
    //                 {hobby1}
    //             </div>
    //             <div class="hideContent">
    //                 왜 {hobby1}가 취미이신가요?
    //                 (❁´▽`❁)
    //             </div>
    //         </div>

    //         <div id="wrapSpecial">
    //             <div class="specialContent">
    //                 {hobby2}
    //             </div>
    //             <div class="hideContent">
    //                 왜 {hobby2}가 취미이신가요?
    //                 (❁´▽`❁)
    //             </div>
    //         </div>

    //         <div id="wrapSpecial">
    //             <div class="specialContent">
    //                 {hobby3}
    //             </div>
    //             <div class="hideContent">
    //                 왜 {hobby3}가 취미이신가요? 
    //                 (❁´▽`❁)
    //             </div>
    //         </div>

    //     </>
    // )

}
export default Introduce;