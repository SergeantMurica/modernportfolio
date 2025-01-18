import React from "react";
import { useParams } from "react-router-dom";
import blogData from "../../utils/blogData.jsx";
import {Container, Grid2} from "@mui/material";

const BlogPost = () => {
    const { id } = useParams();
    const post = blogData.blogs.find((item) => item.id === parseInt(id));

    if (!post) return <h2>Post not found</h2>;

    return (
        <div>
            <Container className="page-container">
                <Grid2 container>

                    {/*Title*/}
                    <Grid2 item size={12}>
                        <div className="heading-text">
                            <span></span>
                            {post.title}
                        </div>
                    </Grid2>

                    {/*Post*/}
                    <Grid2 item size={12}>
                        <Grid2 container spacing={1} className="blog-post">

                            {/*Author/Date*/}
                            <Grid2 item size={12}>
                                <div className="blog-post-meta">
                                    By {post.author} on {new Date(post.date).toLocaleDateString()}
                                </div>
                            </Grid2>

                            {/*Image*/}
                            <Grid2 item size={12}>
                                <div>
                                    <img src={post.image} alt={post.title}  className="blog-post-image"/>
                                </div>
                            </Grid2>

                            {/*Blog*/}
                            <Grid2 item size={12}>
                                <div className="blog-post-content">
                                    {post.content.map((paragraph, index) => (
                                        <div key={index} className="blog-paragraph">
                                            {paragraph}
                                        </div>
                                    ))}
                                </div>
                            </Grid2>


                        </Grid2>
                    </Grid2>


                </Grid2>
            </Container>
        </div>
    );
};

                    export default BlogPost;
