
function handleModal() {
    let $ = document.querySelector.bind(document);
    let $$ = document.querySelectorAll.bind(document);
    var modal = document.querySelector(".modal");
    var container = modal.querySelector(".container");
    let bookTicket = $$('.book-ticket');
    let test = document.querySelector('.book-ticket');

   test.onclick = function(e){
    alert('test')
   }
   console.log(test)
    const len=bookTicket.length;
    // bookTicket.forEach(button => {
        
    
     
            
          
    //         button.onclick = function () {
    //         modal.classList.remove("hidden");
    //         console.log("ok")
    //         document.querySelector(".modal").addEventListener("click", function (e) {
    //             if (e.target !== modal && e.target !== container) return;     
    //             modal.classList.add("hidden");
    //             });
    //         };
        
           
        
    // })
    
}

handleModal();