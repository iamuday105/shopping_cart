import React, {useEffect, useState} from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';

function Home() {
  const API_URL = "https://fakestoreapi.com/products"

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
     setLoading(true);
    try{
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
      // console.log("post",posts);
     
    }
    catch(err){
      console.log("product fetching error");
    } 
    setLoading(false);

  }

  useEffect(() =>{
    fetchProductData();
  },[])


  return (
    <div>
    {
      loading? <Spinner/> :
      posts.length > 0 ?
      (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[88vh]">
          {
            posts.map( (post) => (
              <Product key = {post.id} post={post}/>
            ))
          }
        </div>
      ) :
      (
        <div>
        <p>
           No Data found
        </p>
        </div>
      )
    
      
    }
    </div>
  )
   
}
export default Home