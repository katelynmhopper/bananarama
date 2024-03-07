import './App.css';
import { useState } from 'react';
// //Each team can pick the language/library to use.
// When the user clicks an option, a computer option should be shown or you can play another user
// There are 5 rounds to the game, each round should show who won the round
// After all 5 rounds are played a message should showcase the winner.
// After the game has been played a restart button should appear to restart the game
// You have 45 minutes to complete this exercise
// It should work and look good!
// Voting will be based on code cleanliness, code efficiency, and creativity on the aesthetics.

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
	const [playerOneScore, setPlayerOneScore] = useState(0);
	const [playerTwoScore, setPlayerTwoScore] = useState(0); 

	const handle = (move) => {
		if (firstPlayersTurn) return setPlayerOneMove(move);
		else setPlayerTwoMove(move)

		if (playRPS(playerOneMove, playerTwoMove)) {
			setWinner('player 1');
			setPlayerOneScore(prevScore => prevScore + 1);
		} else {
			setWinner('player 2');
			setPlayerTwoScore(prevScore => prevScore + 1);
		}
		console.log('winner', winner);
	};

	const restart = () => { 
		setPlayerOneScore(0);
		setPlayerTwoScore(0);
		setFirstPlayersTurn(true)
		setWinner('');
	}
	const buttonStyle = {
		margin: '12px',
		padding: '12px',
		fontSize: '20px',
		borderRadius: '5px', 
		boxShadow: '2px 2px 3px #999'
	};

	const play = (move) => {
		if (firstPlayersTurn) handle(move) ;
		else handle(move)
		setFirstPlayersTurn(!firstPlayersTurn)
	}

	return (
		<div className='App'>
			<div>
				<h2>Score</h2>
				<div>Player One {playerOneScore} Player Two {playerTwoScore}</div>
			</div>
			<button
				style={{ ...buttonStyle, backgroundColor: 'brown', color: 'white' }}
				onClick={() => play('rock')}
			>
				Rock
			</button>
			<button
				style={{ ...buttonStyle, backgroundColor: 'gray' }}
				onClick={() => play('scissors')}
			>
				Scissors
			</button>
			<button
				style={{ ...buttonStyle, backgroundColor: 'white' }}
				onClick={() => play('paper')}
			>
				Paper
			</button>
			<button
				style={{ ...buttonStyle, backgroundColor: 'red' }}
				onClick={() => restart()}
			>
				Restart
			</button>
			{!winner && <div>{firstPlayersTurn ? "first player" : "second player"}'s turn...</div>}
			{winner && <div>The winner is: {winner}</div>}
		</div>
	);
}

export default App;
