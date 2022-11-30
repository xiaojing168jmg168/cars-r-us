
const searchHandler = async (event) => {
  event.preventDefault();
  let brand = document.querySelector('#brand').value.trim();
  let model = document.querySelector('#model').value.trim();
  let year = document.querySelector('#year').value.trim();
  let mileage = document.querySelector('#mileage').value.trim();

  if (!brand){
    brand = " "
  }
  if(!model){
    model = " "
  }

  if(!year){
    year=" "
  }
  if(!mileage){
    mileage = " "
  }

  console.log(brand)
  if (brand || model || year || mileage) {
    console.log(brand, model, year, mileage)
    const response = await fetch(`/api/cars/search/${brand}&${model}&${year}&${mileage}`)
    console.log(response)
  }

}
document.getElementById("search-btn").addEventListener('click', searchHandler);