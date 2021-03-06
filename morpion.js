// Vous devez créer un jeu de Morpion sur 3 cases de côté

//variables globales:
// On définit symbole joueur en global :
var symboleActuel;
//le nombre de tour pour les differents tests de fin de jeux:
var nbrTour;
//noms des joueurs dans une liste vide pour le moment: 
// (les chaines de caractères vide sont nécessaire pour l'initialisation en itération)
var nomJoueur = new Array('', '');



// renvoie une NodeList contenant les éléments enfants de button que l'on transform en array 
var buttons = Array.from(document.querySelectorAll(".morpionCell"));

// Initialisation();

function Initialisation() {
	//On cache le bouton "Rejouer"
	
	// array contient tout les boutons sur lesquelles on place event listener pour la fonction jouer
	
		for (let i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener('click',jouer)
		}
		
	// on veut relancer une partie avant la fin :
		nbrTour = 0;
		for (let i = 0; i < buttons.length; i++) {
			buttons[i].style.backgroundImage = "";
			buttons[i].disabled = false;
			
		
	}
	symboleActuel = "url('image-morpion/croix.png')";
	
	//On définit les joueurs
	//Et le joueur qui commence
	nomJoueur.map(function (element, index, nameList) {
		let joueur = prompt(`Entrez le nom du joueur ${index+1}`);
		nameList[index] = (joueur == '' || joueur == null) ? `joueur${index+1}` : joueur.toUpperCase();
		
		
	});
	// nomJoueur.forEach( function(element) {
	// 	console.log(element);
	// });
	
	document.getElementById('Player').innerHTML = nomJoueur[0];


}

function jouer(event) { 
	//verifiez le joueur
	//Assurez vous que la cse jouée est vide
	//Si elle est pleine, envoyez un message d'erreur
	//Passez la main au deuxième joueur
	//.indexOf() à étudier
	event.currentTarget.style.backgroundImage = symboleActuel;
	event.currentTarget.style.backgroundPosition = "50%";
	event.currentTarget.disabled = true;
	nbrTour++;
	console.log(nbrTour);
	if (nbrTour > 4) {
		checking();
		
	}
	// A la fin de chaque tour on change le nom du joueur et du symbole :
	document.getElementById('Player').innerHTML = document.getElementById('Player').innerHTML == nomJoueur[0] ?
		nomJoueur[1] :
		nomJoueur[0];
	symboleActuel = symboleActuel == "url('image-morpion/rond.png')" ? "url('image-morpion/croix.png')" : "url('image-morpion/rond.png')";
	
	
}

function checking() {
	//.reload() à étudier
	
	if (gagne()) {
		alert(document.getElementById('Player').innerHTML + ' a gagné la partie !!')
		for (let i = 0; i < buttons.length; i++) {
			buttons[i].removeEventListener('click',jouer)
		}
		nbrTour = undefined;
		// buttons.forEach(button => {
		// 	button.disabled = true;
		// })
	}
	else if (nbrTour > 8) {
		alert("Fin du jeu ! \nPas de gagnant !!!")
		location.reload();
	}
	

	
}

function gagne() {
	//Méthode ennuyeuse avec tests par lignes / colonnes / diagonales

	// les lignes :
	let i;
	//ligne1
	i=0;
	if ((buttons[i].style.backgroundImage != '') //n'est pas vide
	 && (buttons[i].style.backgroundImage == buttons[i+1].style.backgroundImage)
	 && (buttons[i+1].style.backgroundImage == buttons[i+2].style.backgroundImage)) {
		return true;
	 }

	// ligne2
	i=3;
	if ((buttons[i].style.backgroundImage != '') //n'est pas vide
	 && (buttons[i].style.backgroundImage == buttons[i+1].style.backgroundImage)
	 && (buttons[i+1].style.backgroundImage == buttons[i+2].style.backgroundImage)) {
		return true;
	}

	//ligne3
	i=6;
	if ((buttons[i].style.backgroundImage != '') //n'est pas vide
	 && (buttons[i].style.backgroundImage == buttons[i+1].style.backgroundImage)
	 && (buttons[i+1].style.backgroundImage == buttons[i+2].style.backgroundImage)) {
		return true;
	}

	// les colonnes :
	// colonne1 :
	i=0;
	if ((buttons[i].style.backgroundImage != '') //n'est pas vide
	 && (buttons[i].style.backgroundImage == buttons[i+3].style.backgroundImage)
	 && (buttons[i+3].style.backgroundImage == buttons[i+6].style.backgroundImage)) {
		return true;
	}

	i=1;
	if ((buttons[i].style.backgroundImage != '') //n'est pas vide
	 && (buttons[i].style.backgroundImage == buttons[i+3].style.backgroundImage)
	 && (buttons[i+3].style.backgroundImage == buttons[i+6].style.backgroundImage)) {
		return true;
	}

	i=2;
	if ((buttons[i].style.backgroundImage != '') //n'est pas vide
	 && (buttons[i].style.backgroundImage == buttons[i+3].style.backgroundImage)
	 && (buttons[i+3].style.backgroundImage == buttons[i+6].style.backgroundImage)) {
		return true;
	}

	// les diagonales :
	// diagonale 1 :
	i=0;
	if ((buttons[i].style.backgroundImage != '') //n'est pas vide
	 && (buttons[i].style.backgroundImage == buttons[i+4].style.backgroundImage)
	 && (buttons[i+4].style.backgroundImage == buttons[i+8].style.backgroundImage)) {
		return true;
	}
	// diagonale  :
	i=2;
	if ((buttons[i].style.backgroundImage != '') //n'est pas vide
	 && (buttons[i].style.backgroundImage == buttons[i+2].style.backgroundImage)
	 && (buttons[i+2].style.backgroundImage == buttons[i+4].style.backgroundImage)) {
		return true;
	}

}
