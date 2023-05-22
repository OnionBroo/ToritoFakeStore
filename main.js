const btnSearch = document.getElementById('btnSearch')
const btnAllData = document.getElementById('btnAllData')
const IdInput = document.getElementById('IdInput')
const root = document.getElementById('root')
const rootAllData = document.getElementById('rootAllData')
const remderHTML = (IID, urlImg, title, description, category, price) => {
  return `<div class="card mt-3" style="width: 18rem;">
    <li class="list-group-item list-group list-group-flush bg-primary text-dark bg-opacity-25">ID del producto: ${IID}</li>
    <img src="${urlImg}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${description}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${category}</li>
      <li class="list-group-item">$${price}</li>
    </ul>
  </div>
</div>
    `
}
const renderAllHTML = (IID, urlImg, title, description, category, price) => {
  return `<div class="col-4 card mt-3 p-2 " style="width: 18rem;">
  <li class="list-group-item list-group  bg-dark text-light">ID del producto: ${IID}</li>
  <img src="${urlImg}" class="card-img-top mt-3" alt="...">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${description}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${category}</li>
    <li class="list-group-item">$${price}</li>
  </ul>
</div>
</div>
  
  `
}


btnSearch.addEventListener('click', async () => {
  const ID = IdInput.value
  if (!ID) {
    root.innerHTML = `<div class="alert alert-danger" role="alert">Ingrese un ID válido</div>`
    return
  }
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${ID}`, {
      method: "GET"
    })
    const responseID = await response.json();
    root.innerHTML = remderHTML(responseID.id, responseID.image, responseID.title, responseID.description, responseID.category, responseID.price)
  } catch {

  }

})
btnAllData.addEventListener('click', async () => {
  try {
    const responseA = await fetch('https://fakestoreapi.com/products', {
      method: "GET"
    })
    const responseData = await responseA.json();
    console.log(responseData)
    let allProductsString = ""
    responseData.forEach(product => {
      const stringHTML = renderAllHTML(product.id, product.image, product.title, product.description, product.category, product.price)
      allProductsString = allProductsString + stringHTML
    });
    console.log(allProductsString)
    rootAllData.innerHTML = allProductsString
  } catch {

  }
})
