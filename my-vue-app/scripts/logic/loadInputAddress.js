import { loadAddressSearchDatasToComponent } from "./loadAddressSearchToComponent";
import { createInputBlock } from "../components/createInputBlock";

export function loadInputAddress() {
    const parentBlock = document.querySelector('.address-block');
    let currentInput = document.getElementById('0');
    let inputsId = ['0'];
    let currentCount = 1;

    currentInput.addEventListener('change', async (event) => {
        let lastBlock = event.target;
        if (lastBlock.classList.contains('input')) {
            let selectedField = lastBlock.options[lastBlock.options.selectedIndex];

            if (selectedField.value === '') {
                
                let delInutsArray = inputsId.slice(inputsId.indexOf(lastBlock.id) + 1, inputsId.length + 1);
                delInutsArray.forEach(delEl => {
                    let removerElement = document.getElementById(delEl);
                    let parenti = removerElement.closest('.address');
                    if (parenti) {
                        parentBlock.removeChild(parenti);
                    }
                });

                
                inputsId = inputsId.filter((a) => !delInutsArray.includes(a));

                
                if (inputsId.length === 1) {
                    currentCount = 1;
                }
            } 
            else {
                
                let delInutsArray = inputsId.slice(inputsId.indexOf(lastBlock.id) + 1, inputsId.length + 1);
                delInutsArray.forEach(delEl => {
                    let removerElement = document.getElementById(delEl);
                    let parenti = removerElement.closest('.address');
                    if (parenti) {
                        parentBlock.removeChild(parenti);
                    }
                });

                
                inputsId = inputsId.filter((a) => !delInutsArray.includes(a));

                
                let datasArr = await loadAddressSearchDatasToComponent(selectedField.dataset.objid);

                if (datasArr !== null) {
                    
                    let uniqueId = `${currentCount}`;
                    currentCount++; 

                    let newInputBlock = createInputBlock(
                        'input-block-filter address',
                        datasArr.objectLevel,
                        datasArr.objectLevelText,
                        'text',
                        null,
                        uniqueId, 
                        false,
                        true,
                        datasArr.addressListName,
                        null,
                        'input',
                        datasArr.addressListGuid,
                        datasArr.addressParObj
                    );

                    currentInput = newInputBlock;
                    inputsId.push(uniqueId); 
                    parentBlock.appendChild(newInputBlock);

                    newInputBlock.addEventListener('change', async (event) => {
                        await eventner(event);
                    });
                }
            }

            console.log(inputsId);
        }
    });

    async function eventner(event) {
        let lastBlock = event.target;
        if (lastBlock.classList.contains('input')) {
            let selectedField = lastBlock.options[lastBlock.options.selectedIndex];

            if (selectedField.value === '') {
                
                let delInutsArray = inputsId.slice(inputsId.indexOf(lastBlock.id) + 1, inputsId.length + 1);
                delInutsArray.forEach(delEl => {
                    let removerElement = document.getElementById(delEl);
                    let parenti = removerElement.closest('.address');
                    if (parenti) {
                        parentBlock.removeChild(parenti);
                    }
                });

                
                inputsId = inputsId.filter((a) => !delInutsArray.includes(a));

                
                if (inputsId.length === 1) {
                    currentCount = 1;
                }
            } 
            else {
                
                let delInutsArray = inputsId.slice(inputsId.indexOf(lastBlock.id) + 1, inputsId.length + 1);
                delInutsArray.forEach(delEl => {
                    let removerElement = document.getElementById(delEl);
                    let parenti = removerElement.closest('.address');
                    if (parenti) {
                        parentBlock.removeChild(parenti);
                    }
                });

                
                inputsId = inputsId.filter((a) => !delInutsArray.includes(a));

                
                let datasArr = await loadAddressSearchDatasToComponent(selectedField.dataset.objid);

                if (datasArr !== null) {
                    
                    let uniqueId = `${currentCount}`;
                    currentCount++;

                    let newInputBlock = createInputBlock(
                        'input-block-filter address',
                        datasArr.objectLevel,
                        datasArr.objectLevelText,
                        'text',
                        null,
                        uniqueId,
                        false,
                        true,
                        datasArr.addressListName,
                        null,
                        'input',
                        datasArr.addressListGuid,
                        datasArr.addressParObj
                    );

                    currentInput = newInputBlock;
                    inputsId.push(uniqueId);
                    parentBlock.appendChild(newInputBlock);

                    newInputBlock.addEventListener('change', async (event) => {
                        await eventner(event);
                    });
                }
            }

            console.log(inputsId);
        }
    }

    function deleteBeforeInputs() {

    }
}