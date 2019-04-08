$(document).ready(function() {

    var userListBody = $('.userList tbody');

    //@todo store and somehow update the current number of users
    let index = 0;

    $('.needs-validation').submit(function(event) {

        event.preventDefault();
        event.stopPropagation();

        if (this.checkValidity() === false) {

            $(this).addClass('was-validated');

            return false;
        }

        //@todo
        //1. get values
        //2. create a new element
        //3. somehow add them to userListBody
        //4. update number of current users
        //5. clear entries from the form
        //6. maybe do something else... :-)

        //your code follows here

            const username = document.querySelector('#username');
            const newRow = document.createElement('tr');

            if(username.value !== " "){
                newRow.innerHTML = `
                    <tr>
                        <td>${++index}</td>
                        <td>${username.value}</td>
                        <td><button type="button" class="btn btn-secondary btn-danger deleteTrigger" title="Löschen"><i class="fa fa-trash"></i></button></td>
                    </tr>
                    `;

                //append Child
                userListBody.append(newRow);
                //clear row
                username.value = ' '; 
            } else{
                //...
            }


        return false;
    });


    $(userListBody).on('click', '.deleteTrigger', function(e) {
        //@todo
        //1. remove current user from dom
        //2. update number of current users

        //your code follows here
            if(confirm("Wirklich löschen?")){
                console.log(e);
                deleteRow(e.target);
                updateIndex();
            }
    });

    //maybe some code follows here

    function deleteRow(target){
            console.log('clicked');
            target.parentElement.parentElement.remove(); 
        }
    
    function updateIndex(){
        //when i found out we should do it with jQuery :-)
        userListBody.find('tr').each(function(ind) {
            $(this).find('td:first-child').text(++ind);
            index = ind;    //so new created rows will always start at latest id+1
        });
    }
});
