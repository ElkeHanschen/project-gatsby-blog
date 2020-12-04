import React from "react"
import { graphql, Link } from "gatsby"

const SingleTagIndex = ({data, pageContext}) => {
    // check if single tags are passed into site
    // console.log(pageContext)
    const { posts, tagName } = pageContext

    return (
        <div>
            <div style={{fontFamily: 'avenir'}}>
                Posts tagged with: {`${tagName}`}
            </div>
            <div>
                <ul>
                    {posts.map((post, index) => {
                        return (
                            <li key={index}>
                                <Link to={post.frontmatter.path}>
                                    {post.frontmatter.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default SingleTagIndex
