import { useCounter, useFetch } from '../hooks';
import { LoadingEpisode, Episode } from '../03-examples';

export const Layout = () => {

  const { counter, increment } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/episode/${ counter }`);

  const { id, name } = !!data && data;
  
  return (
    <>
      <h1>Rick and Morty Serie</h1>
      <hr />
      {
        isLoading
          ? <LoadingEpisode />
          : <Episode id={ id } name={ name } />
      }
        <button className="btn btn-primary" disabled= { isLoading } onClick={ () => increment() }>
          Next quote
        </button>
    </>
  );
};