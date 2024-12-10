import { loadAddressSearchDatasToComponent } from "./loadAddressSearchToComponent";
import { createInputBlock } from "../components/createInputBlock";

export function loadInputAddress(){
    const parentBlock = document.querySelector('.address-block');
    let currentInput = document.getElementById('input-subject');
    let inputsId = ['input-subject'];

    currentInput.addEventListener('change', async (event) => {
        let lastBlock = event.target;
        if (lastBlock.classList.contains('input')){
            // console.log(lastBlock.dataset.objid);
            let selectedField = lastBlock.options[lastBlock.options.selectedIndex];

            // console.log(lastBlock);
            // console.log(inputsId.indexOf(lastBlock.id));
 
            // console.log(selectedField);

            if (selectedField.value === ''){
                let delInutsArray = inputsId.slice(inputsId.indexOf(lastBlock.id) + 1, inputsId.length + 1);
                // console.log(delInutsArray);
                delInutsArray.forEach(delEl => {
                    let removerElement = document.getElementById(delEl);
                    let parenti = removerElement.closest('.address')
                    console.log(removerElement);
                    parentBlock.removeChild(parenti);
                    inputsId.filter((a) => a.id !== delEl);
                })

            }
            else{

                let datasArr = await loadAddressSearchDatasToComponent(selectedField.dataset.objid);

                if (datasArr !== null){
                    let newInputBlock = createInputBlock('input-block-filter address', datasArr.objectLevel,
                    datasArr.objectLevelText, 'text', null, `input-${datasArr.objectLevel}`,
                    false, true, datasArr.addressListName, null, 'input', datasArr.addressListGuid, datasArr.addressParObj);

                    currentInput = newInputBlock;

                    inputsId.push(`input-${datasArr.objectLevel}`);

                    // console.log(inputsId)

                    // console.log(currentInput);

                    parentBlock.appendChild(newInputBlock);

                    currentInput.addEventListener('change', async (event) => {
                        await eventner(event);
                    })
                }

                
            }

            // console.log(parentBlock);/
        
        }
        
    })

    async function eventner(event){
        let lastBlock = event.target;
        if (lastBlock.classList.contains('input')){
            // console.log(lastBlock.dataset.objid);
            let selectedField = lastBlock.options[lastBlock.options.selectedIndex];
 

            if (selectedField.value === ''){
                let delInutsArray = inputsId.slice(inputsId.indexOf(lastBlock.id) + 1, inputsId.length + 1);
                // console.log(delInutsArray);
                delInutsArray.forEach(delEl => {
                    let removerElement = document.getElementById(delEl);
                    let parenti = removerElement.closest('.address')
                    console.log(removerElement);
                    parentBlock.removeChild(parenti);
                    inputsId.filter((a) => a.id !== delEl);
                })

            }
            else{

                let datasArr = await loadAddressSearchDatasToComponent(selectedField.dataset.objid);

                console.log(datasArr);

                if (datasArr !== null || datasArr !== undefined){
                    let newInputBlock = createInputBlock('input-block-filter address', datasArr.objectLevel,
                    datasArr.objectLevelText, 'text', null, `input-${datasArr.objectLevel}`,
                    false, true, datasArr.addressListName, null, 'input', datasArr.addressListGuid, datasArr.addressParObj);

                    currentInput = newInputBlock;

                    inputsId.push(`input-${datasArr.objectLevel}`);

                    // console.log(inputsId)

                    // console.log(currentInput);

                    parentBlock.appendChild(newInputBlock);

                    currentInput.addEventListener('change', async (event) => {
                        await eventner(event);
                    })
                }
            }

            
        }
    }

    function deleteBeforeInputs(){

    }
}