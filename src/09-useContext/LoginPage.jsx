import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const LoginPage = () => {
  // desestructuramos del useContext todo lo que me interesa en este LoginPage 
  const { user, setUser } = useContext( UserContext );

    return (
      <>
        <h1>LoginPage</h1>
        <hr />

        <pre>
          { JSON.stringify( user, null, 3 ) }
        </pre>

        <button
          className='btn btn-primary'
          onClick={ () =>  setUser( { id: 123, name: 'John', email: 'john@google.com'} ) }      
        >
          Set user
        </button>

      </>
    );
  };