import comment from "../comment/comment";

export function treeComment(block, data){
    

    data.forEach(el => {
        comment(data, block);
    })
}

