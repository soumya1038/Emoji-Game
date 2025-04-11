/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojisList: [],
    score: 0,
    topScore: 0,
    show: false,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onSelectEmoji = id => {
    const {clickedEmojisList, score, topScore} = this.state
    this.setState(prevState => {
      const isEmojiPresent = clickedEmojisList.includes(id)
      // const clickedEmojisLength = clickedEmojisList.length
      if (isEmojiPresent) {
        return {
          score: prevState.score,
          topScore: prevState.topScore,
          clickedEmojisList: prevState.clickedEmojisList,
          show: true,
        }
      }
      const newScore = score + 1
      const newTopScore = newScore >= topScore ? newScore : topScore
      const newClickList = clickedEmojisList
      newClickList[id] = id
      return {
        score: newScore,
        topScore: newTopScore,
        clickedEmojisList: newClickList,
        show: newScore === 12,
      }
    })
  }

  playAgain = () => {
    this.setState(prevState => ({
      score: 0,
      topScore: prevState.topScore,
      clickedEmojisList: [],
      show: false,
    }))
  }

  render() {
    const {emojisList} = this.props
    this.shuffledEmojisList()
    const {score, topScore, isWin, show} = this.state
    return (
      <div className="bg-container">
        <NavBar score={score} topScore={topScore} show={show} />
        <div className="emoji-container">
          {emojisList.map(eachEmoji => (
            <ul className="ul-container" key={eachEmoji.id}>
              <EmojiCard
                emojiCardList={eachEmoji}
                key={eachEmoji.id}
                onSelectEmoji={this.onSelectEmoji}
                show={show}
              />
            </ul>
          ))}
        </div>
        <WinOrLoseCard
          isWin={isWin}
          show={show}
          playAgain={this.playAgain}
          score={score}
        />
      </div>
    )
  }
}

export default EmojiGame
