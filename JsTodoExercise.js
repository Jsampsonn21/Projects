const form = document.querySelector('#add-list');
const input = document.querySelector('#adding');
const preMadeList = document.querySelector('#preMade-list');
const checkedBox = document.querySelector('input[type="checkbox"]');
const newList = '';


form.addEventListener('submit', function(e){
    e.preventDefault();
    const newItem = document.createElement('li');
    const removeBtn = document.createElement('button');
    newItem.innerText = input.value;
    input.value = '';
    removeBtn.innerText = 'Remove';
    preMadeList.appendChild(newItem);
    newItem.appendChild(removeBtn);
})


preMadeList.addEventListener('click', function(e){
    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
    }
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('completedList');
    }
})


//newList.addEventListener('click', function(e){
//    const {checked} = newList;
//    if(checked){
//        localStorage.setItem('newList', JSON.stringify(newList));
//    }
//});





