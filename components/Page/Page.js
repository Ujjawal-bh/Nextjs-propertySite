import { BlockRenderer } from "components/BlockRenderer/BockRenderer";
import { MainMenu } from "components/MainMenu/MainMenu";
import Head from "next/head";

export const Page = (props) => {
  console.log("PageProps: ", props);
    return(
        <div>
          <Head>
            <title>{props.seo.title}</title>
            <meta name="description" content={props.seo.metaDesc}></meta>
          </Head>
        <MainMenu items={props.mainMenuItems} callToActionLabel={props.callToActionLabel} callToActionDestination={props.callToActionDestination}/>
        <BlockRenderer blocks={props.blocks}></BlockRenderer>
      </div>
    )
}