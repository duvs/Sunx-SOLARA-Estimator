const priceData = {
    "D1": {
        "8 ft 2 inch": {"8 ft 2 inch": 6851, "9 ft 10 in": 7332, "11 ft 6 in": 7975, "13 ft 1 in": 8243, "14 ft 9 in": 9737, "16 ft 5 in": 10455, "18 ft 0 in": 10956, "19 ft 8 in": 11615},
        "9 ft 10 in": {"8 ft 2 inch": 7244, "9 ft 10 in": 7999, "11 ft 6 in": 8596, "13 ft 1 in": 9448, "14 ft 9 in": 10506, "16 ft 5 in": 11225, "18 ft 0 in": 11858, "19 ft 8 in": 12926},
        "11 ft 6 in": {"8 ft 2 inch": 7767, "9 ft 10 in": 8525, "11 ft 6 in": 9265, "13 ft 1 in": 10238, "14 ft 9 in": 11342, "16 ft 5 in": 12462, "18 ft 0 in": 13662, "19 ft 8 in": 14929},
        "13 ft 1 in": {"8 ft 2 inch": 8022, "9 ft 10 in": 9253, "11 ft 6 in": 10075, "13 ft 1 in": 11291, "14 ft 9 in": 12733, "16 ft 5 in": 14175, "18 ft 0 in": 15539, "19 ft 8 in": 16980}
    },
    "D2": {
        "8 ft 2 inch": {"21 ft 4 in": 13728, "22 ft 11 in": 14363, "24 ft 7 in": 14876, "26 ft 3 in": 15560, "27 ft 10 in": 16180, "29 ft 6 in": 16724, "31 ft 2 inch": 17285, "32 ft 10 inch": 17886},
        "9 ft 10 in": {"21 ft 4 in": 14484, "22 ft 11 in": 15086, "24 ft 7 in": 15947, "26 ft 3 in": 17030, "27 ft 10 in": 18113, "29 ft 6 in": 19139, "31 ft 2 inch": 20222, "32 ft 10 inch": 21299},
        "11 ft 6 in": {"21 ft 4 in": 16189, "22 ft 11 in": 17396, "24 ft 7 in": 18656, "26 ft 3 in": 19923, "27 ft 10 in": 21191, "29 ft 6 in": 22390, "31 ft 2 inch": 23658, "32 ft 10 inch": 24917},
        "13 ft 1 in": {"21 ft 4 in": 18413, "22 ft 11 in": 19786, "24 ft 7 in": 21219, "26 ft 3 in": 22661, "27 ft 10 in": 24102, "29 ft 6 in": 25466, "31 ft 2 inch": 26908, "32 ft 10 inch": 28341}
    }
};

const screenPriceData = {
   "6 ft 7 inch": {
       "4 ft 11 inch": 560.00, "6 ft 7 inch": 677.50, "8 ft 2 inch": 757.50, "9 ft 10 inch": 870.00,
       "11 ft 5 inch": 935.00, "13 ft 1 inch": 1037.50, "14 ft 9 inch": 1142.50, "16 ft 4 inch": 1247.50, "19 ft 8 inch": 1402.50
   },
   "8 ft 2 inch": {
       "4 ft 11 inch": 650.00, "6 ft 7 inch": 757.50, "8 ft 2 inch": 897.50, "9 ft 10 inch": 987.50,
       "11 ft 5 inch": 1117.50, "13 ft 1 inch": 1180.00, "14 ft 9 inch": 1327.50, "16 ft 4 inch": 1452.50, "19 ft 8 inch": 1702.50
   },
   "9 ft 10 inch": {
       "4 ft 11 inch": 777.50, "6 ft 7 inch": 917.50, "8 ft 2 inch": 1095.00, "9 ft 10 inch": 1102.50,
       "11 ft 5 inch": 1372.50, "13 ft 1 inch": 1485.00, "14 ft 9 inch": 1645.00, "16 ft 4 inch": 1805.00, "19 ft 8 inch": 2125.00
   }
};

function convertToFeet(measurement) {
   const parts = measurement.split(' ');
   let feet = parseInt(parts[0]);
   if (parts.length > 2 && (parts[2] === 'inch' || parts[2] === 'in')) {
       feet += parseInt(parts[1]) / 12;
   }
   return feet;
}

document.addEventListener("DOMContentLoaded", function() {
   updateOptions();
   populateDropdowns();
   updateInstallationFee();
   updatePermitFee();
   updateImage();
   updateLEDImage();
   initializeScreenCalculator();
});

function populateDropdowns() {
   populateNumericDropdown("electricHeaters", 10);
   populateNumericDropdown("fanBeams", 10);
   populateNumericDropdown("footerCount", 10);
   populateHeightDropdown();
   populateColorDropdown();
}

function populateNumericDropdown(id, max) {
   const dropdown = document.getElementById(id);
   dropdown.innerHTML = "";
   for (let i = 0; i <= max; i++) {
       let option = document.createElement("option");
       option.value = i;
       option.textContent = i;
       dropdown.appendChild(option);
   }
}

function populateHeightDropdown() {
   const heightOptions = [
       "Standard Height: 2.7 M max height",
       "Max Height: 9 Ft and 10 inch",
       "Custom Height: Call office for pricing"
   ];
   populateDropdown("heightSelection", heightOptions);
}

function populateColorDropdown() {
   const colorOptions = [
       "RAL7016 Arctic Dark Grey",
       "RAL 9016 Traffic White", 
       "Custom Color: Call office for pricing"
   ];
   populateDropdown("colorSelection", colorOptions);
}

function populateDropdown(id, options) {
   const dropdown = document.getElementById(id);
   dropdown.innerHTML = "";
   options.forEach(option => {
       let element = document.createElement("option");
       element.value = option;
       element.textContent = option;
       dropdown.appendChild(element);
   });
}

function updatePermitFee() {
   const permitRequirement = document.getElementById("permitRequirement").value;
   const permitFee = permitRequirement === "yes" ? 3000 : 0;
   document.getElementById("permitFee").textContent = `Permit & Engineering Fee: $${permitFee.toFixed(2)}`;
}

function updateInstallationFee() {
   const design = document.getElementById("designSelection").value;
   const fee = design === "D1" ? 1500 : 2500;
   document.getElementById("installationFee").textContent = `Installation Fee: $${fee.toFixed(2)}`;
}

function updateOptions() {
   const design = document.getElementById("designSelection").value;
   const lengthDropdown = document.getElementById("lengthSelection");
   
   lengthDropdown.innerHTML = "";
   Object.keys(priceData[design]).forEach(length => {
       let option = document.createElement("option");
       option.value = length;
       option.textContent = length;
       lengthDropdown.appendChild(option);
   });

   updateProjections();
   updateInstallationFee();
   updateImage();
}

function updateProjections() {
   const design = document.getElementById("designSelection").value;
   const length = document.getElementById("lengthSelection").value;
   const projectionDropdown = document.getElementById("projectionSelection");

   projectionDropdown.innerHTML = "";
   if (priceData[design] && priceData[design][length]) {
       Object.keys(priceData[design][length]).forEach(projection => {
           let option = document.createElement("option");
           option.value = projection;
           option.textContent = projection;
           projectionDropdown.appendChild(option);
       });
   }
}

function updateImage() {
   const design = document.getElementById("designSelection").value;
   const pergolaImage = document.getElementById("pergolaImage");
   
   if (design === "D1") {
       pergolaImage.src = "images/d1_pergola.jpg";
   } else {
       pergolaImage.src = "images/d2_pergola.jpg";
   }
   pergolaImage.style.display = "block";
}

function updateLEDImage() {
   const ledLights = document.getElementById("ledLights").value;
   const ledImage = document.getElementById("ledImage");
   ledImage.src = "images/color_led.jpg";
   
   if (ledLights === "Yes") {
       ledImage.style.display = "block";
   } else {
       ledImage.style.display = "none";
   }
}

function initializeScreenCalculator() {
   const screenHeightSelect = document.getElementById("screenHeight");
   screenHeightSelect.innerHTML = "";
   Object.keys(screenPriceData).forEach(height => {
       const option = document.createElement("option");
       option.value = height;
       option.textContent = height;
       screenHeightSelect.appendChild(option);
   });
   updateScreenProjections();
}

function updateScreenProjections() {
   const screenHeight = document.getElementById("screenHeight").value;
   const screenWidthSelect = document.getElementById("screenWidth");
   
   screenWidthSelect.innerHTML = "";
   if (screenPriceData[screenHeight]) {
       Object.keys(screenPriceData[screenHeight]).forEach(width => {
           const option = document.createElement("option");
           option.value = width;
           option.textContent = width;
           screenWidthSelect.appendChild(option);
       });
   }
}

function calculateScreenPrice() {
    const screenHeight = document.getElementById("screenHeight").value;
    const screenWidth = document.getElementById("screenWidth").value;
    const linearFeet = parseFloat(document.getElementById("linearFeet").value) || 0;
    const screenCount = parseInt(document.getElementById("screenCount").value);
    
    if (screenPriceData[screenHeight] && screenPriceData[screenHeight][screenWidth]) {
        const basePrice = screenPriceData[screenHeight][screenWidth];
        
        // Calculate price per square foot
        const heightInFeet = convertToFeet(screenHeight);
        const widthInFeet = convertToFeet(screenWidth);
        const pricePerSqFt = basePrice / (heightInFeet * widthInFeet);
        
        // Calculate total price based on linear feet
        let totalPrice = (linearFeet * heightInFeet) * pricePerSqFt;
        
        // Apply discount based on number of screens and get discount percentage
        let discountPercent = 0;
        if (screenCount > 1) {
            if (screenCount === 2) {
                discountPercent = 5;
                totalPrice *= 0.95;
            } else if (screenCount === 3) {
                discountPercent = 7;
                totalPrice *= 0.93;
            } else {
                discountPercent = 10;
                totalPrice *= 0.90;
            }
        }
        
        // Display results with details
        const totalSqFt = linearFeet * heightInFeet;
        const discountText = screenCount > 1 ? 
            ` (includes ${discountPercent}% discount)` : '';
        
        document.getElementById("screenPrice").innerHTML = 
            `Price per Square Foot: $${pricePerSqFt.toFixed(2)}<br>
             Total Square Feet: ${totalSqFt.toFixed(0)}<br>
             Total Linear Feet: ${linearFeet.toFixed(0)}<br>
             Total Price: $${totalPrice.toFixed(2)}${discountText}`;
    } else {
        document.getElementById("screenPrice").textContent = "Please select valid dimensions";
    }
}

function printOrder() {
    const design = document.getElementById("designSelection").value;
    const length = document.getElementById("lengthSelection").value;
    const projection = document.getElementById("projectionSelection").value;
    const height = document.getElementById("heightSelection").value;
    const color = document.getElementById("colorSelection").value;
    const mounting = document.getElementById("mountingType").value;
    const led = document.getElementById("ledLights").value;
    const heaters = document.getElementById("electricHeaters").value;
    const fans = document.getElementById("fanBeams").value;
    const permit = document.getElementById("permitRequirement").value;
    const footers = document.getElementById("footerCount").value;
    const totalPrice = document.getElementById("priceDisplay").textContent;
    
    // Get screen details
    const screenHeight = document.getElementById("screenHeight").value;
    const screenWidth = document.getElementById("screenWidth").value;
    const linearFeet = document.getElementById("linearFeet").value;
    const screenCount = document.getElementById("screenCount").value;
    const screenPrice = document.getElementById("screenPrice").textContent;
    
    let screenSection = '';
    if (screenPrice !== "Please select valid dimensions" && screenPrice !== "Screen Price: $0.00") {
        screenSection = `
            <div class="order-details">
                <h2>Motorized Screen Details</h2>
                <div class="detail-row"><strong>Screen Height:</strong> ${screenHeight}</div>
                <div class="detail-row"><strong>Total Linear Feet:</strong> ${linearFeet}</div>
                <div class="detail-row"><strong>Number of Screens:</strong> ${screenCount}</div>
                <div class="detail-row price">${screenPrice}</div>
            </div>
        `;
    }

    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
        <head>
            <title>Solara Order Details</title>
            <style>
                body { 
                    font-family: Arial, sans-serif; 
                    padding: 20px;
                    max-width: 800px;
                    margin: 0 auto;
                }
                .header { 
                    text-align: center; 
                    margin-bottom: 30px;
                    border-bottom: 2px solid #333;
                    padding-bottom: 20px;
                }
                .order-details { 
                    margin-bottom: 20px;
                    padding: 20px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                }
                .detail-row { 
                    margin: 10px 0;
                    display: flex;
                    justify-content: space-between;
                }
                .price { 
                    font-size: 1.2em;
                    font-weight: bold;
                    color: #28a745;
                    text-align: right;
                    margin-top: 20px;
                }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>Solara Pergola Order</h1>
                <p>Date: ${new Date().toLocaleDateString()}</p>
                <p>Order Reference: SO-${Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
            </div>
            <div class="order-details">
                <h2>Pergola Configuration</h2>
                <div class="detail-row"><strong>Model:</strong> ${design}</div>
                <div class="detail-row"><strong>Length:</strong> ${length}</div>
                <div class="detail-row"><strong>Projection:</strong> ${projection}</div>
                <div class="detail-row"><strong>Height:</strong> ${height}</div>
                <div class="detail-row"><strong>Color:</strong> ${color}</div>
                <div class="detail-row"><strong>Mounting Type:</strong> ${mounting}</div>
                <div class="detail-row"><strong>LED Lights:</strong> ${led}</div>
                <div class="detail-row"><strong>Electric Heaters:</strong> ${heaters}</div>
                <div class="detail-row"><strong>Fan Beams:</strong> ${fans}</div>
                <div class="detail-row"><strong>Permit Required:</strong> ${permit}</div>
                <div class="detail-row"><strong>Concrete Footers:</strong> ${footers}</div>
                <div class="price">${totalPrice}</div>
            </div>
            ${screenSection}
            <div style="margin-top: 40px; font-size: 0.9em; color: #666;">
                <p>This is a computer-generated document. For questions or support, please contact your local Solara representative.</p>
            </div>
        </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
}

document.getElementById("printOrderButton").addEventListener("click", printOrder);

document.getElementById("calculateButton").addEventListener("click", function() {
   const design = document.getElementById("designSelection").value;
   const length = document.getElementById("lengthSelection").value;
   const projection = document.getElementById("projectionSelection").value;
   const mountingType = document.getElementById("mountingType").value;
   const ledLights = document.getElementById("ledLights").value;
   const electricHeaters = parseInt(document.getElementById("electricHeaters").value) || 0;
   const fanBeams = parseInt(document.getElementById("fanBeams").value) || 0;
   const permitRequirement = document.getElementById("permitRequirement").value;
   const footerCount = parseInt(document.getElementById("footerCount").value) || 0;

   let price = priceData[design][length] && priceData[design][length][projection] 
       ? priceData[design][length][projection] 
       : 0;

   if (mountingType === "Wall Mounted") {
       price -= 200;
   }
   
   if (ledLights === "Yes") {
       const lengthFeet = convertToFeet(length);
       const projectionFeet = convertToFeet(projection);
       price += ((lengthFeet + projectionFeet) * 2) * 4;
   }
   
   price += electricHeaters * 250;
   price += fanBeams * 250;
   price += design === "D1" ? 1500 : 2500;
   
   const permitFee = permitRequirement === "yes" ? 3000 : 0;
   price += permitFee;
   price += footerCount * (permitRequirement === "yes" ? 600 : 400);

   document.getElementById("priceDisplay").textContent = `Estimated Price: $${price.toFixed(2)}`;
   updatePermitFee();
});