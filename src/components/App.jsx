import React from'react';
import {ColoredMessage} from"./components/ColoredMessage";
import {useState} from"react";

export const App=()=>{
    console.log("レンタリング");
    const [num,setNum]=useState(0);
    const onClickButton=()=>{
        setNum(num+1);
    };
    
    return( 
        <>
        <h1 style={{color: "red"}}>こんにちわ！</h1>
        <ColoredMessage color="blue">お元気ですか</ColoredMessage>
        <ColoredMessage color="pink">元気です！</ColoredMessage>
        <button onClick={onClickButton}>ボタン</button>
        <p>{num}</p>
        </>
        );
};