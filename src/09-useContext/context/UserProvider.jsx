import { useState } from 'react';
import { UserContext } from './UserContext';

// const user = {
//   id: 123,
//   name: 'Matt Moriat',
//   email: 'nicaarts@proton.me'
// }

export const UserProvider = ( { children } ) => {

  //no es recomendable utilizar setUser de esta forma ya que les da mucho poder a los componentes, esta es el dispatch del useState
  const [user, setUser] = useState();

  return (
    // <UserContext.Provider value={ { hola: 'Mundo', user: user } }>
    <UserContext.Provider value={ { user, setUser } }>
        { children }
    </UserContext.Provider>
  )
}

