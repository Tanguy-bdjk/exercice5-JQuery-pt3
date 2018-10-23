$(document).ready(function() {
  function rebondsManuels() {
    // Variable générale
    var z = $('#zone'); // Zone
    var el = $('#rebond'); // Elément à déplacer

    // Enregistrement des dimensions de l'élément à déplacer
    var hauteurElement = el.height();
    var largeurElement = el.width();

    // Enregistrement des dimensions de la zone
    var hauteurZone = z.innerHeight();
    var largeurZone = z.innerWidth();

    // Epaisseur de la bordure de zone
    var bordureZone = 3;

    // "Quadrillage" en pixel (pour savoir où sont les bordures)
    var pixelHaut = z.offset().top + bordureZone;
    var pixelGauche = z.offset().left + bordureZone;
    var pixelBas = pixelHaut + hauteurZone - bordureZone;
    var pixelDroite = pixelGauche + largeurZone - bordureZone;
    // Variable utile pour la boucle de mouvement
    var orientationX = 3; // Valeur de déplacement
    var orientationY = 3; // Valeur de déplacement
    deplacementX = 0; // Variable globale par défaut (pour éviter les mauvais déplacements)
    deplacementY = 0; // Variable globale par défaut (pour éviter les mauvais déplacements)
    var timing = 1000/25000; // x images par seconde
    // Gestion du clavier (pour les appuis multiples notamment)
    var keys = {}
    $(document).keydown(function(e) {
      keys[e.keyCode] = true;
    });
    $(document).keyup(function(e) {
      delete keys[e.keyCode];
    });
    // Boucle manuelle pour créer le mouvement
    $(document).keydown(function(ev) {

      // Codes des étapes suivantes à ajouter

      position = el.offset({
        left:offsetGauche + deplacementX,
        top:offsetHaut + deplacementY
      });
    });
    // Pixels occupés par l'élément à déplacer
    var offsetHaut = el.offset().top;
    var offsetGauche = el.offset().left;
    var offsetBas = offsetHaut + hauteurElement;
    var offsetDroite = offsetGauche + largeurElement;
    for(var direction in keys) {
      // Flèche Droite
      if(direction == 39) {
        if(offsetDroite >= pixelDroite) {
          var deplacementX = orientationX * 0;
        } else {
          var deplacementX = orientationX * 1;
        }
      }
      // Flèche Gauche
      if(direction == 37) {
        if(offsetGauche <= pixelGauche) {
          var deplacementX = orientationX * 0;
        } else {
          var deplacementX = orientationX * -1;
        }
      }
      // Flèche Haut
      if(direction == 38) {
        if(offsetHaut <= pixelHaut) {
          var deplacementY = orientationY * 0;
        } else {
          var deplacementY = orientationY * -1;
        }
      }
      // Flèche Bas
      if(direction == 40) {
        if(offsetBas >= pixelBas) {
          var deplacementY = orientationY * 0;
        } else {
          var deplacementY = orientationY * 1;
        }
      }
    }
  }
  rebondsManuels();
});
