

function onFilterInput(){
    var inputElement = document.querySelector('input');
    var filter = inputElement.value.toUpperCase();
   
    var textValue;
    const listElement = document.getElementsByTagName("li");
    
    for(let i = 0 ; i< listElement.length; i++){
        textValue = listElement[i].textContent || listElement[i].innerText;
        let find = textValue.toUpperCase().indexOf(filter) > -1;
        console.warn(textValue.toUpperCase);
        // console.log(textValue.indexOf(filter));
        if(find){
            listElement[i].style.display = "block";
        }else{
            listElement[i].style.display = "none";    
        }
}
}

document.addEventListener('keyup',onFilterInput);


