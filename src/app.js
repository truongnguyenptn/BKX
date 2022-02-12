function App() {
    let $ = document.querySelector.bind(document);
    let $$ = document.querySelectorAll.bind(document);
    function Signin() {

    }
    function handleSearch() {
        let showSearchBus = $('.show-bus-search');
        let busSearch = $('.bus-search');

        showSearchBus.onclick = function () {
                console.log("ok")
                busSearch.style.display = "block";
            


         

        }
    }
        function handleModal() {


            let bookTicket = $$('.book-ticket');


            const len = bookTicket.length;
            bookTicket = $$('.book-ticket');
            var modal = $(".ticket-modal");
            var span = document.getElementsByClassName("close")[0];
            for (let i = 0; i < len; i++) {
                if (bookTicket[i]) {

                    bookTicket[i].onclick = function () {
                        modal.style.display = "block";

                    }
                }
            }
            // Get the button that opens the modal


            // Get the <span> element that closes the modal


            // When the user clicks on the button, open the modal


            // When the user clicks on <span> (x), close the modal
            span.onclick = function () {
                modal.style.display = "none";
            }

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }

        }
        function handleDetail() {
            let showDetail = $$('.show-bus-detail');
            let detail = $$('.bus-detail');
            const len = showDetail.length;
            for (let i = 0; i < len; i++) {
                if (showDetail[i]) {

                    showDetail[i].onclick = function () {
                        if (detail[i].style.display == "block") {
                            detail[i].style.display = "none";
                        } else detail[i].style.display = "block";

                    }

                }
            }
            // Get the button that opens the modal


            // Get the <span> element that closes the modal


            // When the user clicks on the button, open the modal


            // When the user clicks on <span> (x), close the modal


        }
        handleModal();
        handleDetail();
        handleSearch()
    }

    App();