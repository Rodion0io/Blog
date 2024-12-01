function paginationBar(){

    let pagination = document.createElement('ul');
    pagination.className += 'pagination';

    let leftItem = document.createElement('li');
    leftItem.className += 'pagination-item left-item';
    leftItem.textContent = '<'

    pagination.appendChild(leftItem);

    let paginationArray = [1,2,3];

    paginationArray.forEach(el => {
        let item = document.createElement('li');
        if (el === 1){
            item.className += 'pagination-item selected-pagination';
        }
        else{
            item.className += 'pagination-item';
        }
        item.textContent = el;
        item.id = el;
        pagination.appendChild(item);
    })

    let rightItem = document.createElement('li');
    rightItem.className += 'pagination-item right-item';
    rightItem.textContent = '>'

    pagination.appendChild(rightItem);

    return pagination;
}

export default paginationBar;