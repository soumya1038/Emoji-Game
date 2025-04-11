// Write your code here.

import './index.css'

const NavBar = props => {
  const {score, topScore, show} = props

  const display = show ? 'hide' : null

  return (
    <nav className="nav-container">
      <div className="logo-name">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1 className="ligo-heading">Emoji Game</h1>
      </div>
      <div className={`score ${display}`}>
        <p className="show-score">Score: {score}</p>
        <p className="show-topscore">Top Score: {topScore}</p>
      </div>
    </nav>
  )
}

export default NavBar
