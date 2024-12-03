// import addressChainRequest from '../requests/addressChainRequest'
import {addressChainRequest} from '../requests/addressChainRequest'

export function addressChain(addressId){
    let dataAddress;
    addressChainRequest(addressId).then(data => {
        dataAddress = (data.map(el => el['text'])).join(' ');
    }).catch(error => {
        console.log(error);
    })

    return dataAddress;
    //!!!!!!!!!//!!!!!!!!!//!!!!!!!!!//!!!!!!!!!
}