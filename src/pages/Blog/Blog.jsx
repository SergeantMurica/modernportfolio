import React, { useState } from 'react';
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Container,
    Grid2,
    Grow,
    Tab,
    Tabs
} from "@mui/material";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import blogData from "../../utils/blogData.jsx";
import './Blog.css';





const Blog = () => {
    const [tabValue, setTabValue] = useState("All");
    const navigate = useNavigate();

    const handleBlogClick = (blogId) => {
        navigate(`/blog/${blogId}`);
    };

    return (
        <div>
            <Container className="page-container">
                <Grid2 container>

                    {/* Title */}
                    <Grid2 item size={12}>
                        <div className="heading-text">
                            <span></span>
                            Blog
                        </div>
                    </Grid2>

                    {/* Tabs */}
                    <Grid2 item size={12}>
                        <Grid2 container spacing={1}>
                            <Grid2 item size={12}>
                                <Tabs
                                    value={tabValue}
                                    indicatorColor="white"
                                    className="custom-tabs"
                                    onChange={(event, newValue) => setTabValue(newValue)}
                                >
                                    <Tab
                                        label="All"
                                        value="All"
                                        className={tabValue === "All" ? "custom-tab-active" : "custom-tab-inactive"}
                                    />
                                    {[...new Set(blogData.blogs.map((item) => item.tag))].map((tag) => (
                                        <Tab
                                            key={tag}
                                            label={tag}
                                            value={tag}
                                            className={tabValue === tag ? "custom-tab-active" : "custom-tab-inactive"}
                                        />
                                    ))}
                                </Tabs>
                            </Grid2>
                        </Grid2>
                    </Grid2>

                    {/* Blogs */}
                    <Grid2 item size={12}>
                        <Grid2 container spacing={1}>
                            {blogData.blogs.map((blog) => (
                                <>
                                    {tabValue === blog.tag || tabValue === "All" ? (
                                        <Grid2 item size={{ xs: 12, sm: 6, md: 4, lg: 4 }} className="blog-card">
                                            <Grow in timeout={1000}>
                                                <Card onClick={() => handleBlogClick(blog.id)}>
                                                    <CardActionArea>
                                                        <CardMedia
                                                            className="blog-card-media"
                                                            image={blog.image}
                                                            title={blog.title}
                                                        />
                                                        <CardContent>
                                                            <>
                                                                <div className="blog-card-title">{blog.title}</div>
                                                                <div className="blog-meta">
                                                                    By {blog.author} on {new Date(blog.date).toLocaleDateString()}
                                                                </div>
                                                                <div className="blog-card-excerpt">{blog.excerpt}</div>
                                                            </>
                                                        </CardContent>
                                                    </CardActionArea>
                                                </Card>
                                            </Grow>
                                        </Grid2>
                                    ) : null}
                                </>
                            ))}
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Container>
        </div>
    );
};

export default Blog;
