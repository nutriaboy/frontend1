import Swal from "sweetalert2";

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

const fetchConToken = async(endpoint, data, method = 'GET') => {

    const url = `${baseUrl}/${endpoint}`;
    const token = localStorage.getItem('token') || '';

    try {
        if ( method === 'GET' ){
            const resp = await fetch(url, {
                headers: {
                    'x-token': token
                }
            });
            return await resp.json();
        } else {
            const resp = await fetch( url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'x-token': token
                },
                body: JSON.stringify( data )
            });
            return await resp.json();
        }
        
    } catch (error) {
        const msg = 'No se pudo establecer conexión con el Servidor'
        Swal.fire('Error', msg, 'error');
        console.warn(msg);
        return false; 
    }

}


export {
    fetchSinToken,
    fetchConToken
}