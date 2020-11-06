const main = document.getElementById("main");

function getBusRoute() {
  let busRoute = document.getElementById("busRoute").value; // Your code here

  if ((typeof busRoute !== "undefined") & (busRoute !== "")) {
    let busRouteURL = "https://api.umd.io/v0/bus/routes/" + busRoute; // Your code here
    console.log(busRouteURL);

    fetch(busRouteURL)
      .then((response) => {
        return response.json();
      })
      .then((route) => {
        // YOUR CODE HERE
        sessionStorage.setItem("title", route.title);   
        sessionStorage.setItem("lat_Max", route.lat_max); 
        sessionStorage.setItem("latMin", route.lat_min);
        sessionStorage.setItem("lonMax", route.lon_max);
        sessionStorage.setItem("lonMin", route.lon_min);

      })
      .catch((err) => {
        console.log(err);
        main.innerHTML = "Invalid bus route";
      });
  } else {
    main.innerHTML = "No value provided";
    sessionStorage.setItem("title", "Nothing Set");
    sessionStorage.setItem("lat_Max", "Nothing set"); 
    sessionStorage.setItem("lat_Min", "Nothing set");
    sessionStorage.setItem("lon_Max", "Nothing set");
    sessionStorage.setItem("lon_Min", "Nothing set");
  }
}
