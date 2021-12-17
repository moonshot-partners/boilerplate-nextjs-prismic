import { View } from '@go1d/go1d';
import React from 'react';
import { SlatItem } from "./slat-item";

export function SlatBlog (blogs) {

  const lastBlogs = blogs.blogs.slice(1, blogs.blogs.length);
    return (
      <>
          {
              lastBlogs?.map((blog, index) =>
                <View element="a"
                      href={ `blog/${ blog.uid }` } 
                      key={ `blog_${ index }` }
                      padding={ [1, 3] }
                      marginBottom={ [4, 0] }
                      css={ {
                        "&:hover": {
                          backgroundColor: "#F1F3F3",
                          borderRadius: "32px",
                          width: "fit-content"
                        },
                        "&:active, &:focus ": {
                          border: "2px solid #317481",
                          borderRadius: "32px",
                          width: "fit-content"
                        }
                      } }>
                          <SlatItem { ...blog }/>
                </View>
              )
          }
      </>
    )
};

