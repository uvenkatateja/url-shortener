import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ShortenUrlPage = () => {
    const { url } = useParams();

    useEffect(() => {
        if (url) {
            // Redirect to backend API endpoint
            window.location.href = import.meta.env.VITE_BACKEND_URL + `/api/urls/${url}`;
        }
    }, [url]);
  return <p>Redirecting...</p>;
}

export default ShortenUrlPage