import React, { useEffect, useState } from 'react';


interface Props {
    duration?: number,
    children?: any,
}

const TypeMe: React.FC<Props> = ({ children, duration = 300 }) => {
    const [typedText, setTypedText] = useState("");

    let textToType: any = children;
    let index: number = 0;

    const startAnimation = () => {
        const textLength = textToType.length;
        const step = textLength / (duration / 20)
        typeText(step, textLength)
    }

    const typeText = (step: number, textLength: number) => {
        const currentTextToType = textToType.slice(0, index + 5);
        console.log({ currentTextToType }, { textLength })
        setTypedText(currentTextToType)

        setTimeout(() => {
            index = index + step;

            if (index <= textLength) {
                typeText(step, textLength);
            } else {
                index = 0;
            }
        }, 20)
    }

    useEffect(() => startAnimation(), [])


    return (
        <>
            {typedText}
        </>
    )
}


export default TypeMe;