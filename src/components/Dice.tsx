import { useEffect, useState } from 'react'

type Props = { size?: 'sm' | 'md' | 'lg' }

export default function Dice({ size = 'md' }: Props) {
  const [face, setFace] = useState(5)
  useEffect(() => {
    const id = window.setInterval(() => {
      setFace(Math.floor(Math.random() * 6) + 1)
    }, 900)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div className={`dice dice--${size}`} aria-hidden="true">
      <span className={`pip-grid pips-${face}`}>
        {Array.from({ length: face }, (_, i) => <i key={i} />)}
      </span>
    </div>
  )
}
