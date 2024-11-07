const form = document.querySelector("#form");
const tableBody = document.querySelector("#employeeList");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const firstname = formData.get("firstname");
  const lastname = formData.get("lastname");
  const email = formData.get("email");
  const hiredate = formData.get("hire_date");
  const photo = formData.get("photo").name;
  const button = document.createElement("button");
  const tdButton = document.createElement("td");
  button.innerHTML = "Delete";

  const tableRow = document.createElement("tr");
  tableRow.innerHTML = `
    <td><img src="./images/${photo}"></td>
    <td>${firstname}</td>
    <td>${lastname}</td>
    <td>${email}</td>
    <td>${hiredate}</td>
    `;

  tableBody.appendChild(tableRow);
  tdButton.appendChild(button);
  tableRow.appendChild(tdButton);

  button.addEventListener("click", () => {
    if (confirm("are you sure you want to delete this employee?") === true) {
      tableRow.remove();
    }
  });
});

// if (confirm("Are you sure you want to delete this employee?") === true) {
// }
// button.addEventListener("click", () => {
//   if (confirm("are you sure you want to delete this employee?") === true) {
//     tableRow.remove();
//   }
// });
