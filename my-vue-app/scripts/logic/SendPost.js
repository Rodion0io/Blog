import { addPostInCommunityRequest } from "../requests/addPostInCommunityRequest";
import { addPostRequest } from "../requests/addPostRequest";
import { checkLifeCycle } from "./checkLifeCycle";
import { getUserRoleCommunityRequest } from "../requests/getUserRoleCommunityRequest";


export function sendPost(){
    let token = localStorage.getItem('token');
    let button = document.querySelector('.create-new-post');

    // let address = document.querySelectorAll('.address');

    // console.log(address[0].children[1].options[address[0].children[1].options.selectedIndex].dataset.objid);

    // address.forEach(el => {
    //     console.log(el.children[1]);
    // })

    //astBlock.options[lastBlock.options.selectedIndex]

    button.addEventListener('click', async () => {
        let namePost = document.getElementById('input-name').value;
        let timeRead = document.getElementById('input-start-time').value;
        let community = document.getElementById('input-groups');
        let tags = document.querySelector('.tags');
        let linkPhoto = document.getElementById('input-photo-id').value;
        let text = document.querySelector('.textarea-create-post').value;
        let address = document.querySelectorAll('.address');
        let firstAddressId = null;

        // console.log(address);

        
        for (let i = address.length - 1; i > 0; i--){
            let currentAdress = address[i];
            console.log(currentAdress);
            let selectedInput = currentAdress.querySelector('select');
            if (selectedInput){
                let selectedOption = selectedInput.options[selectedInput.selectedIndex];
                if (selectedOption && selectedOption.id) {
                    firstAddressId = selectedOption.id;
                    break;
                }
            }
        }

        // if (address.length === 1 && address[address[address.length - 1].options[address[address.length - 1].children[1].options.selectedIndex].dataset.objid] === ''){
        //     firstAddressId = null
        // }
        // else {

        //     let a = address[address.length - 1].options;

        //     if (a !== undefined){
        //         firstAddressId = address[address[address.length - 1].options[address[address.length - 1].children[1].options.selectedIndex].dataset.objid]
        //     }
        //     else{
        //         console.log(address[address.length - 2])
        //         // [address[address.length - 2].children[1].options.selectedIndex].dataset.objid
        //     }
        //     // console.log(address[address.length])

        //     // firstAddressId = address[address[address.length].options[address[address.length].children[1].options.selectedIndex].dataset.objid];



        //     // if (firstAddressId === ''){
        //     //     firstAddressId = address[address[address.length - 1].options[address[address.length - 1].children[1].options.selectedIndex].dataset.objid];
        //     // }
        // }

        
        
        // let lastBlockAddress = document.querySelector('.create-new-post');

        // console.log(tags.selectedOptions[0].id)
        
        // console.log(typeof(tags.selectedOptions));

        let communityId = community.options[community.options.selectedIndex].id;

        console.log(communityId);

        let tagsArray = [...tags.selectedOptions].map(el => el.id);

        
        

        // console.log(tagsArray);

        let datas = {"title": namePost, "description": text, "readingTime": Number(timeRead), "image": linkPhoto !== '' ? linkPhoto : null, "addressId": firstAddressId, "tags": tagsArray};

        console.log(datas);

        // console.log(await getUserRoleCommunityRequest(communityId, token) === "Administrator");
        
        if (token !== null && checkLifeCycle(token)){
            // if (community.id !== null || community.id !== undefined){
            if (communityId !== ""){
                if (await getUserRoleCommunityRequest(communityId, token) === "Administrator"){
                    addPostInCommunityRequest(communityId, token, datas).then(data => console.log(data)).catch(error => console.log(error));
                    // window.location.pathname = '/';
                }
                else{
                    alert("Вы не являетесь администратором данного сообщества!");
                }
            }
            else{
                // console.log(namePost);
                // console.log(text)
                // console.log(timeRead)
                // console.log(linkPhoto)
                // console.log(null)
                // console.log(tags)
                addPostRequest(token, datas).then(data => console.log(data)).catch(error => console.log(error));
                // window.location.pathname = '/';
            } 
        }
        else{
            alert("Вы не авторизованы");
        }
    })
}