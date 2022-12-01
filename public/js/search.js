
const searchHandler = async (event) => {
  event.preventDefault();
  let brand = document.querySelector('#brand').value.trim();

  console.log(brand)
  if (brand) {
    window.location.href=`/search/${brand}`
  }
}
document.getElementById("search-btn").addEventListener('click', searchHandler);