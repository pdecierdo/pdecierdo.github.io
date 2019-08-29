function $classes(className){
    return document.getElementsByClassName(className);
}

function $id(id){
    return document.getElementById(id);
}

// Viewing of images by clicking on smaller images
var imageThumbs = $classes('image-thumbnail');
for(var i = 0; i < imageThumbs.length; i++){
    var imageThumb = imageThumbs[i];
    imageThumb.addEventListener('click', function(){
        var imageSource = this.src;
        var imageContainerId = this.getAttribute('image-container-id');
        var imageContainer = $id(imageContainerId);

        imageContainer.src = imageSource;
        if(this.id !== imageContainer.getAttribute('current-image')){
            this.classList.add('active-img');
            $id(imageContainer.getAttribute('current-image')).classList.remove('active-img');
        }
        imageContainer.setAttribute('current-image', this.id);
    });
}

// For modals
var projects = $classes('project');
for(var i = 0; i < projects.length; i++){
    var project = projects[i];
    project.addEventListener('click', function(){
        var modalId = this.getAttribute('modal-id');
        var modal = $id(modalId);
        modal.style.display = 'block';

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    });
}

var closeBtns = $classes('close');
for(var i = 0; i < projects.length; i++){
    var closeBtn = closeBtns[i];
    closeBtn.addEventListener('click', function(){
        var modalId = this.getAttribute('modal-id');
        var modal = $id(modalId);
        modal.style.display = 'none';  
    });
}

var skillBtns = $classes("skill-button");
for(var i = 0; i < skillBtns.length; i++){
    skillBtns[i].addEventListener('click', function(){
        var id = this.getAttribute('skill-id');
        var skillTag = $id(id);
        skillTag.remove();
    });
}