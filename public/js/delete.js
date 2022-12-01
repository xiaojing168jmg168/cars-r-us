const deleteCarHandler = async function (event) {
  event.preventDefault();
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    const response = await fetch("/api/cars/" + id, {
      method: "DELETE",
    })

    if (!response.ok) {
      document.location.reload();
    } else {
      alert("Failed to delete Car listing")
    }
  };
}
document
  .querySelector(".cars")
  .addEventListener("click", deleteCarHandler);