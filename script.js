const height = document.getElementById("height-input");
const weight = document.getElementById("weight-input");
const welcomeText = document.querySelector(".welcome-text");
const resultText = document.querySelector(".result-text");
const resultNumber = document.querySelector(".result-number");
const finalText = document.querySelector(".final-text");

/**
 * Vypočtení BMI na základě vložených údajů výšky a váhy, kde ke konkrétní hodnotě uživatel dostane odpovídající text
 */
function calculateBmi() {
  // Získání hodnot z inputů
  let heightValue = parseFloat(height.value);
  let weightValue = parseFloat(weight.value);

  // Kontrola platných hodnot
  if (
    isNaN(heightValue) ||
    isNaN(weightValue) ||
    heightValue <= 0 ||
    weightValue <= 0
  ) {
    // Pokud nejsou vyplněny oba inputy nebo jsou neplatné, vrátíme se k původním textům
    welcomeText.style.display = "block";
    resultText.style.display = "none";
    return;
  } else {
    welcomeText.style.display = "none";
    resultText.style.display = "grid";
  }

  // Výpočet BMI indexu
  let bmi = (weightValue / (heightValue / 100) ** 2).toFixed(2);

  // Zobrazení výsledku
  resultNumber.textContent = bmi;

  if (bmi < 20) {
    finalText.textContent = "Your BMI indicates that you are underweight.";
  } else if (bmi <= 24.9) {
    finalText.textContent = "Your BMI suggests you are a healthy weight.";
  } else if (bmi <= 29.9) {
    finalText.textContent = "Your BMI indicates that you are mildly obese.";
  } else if (bmi <= 39.9) {
    finalText.textContent = "Your BMI indicates that you are moderately obese.";
  } else if (bmi >= 40) {
    finalText.textContent = "Your BMI indicates that you are severely obese.";
  }
}

// Přidání posluchačů událostí pro automatické volání calculateBmi
height.addEventListener("input", calculateBmi);
weight.addEventListener("input", calculateBmi);
