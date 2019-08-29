var navDropdown = document.getElementById('navDropDown');
navDropdown.addEventListener('click', function(){
    var menu = document.getElementById('dropdownContents');
    if(this.getAttribute('shown') === 'false'){
        menu.style.display = 'block';
        this.setAttribute('shown', 'true');
    }
    else{
        menu.style.display = 'none';
        this.setAttribute('shown', 'false');
    }
});