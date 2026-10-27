// Validação do formulário e mensagens de interação da página.
const formCadastro = document.querySelector("#formCadastro");
const mensagemCadastro = document.querySelector("#mensagemCadastro");
const anoAtual = document.querySelector("#anoAtual");

if (anoAtual) {
  anoAtual.textContent = new Date().getFullYear();
}

if (formCadastro) {
  formCadastro.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!formCadastro.checkValidity()) {
      event.stopPropagation();
      formCadastro.classList.add("was-validated");
      mensagemCadastro.textContent = "";
      mensagemCadastro.classList.remove("success");
      return;
    }

    const nome = document.querySelector("#nome").value.trim();
    mensagemCadastro.textContent = `Obrigado, ${nome}! Seu cadastro demonstrativo foi validado com sucesso. Nenhum dado foi enviado ou armazenado.`;
    mensagemCadastro.classList.add("success");
    formCadastro.classList.remove("was-validated");
    formCadastro.reset();
  });
}
