window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("hidden");
    document.getElementById("content").classList.remove("hidden");
  }, 1200);
});

function goToMenu(tipo) {
  const links = {
    cerveza: "https://menucerveceria.netlify.app",
    cocktails: "https://cameliascocktails.netlify.app"
  };

  window.location.href = links[tipo];
}
