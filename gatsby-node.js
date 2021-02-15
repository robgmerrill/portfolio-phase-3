/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

async function createWorkPages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityWork(filter: { slug: { current: { ne: "null" } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const workEdges = (result.data.allSanityWork || {}).edges || []

  workEdges.forEach(edge => {
    const id = edge.node.id
    const slug = edge.node.slug.current
    const path = `/work/${slug}/`

    reporter.info(`Create work page ${path}`)

    createPage({
      path,
      component: require.resolve("./src/templates/work.js"),
      context: { id },
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createWorkPages(graphql, actions, reporter)
}
