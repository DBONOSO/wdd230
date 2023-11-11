const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
 if(input.value !== ''){
  const myChapter = input.value;
  const listItem = document.createElement('li');

  listItem.textContent = myChapter;
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '❌';

  listItem.appendChild(deleteButton);
  list.appendChild(listItem);

  deleteButton.addEventListener('click', ()=>{
  list.removeChild(listItem);})

 }
 });




input.focus();
input.value = '';