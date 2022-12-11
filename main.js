const items = document.querySelector('.items');
const input = document.querySelector('.footer_input');
const addBtn = document.querySelector('.footer_button');

function onAdd(){
    // 1. 입력 텍스트를 받아옴
    const text = input.value;
    if(text === ''){
        input.focus();
        return;
    }
    //2. 새로운 아이템 생성
    const item = createItem(text);
    //3. items 컨테이너 안에 새로 만든 아이템 추가
    items.appendChild(item);
    //+ 새로 추가된 아이템으로 스크롤링
    item.scrollIntoView({block: 'center'});
    //4. input 초기화
    input.value = '';
    input.focus();
}

function createItem(text){
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class','item_row');

    const item = document.createElement('div');
    item.setAttribute('class','item');

    const name = document.createElement('span');
    name.setAttribute('class','item_name');
    name.innerText = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class','item_delete');
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.addEventListener('click', ()=>{
        items.removeChild(itemRow);
    })

    const itemDivider = document.createElement('li');
    itemDivider.setAttribute('class','item_divider');

    item.appendChild(name);
    item.appendChild(deleteBtn);

    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);
    return itemRow;
}

addBtn.addEventListener('click', ()=>{
    onAdd();
})

input.addEventListener('keypress', (event)=>{
    if(event.key === 'Enter'){
        onAdd();
    }
})