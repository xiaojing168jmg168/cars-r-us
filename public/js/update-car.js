async function updateFormHandler(event) {
    event.preventDefault();

    const image = document.querySelector('input[name="car-image"]').value.trim();
    const brand = document.querySelector('input[name="car-brand"]').value.trim();
    const model = document.querySelector('input[name="car-model"]').value.trim();
    const year = document.querySelector('input[name="car-year"]').value.trim();
    const mileage = document.querySelector('input[name="car-mileage"]').value.trim();
    const price = document.querySelector('input[name="car-price"]').value.trim();
    const id = window.location.toString().split("/")[
      window.location.toString().split("/").length - 1
    ];
      
      const response = await fetch("/api/posts/${id}", {
        method: "PUT",
        body: JSON.stringify({
          car_id: id,
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
        document.location.replace("/dashboard");
      } else {
        alert(response.statusText);
      }
}

document.querySelector(".update-car-form")
document.addEventListener("submit", updateFormHandler);