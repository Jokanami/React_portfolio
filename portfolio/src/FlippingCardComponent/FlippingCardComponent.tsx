import React, { useState } from 'react'
import './FlippingCardComponent.css';

interface FlippingCardComponentProps {
    question: string;
    answer: string;
}

const FlashCardComponent: React.FC<FlippingCardComponentProps> = ({ question, answer }) => {

    const [isFlipped, setIsFlipped] = useState<boolean>(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }


    return (
        <div className={`flipcard-container ${isFlipped ? "flipped" : ""}`} onClick={handleClick}>

            <div className={"flipcard-inner"}>
                <div className={"flipcard-front"}>
                    <h3>{question}</h3>
                </div>
                <div className={"flipcard-back"}>
                    <p>{answer}</p>
                </div>
            </div>

        </div>
    )

}

export default FlashCardComponent