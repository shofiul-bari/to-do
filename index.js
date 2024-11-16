const inbox = document.querySelector('#inbox');
const add = document.querySelector('#add');
const selectbox = document.querySelector('#selectbox');
const remove = document.querySelector('#remove');

add.addEventListener('click', (e) => {
    e.preventDefault();

    if (inbox.value == "") {
        alert('Inbox is empty');
        return;
    }

    const option = new Option(inbox.value, inbox.value);

    selectbox.add(option, undefined);

    inbox.value = "";
});

Remobe.addEventListener('click',(e)=>{
    //     e.preventDefault();
    const selected = [];

    for (let i = 0; i < selectbox.options.length; i++) {
        selected[i] = selectbox.options[i].selected;
    }

    let line = selectbox.options.length;
    while (line--) {
        if (selected[line]) {
            selectbox.remove(line);
        }
    }
});



// const inbox = document.querySelector('#inbox');
// const add = document.querySelector('#add');
// const selectbox = document.querySelector('#selectbox');
// const Remobe = document.querySelector('#Remobe');

// add.addEventListener('click',(e)=>{
//     e.preventDefault();

//     if (inbox.value == ""){
//         alert('inbox is Empty');
//         return;
//     }

//     const Option = new option (inbox.value , inbox.value);

//     selectBox.add(Option, undefined);

//     inbox.value = "" ;
// })

// Remobe.addEventListener('click',(e)=>{
//     e.preventDefault();

//     const selected = [] ;

 
//     for (let i = 0; i < selectBox.options.length; i++) {
//         selected[i] = selectBox.options[i].selected;
//       }


//     let line = selectBox.options.length ;
//     while (line-- ) {
//       if(selected[line]){
//         selectBox.remove(line);
//       }  
//     }
// })