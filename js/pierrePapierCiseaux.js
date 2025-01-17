let nomJeu = ["pierre", "papier", "ciseaux"];

function jouer(choixJoueur) {
    let nbAleatoire = Math.floor(Math.random() * 3);    // Entier aléatoire entre 0 et 2
    let choixOrdi = nomJeu[nbAleatoire];                // Choix aléatoire de l'ordinateur
    let message;

    if (choixJoueur === choixOrdi) {
      message = "Égalité !";
    } else if (
      (choixJoueur === "pierre" && choixOrdi === "ciseaux") ||
      (choixJoueur === "papier" && choixOrdi === "pierre") ||
      (choixJoueur === "ciseaux" && choixOrdi === "papier")
    ) {
      message = "Gagné !";
    } else {
      message = "Perdu !";
    }    

    document.getElementById("joueur1").innerHTML = `<p>VOUS</p><img src="img/${choixJoueur}.png" />`;
    document.getElementById("joueur2").innerHTML = `<p>ORDINATEUR</p><img src="img/${choixOrdi}.png" />`;
    document.getElementById("message").innerHTML = `<p>${message}</p>`;

    //console.log(`choixJoueur = ${choixJoueur}`);
    //console.log(`choixOrdi = ${choixOrdi}`);
    //console.log(`message = ${message}`);
}

// Ajout des gestionnaires d'événements aux boutons
function choixPierre(){
	jouer("pierre");
}
function choixPapier(){
	jouer("papier");
}
function choixCiseaux(){
	jouer("ciseaux");
} 
