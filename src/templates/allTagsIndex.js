import React from "react"
import { graphql, links } from "gatsby"

const AllTagsTemplates = ({data, pageContext}) => {
    // check if tags are passed into site
    console.log(pageContext)
    return (
        <div>
            <div>
                tags here
            </div>
        </div>
    )
}

export default AllTagsTemplates