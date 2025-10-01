import {useEffect, useState} from "react";

/**
 * @param { string } url
 * @param {{}} options
 * @returns {{loading: boolean, data: any, error: any}}
 */
function useFetch(url, options = {}) {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url, {
            ...options,
            headers: {
                'Accept' : 'application/json; charset=UTF-8'
            }
        })
            .then((response) => {
                if(!response.ok) {
                    throw new Error('HTTP error' + response.status)
                }
                return response.json()
            })
            .then((dataJson) => setData(dataJson))
            .catch((error) => setError(error))
            .finally(() => setLoading(false))

    }, [url, options]);

    return {loading, data, error}
}

export default useFetch