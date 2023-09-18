import React from 'react'
// import { memo} from 'react';

// obtenemos un value, lo estoy desestructurando, si no tendriamos props
export const Small = React.memo(( { value } ) => {

    console.log('Rendering again ;( ');

  return (
    <small> { value } </small>
  )
})
