import React from 'react';
import './game-genre.css';

export const GameGenre = ({ genre = '' }) => {
    return <span className="game-genre">{ genre }</span>
}
