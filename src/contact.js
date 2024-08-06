export function contact() {
  const div = document.createElement("div");

  const header = document.createElement("h1");
  header.textContent = "Contact";

  const contactsDiv = document.createElement("div");

  //CONTACT ONE
  const contactOne = document.createElement("div");
  const contactOneName = document.createElement("p");
  contactOneName.textContent = "Giovanni Rossi";
  const contactOnePosition = document.createElement("p");
  contactOnePosition.textContent = "Manager";
  const contactOnePhone = document.createElement("p");
  contactOnePhone.textContent = "(123) 456-7890";
  const contactOneEmail = document.createElement("p");
  contactOneEmail.textContent = "giovanni.rossi@example.com";
  contactOne.append(
    contactOneName,
    contactOnePosition,
    contactOnePhone,
    contactOneEmail
  );
  contactsDiv.appendChild(contactOne);

  // CONTACT TWO
  const contactTwo = document.createElement("div");
  const contactTwoName = document.createElement("p");
  contactTwoName.textContent = "Maria Bianchi";
  const contactTwoPosition = document.createElement("p");
  contactTwoPosition.textContent = "Head Chef";
  const contactTwoPhone = document.createElement("p");
  contactTwoPhone.textContent = "(123) 456-7891";
  const contactTwoEmail = document.createElement("p");
  contactTwoEmail.textContent = "maria.bianchi@example.com";
  contactTwo.append(
    contactTwoName,
    contactTwoPosition,
    contactTwoPhone,
    contactTwoEmail
  );
  contactsDiv.appendChild(contactTwo);

  // CONTACT THREE
  const contactThree = document.createElement("div");
  const contactThreeName = document.createElement("p");
  contactThreeName.textContent = "Luca Verdi";
  const contactThreePosition = document.createElement("p");
  contactThreePosition.textContent = "Sous Chef";
  const contactThreePhone = document.createElement("p");
  contactThreePhone.textContent = "(123) 456-7892";
  const contactThreeEmail = document.createElement("p");
  contactThreeEmail.textContent = "luca.verdi@example.com";
  contactThree.append(
    contactThreeName,
    contactThreePosition,
    contactThreePhone,
    contactThreeEmail
  );
  contactsDiv.appendChild(contactThree);

  // CONTACT FOUR
  const contactFour = document.createElement("div");
  const contactFourName = document.createElement("p");
  contactFourName.textContent = "Isabella Neri";
  const contactFourPosition = document.createElement("p");
  contactFourPosition.textContent = "Waitstaff Supervisor";
  const contactFourPhone = document.createElement("p");
  contactFourPhone.textContent = "(123) 456-7893";
  const contactFourEmail = document.createElement("p");
  contactFourEmail.textContent = "isabella.neri@example.com";
  contactFour.append(
    contactFourName,
    contactFourPosition,
    contactFourPhone,
    contactFourEmail
  );
  contactsDiv.appendChild(contactFour);

  div.append(header, contactsDiv);
  return div;
}
