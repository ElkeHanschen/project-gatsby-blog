<p align="center">
    <img src="src/images/avatar_elle.jpeg" alt="Avatar Elle" height="100" width="100"/>
</p>
<h1 align="center">
  Gatsby Blog
</h1>

## Readme is still a WIP and will be extended along coding

### What is this about?

- a Gatsby site that dynamically renders Markdown files from the local filesystem into HTML
- GraphQL is used to query posts to display results on an index page
- linking between posts
- grouping posts by tags
- deploying project via Github Pages

### This Repo is based on workong with

- [egghead video course](https://egghead.io/courses/build-a-blog-with-react-and-markdown-using-gatsby)
- [Gatsby Hello World Repository](https://github.com/gatsbyjs/gatsby-starter-hello-world)
- [egghead GitHub Repo to this](https://github.com/eggheadio-projects/build-a-blog-with-react-and-markdown-using-gatsby-notes), where you would also be able to follow along in a probably more professional way XD

### How to run this?

- clone this repo
- cd into project
- `npm install`
- run `Gatsby develop`
- should now run on `http://localhost:8000/`

### Important heads-up

While coding the first try in one go, using `gatsby clean` inbetween more than once saved my butt.
If errors, try that before freaking out.
Also, for the times you need to restart the server, quitting the running process with `control c` worked better than following pop-ups on localhost. Just so you know.

### Step by step documentation what happened when - WIP - value of this will be figured out along the way

#### Tutorial step 1 - project set-up

- set up project folder
- install Gatsby `npm install --global gatsby@next gatsby-cli@next`
- cd into the project
- run `yarn` (`npm install` should also suffice)
- run `gatsby develop` if you've done everything right, you should now run the project on `http://localhost:8000/`

#### Tutorial step 2 - install plugins for transforming markdown, create `gatsby-config.js`

- run `npm install --save gatsby-source-filesystem@next gatsby-transformer-remark@next`
- on project root level, create a gatsby config file `touch gatsby-config.js`
- open file and configure as seen in code
- your project should still run

#### Tutorial step 3 - create and format markdown directories and files

- cd into `src/pages`
- create sub directories that will then contain the markdown files, pattern here is `YYYY-MM-DD`

```
mkdir 2020-11-16-post-one
mkdir 2020-11-17-post-two
mkdir 2020-11-18-post-three
```

- cd into single directories and create single `index.md`s in each of those directories
- edit all (in this example) 3 `index.md` files and create some frontmatter that will be used to create the posts, see code in md files
- your project should still run

#### Tutorial step 4 - GraphiQL Browser to build queries for Gatsby

- in this part of the tutorial, nothing is happening in the code base
- it's an explanation what GraphiQL is and how it works with searching for queries and keywords in Documentation Explorer
- GraphiQL is an in-browser IDE to explore data for building queries for Gatsby sites
- running your project with `gatsby develop` gives you two URLs, one of them this one `http://localhost:8000/___graphql`
- run your project and check this URL out, in Documentation Explorer try query searches with `siteMetadata` and `allMarkdownRemark`
- example `siteMetadata` (execute with `command enter`):

```
{
    site {
      siteMetadata
    }
}
```

- gives us all the stuff that has been configured in `gatsby-config.js`
- example `allMarkdownRemark` (execute with `command enter`):

```
{
	allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          path
          date
          excerpt
        }
      }
    }
  }
}
```

- gives us all the stuff that has been setup via frontmatter in all 3 `index.md`s
- [egghead video](https://egghead.io/lessons/gatsby-use-the-graphiql-browser-to-build-queries-for-gatsby)

#### Tutorial step 5 - create home layout component with a GraphQL query

- cd into `src/pages`
- here, open the `index.js` (that should have been there, as a default, by Gatsby)
- `import { StaticQuery, graphql } from 'gatsby'` to bring data in
- refactor the basic default component to `TitleAndDescription`, `Header` and `Layout` components
- inside the `TitleAndDescription` component, deconstruct data `title` and `description` from props; this data is rendered in `Header` component
- inside the `return` of `Header`, return the `StaticQuery` component (syntax you see in there is query syntax), one of the props that it takes is the actual graph query
- inside the `return` of `Layout`, return the `Header` component
- your localhost page should still run and look different now
  add some inline styles (inline for now, following the tutorial)

#### Tutorial step 6 - clean up `index.js`, create Header component

- clean up `index.js`
- extract `Header` and `TitleAndDescription` components
- cd into `src/pages`
- create new `components` directory: `mkdir components`
- create a `Header.js` in `components` directory: `touch components/Header.js`
- adapt `index.js` and `Header.js` as seen in code
- your project should still run

#### Tutorial step 7 - add list of posts to the blog site with GraphQL page query

in `index.js`

- remove the `StaticQuery` import from `import`, as we will query on page level
- write the query (using the query syntax), use the `query` keyword, as we get this keyword from GraphQL
- switch to `http://localhost:8000/___graphql` to check/testwrite your query
- in Documentation Explorer, browse through the "root"query/search for `allMarkdownRemark`
  - there, click `MarkdownRemarkConnection`
  - there you have "edges", which is the pathes/nodes in the file system, click `MarkdownRemarkEdge` next to it
  - there, next to "node", click `MarkdownRemark`
  - see "frontmatter", gives us all of the frontmatter options, click on `MarkdownRemarkFrontmatter` next to it
  - you should now see all of the options:

```
title: String
path: String
date(
    difference: String
    formatString: String
    fromNow: Boolean
    locale: String
): Date
tags: [String]
excerpt: String
```

- if you try this little code snippet in the GraphQL browser window (hit `command enter`), you get all the information the blog site has, which should look similar to this:

```
{
  "data": {
    "allMarkdownRemark": {
      "edges": [
        {
          "node": {
            "frontmatter": {
              "title": "My second Post! There!",
              "path": "/post-two",
              "date": "2020-11-17",
              "excerpt": "A preview of my second post"
            }
          }
        },
        {
          "node": {
            "frontmatter": {
              "title": "My first Post! Ha!",
              "path": "/post-one",
              "date": "2020-11-16",
              "excerpt": "A preview of my first post"
            }
          }
        },
        {
          "node": {
            "frontmatter": {
              "title": "My third Post! Duh!",
              "path": "/post-three",
              "date": "2020-11-18",
              "excerpt": "A preview of my third post"
            }
          }
        }
      ]
    }
  },
  "extensions": {}
}
```

- back to code, add the following query to `index.js`:

```
{
	allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          path
          date
        }
      }
    }
  }
}
```

- to now bring the query data into our `Layout` component, within the component `console.log(props)` to see the props that we can pass into
  - inspect the (still running) blog page in the browser
  - the query data is showing up under the `data` key
  - this means, that we can destructure `data` from props inside of our `Layout` component
- within `Layout` component `console.log(edges)`
  - inspect the (still running) blog page in the browser
  - you should now see something similar to this:

```
(3) [{…}, {…}, {…}]
    0:
        node:
            frontmatter:
            date: "2020-11-18" path: "/post-three" title: "My third Post! Duh!" __proto__: Object
        __proto__: Object
    __proto__: Object
    1:
        node:
            frontmatter: {title: "My second Post! There!", path: "/post-two", date: "2020-11-17"} __proto__: Object
        __proto__: Object
    2:
        node:
            frontmatter: {title: "My first Post! Ha!", path: "/post-one", date: "2020-11-16"} __proto__: Object
        __proto__: Object
    length: 3__proto__: Array(0)
```

- back to code, in `index.js`, adapt the `Layout` component to map over single nodes (edges), pass single edge in
- from each edge we want to get to the frontmatter; destructure it
- return a ´<div>´ with the frontmatter title
- back to blog page on localhost, we should now have a list of our posts showing (meaning, your site should still run), but they are not in order, fix it
- go back to the GraphQL browser, in Documentation Explorer, go (back) to `allMarkdownRemark`
- here, you can see that it takes some arguments, one of them being "sort"
- we can sort on "fields" and we can provide an "order"
- back to code, in `index.js`, add `sort` to the query:

```
    query HomepageQuery {
        allMarkdownRemark(
            sort: {order: DESC, fields: [frontmatter___date]}
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        path
                        date
                    }
                }
            }
        }
    }
```

- add some inline styling (for now)
- your blog page should still run and should show posts in descending order (latest first)
