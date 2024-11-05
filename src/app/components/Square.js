"use client"
import React, { useState } from 'react';
import "./Square.css";

const Square = () => {
    const [board, setBoard] = useState(Array(9).fill(""));
    const [boardContent, setBoardContent] = useState(false);
    const [winner, setWinner] = useState(null);

    const checkWinner = (newBoard) => {
        const winningComb = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ]
        for(const array of winningComb) {
            const [a, b, c] = array;
            if(newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
                setWinner(newBoard[a]);
            }
        }
    }

    const handleBoardContent = (index)=> {
        if(!winner && board[index] === "") {
            const newBoard = [...board];
            newBoard[index] = boardContent ? 'O':'X';
            setBoard(newBoard);
            checkWinner(newBoard);
            setBoardContent(!boardContent);
        }
    }


    const reset = () => {
        setBoard(Array(9).fill(""));
        setBoardContent(false);
        setWinner(null);
    }


    return (
        <div>
            <h1>
                {winner ? `The winner is ${winner}`: `The next player is ${boardContent ? 'O':'X'}`}
            </h1>
            <div className="square-container">
                {board.map((value, index)=>(
                    <button className="btns" key={index} onClick={()=> handleBoardContent(index)} disabled={winner}>
                        {value}
                    </button>
                ))}
            </div>

            <button className="btn" onClick={reset}>RESET</button>
        </div>
    );
};

export default Square;
