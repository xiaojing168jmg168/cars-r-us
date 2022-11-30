
const searchHandler = async (event) => {
    event.preventDefault();
const searchInput = document.querySelector('#search').value.trim();

if(searchInput){
    const response = await fetch('/api/car',{
        method: 'POST',
        body: JSON.stringify({ brand, model, year, mileage }),
        headers: { 'Content-Type': 'application/json' },
    })
    if (response.ok) {
        document.location.replace('/result');
      } else {
        alert('Failed to search.');
      }
}

}
document.getElementById("search-btn").addEventListener('submit', searchHandler);