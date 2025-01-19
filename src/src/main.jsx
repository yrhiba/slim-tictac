import React from 'react';
import ReactDOM from 'react-dom/client';
import Board from '../components/Board';
import { useState } from 'react';

export default function App() {
    return (
        <div className="container">
            <div className="title">Game - Tic Tac Toe</div>
            <Board />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
