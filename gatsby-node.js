// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */
// const axios = require('axios');

// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

// console.log("process.env.API_URL: ", process.env.API_URL);

// exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
//   const endpoints = ["work", "about"]

//   // const node = {
//   //     name: pokemon.name,
//   //     type: pokemon.type,
//   //     id: createNodeId(`Pokemon-${pokemon.name}`),
//   //     internal: {
//   //       type: "Pokemon",
//   //       contentDigest: createContentDigest(pokemon),
//   //     },
//   //   }

//   function workSchema(data) {
//     let nodeContent = JSON.stringify(data);
//     let digest      = createContentDigest(data);

//     return {
//       id: data.id,
//       client: {
//         company: data.client.company,
//         logo: data.client.logo,
//         industry: data.client.industry
//       },
//       type: data.type,
//       title: data.title,
//       description: data.description,
//       image: data.image,
//       url: data.url,
//       roles: data.roles,
//       internal: {
//         type: `Work`,
//         content: nodeContent,
//         contentDigest: digest,
//       }
//     }
//   }

//   // {
//   //     "id": "work_1",
//   //     "client": {
//   //       "company": "Hub Group",
//   //       "logo": "https://domain.com/logo.svg",
//   //       "industry": "Logistics & Transportation"
//   //     },
//   //     "type": "mobile_app",
//   //     "title": "Powering an Enterprise Fleet",
//   //     "description": "I led a small design team and collaborated with internal and external developers to launch a best-in-class mobile app for a fleet of over 5,000 drivers. I introduced and led design-thinking principles  that transformed the way the app was designed and built to enable drivers to work faster and smarter.",
//   //     "image": "https://domain.com/image.jpg",
//   //     "url": "https://www.domain.com/portfolio",
//   //     "roles": [
//   //       "Product Strategy",
//   //       "Product Management",
//   //       "Design Lead"
//   //     ]
//   //   },

//   endpoints.forEach(endpoint => {
//     console.log("endpoint: ", endpoint);
//     axios.get(`${process.env.API_URL}/${endpoint}`)
//       .then(function(response) {
//         // console.log("then response: ", response);
//         importData(response.data, endpoint);
//       })
//       .catch(function(error) {
//         console.log("Error: ", error);
//       })
//       .then(function () {
//         console.log("ended...");
//       });
//   });

//   function importData(data, model) {
//     console.log("data: ", data);

//     if (Array.isArray(data)) {
//       console.log("ARRAY");
//       data.forEach(item => {
//         console.log("item.id: ", item.id);
//         createNode(item, model)
//       })
//     } else {
//       console.log("NOT ARRAY");
//       // createNode(data);
//     }
//   }

//   function createNode(data, model) {
//     console.log("model: ", model);
//     let node;

//     if (model === "work") {
//       node = workSchema(data);
//       console.log("node: ", node);
//     } else if (model === "about") {
//       console.log("about!")
//     }

//     actions.createNode(node);
//   }
// }

// // exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
// //   const pokemons = [
// //     { name: "Pikachu", type: "electric" },
// //     { name: "Squirtle", type: "water" },
// //   ]
// //   pokemons.forEach(pokemon => {
// //     const node = {
// //       name: pokemon.name,
// //       type: pokemon.type,
// //       id: createNodeId(`Pokemon-${pokemon.name}`),
// //       internal: {
// //         type: "Pokemon",
// //         contentDigest: createContentDigest(pokemon),
// //       },
// //     }
// //     actions.createNode(node)
// //   })
// // }



// // exports.sourceNodes = async ({ actions }) => {
// //   const { createNode } = actions
// //   // Download data from a remote API.
// //   const data = await fetch(process.env.API_URL)

// //   // Process data and create nodes.using a custom processDatum function
// //   data.forEach(datum => createNode(processDatum(datum)))
// //     // You're done, return.
// //   return
// // }


// // exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
// //   const { createNode } = actions
// //   // Data can come from anywhere, but for now create it manually
// //   const myData = {
// //     key: 123,
// //     foo: `The foo field of my node`,
// //     bar: `Baz`,
// //   }
// //   const nodeContent = JSON.stringify(myData)
// //   const nodeMeta = {
// //     id: createNodeId(`my-data-${myData.key}`),
// //     parent: null,
// //     children: [],
// //     internal: {
// //       type: `MyNodeType`,
// //       mediaType: `text/html`,
// //       content: nodeContent,
// //       contentDigest: createContentDigest(myData),
// //     },
// //   }
// //   const node = Object.assign({}, myData, nodeMeta)
// //   createNode(node)
// // }
// // console.log("process.env.API_URL: ", process.env.API_URL);
