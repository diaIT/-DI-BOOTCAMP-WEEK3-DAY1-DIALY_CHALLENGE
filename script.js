//Create an array which value is the planets of the solar system.
const planets = [
    {name :"Mercury",moons :3},
    {name : "Venus",moons : 1},
    {name :"Earth",moons :1}, 
    {name:"Mars",moons :2},
    {name :"Jupiter",moons :2},
    {name:"Saturn",moons :3} ,
    {name:"Uranus",moons :4}, 
    {name:"Neptune",moons :5},
    ]

//For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
 for(const planet of planets){
    const planetdiv = document.createElement("div")
    planetdiv.classList.add("planet",planet.name)
    
//Bonus: Do the same process to create the moons.
//Be careful, each planet has a certain amount of moons.
    for(i=0; i<planet.moons;  i++){
        const monDiv= document.createElement("div")
        monDiv.classList.add("moon")
        monDiv.style.left= i * 15 + "px"
        planetdiv.appendChild(monDiv)
    }
    
//Finally append each div to the <section> in the HTML (presented below).
    const section = document.querySelector(".listPlanets")
    section.appendChild(planetdiv)
 
 }
