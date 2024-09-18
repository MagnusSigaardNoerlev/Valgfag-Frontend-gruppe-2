// Få fat i alle elementer med klassen "accordionStart"
const accordionElements = document.querySelectorAll('.accordionStart');

// Funktion som håndterer klik på elementerne
accordionElements.forEach(el => {
  el.addEventListener('click', function() {
    // Hvis det klikkede element allerede har klassen "active", fjern den
    if (this.classList.contains('active')) {
      this.classList.remove('active');
    } else {
      // Fjern klassen "active" fra alle andre elementer
      accordionElements.forEach(item => item.classList.remove('active'));
      // Tilføj klassen "active" til det klikkede element
      this.classList.add('active');
    }
  });
});