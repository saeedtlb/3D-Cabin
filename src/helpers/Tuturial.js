import React, { useEffect, useRef, useState } from 'react'
import { Spring, animated } from 'react-spring/renderprops'
// SVG paths
import { sign_path } from './svgPath'
// typewritter effect for svg text
import Text from './Text'

const Tuturial = ({ stopShowTuturial }) => {
  const [hide, setHide] = useState(null)
  const tuturialRef = useRef()

  const hideTuturial = () => {
    tuturialRef.current.style.opacity = 0
    setTimeout(() => {
      stopShowTuturial()
    }, 2000)
  }

  useEffect(() => hide && setTimeout(hideTuturial, 1500), [hide])

  return (
    <div className="tuturial" ref={tuturialRef}>
      <svg width="210" height="277" xmlns="http://www.w3.org/2000/svg">
        <Spring from={{ x: '1000' }} to={{ x: '0' }} config={{ duration: 1300 }} reset={hide} reverse={hide}>
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
        <g>
          <Spring
            from={{ x: '1000' }}
            to={{ x: '0' }}
            config={{ duration: 1300, delay: 1100 }}
            onRest={() => !hide && setHide(false)}
            reset={hide}
            reverse={hide}>
            {({ x }) => (
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
            )}
          </Spring>
          <Text hide={hide} setHide={setHide} />
        </g>
      </svg>
    </div>
  )
}

export default Tuturial
