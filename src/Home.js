import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const url = 'http://localhost:3001/blogs'
   const {error,isLoading,data:blogs} = useFetch(url)  
    return ( 
    <>
    
        <div className="container">
          
            <div className="grid ">
                <div>
                    {
                        error &&
                        <div class="my-52 border-2 text-2xl border-red-800 flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                            <svg class="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                            </svg>
                          
                            <div className=" ">
                                <span class="font-medium ">Danger alert!</span> {error}
                            </div>
                        </div>
                    }
                    {blogs && <BlogList blogs={blogs} title="All Blogs !"/>}
                </div>
               
                


            </div>
            {isLoading && 
            <div  class="flex my-52 items-center mx-auto justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            
             <div class="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
                loading...
            </div>
                    
            </div>
           
            }
          
        </div>
    </> );
}
 
export default Home;