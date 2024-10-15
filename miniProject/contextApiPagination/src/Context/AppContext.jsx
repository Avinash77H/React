import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

// step-1
export const AppContext = createContext();

export default function AppContextProvider({children}){
  const [loading,setLoading] = useState(false)
  const [posts,setPosts] = useState([])
  const [page,setPage] = useState(1);
  const [totalPages,setTotalPages] = useState(null)

  // data fill

  async function fetchBlogPosts(page = 1) {
    setLoading(true);
    console.log('page is:',page)
    let url = `${baseUrl}?pages=${page}`
    
    console.log('inside fetchBlogPosts')
    console.log(url)
    try {
      const result = await fetch(url);
      const data = await result.json();
      console.log(data);
      setPage(data.page)
      setPosts(data.posts);
      setTotalPages(data.totalPages)
    } catch (error) {
      alert('something went wrong')
      setPage(1);
      setPosts([]);
      setTotalPages(null)
    }
    setLoading(false);
  }

  function handlePageChange(page){
    setPage(page);
    fetchBlogPosts(page)
    console.log('handlepagechange function called','page is:',page)
  }

  const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    handlePageChange
  }

  //step-2
  return <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>
}