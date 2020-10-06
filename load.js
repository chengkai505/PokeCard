(function(){
	if (document.getElementsByClassName("poke-card").length > 0) {
		let link = document.createElement("link");
		link.rel = "stylesheet";
		link.href = "//chengkai505.github.io/PokeCard/style.css";
		document.head.appendChild(link);
	}
})();