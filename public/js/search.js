
const searchHandler = async (event) => {
    event.preventDefault();
const searchInput = document.querySelector('#search').value.trim();

if(searchInput){
    const response = await fetch('/api/car',{
        method: 'POST',
        body: JSON.stringify({ brand }),
        headers: { 'Content-Type': 'application/json' },
    })
    if (response.ok) {
        document.location.replace('/result');
      } else {
        alert('Failed to search.');
      }
}

}
document.getElementById("search_btn").addEventListener('submit', searchHandler);