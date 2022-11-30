const deleteCarHandler = async function (event) {
    event.preventDefault();
    const postId = document.getElementById("car-id");
  
    fetch("/api/car/" + postId.value, {
      method: "DELETE",
    })
      .then(function () {
        document.location.replace("/dashboard");
      })
      .catch((err) => console.log(err));
  };
  
  document
    .querySelector("#delete-btn")
    .addEventListener("click", deleteCarHandler);