import React from 'react';
import { useState } from 'react';

function Square ({value, onSquareClick}) {
    return (
        <button className="square" onClick={onSquareClick}>{value}</button>
    );
}

export default function Board() {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [movesCount, setMovesCount] = useState(0);

    const calculateWinner = () => {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
    }

    const winner = calculateWinner();

    const handleClick = (idx) => {
        if (squares[idx] || calculateWinner()) {
            return;
        }
        setMovesCount(movesCount + 1);
        const newSquares = squares.slice();
        newSquares[idx] = xIsNext ? 'X' : 'O';
        setXIsNext(!xIsNext);
        setSquares(newSquares);
    };

    const getStatus = () => {
        if (movesCount === 9 && !winner) {
            return 'Draw';
        }
        if (winner) {
            return `Winner: ${winner}`;
        }
        return `Next player: ${xIsNext ? 'X' : 'O'}`;
    };

    return (
        <div className="board">
            <div className='row'>
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className='row'>
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className='row'>
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
            <div className="status">{getStatus()}</div>
            <button className="restart" onClick={() => setSquares(Array(9).fill(null))}>Restart</button>
        </div>
    );
};
