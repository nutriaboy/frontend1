//process.env.REACT_APP_API_URL 
const baseUrl = 'http://localhost:8080/api';


const fetchSinToken = async(endpoint, data, method = 'GET') => {

    const url = `${baseUrl}/${endpoint}`;

    try {
        if ( method === 'GET' ){
            const resp = await fetch(url);
            return await resp.json();
        } else {
            const resp = await fetch( url, {
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( data )
            });
            return await resp.json();
        }
        
    } catch (error) {
        console.warn('No se establecion conexión con el Backend');
        return false;
    }

}


export {
    fetchSinToken,
}