import { useLayoutEffect, useRef, useState } from 'react'

// desestructuramos el id y el name
export const Episode = ( { id, name }) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
      const { height, width } = ( pRef.current.getBoundingClientRect() );
      setBoxSize({ height, width });
  }, [name])

  return (
    <>
      <blockquote
        className="blockquote text-end"
        style={ { display: 'flex'}}
      >
        <p className="mb-1"> {id} </p>
        <footer ref={ pRef } className="blockquote-footer"> {name} </footer>
      </blockquote>
      <code> {JSON.stringify(boxSize)} </code>
    </>    
  )
}
