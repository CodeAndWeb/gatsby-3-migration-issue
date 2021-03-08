exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions
    const dogData = [
        {
            name: "Fido",
            breed: "Sheltie",
        },
        {
            name: "Sparky",
            breed: "Corgi",
        },
    ]

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
    
    dogData.forEach(dog => {
        const data = {
            path: `/${dog.name}`,
            component: require.resolve(`./src/templates/dog-template.js`),
            context: {dog},
        };
        createPage(data)
    })
}
