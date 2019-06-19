import React from "react"
import {StaticQuery, graphql } from "gatsby"

export default function Template({data}) {
  // const { markdownRemark } = data // data.markdownRemark holds our post data
  // const { frontmatter, html } = markdownRemark
  return (
  // {  <div className="blog-post-container">
  //     <div className="blog-post">
  //       <h1>{frontmatter.title}</h1>
  //       <h2>{frontmatter.date}</h2>
  //       <div
  //         className="blog-post-content"
  //         dangerouslySetInnerHTML={{ __html: html }}
  //       />
  //     </div>
  //   </div>}

  <StaticQuery
   query={graphql`
     query{
  allMarkdownRemark{
    edges{
      node{
        frontmatter{
          title
        }
      }
    }
  }
}
   `}
   render={data => (
     <ul>
       {data.allMarkdownRemark.edges.map((e)=>
         <li key={Math.random()} className="card purple darken-1">
         <div className="card-content white-text">{e.node.frontmatter.title}</div></li>)}
     </ul>
   )
 }
 />
  )
}

// export const pageQuery = graphql`
// query{
//   markdownRemark {
//     html
//     frontmatter {
//       date(formatString: "MMMM DD, YYYY")
//       path
//       title
//       content
//     }
//   }
// }
//
// `
