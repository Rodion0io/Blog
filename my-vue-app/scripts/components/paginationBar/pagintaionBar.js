function paginationBar(currentPage, groupSize, totalPages) {

    let pagBlock = document.querySelector('.pagination-cover');

    
    pagBlock.innerHTML = '';

    
    let pagination = document.createElement('ul');
    pagination.className = 'pagination';

    
    const startPage = Math.max(Math.floor((currentPage - 1) / groupSize) * groupSize + 1, 1);
    const endPage = Math.min(startPage + groupSize - 1, totalPages);

    
    let leftItem = document.createElement('li');
    leftItem.className = 'pagination-item left-item';
    leftItem.textContent = '<';
    leftItem.addEventListener('click', () => {
        
        if (currentPage > 1) {
            
            if (currentPage > startPage) {
                paginationBar(currentPage - 1, groupSize, totalPages);
            } else {
                
                paginationBar(currentPage - 1, groupSize, totalPages);
            }
        }
    });
    pagination.appendChild(leftItem);

    for (let i = startPage; i <= endPage; i++) {
        const item = document.createElement('li');
        item.className = 'pagination-item';
        if (i === currentPage) {
            item.classList.add('selected-pagination');
        }
        item.textContent = i;
        item.id = i;
        item.addEventListener('click', () => {
            
            if (i !== currentPage) {
                
                if (i === endPage) {
                    paginationBar(i + 1, groupSize, totalPages);
                }
                
                else if (i === startPage) {
                    paginationBar(i - 1, groupSize, totalPages);
                }
                
                else {
                    paginationBar(i, groupSize, totalPages);
                }
            }
        });
        pagination.appendChild(item);
    }

    let rightItem = document.createElement('li');
    rightItem.className = 'pagination-item right-item';
    rightItem.textContent = '>';
    rightItem.addEventListener('click', () => {

        if (currentPage < totalPages) {
    
            if (currentPage < endPage) {
                paginationBar(currentPage + 1, groupSize, totalPages);
            } else {
        
                paginationBar(currentPage + 1, groupSize, totalPages);
            }
        }
    });
    pagination.appendChild(rightItem);

    pagBlock.appendChild(pagination);
}

export default paginationBar;