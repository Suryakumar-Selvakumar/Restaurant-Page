import Icon from "./restaurant.jpg";

export function component() {
  const div = document.createElement("div");
  const header = document.createElement("h1");
  const aboutPara = document.createElement("p");
  const myIcon = new Image();

  header.textContent = "La Cucina Italiana";
  myIcon.src = Icon;
  aboutPara.textContent =
    "Welcome to La Cucina Italiana, where the essence of Italy comes to life with every bite. Our restaurant is renowned for its authentic flavors, crafted with the finest ingredients and traditional recipes passed down through generations. From our perfectly seasoned pasta dishes to our wood-fired pizzas, every meal is a celebration of Italy's rich culinary heritage. Whether you're enjoying a romantic dinner or a family gathering, our warm ambiance and friendly staff ensure a dining experience like no other. Come savor the taste of Italy today! Buon Appetito!";

  div.append(header, myIcon, aboutPara);
  return div;
}
