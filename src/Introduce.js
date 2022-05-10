import { useState } from "react";
import React from "react";
import './Introduce.css';
import me from './images/me.jpg'
import insta from './images/insta.jpg'
import myongji from './images/myongji.png'
import puppy from './images/puppy.jpg'

function Introduce(props) {
    
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

  
}
export default Introduce;