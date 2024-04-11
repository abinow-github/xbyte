// Function to load and insert HTML content from an external file
function includeHTML(file, elementId) {
    fetch(file)
      .then(response => response.text())
      .then(data => {
        document.getElementById(elementId).innerHTML = data;
      });
  }
  
  // Load the header and footer
  includeHTML('header.html', 'header');
  includeHTML('footer.html', 'footer');



  ///////function for image change in course hover
  function showImg(id){
    let img=document.getElementById(id);
    let dft=document.getElementById('navlinkcrsimgdefault');
    img.classList.remove('hide')
    dft.classList.add('hide')
}
function hideImg(idd){
let img1=document.getElementById(idd);
let dft1=document.getElementById('navlinkcrsimgdefault');
    img1.classList.add('hide')
    dft1.classList.remove('hide')
}
    