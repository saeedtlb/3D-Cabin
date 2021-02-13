import React, { useRef, useState } from 'react'
import { Spring, animated } from 'react-spring/renderprops'
// SVG paths
import { sign_path } from './svgPath'

const Tuturial = ({ stopShowTuturial }) => {
  const [hide, setHide] = useState(false)
  const textRef = useRef()
  const tuturialRef = useRef()

  const mainText = `This is C seats`

  let i = -1

  const addLetter = () => {
    i++

    if (i < mainText.length) {
      setTimeout(() => {
        textRef.current.textContent += mainText[i]
        addLetter()
      }, 100)
    } else {
      setTimeout(removeLetter, 2000)
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

  const hideTuturial = () => {
    tuturialRef.current.style.opacity = 0
    setTimeout(() => {
      stopShowTuturial()
    }, 2500)
  }

  return (
    <div className="tuturial" ref={tuturialRef}>
      <svg width="210" height="277" xmlns="http://www.w3.org/2000/svg">
        <Spring
          from={{ x: '1000' }}
          to={{ x: '0' }}
          config={{ duration: 1300 }}
          reset={hide}
          reverse={hide}
          onRest={hide && hideTuturial}>
          {({ x }) => (
            <animated.path
              d={sign_path}
              strokeDasharray="1000"
              strokeDashoffset={x}
              strokeWidth="10"
              stroke="#fff"
              fill="none"
            />
          )}
        </Spring>
      </svg>

      <svg width="450" height="250">
        <Spring
          from={{ x: '1000' }}
          to={{ x: '0' }}
          config={{ duration: 1300, delay: 1100 }}
          onRest={!hide && addLetter}
          reset={hide}
          reverse={hide}>
          {({ x }) => (
            <g>
              <animated.rect
                strokeDasharray="1000"
                strokeDashoffset={x}
                x="10"
                y="10"
                rx="25"
                ry="25"
                width="300"
                height="200"
                fill="none"
                stroke="#fff"
                strokeWidth="10"
              />
              <text ref={textRef} fill="#fff" x="22" y="45"></text>
            </g>
          )}
        </Spring>
      </svg>
    </div>
  )
}

export default Tuturial
