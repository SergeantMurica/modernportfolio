import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Homepage from "../../pages/Home/Home.jsx";
import Portfolio from "../../pages/Portfolio/Portfolio.jsx";
import Resume from "../../pages/Resume/Resume.jsx";
import Blog from "../../pages/Blog/Blog.jsx";
import Contact from "../../pages/Contact/Contact.jsx";
import NavigationBar from "./NavigationBar.jsx";
import NavigationDrop from "./NavigationDrop.jsx";
import BlogPost from "../Blog/BlogPosts.jsx";
import useIsMobile from "../../hooks/IsMobile.jsx";



const Header = () => {

    const isMobile = useIsMobile(768);

    return (
        <div>
            <div>
                    {isMobile ? <NavigationDrop/> : <NavigationBar/>}
            </div>
            <div>
                <Routes>
                    <Route exact path="/" element={<Homepage/>}/>
                    <Route exact path="/Portfolio" element={<Portfolio/>}/>
                    <Route exact path="/Resume" element={<Resume/>}/>
                    <Route exact path="/Blog" element={<Blog/>}/>
                    <Route exact path="/Contact" element={<Contact/>}/>
                    <Route path="/blog/:id" element={<BlogPost />} />
                </Routes>
            </div>
        </div>
    )
        ;
};

export default Header;
