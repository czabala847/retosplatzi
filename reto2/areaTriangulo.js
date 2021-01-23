const $form = document.querySelector("#form-calc-area");
var $modal = new bootstrap.Modal(document.getElementById("modalResult"));

if ($form) {
  $form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fd = new FormData($form);

    const result = (fd.get("base") * fd.get("altura")) / 2;
    document.querySelector(
      "#showResult"
    ).innerText = `Área del triangulo: ${result}`;

    $modal.show();
  });
}
