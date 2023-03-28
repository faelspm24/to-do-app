const ul = document.querySelector("ul");
const li = document.querySelector("li");
const searchtodo = document.querySelector("form-search");
const formulario = document.querySelector("#form");
const campo = document.getElementById("campo");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = campo.value;
  ul.appendChild(li);

  ul.innerHTML += `<li>${inputValue}</li>`;
});
