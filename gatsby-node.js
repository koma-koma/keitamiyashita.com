const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const createPagesByCategory = (category) => {
        if (category.posts.length > 0) {
            category.posts.forEach((post, index) => {
                const previousPostId = index === 0 ? null : category.posts[index - 1].id
                const nextPostId = index === category.posts.length - 1 ? null : category.posts[index + 1].id
                createPage({
                    path: post.fields.slug,
                    component: category.template,
                    context: {
                        id: post.id,
                        previousPostId,
                        nextPostId,
                    },
                })
            })
        }
    }

    // Define a template for blog post
    const blogPost = path.resolve(`./src/templates/blog-post.js`)
    const worksPost = path.resolve(`./src/templates/works-post.js`)

    // Get all markdown blog posts sorted by date
    const result = await graphql(
        `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            frontmatter {
              draft
            }
            fields {
              slug
              collection
            }
          }
        }
      }
    `
    )

    if (result.errors) {
        reporter.panicOnBuild(
            `There was an error loading your blog posts`,
            result.errors
        )
        return
    }

    const posts = result.data.allMarkdownRemark.nodes

    // Create blog posts pages
    // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
    // `context` is available in the template as a prop and as a variable in GraphQL

    const info = []
    const works = []
    const blog = []
    const categories = [
        { name: 'info', posts: info, template: worksPost },
        { name: 'works', posts: works, template: worksPost },
        { name: 'blog', posts: blog, template: blogPost },
    ]

    if (posts.length > 0) {
        categories.forEach((category) => {
            posts.forEach((post) => {
                if (
                    (post.frontmatter.draft || false) === false &&
                    post.fields.collection === category.name
                ) {
                    category.posts.push(post);
                }
            })
            createPagesByCategory(category);
        })
    }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    if (node && node.internal && node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode })
        const parent = getNode(node.parent)

        createNodeField({
            name: `slug`,
            node,
            value,
        })

        createNodeField({
            node,
            name: `collection`,
            value: parent.sourceInstanceName,
        })
    }
}

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions

    // Explicitly define the siteMetadata {} object
    // This way those will always be defined even if removed from gatsby-config.js

    // Also explicitly define the Markdown frontmatter
    // This way the "MarkdownRemark" queries will return `null` even when no
    // blog posts are stored inside "content/blog" instead of returning an error
    createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      category: String
      date: Date @dateformat
      tags: [String]
      draft: Boolean
    }

    type Fields {
      slug: String
      collection: String
    }
  `)
}