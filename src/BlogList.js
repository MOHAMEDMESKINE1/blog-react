import {Link} from 'react-router-dom'

const BlogList = ({blogs,title}) => {

return ( <div className="blog-list">
                <h1 className="font-bold text-3xl underline mb-5">{title}</h1>

                {blogs.map(blog => (
                    <div className="blog-preview hover:border-2 border-gray-200 rounded-md " key={blog.id} >
                        <div className="flex justify-between">
                        </div>
                        <Link to={`/blogs/${blog.id}`}>
                            <h2 className="font-bold">{ blog.title }</h2>
                            <p>Written by { blog.author }</p>
                        </Link>
                    </div>
              ))}
    </div> );
}
 
export default BlogList;