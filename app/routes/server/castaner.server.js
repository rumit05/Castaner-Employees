export async function getCheckoutProfileId(graphql) {
    const response = await graphql(
      `
        query checkoutProfiles {
            checkoutProfiles(first: 10) {
            edges {
                node {
                id
                name
                isPublished
                }
            }
            }
        }
      
      `
    );
    return response.json();
}
  
export async function setStyling(graphql, id) {
    const response = await graphql(
        `mutation ChangeColorScheme1($checkoutBrandingInput: CheckoutBrandingInput!, $checkoutProfileId: ID!) {
            checkoutBrandingUpsert(checkoutBrandingInput: $checkoutBrandingInput, checkoutProfileId: $checkoutProfileId) {
              checkoutBranding {
               designSystem {
                colors {
                  schemes {
                    scheme1 {
                      primaryButton {
                        background
                        hover {
                            background
                        }
                      }
                    }
                    scheme2 {
                      base {
                        border
                      }
                      primaryButton {
                        background
                      }
                    }
                  }
                }
               }
              }
              userErrors {
                field
                message
              }
            }
          }
          `,{
            variables: {
                "checkoutProfileId": id,
                "checkoutBrandingInput": {
                  "designSystem": {
                    "colors": {
                      "schemes": {
                        "scheme1": {
                          "primaryButton": {
                            "background": "#000000",
                            "hover": {
                                "background": "#000000"
                            }
                          }
                        },
                        "scheme2": {
                          "base": {
                            "border": "#DADADA"
                          },
                          "primaryButton": {
                            "background": "#000000"
                          }
                        }
                      }
                    }
                  }
                }
              }
          }
    )
    return response.json();
}


export async function setFocusBorderColor(graphql, id) {
  const response = await graphql(
      `mutation ChangeGlobalColors($checkoutBrandingInput: CheckoutBrandingInput!, $checkoutProfileId: ID!) {
        checkoutBrandingUpsert(checkoutBrandingInput: $checkoutBrandingInput, checkoutProfileId: $checkoutProfileId) {
          checkoutBranding {
           designSystem {
            colors {
              global {
                accent
                decorative
              }
            }
           }
          }
          userErrors {
            field
            message
          }
        }
      }
      `,{
        variables: {
          "checkoutProfileId": id,
          "checkoutBrandingInput": {
            "designSystem": {
              "colors": {
                "global": {
                  "accent": "#9b9b9b",
                  "decorative": "#E32C2B" 
                }
              }
            }
          }
        }  
      }
  )
  return response.json();
}

export async function changeOrderSummaryScheme(graphql, id) {
  const response = await graphql(
    `mutation ChangeOrderSummaryScheme($checkoutBrandingInput: CheckoutBrandingInput!, $checkoutProfileId: ID!) {
      checkoutBrandingUpsert(checkoutBrandingInput: $checkoutBrandingInput, checkoutProfileId: $checkoutProfileId) {
        checkoutBranding {
          customizations {
            orderSummary {
              colorScheme
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }
    `,{
      variables: {
        "checkoutProfileId": id,
        "checkoutBrandingInput": {
          "customizations": {
            "orderSummary": {
              "colorScheme": "COLOR_SCHEME2"
            }
          }
        }
      } 
    }
  );
  return response.json();
}

export async function getfunctionid(graphql) {
  const response = await graphql(
    `
    query {
      shopifyFunctions(first: 50) {
        nodes {
          app {
            title
          }
          apiType
          title
          id
        }
      }
    }
    `
  );
  return response.json();
}

export async function CrateDiscoutCode(graphql) {
  const response = await graphql(
    `
    mutation {
      discountAutomaticAppCreate(automaticAppDiscount: {
        title: "DESCUENTO PARA EMPLEADOS",
        functionId: "5a72e1f7-4556-4a09-8cea-b519635107fe",
        startsAt: "2024-01-09T12:00:00Z"
      }) {
         automaticAppDiscount {
          discountId
         }
         userErrors {
          field
          message
         }
      }
    }
    
    `
  );
  return response.json();
}



// export async function changeHeadingFont(graphql, id) {
//   const response = await graphql(
//       `mutation checkoutBrandingUpsert($checkoutBrandingInput: CheckoutBrandingInput!, $checkoutProfileId: ID!) {
//         checkoutBrandingUpsert(checkoutBrandingInput: $checkoutBrandingInput, checkoutProfileId: $checkoutProfileId) {
//           checkoutBranding {
//             designSystem {
//               typography {
//                 primary {
//                   base {
//                     sources
//                   }
//                 }
//               }
//             }
//           }
//           userErrors {
//             field
//             message
//           }
//         }
//       }
//       `,{
//         variables: {
//           "checkoutProfileId": id,
//           "checkoutBrandingInput": {
//             "designSystem": {
//               "typography": {
//                 "primary": {
//                   "shopifyFontGroup": {
//                     "name": "Assistant"
//                   }
//                 }
//               }
//             }
//           }
//         }
        
//       }
//   )
//   return response.json();
// }



