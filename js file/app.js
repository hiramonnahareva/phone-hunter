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
const display = phone => {
    const displayDiv = document.getElementById ('display')
    displayDiv.textContent = '' ;
    const phoneData = phone.data ;
    phoneData.forEach(element => {
        // console.log (element.slug) ;
      const div =  document.createElement ('div') ;
      div.className= 'col-md-4 my-2'
      div.innerHTML = `
      <div class='bg-light rounded p-5 h-100'>
      <img src='${element.image}' class='w-75'>
      <h4>${element.phone_name}</h4>
      <h5>${element.brand}</h5>
      <button onclick="detailsBtn('${element.slug}')" class='btn btn-outline-dark mt-2'>Detail</button>
      </div>
      `
      displayDiv.appendChild (div)
    });
}
// details button function
const detailsBtn = id => {
    // console.log (id)
    const url = `https://openapi.programming-hero.com/api/phone/${id}` ;
    fetch (url)
    .then (res => res.json())
    .then (data => detailInfo(data))
}
// details information display function
const detailInfo = (details) => {
    const displayDetails = document.getElementById ('details')
    console.log (details.data)
    displayDetails.innerHTML = `
    <div class='p-5'>
   <div class ='d-flex justify-content-center'> 
   <img src='${details.data.image}' >
   </div>
   <h1 class='text-center'>${details.data.name}</h1>
   <h4 class='text-center'>${details.data.brand}</h4>
   <h5 class='text-center'>${details.data.brand}</h5>
   </div>
    `


}
