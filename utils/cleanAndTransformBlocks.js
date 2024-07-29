import {v4 as uuid} from "uuid"
export const cleanAndTransformBlocks = (blocksJson) => {
const blocks = JSON.parse(JSON.stringify(blocksJson));

const assignIds = (b) => {
b.forEach(block => {
    block.id = uuid();
    if(block.innerBlocks?.length){
        assignIds(block.innerBlocks)
    }
    
});
};
assignIds(blocks);
return blocks;
}