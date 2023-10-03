import {useParams} from 'react-router-dom'
import useFetch from './useFetch';
import {useHistory} from 'react-router-dom'
import Swal from 'sweetalert2';
const BlogDetails = () => {
    const {id} = useParams()
    const {error,isLoading,data:blog} = useFetch(`http://localhost:3001/blogs/${id}`)
    const history = useHistory();

    // delete
    const handleDelete = (id)=>{

        Swal.fire({
            title: 'Delete Blog',
            text: 'Are you sure you want to delete this blog?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel'
          }).then((result) => {

            if (result.isConfirmed) {
              // User confirmed, proceed with deletion
              fetch(`http://localhost:3001/blogs/${id}`, {
                method: "DELETE",
                headers: { 'Content-Type': 'application/json' }
              })
                .then(response => {
                  if (!response.ok) {
                    throw new Error('Network response was not ok');
                  }
                  return response.json();
                })
                .then(data => {
                  console.log('Blog deleted:', data);
                 history.push('/')
                })
                .catch(error => {
                  console.error('There was an error:', error);
                });
            }
          });
    }
    return ( <div className='blog-details '>
        <h1>Blog Details - {id} </h1>
        {isLoading && 
            <div  class="flex my-52 items-center mx-auto justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    <div class="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">loading...</div>
            </div>
           
            }
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

       <article>
        {
            blog &&
            
           <div className="border broder-gray-500 p-5 shadow">
             
             <h1 className="text-red-700 justify-between">
                    {blog.title}
            </h1>
            <p className="lead">
                {blog.body}
            </p>
            <small className="text-green-500 underline flex justify-start">
                {blog.author}
            </small>
            <div>
                <button onClick={()=> handleDelete(blog.id)}>Delete Button</button>
            </div>
           </div>
         
        }
       </article>
    </div> );
}
 
export default BlogDetails;