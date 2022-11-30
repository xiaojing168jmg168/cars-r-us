async function addCarHandler(event) {
    event.preventDefault();
  
    const image = document.querySelector('input[name="image"]').value;
    const brand = document.querySelector('input[name="brand"]').value;
    const model = document.querySelector('input[name="model"]').value;
    const year = document.querySelector('input[name="year"]').value;
    const mileage = document.querySelector('input[name="mileage"]').value;
    const price = document.querySelector('input[name="price"]').value;
    
    const response = await fetch("/api/post", {
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
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
  
    document.querySelector("#add-car-form").addEventListener("submit", addCarHandler);