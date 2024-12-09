import { loadAddressSearchDatasToComponent } from "./loadAddressSearchToComponent";
import { createInputBlock } from "../components/createInputBlock";

export function loadInputAddress(){
    const parentBlock = document.querySelector('.address');
    // let lastBlock = parentBlock.querySelector('.input:last-of-type');

    // console.log(lastBlock);

    parentBlock.addEventListener('change', async (event) => {
        let lastBlock = event.target;
        if (lastBlock.classList.contains('input')){
            // console.log(lastBlock.dataset.objid);
            let selectedField = lastBlock.options[lastBlock.options.selectedIndex];
            let datasArr = await loadAddressSearchDatasToComponent(selectedField.dataset.objid);

            let newInputBlock = createInputBlock('input-block-filter address', datasArr.objectLevel,
            datasArr.objectLevelText, 'text', null, `input-${datasArr.objectLevel}`,
            false, true, datasArr.addressListName, null, 'input', datasArr.addressListGuid, datasArr.addressParObj);

            parentBlock.appendChild(newInputBlock);
        
        }
        
    })

    
}