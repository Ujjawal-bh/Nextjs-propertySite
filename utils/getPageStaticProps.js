import { gql } from "@apollo/client"
import client from "client"
import { mapMainMenuItems } from "./mapMainMenuItems"
import { cleanAndTransformBlocks } from "./cleanAndTransformBlocks"


export const getPageStaticProps = async (context) =>{
    const uri = context.params?.slug ? `${context.params.slug.join('/')}`: "/"

    const {data} = await client.query({
        query: gql`
        query PageQuery($uri: String!) {
          nodeByUri(uri: $uri) {
           
            ... on Page {
              id
              blocks(postTemplate: false)
              seo {
                title
                metaDesc
              }
            }
            ... on Property {
              id
              title
              blocks(postTemplate: false)
              seo {
                title
                metaDesc
              }
            }
          }
          acfOptionsMainMenu {
            mainMenu {
              callToActionButton {
                label
                destination {
                  ... on Page {
                    id
                    uri
                  }
                }
              }
              menuItems {
                menuItem {
                  destination {
                    ... on Page {
                      id
                      uri
                    }
                  }
                  fieldGroupName
                  label
                }
                items {
                  destination {
                    ... on Page {
                      id
                      uri
                    }
                  }
                  label
                }
              }
            }
          }
        }
        `,
        variables: {
            uri,
            
        }
      });
      const blocks = cleanAndTransformBlocks(data.nodeByUri.blocks);
  console.log("BLOCK FROM CLEAN AND TRANSFORM BLOCKS ---------", blocks);
    return {
    props: {
      seo: data.nodeByUri.seo,
      mainMenuItems: mapMainMenuItems(
        data.acfOptionsMainMenu.mainMenu.menuItems
        ),
        callToActionLabel: data.acfOptionsMainMenu.mainMenu.callToActionButton.label,
      callToActionDestination: data.acfOptionsMainMenu.mainMenu.callToActionButton.destination.uri,
      blocks,
      
    
     
    }
    }
}