import { getAddressSearch } from "./getAddressSearch";

export async function loadAddressSearchDatasToComponent(parentObjectId = null){
    let addressList = await getAddressSearch(parentObjectId);
    let addressListName = [''];
    let addressListGuid = [''];
    let addressParObj = [''];
    let objectLevel = addressList[0]['objectLevel'];
    let objectLevelText = addressList[0]['objectLevelText'];

    for (let i = 0; i< addressList.length; i++){
        addressListName.push(addressList[i]['text']);
        addressListGuid.push(addressList[i]['objectGuid']);
        addressParObj.push(addressList[i]['objectId']);
    }

    return {addressListName, addressListGuid, addressParObj, objectLevel, objectLevelText};
}