/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const Emotion = () =>{
    const containerStyle = css`
    border: solod 1px #aaa;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items;: center;
    `;
    return(
        <div>
            <p>Emotionです</p>
            <button>ボタン</button>
        </div>
        );
};