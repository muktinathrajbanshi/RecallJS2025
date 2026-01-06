const addButton = document.querySelector("#add");

const updateLSData = () => {
    const textAreaData = document.querySelectorAll("textarea");
     const notes = [];

     textAreaData.forEach(() => {
        return notes.push(note.value);
     })
}


const addNewNote = (text = '') => {
    const note = document.createElement("div");
    const notesContainer = document.querySelector(".notes-container");

    note.classList.add("note");
    
    const htmlData = `
        <div class="operation">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>

        <div class="main ${text ? "" : "hidden" } "></div>
        <textArea class="${text ? "hidden" : "" } "></textArea> `;

        note.insertAdjacentHTML("afterbegin", htmlData);
        // console.log(note);

        // getting the References 
        const editButton = note.querySelector(".edit");
        const delButton = note.querySelector(".delete");
        const mainDiv = note.querySelector(".main");
        const textArea = note.querySelector("textArea");


        // deleting the node 
        delButton.addEventListener("click", () => {
            note.remove();
        })

        // toggle using edit button 

        editButton.addEventListener("click", () => {
            mainDiv.classList.toggle("hidden");
            textArea.classList.toggle("hidden");
        })


        textArea.addEventListener("change", (event) => {
            const value = event.target.value;
            mainDiv.innerHTML = value;


            updateLSData();
            
        })

        notesContainer.appendChild(note);
        
        
}

addButton.addEventListener("click", () => addNewNote() );