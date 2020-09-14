import React,{useRef, useState} from "react";

function InputSample(){

    const [inputs, setInput] = useState({
        name: '',
        nickname: ''
    })

    const nameInput = useRef();
    const {name, nickname} = inputs;

    const onChange = (e) =>{
        const {value, name} = e.target;
        setInput({
            ...inputs, //기존의 inputs값 복사
            [name] : value
        });
    }

    const onReset = () => {
        setInput({
            name: '',
            nickname:''
        })
        nameInput.current.focus();
    };
    return( 
        <>
            <input name="name" onChange={onChange} value={name} ref = {nameInput} placeholder="이름" />
            <input name="nickname" onChange={onChange} value={nickname} placeholder="닉네임" />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : </b>
                {name} ({nickname})
            </div>
        </>
    )
}

export default InputSample;