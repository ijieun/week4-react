import React, { useRef, useState, useEffect } from "react";

function InputPractice() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });
  const nameInput = useRef(null);

  const { name} = inputs; // 구조분해할당이죠?

  function onChange(e) {
    const { value, name } = e.target;
    setInputs({
      ...inputs, // spread 문법이죠?
      [name]: value, // name에 해당하는 key의 값을 value로 설정합니다
    });
  }
useEffect(() => {
	console.log(nameInput.current);
},[]);
/*
spread 문법을 이용하면 속성(값)들이 펼쳐지게 됩니다

위의 예제는 inputs의 속성들인 name, input에
[name]:value를 덮어 씌운다는 의미입니다.
*/

  function onReset() {
    setInputs({
      name: "",
      nickname: "",
    });
    nameInput.current.focus();
  }

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
      
      <button onClick={onReset}>초기화</button>
      <div>
        <h3>Hello 
        {name} </h3>
      </div>
    </div>
  );
}

export default InputPractice;