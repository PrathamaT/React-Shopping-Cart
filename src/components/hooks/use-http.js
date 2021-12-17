import { useState,useCallback } from 'react';

// Custom hook to make http calls
const useHttp = () => {
    const [error, setError] = useState(null);

    const sendRequest =useCallback(async (requestConfig,applyData) => {
        setError(null);
        try {
            const response = await fetch(
                requestConfig.url, {
                    headers:requestConfig.headers
                });

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();
            applyData(data);
        } catch (err) {
            setError(err.message || 'Something went wrong!')
        }
    },[])

    return {
        error,
        sendRequest
    }
}

export default useHttp
