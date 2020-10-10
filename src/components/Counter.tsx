import React, { useState, useEffect } from 'react';

const Counter: React.FC = () => {
  const [ like, setLike ] = useState(0)
  const [ on, setOn ] = useState(true)

  useEffect(() => {
    console.log(`>>>> document title effect running`)
    document.title = `点击了 ${like} 次`
  }, [like])

  return (
    <>
      <button onClick={ () => setLike(like + 1)}>
        {like} 👍
      </button>
      <br />
      <br />
      <button onClick={ () => setOn(!on)}>
        { on ? 'ON' : 'OFF' }
      </button>
    </>
  )
}

export default Counter