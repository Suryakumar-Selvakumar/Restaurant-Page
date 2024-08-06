import Icon from "./restaurant.jpg";

export function component() {
  const div = document.createElement("div");
  const header = document.createElement("h1");
  const aboutPara = document.createElement("p");
  const myIcon = new Image();

  header.textContent = "Bella Italia";
  myIcon.src = Icon;
  aboutPara.textContent =
    "Welcome to Bella Italia, where the essence of Italy comes to life with every bite. Our restaurant is renowned for its authentic flavors, crafted with the finest ingredients and traditional recipes passed down through generations. From our perfectly seasoned pasta dishes to our wood-fired pizzas, every meal is a celebration of Italy's rich culinary heritage. Whether you're enjoying a romantic dinner or a family gathering, our warm ambiance and friendly staff ensure a dining experience like no other. Come savor the taste of Italy today! Buon Appetito!";

  const hoursDiv = document.createElement("div");
  const hoursHeader = document.createElement("h2");
  hoursHeader.textContent = "Hours";
  const hours = document.createElement("div");
  const hrOne = document.createElement("p");
  hrOne.textContent = "Monday: 11am - 9pm";
  const hrTwo = document.createElement("p");
  hrTwo.textContent = "Tuesday: 11am - 9pm";
  const hrThree = document.createElement("p");
  hrThree.textContent = "Wednesday: 11am - 9pm";
  const hrFour = document.createElement("p");
  hrFour.textContent = "Thursday: 11am - 9pm";
  const hrFive = document.createElement("p");
  hrFive.textContent = "Friday: Closed";
  const hrSix = document.createElement("p");
  hrSix.textContent = "Saturday: 10am - 10pm";
  const hrSeven = document.createElement("p");
  hrSeven.textContent = "Sunday: 10am - 10pm";
  hours.append(hrOne, hrTwo, hrThree, hrFour, hrFive, hrSix, hrSeven);
  hoursDiv.append(hoursHeader, hours);

  const locationDiv = document.createElement("div");
  const locationHeader = document.createElement("h2");
  locationHeader.textContent = "Location";
  const location = document.createElement("p");
  location.textContent =
    "1234 Pasta Lane, Culinary City, FL 56789, United States";
  locationDiv.append(locationHeader, location);

  div.append(header, myIcon, aboutPara, hoursDiv, locationDiv);
  return div;
}
