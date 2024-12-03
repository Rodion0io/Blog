function paginationBar(currentPage, pages, groupSize){

    let pagination = document.createElement('ul');
    pagination.className += 'pagination';

    pagination.innerHTML = '';

    const startPage = Math.floor((currentPage - 1) / groupSize) * groupSize + 1;
    const endPage = Math.min(startPage + groupSize - 1, pages);

    let leftItem = document.createElement('li');
    leftItem.className += 'pagination-item left-item';
    leftItem.textContent = '<'

    pagination.appendChild(leftItem);

    for (let i = startPage; i <= endPage; i++) {
        const item = document.createElement('li');
        item.className = 'pagination-item';
        if (i === currentPage) {
            item.classList.add('selected-pagination');
        }
        item.textContent = i;
        item.id = i;
        pagination.appendChild(item);
    }

    let rightItem = document.createElement('li');
    rightItem.className += 'pagination-item right-item';
    rightItem.textContent = '>'

    pagination.appendChild(rightItem);

    return pagination;
}

export default paginationBar;