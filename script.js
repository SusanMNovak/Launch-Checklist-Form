// Write your JavaScript code here!
//JavaScript loads brfore html
window.addEventListener("load", function() {
 //Fetch JSON
 fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
   response.json().then(function(json){
      const missionTarget = document.getElementById('missionTarget');
      const index = Math.floor(Math.random() * json.length - 1);
      missionTarget.innerHTML = `
      <ol>
      <li>Name: ${json[index].name}</li>
      <li>Diameter: ${json[index].diameter}</li>
      <li>Star: ${json[index].star}</li>
      <li>Distance from Earth: ${json[index].distance}</li>
      <li>Number of Moons: ${json[index].moons}</li>
      </ol>
      <img src="${json[index].image}">
      `;
   });
});

   //Code executed upon submit click
   let form = this.document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      //DOM elements
      let pilotName = document.querySelector("input[name = pilotName]");
      let copilotName = document.querySelector("input[name = copilotName]");
      let fuelLevel = document.querySelector("input[name = fuelLevel]");
      let cargoMass = document.querySelector("input[name = cargoMass]");
      let cargoStatus = document.getElementById('cargoStatus');
      let faultyItems = document.getElementById('faultyItems');
      let fuelStatus = document.getElementById('fuelStatus');
      let launchStatus = document.getElementById('launchStatus');
      let pilotStatus = document.getElementById('pilotStatus');
      let copilotStatus = document.getElementById('copilotStatus');
         return;
      }  
   //Check pilot and coPilot names are strings
   if (isNaN(pilotName.value) || isNaN(coPilotName.value)) {
      pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready`;
      copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready`;
   } else {
      alert('Pilot and Co-pilot are names not numbers!');
      return;
   }

   //Check fuelLevel and cargoMass are valid numbers
   if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
      alert("Fuel level and cargo mass must be integers!");
      return;
   }
   // If fuel level and cargo mass are valid, additional checks for fuel level, launch status, cargo mass
   else {
      if (fuelLevel.value < 10000) {
         faultyItems.style.visibility =  'visible';
         fuelStatus.innerHTML = 'Fuel level too low for trip!';
         launchStatus.innerHTML = 'Shuttle not launch ready!';
         launchStatus.style.color = 'red';
      } else {
         faultyItems.style.visibility = 'visible';
         fuelStatus.innerHTML = 'Fuel level sufficient for launch!';
      }

      if(cargoMass.value > 10000) {
         faultyItems.style.visibility = 'visible';
         cargoStatus.innerHTML = 'Cargo too heavy for launch!';
         launchStatus.innerHTML = 'Shuttle not launch ready!';
         launchStatus.style.color = 'red';
      } else {
         faultyItems.style.visibility = 'visible';
         cargoStatus.innerHTML = 'Cargo mass apprepriate for launch!';
      }

      if(fuelLevel.value >= 10000 && cargoMass.value <= 10000) {
         faultyItems.style.visibility = 'visible';
         launchStatus.innerHTML = 'Shuttle is launch ready!';
         launchStatus.style.color = 'green'; 
         fuelStatus.innerHTML = 'Fuel level appropriate for launch!'
         cargoMass.innerHTML = 'Cargo mass appropriate for launch!';
      }

  

   };

});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
})