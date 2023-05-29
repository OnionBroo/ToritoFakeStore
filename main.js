const btnSearch = document.getElementById('btnSearch')
const btnAllData = document.getElementById('btnAllData')
const IdInput = document.getElementById('IdInput')
const root = document.getElementById('root')
const rootAllData = document.getElementById('rootAllData')
const rootAllMenData = document.getElementById('rootAllMenData')
const rootAllWomenData = document.getElementById('rootAllWomenData')
const rootAllJeweleryData = document.getElementById('rootAllJeweleryData')
const rootAllElectronicsData = document.getElementById('rootAllElectronicsyData')
const menFilter = document.getElementById('menFilter')
const womenFilter = document.getElementById('womenFilter')
const jeweleryFilter = document.getElementById('jeweleryFilter')
const electronicsFilter = document.getElementById('electronicsFilter')

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
  } catch (err){
    console.log(err)

  }

})
btnAllData.addEventListener('click', async () => {
  try {
    const responseA = await fetch('https://fakestoreapi.com/products', {
      method: "GET"
    })
    const responseData = await responseA.json();
    let allProductsString = ""
    responseData.forEach(product => {
      const stringHTML = renderAllHTML(product.id, product.image, product.title, product.description, product.category, product.price)
      allProductsString = allProductsString + stringHTML
    });
    rootAllData.innerHTML = allProductsString
  } catch (err){
    console.log(err)
  }
})
menFilter.addEventListener('change', async()  => {
  try{
    if (menFilter.checked) {
      const responseMen = await fetch("https://fakestoreapi.com/products/category/men's clothing", {
        method: "GET"
      })
      const responseDataMen = await responseMen.json();
      let allMenProductsString = ""
      responseDataMen.forEach(product => {
        const stringMenHTML = renderAllHTML(product.id, product.image, product.title, product.description, product.category, product.price)
        allMenProductsString = allMenProductsString + stringMenHTML
      });
      rootAllMenData.innerHTML = allMenProductsString
    } else {
      rootAllMenData.style.display = 'none'
    }
  }catch(err){
    console.log(err)
  }
});
womenFilter.addEventListener('change', async()  => {
  try{
    if (womenFilter.checked) {
      const responseWomen = await fetch("https://fakestoreapi.com/products/category/women's clothing", {
        method: "GET"
      })
      const responseDataWomen = await responseWomen.json();
      let allWomenProductsString = ""
      responseDataWomen.forEach(product => {
        const stringWomenHTML = renderAllHTML(product.id, product.image, product.title, product.description, product.category, product.price)
        allWomenProductsString = allWomenProductsString + stringWomenHTML
      });
      rootAllWomenData.innerHTML = allWomenProductsString
    } else {
      rootAllWomenData.style.display = 'none'
    }
  }catch(err){
    console.log(err)
  }
});
jeweleryFilter.addEventListener('change', async()  => {
  try{
    if (jeweleryFilter.checked) {
      const responseJewelery = await fetch("https://fakestoreapi.com/products/category/jewelery", {
        method: "GET"
      })
      const responseDataJewelery = await responseJewelery.json();
      let allJeweleryProductsString = ""
      responseDataJewelery.forEach(product => {
        const stringJeweleryHTML = renderAllHTML(product.id, product.image, product.title, product.description, product.category, product.price)
        allJeweleryProductsString = allJeweleryProductsString + stringJeweleryHTML
      });
      rootAllJeweleryData.innerHTML = allJeweleryProductsString
    } else {
      rootAllJeweleryData.style.display = 'none'
    }
  }catch(err){
    console.log(err)
  }
    
});
electronicsFilter.addEventListener('change', async()  => {
  try{
    if (electronicsFilter.checked) {
      const responseElectronics = await fetch("https://fakestoreapi.com/products/category/electronics", {
        method: "GET"
      })
      const responseDataElectronics = await responseElectronics.json();
      let allElectronicsProductsString = ""
      responseDataElectronics.forEach(product => {
        const stringElectronicsHTML = renderAllHTML(product.id, product.image, product.title, product.description, product.category, product.price)
        allElectronicsProductsString = allElectronicsProductsString + stringElectronicsHTML
      });
      rootAllElectronicsData.innerHTML = allElectronicsProductsString
    } else {
      rootAllElectronicsData.style.display = 'none'
    }
  }catch(err){
    console.log(err)
  }
})
