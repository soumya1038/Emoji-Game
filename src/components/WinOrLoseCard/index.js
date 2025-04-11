// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, show, playAgain} = props

  const isWin = score === 12

  const imgUrl = isWin
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const display = show ? null : 'win'

  const text = isWin ? 'Won' : 'Lose'
  const greed = isWin ? 'Best Score' : 'Score'

  const onClickButton = () => {
    playAgain()
  }

  return (
    <div className={`result-container ${display}`}>
      <div className="show-result">
        <h1 className="heading">You {text}</h1>
        <p className="score-heading">{greed}</p>
        <p className="score-value">{score}/12</p>
        <button type="button" onClick={onClickButton} className="play-button">
          Play Again
        </button>
      </div>
      <img src={imgUrl} className="img" alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
