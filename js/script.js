const input = document.getElementById("add-input");
const addBtn = document.getElementById("add-btn");
const lists = document.getElementById("lists");

addBtn.addEventListener("click", add);
input.addEventListener("keydown", function (event) {
    if (event.key == 'Enter') {
        event.preventDefault();
        add();
    }
})

function add() {  
    if (input.value == "") {
        alert("Isi input terlebih dahilu");
    } else {
        const item = document.createElement("div");
        item.setAttribute("class", "item");

        const paragraph = document.createElement("p");
        paragraph.setAttribute("class", "paragraph");
        let itemTxt = document.createTextNode(input.value);
        paragraph.appendChild(itemTxt);

        const eraseBtn = document.createElement("button");
        eraseBtn.setAttribute("class", "delete-btn");
        const eraseBtnTxt = document.createTextNode("Delete");
        eraseBtn.appendChild(eraseBtnTxt);

        const editBtn = document.createElement("button");
        editBtn.setAttribute("class", "edit-btn");
        const editBtnTxt = document.createTextNode("Edit");
        editBtn.appendChild(editBtnTxt);

        const checkBtn = document.createElement("button");
        checkBtn.setAttribute("class", "check-btn");
        const checkBtnTxt = document.createTextNode("Check");
        checkBtn.appendChild(checkBtnTxt);

        item.append(paragraph, eraseBtn, editBtn, checkBtn);

        lists.appendChild(item);

        checkBtn.addEventListener("click", function () {
            if (lists.innerHTML.includes("save")) return;

            paragraph.classList.toggle('checked');
        });

        editBtn.addEventListener("click", function () {
            if (lists.innerHTML.includes("save")) return;

            const editForm = document.createElement("form");
            editForm.setAttribute("class", "edit-form");

            const input = document.createElement("input");
            input.setAttribute("id", "edit-input");
            input.setAttribute("value", itemTxt.nodeValue);

            const cancelBtn = document.createElement("button");
            cancelBtn.setAttribute("id", "cancel-btn");
            const cancelBtnTxt = document.createTextNode("Cancel");
            cancelBtn.appendChild(cancelBtnTxt);

            const saveBtn = document.createElement("button");
            saveBtn.setAttribute("id", "save-btn");
            const saveBtnTxt = document.createTextNode("Save");
            saveBtn.appendChild(saveBtnTxt);

            lists.insertBefore(editForm, item);
            editForm.append(input, saveBtn, cancelBtn);

            saveBtn.addEventListener("click", function () {
            paragraph.removeChild(itemTxt);

            itemTxt = document.createTextNode(input.value);
            paragraph.appendChild(itemTxt);

            lists.removeChild(editForm);
            });

            cancelBtn.addEventListener("click", function () {
            lists.removeChild(editForm);
            });
        });

        eraseBtn.addEventListener("click", function () {
            if (lists.innerHTML.includes("save")) return;

            lists.removeChild(item);
        });

        input.value = '';
    }
}