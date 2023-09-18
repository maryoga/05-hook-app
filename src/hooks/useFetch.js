import { useEffect, useState } from 'react';

// cada vez que el url cambie se dispara este useEffect, si el url es el mismo, no hace nada
export const useFetch = ( url ) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })

    const getFetch = async() => {

        setState({
            ...state,
            isLoading: true,            
        })

        const resp = await fetch(url);
        const data = await resp.json();
        
        // cuando ya tenemos la respuesta, llamamos al setState (debo mandar todas las propiedades al mandar el setState a un objeto)
        setState({
            data,
            isLoading: false,
            hasError: null,
        })
    }

    useEffect(() => {
        getFetch();
    }, [url])

  return {
    data:       state.data,
    isLoading:  state.isLoading,
    hasError:   state.hasError,
  };
}
