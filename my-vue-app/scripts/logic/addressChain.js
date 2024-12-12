// import addressChainRequest from '../requests/addressChainRequest'
import {addressChainRequest} from '../requests/addressChainRequest'

export async function addressChain(addressId){
    let dataAddress;
    addressChainRequest(addressId).then(data => {
        dataAddress = (data.map(el => el['text'])).join('');
        return dataAddress;
    }).catch(error => {
        console.log(error);
    })

    

    
    //!!!!!!!!!//!!!!!!!!!//!!!!!!!!!//!!!!!!!!!
}