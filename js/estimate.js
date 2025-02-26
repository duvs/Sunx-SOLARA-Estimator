document.addEventListener("DOMContentLoaded", function () {
  const estimateData = JSON.parse(localStorage.getItem("estimateData"));

  if (!estimateData) {
    alert("No estimate data found. Please generate an estimate first.");
    console.error("No estimate data in localStorage.");
    window.location.href = "index.html";
    return;
  }

  const setTextContent = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = value || "N/A";
  };

  setTextContent("#clientName", estimateData.clientName);
  setTextContent("#clientAddress", estimateData.clientAddress);
  setTextContent("#clientPhone", estimateData.clientPhone);
  setTextContent("#clientEmail", estimateData.clientEmail);
  setTextContent("#basePrice", `${estimateData.basePrice.toFixed(2)}`);
  setTextContent(
    "#installationFee",
    `${estimateData.installationFee.toFixed(2)}`
  );
  setTextContent("#permitFee", `${estimateData.permitFee.toFixed(2)}`);
  setTextContent("#totalPrice", `${estimateData.totalPrice.toFixed(2)}`);
  setTextContent("#estimateDate", new Date().toLocaleDateString());

  const descriptionElement = document.querySelector("#description");
  if (descriptionElement) {
    descriptionElement.innerHTML = `
      <ul>
        <li>Pergola Design ${estimateData.pergolaDesign.text}</li>
        <li>Dimensions: ${estimateData.pergolaLength.text} ft (Length) x ${
      estimateData.pergolaProjection.text
    } ft (Projection)</li>
        <li>Height: ${estimateData.pergolaHeight.text}</li>
        <li>Structure Color: ${estimateData.pergolaColor.text}</li>
        <li>Mounting Type: ${estimateData.pergolaMounting.text}</li>
        <li>LED Perimeter: ${
          estimateData.pergolaLedPerimeter.value === "Yes"
            ? "Included"
            : "Not included"
        }</li>
        <li>Electric Heaters: ${estimateData.pergolaHeaters || 0}</li>
        <li>Fan Beams: ${estimateData.pergolaFans || 0}</li>
        <li>Permit Required: ${
          estimateData.pergolaPermitRequired.value === "Yes"
            ? "Yes, additional engineering and permitting fees apply."
            : "No, standard installation."
        }</li>
        <li>Supporting Footer: ${estimateData.pergolaFooter || 0}</li>
      </ul>
    `;
  }

  const downloadButton = document.querySelector("#downloadPdfBtn");
  if (downloadButton) {
    downloadButton.addEventListener("click", function () {
      const element = document.querySelector(".estimate");
      if (!element) {
        console.error("Estimate element not found.");
        return;
      }

      let clientName = estimateData.clientName.trim();

      let nameParts = clientName.split(/\s+/);
      let shortName = nameParts.slice(0, 2).join("_");

      shortName = shortName.substring(0, 30);

      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const day = String(today.getDate()).padStart(2, "0");

      const formattedDate = `${year}-${month}-${day}`;
      const fileName = `${shortName}_Estimate_${formattedDate}.pdf`;

      html2pdf()
        .from(element)
        .set({
          margin: [10, 20, 10, 20],
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: {
            scale: 2,
            dpi: 300,
            letterRendering: true,
            useCORS: true,
            logging: false,
          },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        })
        .save(fileName);
    });
  }
});
