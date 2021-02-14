import React, { useEffect, useRef } from 'react'

const Text = ({ hide, setHide }) => {
  const textRef = useRef()

  const speed = 85
  const mainText = 'The leftmost column is C seats'

  let i = -1

  useEffect(() => {
    if (hide === null) return

    !hide && addLetter()
  }, [hide])

  const addLetter = () => {
    i++

    if (i < mainText.length) {
      setTimeout(() => {
        textRef.current.textContent += mainText[i]
        addLetter()
      }, speed)
    } else {
      setTimeout(() => removeLetter(), 2000)
    }
  }

  const removeLetter = () => {
    i--

    if (i >= 0) {
      setTimeout(() => {
        textRef.current.textContent = mainText.slice(0, i)
        removeLetter()
      }, speed)
    } else setHide(true)
  }

  return <text ref={textRef} fill="#fff" x="22" y="45"></text>
}

export default Text
