

const txt_description = document.getElementById("description")
const list = document.querySelector('.tbody-items');
displayStorage()
function addToDo() {
    var value = txt_description.value;
    if (value === '') {
        tata.error('Error', 'Please add grocery item')
    } else {
        createItem(value);
        tata.info(`${value}`, 'Has Been Added To List')
        updateStorage(value);
    }
}
function removeItems() {
    //delete from local storage
    localStorage.removeItem('items');
    let items = document.querySelectorAll('.groceryitem');
    ///tbody-items
    if (items.length == 0) {
        tata.error('Error', "there's no items to delete")
    }
    else{
        document.querySelector('.tbody-items').innerHTML = "";
        tata.error('Deleted', "All Items Have Been Deleted")
    }
}
// create item
function createItem(value) {
    let parent = document.createElement('tr');
    parent.innerHTML = `<td class="groceryitem">${value}</td><td> <a  href="##" onclick="removeSingleItem()" class="btn-delete"> <span class="fa fa-trash text-danger"></span> </a></td>`;

    list.appendChild(parent);
}
function displayStorage() {
    let exists = localStorage.getItem('items');
    if (exists) {
        let storageItems = JSON.parse(localStorage.getItem('items'));
        storageItems.forEach(function (element) {
            createItem(element);
        })
    }
}
//remove single item
function removeSingleItem() {
    let link = this.event.target.parentElement;
    link.parentElement.parentElement.remove()
    groceryList = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
    var currentindex = link.parentElement.parentElement.rowIndex;
    
    groceryList.splice(currentindex, 1);
    localStorage.setItem('items', JSON.stringify(groceryList));
    tata.warn(`${link.parentElement.parentElement.children[0].innerText}`, 'Deleted')
}
//update storage
function updateStorage(value) {
    let groceryList;
    groceryList = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
    groceryList.push(value);
    localStorage.setItem('items', JSON.stringify(groceryList));
}