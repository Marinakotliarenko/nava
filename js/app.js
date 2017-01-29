/**
 * Created by marina on 24.01.17.
 */
$( document ).ready(function() {

    $("video").prop("volume", 0);

    $(".explore").on('click', onClickExplore );

    function onClickExplore () {
        var breakpoint = 768;
        var windowWidth = $(window).width();
        var colClass = '';
        var colsSum = 0;
        var maxCols = 12;
        var self = this;
        var hiddenElements = function () {
            return $(self).siblings('ul').find('.hidden');
        };


        if (windowWidth >= breakpoint) {
            colClass = 'col-md-';
        } else {
            colClass = 'col-xs-';
        }

        hiddenElements().each(function () {
            if (colsSum < maxCols) {
                $(this).removeClass('hidden').addClass('visible');

                $(this.className.split(' ')).each(function () {
                    if (~this.indexOf(colClass)) {
                        colsSum += parseInt(this.replace(colClass, ''));
                    }
                });

                if (!hiddenElements().length) {
                    $(self).fadeOut();
                }
            }
        });

    }


    $( function() {
        var availableTags = [
            "Aleksandr",
            "Anton",
            "Artur",
            "Bogdan",
            "Carl",
            "Kirill",
            "Daniil",
            "David",
            "Eduard",
            "Eldar",
            "Filip",
            "Foma",
            "Harris",
            "Jorge",
            "Lavro",
            "Lev",
            "Pavl",
            "Petr",
            "Philip",
            "Roman",
            "Samuel",
            "Timur"
        ];
        $( "#input-dest" ).autocomplete({
            source: availableTags
        });
    } );


});



