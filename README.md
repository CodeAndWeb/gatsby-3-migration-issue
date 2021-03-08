# Demonstrates an issue I currently have in Gatsby 3

Reproduce:

    git clone https://github.com/CodeAndWeb/gatsby-3-migration-issue.git
    yarn install

Everything is ok from the start:

    gatsby develop --verbose

Visit http://localhost:8000/___graphql

![](graphql-ok.png  | width=200)

Edit `gatsby-node.js` and uncomment the following lines:

    const result = await graphql(`
    query {
          allMdx {
            nodes {
              slug
            }
          }
    }
    `)
    console.log(JSON.stringify(result, null, 4))

Re-start gatsby and visit http://localhost:8000/___graphql

![](graphql-context-missing.png  | width=200)

