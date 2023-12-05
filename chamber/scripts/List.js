const grid = document.querySelector("#grid");
const list = document.querySelector("#list");
const getit = document.querySelector("article");


grid.addEventListener("click", () => {

	getit.classList.add("grid");
	getit.classList.remove("list");
});

list.addEventListener("click", showList); 

function showList() {
	getit.classList.add("list");
	getit.classList.remove("grid");
}