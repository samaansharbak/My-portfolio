
function openAbout(){
    document.getElementById("about").style.display = "block";
    document.getElementById("cv").style.display = "none";
    document.getElementById("portfolio").style.display = "none";
    document.getElementById("contact").style.display = "none";
    
    
}
function openPortfolio(){
    document.getElementById("about").style.display = "none";
    document.getElementById("portfolio").style.display = "block";
    document.getElementById("cv").style.display = "none";
    document.getElementById("contact").style.display = "none";
}
function openCv(){
    document.getElementById("about").style.display = "none";
    document.getElementById("cv").style.display = "block";
    document.getElementById("portfolio").style.display = "none";
    document.getElementById("contact").style.display = "none";
   
}
function openContact(){
    document.getElementById("contact").style.display = "block";
    document.getElementById("cv").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("portfolio").style.display = "none";
}



const pElements = document.querySelectorAll('.second-top p');

// Add click event to each <p>
pElements.forEach(p => {
    p.addEventListener('click', function() {
       
        pElements.forEach(item => {
            item.style.color = ''; 
        });
        
        // Change color of the clicked <p>
        this.style.color = '#64c0f4'; 
    });
});
