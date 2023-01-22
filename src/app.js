document.addEventListener("DOMContentLoaded", () => {
    console.log(document)
});

const date_travel = ({
    btn_submit : document.querySelector('input[type="submit"]'),
    date_input_from : document.getElementsByName("from"),
    date_input_to : document.getElementsByName("to"),
})


date_travel.btn_submit.addEventListener("click", (e)=>{
    e.preventDefault()

    date_travel.date_input_from[0].value && date_travel.date_input_to[0].value ?

    Swal.fire(
        'Good job',
        'You clicked the button!',
        'success'
    )
    :
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue ?</a>'
    })

})



// document.forms[0].addEventListener("submit", function(e){ 

//     if (document.getElementById("from").value == "" && document.getElementById("to").value == "" ) {
//         e.preventDefault();
//         alert("Oups , vous n'avez pas rempli tous les champs");
//         document.getElementById("from").focus();
//     }

//     else if (document.getElementsByTagName("input").value =! "") 
//     {
//         alert("Good , les données sont reçues");
//         document.getElementById("from").focus();
//     }

//     else{
//         console.log('Formulaire de réservation en action');
//     }

// });