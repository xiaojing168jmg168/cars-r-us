let image;
let car_image = document.querySelector("#car-image-new")

async function updateFormHandler(event) {
  event.preventDefault();

  const brand = document.querySelector('#brandInput').value;
  const model = document.querySelector('#modelInput').value.trim();
  const year = parseInt(document.querySelector('#yearInput').value.trim());
  const mileage = parseFloat(document.querySelector('#mileageInput').value.trim());
  const price = parseFloat(document.querySelector('#priceInput').value.trim());
  const id = document.querySelector('#delete-btn').dataset.id;


  console.log(id)

  const response = await fetch(`/api/cars/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      image,
      brand,
      model,
      year,
      mileage,
      price
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (response.ok) {
    document.location.replace("/sale");
  } else {
    alert(response.statusText);
  }
}

document.querySelector(".update-car-form")
document.addEventListener("submit", updateFormHandler);


const deleteCarHandler = async function (event) {
  event.preventDefault();
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    const response = await fetch("/api/cars/" + id, {
      method: "DELETE",
    })

    console.log(response)

    if (!response.ok) {
      document.location.replace("/sale");
    } else {
      alert("Failed to delete Car listing")
    }
  };
}
document
  .querySelector("#delete-btn")
  .addEventListener("click", deleteCarHandler);


// Cloudinary Widget 
var myWidget = cloudinary.createUploadWidget({
  cloudName: 'dfe0rjexj',
  uploadPreset: 'cars-r-us',
  maxFiles: 1
}, (error, result) => {
  if (!error && result && result.event === "success") {
    image = result.info.url
    car_image.src = image
  }
}
)

document.getElementById("upload_widget").addEventListener("click", function () {
  myWidget.open();
}, false);