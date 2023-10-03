import { useEffect, useState } from "react";

const useFetch = (url) =>{
    const [data,setData] = useState(null)
    const [isLoading,setIsLoading]=useState(true);
    const [error,setError] = useState(null)
   
    useEffect(()=>{
        const abortCont  = new AbortController();

        fetch(url,{signal:abortCont.signal})
       .then(response =>{
        if(!response.ok){
             throw Error('Something went worng!',response)
        }else{
          return  response.json()
        }
       })
       .then(data =>{

        console.log(data)
        setData(data)
        setIsLoading(false)
        setError(null)

       })
       .catch(err => {

        if(err.name==="AbortController"){
            console.log("fetch aborted");
        }else{
          setError(err.message)
        setIsLoading(false)
        }

       })
       return ()=> abortCont.abort();
    },[url])

    return {data,isLoading,error}
}
export default useFetch;