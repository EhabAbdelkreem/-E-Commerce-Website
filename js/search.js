const search = () =>{
   const searchBox =   document.getElementById("search-item").value.toUpperCase();
   const storeItems =   document.getElementById('grid');
   const product = document.querySelectorAll('.card') 
   const pname =storeItems.getElementsByTagName('h4')
for(let i=0; i< pname.length; i++ ){
let match = product[i].getElementsByTagName('h4')[0];
if(match){
    storeItems.style.display="block";
    storeItems.style.width="30%";
    storeItems.style.marginLeft="500px"
    let textValue =match.textContent || match.innerHTML
    if(textValue.toUpperCase().indexOf(searchBox) > -1){
        product[i].style.display='';
    }else{
        product[i].style.display ="none"
    }

}
}
}