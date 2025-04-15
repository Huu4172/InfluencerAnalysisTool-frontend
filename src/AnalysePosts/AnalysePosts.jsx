import { useState,useEffect } from 'react';
import Input from './Input';
import Result from './Result';

function AnalysePosts() {
    const [queryURL, setQueryURL] = useState('');
    const [result, setResult] = useState('');

    const baseURL = 'https://0ywry6cexj.execute-api.ap-southeast-2.amazonaws.com/'
    useEffect(() => {
        if (!queryURL) return;
    
        const fetchData = async () => {
          try {
            console.log(baseURL + "?url=" + queryURL)
            const response = await fetch(baseURL + "?url=" + queryURL);
            const data = await response.json();
            setResult(data);
          } catch (err) {
            console.error('Error fetching data:', err);
          }
        };
    
        fetchData();
      }, [queryURL]);

    return (
        <>
        <h1>Analyse Posts</h1>
        <h3>Get the statistics for the recent (up to 20) posts</h3>
        <Input onSubmit={setQueryURL} />
        <Result data={result} />
        </>
    );
    }

export default AnalysePosts;