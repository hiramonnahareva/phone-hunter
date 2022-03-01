// error div and and others div display function 
const displayFunction = (id , displayStyle) => {
    const divId = document.getElementById (id) ;
     divId.style.display = displayStyle
}

// searching input 
const loadingButton = () => {
    const input = document.getElementById ('input') ;
    const searchText = input.value ;
   if (searchText == ''){
    //    console.log ('error')
      displayFunction ('error','block') ;
      displayFunction('all-display' , 'none') ;

   }
   else {
       displayFunction('error','none') ;
    input.value = '' ;
    // console.log (searchResultvalue) ;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch (url) 
    .then (res => res.json ())
    .then (products => display (products.data))
   }

}
const display = products => {
    const displayDiv = document.getElementById ('display')
    if (products == ''){
        console.log ('hdhds')
         displayFunction ('error','block') ;
      displayFunction('all-display' , 'none') ;
    }
    else{
    displayDiv.textContent = '' ;
    const products20 = products.slice (0 , 12) ;
    products20.forEach(element => {
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
      displayDiv.appendChild (div) ;
      displayFunction('details' , 'none') ;
    });
}
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
    displayFunction('details' , 'block') ;
    const displayDetails = document.getElementById ('details')
    const others = details?.data?.others ;
    if (others === undefined){
        displayDetails.innerHTML = `<div class='p-5'>
        <div class ='d-flex justify-content-center'> 
        <img src='${details.data.image}' >
        </div>
        <h1 class='text-center'>${details.data.name}</h1>
        <h4 class='text-center'>${details.data.brand}</h4>
        <h5 class='text-center'>${details.data.releaseDate}</h5>
        <h5 class='text-center text-danger'> no others information </h5>
        </div>
         `

    }
    // console.log (details.data)
    else {
    const {Bluetooth , GPS , NFC ,Radio , WLAN} = others ;
    const sensors = (details.data.mainFeatures.sensors) ;
    const [FaceID , accelerometer , gyro , proximity , compass , barometer] = sensors ;
    console.log (sensors) ;
    const releaseDate = (details.data.releaseDate) ;
    if (releaseDate == ''){
        displayDetails.innerHTML = `<div class='p-5'>
        <div class ='d-flex justify-content-center'> 
        <img src='${details.data.image}' >
        </div>
        <h1 class='text-center'>${details.data.name}</h1>
        <h4 class='text-center'>${details.data.brand}</h4>
        <h5 class='text-center'>${details.data.releaseDate}</h5>
        <h5 class='text-center text-danger'> Release date is no found</h5>
        <h6 class='text-center mt-5'><span class='mx-3'>Bluetooth: ${Bluetooth}</span><span class='ms-3'>Gps: ${GPS}</span></h5>
        <h6 class='text-center my-3'><span class='ms-5'>NFC: ${NFC}</span> <span class='ms-5'>Radio: ${Radio}</span><span class='ms-5'>Radio: ${USB}</span></h6>
        <h6 class='text-center'>WLAN: ${WLAN}</span></h6>
        <h6 class='text-center'>Sensors : ${FaceID} , ${accelerometer} , ${gyro} , ${ proximity} , ${compass} , ${barometer}</h6>
        </div>
         `
    }
    else {
    console.log (details.data)
    displayDetails.innerHTML = `
    <div class='p-5'>
   <div class ='d-flex justify-content-center'> 
   <img src='${details.data.image}'>
   </div>
   <h1 class='text-center'>${details.data.name}</h1>
   <h4 class='text-center'>${details.data.brand}</h4>
   <h5 class='text-center'>${details.data.releaseDate}</h5>
   <h6 class='text-center  mt-5'><span class='mx-3'>Bluetooth: ${Bluetooth}</span><span class='ms-3'>Gps: ${GPS}</span></h5>
   <h6 class='text-center my-3'>Sensors : ${FaceID} , ${accelerometer} , ${gyro} , ${ proximity} , ${compass} , ${barometer}</h6>
        <h6 class='text-center my-3'><span class='ms-5'>NFC: ${NFC}</span> <span class='ms-5'>Radio: ${Radio}</span><span class='ms-5'>Radio: ${USB}</span></h6>
        <h6 class='text-center my-3'>WLAN: ${WLAN}</span></h6>
        
   </div>
    `
    }

    }
}
