let inpUrl = document.querySelector('#inp-url');
let dBtn = document.querySelector('#d-btn');
let nBtn = document.querySelector('#n-btn');
let img = document.querySelector('#i');
dBtn.addEventListener('click' , async ()=>{
    try {
      if(inpUrl.value === ""){
        alert("No URL Please First Enter Url .")
      }else{
       
         const res = await fetch(inpUrl.value);
         const file = await res.blob();
         const link = document.createElement('a');
         link.href = URL.createObjectURL(file);
         link.download = `Image-${new Date().getTime()}`;
         link.click();
         alert("Downloaded SuccessFully !")
         inpUrl.value= null;
      }
    } 
    catch (error) {
        i.src = "./logos/Image-1695968068729-removebg-preview.png"
        inpUrl.value= null;
        alert("Sorry Can't Download !");
    } 
});

nBtn.addEventListener('click' , ()=>{
    i.src = "./logos/Image-1695968068729-removebg-preview.png"
    inpUrl.value= null ;
})