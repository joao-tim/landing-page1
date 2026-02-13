const form = document.getElementById("form-suporte");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      alert("Mensagem enviada com sucesso! Em breve entraremos em contato.");
      form.reset();
    } else {
      alert("Erro ao enviar. Tente novamente.");
    }
  } catch (error) {
    alert("Erro de conexão. Verifique sua internet.");
  }
});