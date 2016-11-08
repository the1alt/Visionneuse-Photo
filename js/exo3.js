
 /**
 * Exercice. en Jquery.. à finir à la Maison
 * Jquery
 *
 * Visioneuse de photos
 *
 * 1/ Crée en HTML une grille (Grid) de photos au format 4 X 16
 * 2/ AVec des evenements Jquery, quand je survole une photo (hover), cela réduis l'opacité de 0.6 et quand je quitte le survole cela remet l'opacité à 1  (animate)
 * 3/ Ajouter le plugin Fancybox en Jquery sur les photos pour permettre de zoomer sur les photos
 * 4/ AJouter un titre h1 en dessus bde la gallery.
     Quand je survol la photo, cela écris sont attribut "alt" dans le titre h1
 * 5/ Bonus: Mettre en place le plugin jquery Mansory pour la grille de photos
 * 6/ Bonus 2: AJouter les caption à l'image avec http://www.hongkiat.com/blog/css3-image-captions/
 * 7/ Bonus 3: Ajouter le plugin Isotop afin de filtrer et trier les photos http://isotope.metafizzy.co/
 * Bonus: Créer un champs de recherche texte  qui filtre par mots clefs des ALT des images (keyup, contains).
   * Quand je vide le champs, cela réinitialise tou
 */





$(document).ready(function(){


(function(){

  "use strict";

  var h1Origine = $('h1#titre').html();


  /////////// OPACITY AU SURVOL ///////////

  $('div.row').find('img').mouseenter(function(){
    $(this).css("opacity","0.6");
    var alt = $(this).attr("alt");
    $('h1#titre').text(alt);
    $('span.caption h4').text(alt);
  });
  $('div.row img').mouseleave(function(){
    $(this).css("opacity","1");
    $('h1#titre').text(h1Origine);
  });

  /////////// FANCY BOX INIT ///////////

  $(".fancybox").fancybox();

  /////////// MASONRY INIT ///////////


  var grid = document.querySelector('.grid');



var $grid = $(".grid").isotope({
  itemSelector: '.grid-item',
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: '.grid-sizer',
    itemSelector: '.grid-item',
    gutter: 10,
    fitWidth : true
  }
});

$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});

$('input#find').keyup(function(){
var tofind = $(this).val();
var regFind = new RegExp(tofind, 'i');

$grid.isotope({
  filter: function(){
    var filterValue = $(this).find('img').attr('alt');
    return regFind.test(filterValue);
  }
});


});

})();
});
