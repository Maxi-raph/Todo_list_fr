let input = document.getElementById("input")
let listContain = document.getElementById("list_container")
let button = document.getElementById("button")
input.placeholder = "Do something today...."

function addTodo() {
let value= input.value.trim()
if (value === '') {
  alert("hello")
}
else if (value !== "") {
const div = document.createElement('div');
div.className = 'lists_container';
const li = document.createElement('li');
li.className = 'lists';
li.textContent = value;
const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.className = 'check';
checkbox.addEventListener('click', () => {
  li.classList.toggle('checked')
});
const delIcon = document.createElement('button');
delIcon.textContent = '🚮';
delIcon.className= "del";
delIcon.addEventListener("click", () => {
  const isCheckedAtClickTime = li.classList.contains("checked");
  setTimeout(()=>{
    if (isCheckedAtClickTime) {
      listContain.removeChild(div)
    }
  },2000
  )
})
div.appendChild(li);
div.appendChild(checkbox);
div.appendChild(delIcon);
listContain.appendChild(div);
input.value = "";
}
}
button.addEventListener("click",addTodo)
