const modal = document.getElementById('modal');
const modalButton = document.getElementById('openModalButton');
const closeModalButton = document.getElementsByClassName('close')[0];

modalButton.addEventListener('click', function(){
    modal.style.display ='block'
})

closeModalButton.addEventListener('click', function(){
    modal.style.display ='none'
})
window.addEventListener('click', function(event){
    if (event.target == modal) {
        modal.style.display ='none'
    }
})