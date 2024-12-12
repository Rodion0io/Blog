export function createInputBlock(inputBlockClass, forName, labelValue, inputType,
    placeholder = null, inputId, isRequired = false, isList = false,
     options = null, dataListId = null, inputClass, selectFieldId = null, objId = null, defSel = null){

        //objId пришлось добавить для создания input для адресов;

    
    let inputBlock = document.createElement('div');
    inputBlock.className = inputBlockClass;

    let lableInput = document.createElement('label');
    lableInput.className = 'lable';
    lableInput.setAttribute('for', forName);
    lableInput.textContent = labelValue;

    inputBlock.appendChild(lableInput);

    if (isList){

        let dataList = document.createElement('select');
        dataList.className = inputClass;
        dataList.id = dataListId;
        dataList.setAttribute('name', forName);

        for (let i = 0; i < options.length; i++){
           let optionElement = document.createElement('option');
           optionElement.value = options[i];
           optionElement.textContent = options[i];
           if (selectFieldId !== null){
                optionElement.id = selectFieldId[i];
           }
           if (objId !== null){
                optionElement.dataset.objid = objId[i];
           }
           if (options[i] === defSel){
            optionElement.selected = true;
           }
           dataList.appendChild(optionElement);
        }

        dataList.required = isRequired;
        dataList.id = inputId;
        // dataList.setAttribute('list', dataListId);
        inputBlock.appendChild(dataList);

        
    }
    else{
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
        input.required = isRequired;
        input.id = inputId;
        inputBlock.appendChild(input);
    }


    return inputBlock;
}