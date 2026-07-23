import React from "react";
import { Helmet } from "react-helmet";
import BlogCard from "@/components/common/ui/BlogCard";
import { blogPosts } from "@/constants/blog";

export default function Blog() {
  return (
    <>
      {/* Helmet */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog</title>
      </Helmet>

      {/* Content */}
      <section className="blog py-3 my-3">
        <div className="container">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={post.title}
              {...post}
              isLast={index === blogPosts.length - 1}
            />
          ))}

          <div className="row py-5 text-center justify-content-center position-relative blog-joins">
            <div className="col-md-8">
              <p className="h3 home-head">Join Our Community</p>
              <h1 className="fw-bold py-3">Subscribe to our newsletter</h1>
              <p>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and <br /> praising pain was born and I will
                give you a complete.
              </p>
              <div className="position-relative mb-4 blog-contact py-3">
                <input
                  className="form-control rounded-pill text-white"
                  type="text"
                  placeholder="Enter Your Email"
                />
                <button className="btn position-absolute rounded-pill">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
