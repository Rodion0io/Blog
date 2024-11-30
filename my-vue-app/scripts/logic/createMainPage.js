import mainPage from "../components/mainPage/mainPage";
import filter from "../components/filter/filter";
import post from "../components/post/post";

function createMainPage(){
    mainPage();
    filter();
    let arr = [{'name': 'охламон', 'createTime': '19.12.2022 17:15', 'communityName': 'Стажировка',
    'postName': 'Выселю', 'tags': [{'id':'rdhiu43', 'name':'18+'}, {'id':'dsgosj2', 'name':'eda'}], 'readingTime': 7,
    'countComment': 4}, {'name': 'охламон', 'createTime': '19.12.2022 17:15', 'communityName': 'Стажировка',
    'postName': 'Выселю', 'tags': [{'id':'rdhiu43', 'name':'18+'}, {'id':'dsgosj2', 'name':'eda'}], 'readingTime': 7,
    'countComment': 4}]
    arr.forEach(elem => post(elem));
    

    // console.log(filterComponent);

    // let block = document.querySelector('.form-container');

    // block.appendChild(filterComponent);
    
    
}

export default createMainPage;