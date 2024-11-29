export function createInputBlock(inputBlockClass, forName, labelValue, inputType,
    placeholder = null, inputId, isRequired = false, isList = false, options = null, dataListId = null, inputClass){

    
    let inputBlock = document.createElement('div');
    inputBlock.className = inputBlockClass;

    let lableInput = document.createElement('label');
    lableInput.className = 'lable';
    lableInput.setAttribute('for', forName);
    lableInput.textContent = labelValue;

    let input = document.createElement('input');
    input.className = inputClass;
    input.setAttribute('type', inputType);
    input.setAttribute('name', forName);
    if (inputType === 'date'){
        input.setAttribute('min', "1924-01-01");
        input.setAttribute('max', new Date());
    }
    if (placeholder !== null){
        input.setAttribute('placeholder', placeholder);
    }
    if (isList){

        // let dataList = document.createElement('select');
        let dataList = document.createElement('datalist');
        dataList.id = dataListId;

        options.forEach(option => {
            let optionElement = document.createElement('option');
            optionElement.value = option;
            dataList.appendChild(optionElement);
        })

        input.setAttribute('list', dataListId);
        inputBlock.appendChild(dataList);
    }

    

    input.required = isRequired;
    input.id = inputId;


    inputBlock.appendChild(lableInput);
    inputBlock.appendChild(input);

    return inputBlock;
}