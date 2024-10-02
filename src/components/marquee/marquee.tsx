import React, { useRef, useEffect, useState } from 'react'
import './marquee.css'

interface MarqueeProps {
  text: string
  style: React.CSSProperties
}

const Marquee: React.FC<MarqueeProps> = ({ text, style }) => {
  const [shouldScroll, setShouldScroll] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current && textRef.current) {
      const containerWidth = containerRef.current.offsetWidth
      const textWidth = textRef.current.scrollWidth

      // Only scroll if the text is wider than the container
      setShouldScroll(textWidth > containerWidth)
    }
  }, [text])

  return (
    <div className="marquee-container" ref={containerRef} style={style}>
      <div
        className={`marquee-text ${shouldScroll ? 'scroll' : ''}`}
        ref={textRef}
      >
        {text}
      </div>
    </div>
  )
}

export default Marquee
