import React, { useState, useEffect } from "react";

const MouseTracker: React.FC = () => {
  const [ position, setPosition ] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log(`>>>> add effect: x: ${position.x}`)
    const updateMouse = (e: MouseEvent) => {
      console.log(`>>>> set mouse position`)
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    document.addEventListener('click', updateMouse)

    return () => {
      console.log(`>>>> remove effect: x: ${position.x}`)
      document.removeEventListener('click', updateMouse)
    }
  }, [position])

  console.log(`>>>> before render: x: ${position.x}`)

  return (
    <h2>x: {position.x} y:{position.y}</h2>
  );
}

export default MouseTracker