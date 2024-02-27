// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {
    const takeOff = document.getElementById("takeoff");
    const land = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const rightButton = document.getElementById("right");
    const leftButton = document.getElementById("left");
    const flightStatus = document.getElementById("flightStatus");
    const endlessSpace = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const shuttle = document.getElementById("rocket");
    

    takeOff.addEventListener("click", event => {
        let confirmWindow = window.confirm("Confirm that the shuttle is ready for takeoff.")
        if (confirmWindow === true) {
            flightStatus.innerHTML = 'Shuttle in flight.';
            endlessSpace.style.backgroundColor = 'blue'; 
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
        }
    })
    land.addEventListener('click', event => {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = 'The shuttle has landed.';
        endlessSpace.style.backgroundColor = 'green';
        shuttleHeight.innerHTML = '0';
    })
    missionAbort.addEventListener("click", event => {
        let confirmWindow = window.confirm("Confirm that you want to abort the mission.")
        if (confirmWindow === true) {
            flightStatus.innerHTML = 'Mission aborted.';
            endlessSpace.style.backgroundColor = 'green'; 
            shuttleHeight.innerHTML = '0';
        }
    })
    upButton.addEventListener('click', event => {
   
        
    }
    )
    downButton.addEventListener('click', event => {
       ;
    })
    rightButton.addEventListener('click', event => {

    })
    leftButton.addEventListener('click', event => {

    })

}

window.addEventListener("load", init);