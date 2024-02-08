import './App.css';
import { useState, useEffect } from 'react';
// //Each team can pick the language/library to use.
// When the user clicks an option, a computer option should be shown or you can play another user
// There are 5 rounds to the game, each round should show who won the round
// After all 5 rounds are played a message should showcase the winner.
// After the game has been played a restart button should appear to restart the game
// You have 45 minutes to complete this exercise
// It should work and look good!
// Voting will be based on code cleanliness, code efficiency, and creativity on the asthetics.

const playRPS = (firstPlayerMove, secondPlayerMove) => {
	//first player true when win
	if (secondPlayerMove === 'rock' && firstPlayerMove === 'scissors')
		return false;
	if (secondPlayerMove === 'scissors' && firstPlayerMove === 'paper')
		return false;
	if (secondPlayerMove === 'paper' && firstPlayerMove === 'rock') return false;
	return true;
};

function App() {
	const [winner, setWinner] = useState('');
	const [firstPlayersTurn, setFirstPlayersTurn] = useState(true);
	const [playerOneMove, setPlayerOneMove] = useState('');
	const [playerTwoMove, setPlayerTwoMove] = useState('');

	const handle = (move) => () => {
		console.log(move);
		if (!playerOneMove) return setPlayerOneMove(move);

		if (playRPS(playerOneMove, playerTwoMove)) {
			setWinner('player 1');
		} else {
			setWinner('player 2');
		}
	};

	const randomSelection = () => {
		return Math.floor(Math.random() * 100) / 3;
	};
	console.log(randomSelection);
	const buttonStyle = {
		margin: '12px',
		padding: '12px',
		fontSize: '20px',
	};

	return (
		<div className='App'>
			<button
				style={{ ...buttonStyle, backgroundColor: 'brown', color: 'white' }}
				// onClick={handle('rock')}
				onClick={() => setPlayerOneMove('rock')}
			>
				Rock
			</button>
			<button
				style={{ ...buttonStyle, backgroundColor: 'gray' }}
				// onClick={handle('scissors')}
				onClick={() => setPlayerOneMove('scissors')}
			>
				Scissors
			</button>
			<button
				style={{ ...buttonStyle, backgroundColor: 'white' }}
				// onClick={handle('paper')}
				onClick={() => setPlayerOneMove('paper')}
			>
				Paper
			</button>
			<button
				style={{ ...buttonStyle, backgroundColor: 'red' }}
				onClick={handle('restart')}
			>
				Restart
			</button>
		</div>
	);
}

export default App;
