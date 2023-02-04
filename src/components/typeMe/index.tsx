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
        let newIndex;
        if (textLength <= 11) {
            newIndex = index + 1;
        } else {
            newIndex = index + 5;
        }
        const currentTextToType = textToType.slice(0, newIndex);
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