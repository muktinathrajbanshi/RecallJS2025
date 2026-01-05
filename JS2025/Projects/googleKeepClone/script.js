const addButton = document.querySelector("#add");

const addNewNote = (text = 'muktinath') => {
    const note = document.createElement("div");
    const notesContainer = document.querySelector(".notes-container");

    note.classList.add("note");
    
    const htmlData = `
        <div class="operation">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>

        <div class="main ${text ? "" : "hidden" } "></div>
        <textarea class="${text ? "hidden" : "" } "></textarea> `;

        note.insertAdjacentHTML("afterbegin", htmlData);
        // console.log(note);

        // getting the References 
        const editButton = note.querySelector(".edit");
        const delButton = note.querySelector(".delete");
        const mainDiv = note.querySelector(".main");
        const textarea = note.querySelector("textarea");


        // deleting the node 
        delButton.addEventListener("click", () => {
            note.remove();
        })

        // toggle using edit button 
        


        notesContainer.appendChild(note);
        
        
}

addButton.addEventListener("click", () => addNewNote() );