import {useEffect, useState} from "react"
import axios from "axios";

const useFetch = (url) =>{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Headers":"Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
  
        }
      };
      

    useEffect(() => {
      const fetchData = async () =>{
        setLoading(true);
        try {
            const res= await axios.get(url,config)
            setData(res.data);
        } catch (err) {
            setError(err);
        }
        setLoading(false);     
      };    
      fetchData();
    }, [url]);
    
    const reFetch = async () =>{
        setLoading(true);
        try {
            const res= axios.get(url)
            setData((await res).data);
        } catch (err) {
            setError(err);
        }
        setLoading(false);     
    };

    return {data,loading,error,reFetch};
};

export default useFetch;