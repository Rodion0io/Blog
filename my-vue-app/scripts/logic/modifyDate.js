export function modifyDate(date){
    let arr = date.slice(0,9).split('-');
    if (arr[2].length === 1){
        arr[2] = `0${arr[2]}`;
    }

    return arr.join('-');
}   