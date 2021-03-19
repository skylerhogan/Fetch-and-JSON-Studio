// TODO: add code here
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            const container = document.getElementById("container");
            json.sort((a, b) => {
                return b.hoursInSpace - a.hoursInSpace;
            });

            for (i = 0; i < json.length; i++) {
                if (json[i].active === true) {
                    container.innerHTML += `<div class="astronaut">
                  <div class="bio">
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                    <ul>
                      <li>Hours in space: ${json[i].hoursInSpace}</li>
                      <li id="active" class="active">Active: ${json[i].active}</li>
                      <li>Skills: ${json[i].skills}</li>
                      </ul>
                    </div>
                    <img class="avatar" src= ${json[i].picture}>
                  </div>`
                } else { container.innerHTML += `<div class="astronaut">
                <div class="bio">
                  <h3>${json[i].firstName} ${json[i].lastName}</h3>
                  <ul>
                    <li>Hours in space: ${json[i].hoursInSpace}</li>
                    <li id="active" class="inactive">Active: ${json[i].active}</li>
                    <li>Skills: ${json[i].skills}</li>
                    </ul>
                  </div>
                  <img class="avatar" src= ${json[i].picture}>
                </div>` }
            };
            const header = document.getElementById("header");
            header.innerHTML = `Astronauts Aboard Mission: ${json.length.toString()}`
        });
    });
});