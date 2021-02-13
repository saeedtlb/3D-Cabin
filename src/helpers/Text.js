import React, { useEffect, useRef } from 'react'

const Text = ({ hide, setHide }) => {
  const textRef = useRef()

  const mainText = `This is C seats`

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
      }, 100)
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
      }, 100)
    } else setHide(true)
  }

  return <text ref={textRef} fill="#fff" x="22" y="45"></text>
}

export default Text
