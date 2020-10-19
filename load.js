(function(){
	let pokeCard = document.getElementsByClassName("poke-card");
	if (pokeCard.length > 0 || document.getElementsByClassName("pokemon-container").length > 0) {
		let link = document.createElement("link");
		link.rel = "stylesheet";
		link.href = "//chengkai505.github.io/PokeCard/style.css";
		document.head.appendChild(link);
	}
	if (location.hostname != "kai73002981.blogspot.com") {
		for (let i = 0; i < pokeCard.length; i++) {
			pokeCard[i].innerHtml += '<a class="poke-github" href="https://github.com/chengkai505/PokeCard"><i class="fab fa-github"></i></a>';
		}
	}
})();