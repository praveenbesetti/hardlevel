import React, { useState } from 'react';

function GameList() {
  const [games, setGames] = useState([
    { id: 1, name: 'Game 1' },
    { id: 2, name: 'Game 2' },
    { id: 3, name: 'Game 3' },
    { id: 4, name: 'Game 4' },
    { id: 5, name: 'Game 5' },
  ]);

  const [checkedGames, setCheckedGames] = useState([]);

  const handleCheckboxChange =(event) => {
    const gameId = parseInt(event.target.value);
    setCheckedGames((prevCheckedGames) =>
      prevCheckedGames.includes(gameId)
        ? prevCheckedGames.filter((id) => id !== gameId)
        : [...prevCheckedGames, gameId]
    );
  };

  const handleDeleteGame = (gameId) => {
    setGames((prevGames) => prevGames.filter((game) => game.id !== gameId));
    setCheckedGames((prevCheckedGames) =>
      prevCheckedGames.filter((id) => id !== gameId)
    );
  };

  return (
    <ul>
      {games.map((game) => (
        <li key={game.id}>
          <input
            type="checkbox"
            value={game.id}
            checked={checkedGames.includes(game.id)}
            onChange={handleCheckboxChange}
          />
          {game.name}
          {checkedGames.includes(game.id) && (
            <button onClick={() => handleDeleteGame(game.id)}>Delete</button>
          )}
        </li>
      ))}
    </ul>
  );
}

export default GameList;