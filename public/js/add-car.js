let image;
let car_image = document.querySelector("#car-image-new")
async function addCarHandler(event) {
  event.preventDefault();

  const brand = document.querySelector('#brandInput').value;
  const model = document.querySelector('#modelInput').value.trim();
  const year = parseInt(document.querySelector('#yearInput').value.trim());
  const mileage = parseFloat(document.querySelector('#mileageInput').value.trim());
  const price = parseFloat(document.querySelector('#priceInput').value.trim());

  if (!image) {
    image = "https://res.cloudinary.com/dfe0rjexj/image/upload/v1669079800/Image_not_Available_uocgt8.jpg"
  }
  console.log(image, brand,model,year,mileage,price)
  const response = await fetch("/api/cars/newCar", {
    method: "POST",
    body: JSON.stringify({
      image,
      brand,
      model,
      year,
      mileage,
      price,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.replace("/sale");
  } else {
    alert(response.statusText);
  }
}

document.querySelector("#add-car-form").addEventListener("submit", addCarHandler);


var myWidget = cloudinary.createUploadWidget({
  cloudName: 'dfe0rjexj',
  uploadPreset: 'cars-r-us',
  maxFiles: 1
}, (error, result) => {
  if (!error && result && result.event === "success") {
    // console.log('Done! Here is the image info: ', result.info); 
    image = result.info.url
    car_image.src = image
    console.log(image)
  }
}
)

document.getElementById("upload_widget").addEventListener("click", function () {
  myWidget.open();
}, false);