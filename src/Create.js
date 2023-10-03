import {useState} from 'react'
import {useHistory} from 'react-router-dom'

const Create = () => {

    const [title,setTitle] = useState('Antigone');
    const [body,setBody] = useState('Antigon is the best');
    const [author,setAuthor] = useState('');
    const [isLoading,setIsLoading] = useState(false)

    const history = useHistory();

    const handleSubmit =(e)=>{
        e.preventDefault()

        const blog = {title,author,body}
         setIsLoading(true)

        fetch('http://localhost:3001/blogs',{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(blog)
          
        }).then(_=> {
            console.log('new blog added ...')

            // history.go(-1)
            history.push('/')
            setIsLoading(false)
        })
        console.log(blog)

    }
    return ( <div classNameName=" container m-5 create">
            <h2 classNameName="text-blue-700 mb-5">Add a New  Blog</h2>

            {isLoading && 
            <div  class="flex my-52 items-center mx-auto justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    <div class="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">loading...</div>
            </div>
           
            }
        
         <div className="grid">
            <div className="grid-col-2 ">
            <form className="mt-5" onSubmit={handleSubmit}>
               <div>
                    {/* {title}
                    {body}
                    {author} */}
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="title" id="title"  value={title} onChange={(e)=> setTitle(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  required />
                    <label forHtml="title" className="peer-focus:font-medium absolute text-1xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Blog Title</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <textarea  rows={4} cols={50} name="body" id="body" value={body} onChange={(e)=> setBody(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />
                    <label forHtml="body" className="peer-focus:font-medium absolute text-1xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Body</label>
                </div>
                    <div className="relative z-0 w-full mb-6 group">

                        <label for="author" class="block mb-2 text-1xl font-medium text-gray-900 dark:text-white">Select an author</label>
                        <select id="author" onChange={(e)=> setAuthor(e.target.value)}  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option disabled selected>Choose an author </option>
                            <option value="Mario Smith" >Mario Smith</option>
                            <option value="Angelica Saly">Angelica Saly</option>
                            <option value="Franco de Young">Franco de Young</option>
                            <option value="Melany Clane">Melany clane</option>
                        </select>
                    </div>
              
                        <div className='flex justify-center items-center '>

                            {!isLoading && <button type="submit" className="text-white bg-gradient-to-r     from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Add Blog</button>}
                           
                            {isLoading && <button type="submit" className="text-white bg-gradient-to-r     from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Adding blog ...</button>}
                        </div>

                </form>
            </div>
         </div>


    </div> );
}
 
export default Create;
