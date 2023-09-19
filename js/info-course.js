var array_1_faq = [];
$('.name-questions-summary').on('click', function() {
    var id = this.id;
    if(array_1_faq.length > 0){
        array_1_faq.forEach(function(item, index, array) {
            if(array[0] == id){
                array_1_faq = [];
                open_e_close(id, 0);
            }else{
                array_1_faq = [];
                array_1_faq.push(id);
                open_e_close(id, 1);
            }
        });
    }else{
        array_1_faq.push(id);
        open_e_close(id, 1);
    }
});

function open_e_close(id, type){
    var x = id.slice(-1);
    if(type == 0){ //Close
        document.querySelector('#question-1').style.display = "none";
        document.querySelector('#question-2').style.display = "none";
        document.querySelector('#icon-expand-1').innerHTML = "expand_more";
        document.querySelector('#icon-expand-2').innerHTML = "expand_more";
        document.querySelector('#question-'+x+'').style.display = "none";
    }else{ //Open
        document.querySelector('#question-1').style.display = "none";
        document.querySelector('#question-2').style.display = "none";
        document.querySelector('#icon-expand-1').innerHTML = "expand_more";
        document.querySelector('#icon-expand-2').innerHTML = "expand_more";
        document.querySelector('#icon-expand-'+x+'').innerHTML = "expand_less";
        document.querySelector('#question-'+x+'').style.display = "block";
    }
}