let usersArr = [];
let idCounter = 1;

let firstNameInput = document.getElementById("firstNameInput");
let lastNameInput = document.getElementById("lastNameInput");
let emailInput = document.getElementById("emailInput");
let passInput = document.getElementById("passwordInput");
let tBodyResult = document.getElementById("tBodyResult");

class User {
  constructor(firstNameInput, lastNameInput, emailInput, idCounter) {
    (this.firstNameInput = firstNameInput.value),
      (this.lastNameInput = lastNameInput.value),
      (this.emailInput = emailInput.value),
      (this.idCounter = idCounter);
  }
}

function runBtn() {
  document.getElementById("tableShow").classList.remove("d-none");

  if (firstNameInput.value == "") {
    alert("something missing");
    firstNameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";
    passInput.value = "";
    return;
  }

  tBodyResult.innerHTML += `  <tr>
    <th scope="row">${idCounter}</th>
    <td>${firstNameInput.value}</td>
    <td>${lastNameInput.value}</td>
    <td>${emailInput.value}</td>
    <td>${passInput.value}</td>
    <td><button><i onclick="deleteUser(this)" id="removeBtn" class="bi bi-trash btn btn-danger }"></i></button></td>
  </tr>`;
  usersArr.push(new User(firstNameInput, lastNameInput, emailInput, idCounter));

  firstNameInput.value = "";
  lastNameInput.value = "";
  emailInput.value = "";
  passInput.value = "";
  idCounter++;
  console.log(usersArr);
}
function deleteUser(button) {
  let tBodyResult = button.closest("tr");
  tBodyResult.remove();
  usersArr.splice((user) => user);
  // usersArr = usersArr.filter((user) => user.idCounter == this.idCounter);
}
