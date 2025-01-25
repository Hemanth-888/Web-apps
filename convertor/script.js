function convertTemperature() {
    const value = parseFloat(document.getElementById("tempValue").value);
    const unit = document.getElementById("tempUnit").value;
    let result;
  
    if (unit === "C") {
      result = (value * 9/5) + 32;
      document.getElementById("tempResult").textContent = `${value}°C = ${result.toFixed(2)}°F`;
    } else {
      result = (value - 32) * 5/9;
      document.getElementById("tempResult").textContent = `${value}°F = ${result.toFixed(2)}°C`;
    }
  }
  
  function convertCurrency() {
    const amount = parseFloat(document.getElementById("currencyAmount").value);
    const fromCurrency = document.getElementById("currencyFrom").value;
    const toCurrency = document.getElementById("currencyTo").value;
  
   
    const exchangeRates = {
      "USD": { "INR": 83, "EUR": 0.94 },
      "EUR": { "USD": 1.06, "INR": 88.2 },
      "INR": { "USD": 0.012, "EUR": 0.011 },
    };
  
    let result;
  
    if (fromCurrency === toCurrency) {
      result = amount;
    } else {
      result = amount * exchangeRates[fromCurrency][toCurrency];
    }
  
    document.getElementById("currencyResult").textContent = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
  }
  
  const backgrounds = [
    "url('https://www.shutterstock.com/shutterstock/videos/1088435313/thumb/11.jpg?ip=x480')",  // Image 1
    "url('https://play-lh.googleusercontent.com/8ABsu1Tyaj5pGFfUguwr2aj7QfC5kROxuBynl4LeGkbmbiqwOTeii0ReSDgvbqLWDA=w526-h296-rw')"   // Image 2
  ];
  
  let currentBackground = 0; 
  
  function flipCard() {
    const card = document.querySelector('.card');
    card.classList.toggle('flip'); 
    
    currentBackground = (currentBackground + 1) % backgrounds.length;
    document.body.style.backgroundImage = backgrounds[currentBackground];
    document.body.style.backgroundSize = "cover"; 
    document.body.style.backgroundPosition = "center"; 
  }
  