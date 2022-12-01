const deleteCarHandler = async function (event) {
  event.preventDefault();
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    console.log(id);
    const response = await fetch("/api/cars/" + id, {
      method: "DELETE",
    })

    console.log(response)

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