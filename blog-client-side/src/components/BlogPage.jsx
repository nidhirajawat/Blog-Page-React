import React, { useEffect, useState } from 'react'
import Blogcards from './Blogcards';
import Pagination from './Pagination';
import Category from './Category';
import Slider from './Sidebar';
import Sidebar from './Sidebar';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12; //blog per page....
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);
    useEffect(() =>{
        async function fetchBlogs() {
            let url = `http://localhost:5000/blogs?pages=${currentPage}&limit=${pageSize}`;

            //filter by category..
            if(selectedCategory){
                url +=`&category={selectedCategory}`;
            }

            const response = await fetch(url);
            const data = await response.json();
           
            setBlogs(data);
        }
        fetchBlogs();
    }, [currentPage, pageSize, selectedCategory])
    //Page changing button....
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    //page-handle-button..
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
        setActiveCategory(category);
    }
    //console.log(blogs)
  return (
    <div>
        {/* categories-section */}
        <div>
           <Category onSelectCategory={handleCategoryChange} 
           selectedCategory={selectedCategory} activeCategory={activeCategory} />
        </div>

        {/* blog-cards-section */}
        <div className='flex flex-col lg:flex-row gap-12'>
            <Blogcards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize} />
             <div>
                <Sidebar/>
             </div>
        </div>

        {/* pagination-section */}
        <div>
           <Pagination onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs} pageSize={pageSize} />
        </div>
    </div>
  )
}

export default BlogPage