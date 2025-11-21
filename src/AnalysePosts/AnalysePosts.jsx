import { useState,useEffect } from 'react';
import Input from './Input';
import Result from './Result';

function AnalysePosts() {
    const [queryURL, setQueryURL] = useState('');
    const [result, setResult] = useState('');
    const [onLoad, setOnLoad] = useState(false);

    const baseURL = 'https://0ywry6cexj.execute-api.ap-southeast-2.amazonaws.com/'
    useEffect(() => {
        if (!queryURL) return;
        setOnLoad(true);
        const fetchData = async () => {
          try {
            console.log(baseURL + "?url=" + queryURL)
            const response = await fetch(baseURL + "?url=" + queryURL);
            const data = await response.json();
            setResult(data);
            console.log("Data fetched")
          } catch (err) {
            console.error('Error fetching data:', err);
          } finally{
            setOnLoad(false);
          }
        };
    
        fetchData();
      }, [queryURL]);

    return (
        <>
        <h1>Analyse Posts</h1>
        <h3>Get the statistics for the recent (up to 20) posts</h3>
        <Input onSubmit={setQueryURL}/>
        <Result onLoad = {onLoad} data={result} />
        </>
    );
    }

export default AnalysePosts;