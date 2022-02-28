// searching input 
const loadingButton = () => {
    const input = document.getElementById ('input') ;
    const searchText = input.value ;
    input.value = '' ;
    // console.log (searchResultvalue) ;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch (url) 
    .then (res => res.json ())
    .then (data => display (data))

}
const display = (phone) => {
    const displayDiv = document.getElementById ('display')
    displayDiv.textContent = '' ;
    const phoneData = phone.data ;
    phoneData.forEach(element => {
        console.log (element) ;
      const div =  document.createElement ('div') ;
      div.className= 'col-md-4 my-2'
      div.innerHTML = `
      <div class='bg-light rounded p-5 h-100'>
      <img src='${element.image}' class='w-75'>
      <h4>${element.phone_name}</h4>
      </div>
      `
      displayDiv.appendChild (div)
    });
}
