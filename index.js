const $form = document.querySelector(".form-main");
const $divForm = document.querySelector(".div-form")
let arrayChildren = Array.from($divForm.children);
let newInputChildren = arrayChildren.filter( el => {
  return el.className !== "inp-span"
})

/**
 * Evento al iniciar
 */

window.addEventListener("DOMContentLoaded", () => {
  const disabledInp = document.querySelector(".inp-disabled");
  let numRandom = Math.floor(Math.random() * (900000 - 100000 + 1) + 100000);
  disabledInp.setAttribute("placeholder", `${numRandom}`);
});

/**
 * Funciones
 */

/**
 * Eventos
 */
$form.addEventListener("keyup", (event) => {
  let sliceChildren = newInputChildren.slice(0, 2);
  let btnSubmit = newInputChildren[newInputChildren.length - 1];

  if ((sliceChildren[0].value !== "" && sliceChildren[1].value !== "")) {
    btnSubmit.classList.add("inp-submit-enable")
    btnSubmit.removeAttribute("disabled");
  } else {
    btnSubmit.classList.remove("inp-submit-enable")
    btnSubmit.setAttribute("disabled", "true")
  }
});
