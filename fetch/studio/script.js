//TODO: Add Your Code Below
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json) {
           const container = document.getElementById("container");
           console.log(response)
            for (let i = 0; i < json.length; i++) {
              container.innerHTML = `
              <div class="astronaut">
              <div class="bio">
                  <h3>Mae Jemison</h3>
                  <ul>
                  <li>Hours in space: 190</li>
                  <li>Active: false</li>
                  <li>Skills: Physician, Chemical Engineer</li>
                  </ul>
              </div>
              <img class="avatar" src="images/mae-jemison.jpg">
          </div>
              `;
           };
        });
     });
    });