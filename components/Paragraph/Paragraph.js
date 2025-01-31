import { getTextAlign } from "utils/Fonts"
import {relativeToAbsoluteUrls} from "../../utils/relativeToAbsoluteuUrls"

export const Paragraph = ({textAlign="left", textColor, content}) => {
   
    return (
    <p 
    className = {`max-w-5xl mx-auto ${getTextAlign(textAlign)}`} style ={{color:textColor}} 
    dangerouslySetInnerHTML={ {__html: relativeToAbsoluteUrls(content)}}
    />

)};