import mainPage from "../components/mainPage/mainPage";
import filter from "../components/filter/filter";
import post from "../components/post/post";

function createMainPage(){
    mainPage();
    filter();
    post({'name': 'охламон', 'createTime': '19.12.2022 17:15', 'communityName': 'Стажировка',
'postName': 'Проблема с процессором'});

    // console.log(filterComponent);

    // let block = document.querySelector('.form-container');

    // block.appendChild(filterComponent);
    
    
}

export default createMainPage;