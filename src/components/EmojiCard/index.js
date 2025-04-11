// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {emojiCardList, onSelectEmoji, show} = props
  const {id, emojiName, emojiUrl} = emojiCardList
  // console.log(id)

  const onSelect = () => {
    onSelectEmoji(id)
  }

  const displayClass = show ? 'display' : null

  return (
    <li className={`each-container ${displayClass}`} onClick={onSelect}>
      <button type="button" className="button">
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}

export default EmojiCard
