const items = document.querySelector('.items');
const input = document.querySelector('.footer_input');
const addBtn = document.querySelector('.footer_button');

function onAdd(){
    // 1. 입력 텍스트를 받아옴
    const text = input.value;
    //2. 새로운 아이템 생성
    const item = createItem(text);
    //3. items 컨테이너 안에 새로 만든 아이템 추가
    items.appendChild(item);
    //4. input 초기화
    input.value = '';
    input.focus();
}

function createItem(){

}

addBtn.addEventListener('click', ()=>{
    onAdd();
})