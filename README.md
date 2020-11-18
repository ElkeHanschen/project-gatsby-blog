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

#### Video tutorial - first step

- set up project folder
- install Gatsby `npm install --global gatsby@next gatsby-cli@next`
- cd into the project
- run `yarn` (`npm install` should also suffice)
- run `gatsby develop` if you've done everything right, you should now run the project on `http://localhost:8000/`

#### Video tutorial - second step

- run `npm install --save gatsby-source-filesystem@next gatsby-transformer-remark@next`
- on project root level, create a gatsby config file `touch gatsby-config.js`
- open file and configure as seen in code
- your project should still run
