const carHandler = async function (event) {
  event.preventDefault();
  if (event.target.hasAttribute('data-delete-id')) {
    const id = event.target.getAttribute('data-delete-id');
    console.log(id);
    const response = await fetch("/api/cars/" + id, {
      method: "DELETE",
    })

    if (!response.ok) {
      document.location.reload();
    } else {
      alert("Failed to delete Car listing")
    }
  };
  if (event.target.hasAttribute('data-update-id')) {
    const id = event.target.getAttribute('data-update-id');
    window.location.href = `/sale/update-car/${id}`
  }
}
document
  .querySelector(".cars")
  .addEventListener("click", carHandler);