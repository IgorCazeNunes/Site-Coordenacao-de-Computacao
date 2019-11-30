$(document).ready(function () {
    navbarAtivarScrollSuave();
    navbarAtivarScrollSpy();
    buttonVerMais();
});

function navbarAtivarScrollSuave() {
    $(".js-scroll-suave").click(function (event) {
        event.preventDefault();

        if (mobileTest()) {
            // Gambiarra para compensar o tamanho da navbar no mobile
            var distancia = $($(this).attr("href")).offset().top - 570;
        } else {
            // Gambiarra para compensar o tamanho das navbars
            if ($(this).attr('href') == "#scroll-carousel") {
                var distancia = $($(this).attr("href")).offset().top - 105;
            } else {
                var distancia = $($(this).attr("href")).offset().top - 50;
            }
        }

        $("html, body").animate({
            scrollTop: distancia
        }, 800);

        if (mobileTest()) {
            $("button.navbar-toggler").trigger('click');
        }
    });
}

function navbarAtivarScrollSpy() {
    $('body').scrollspy({
        target: ".navbar",
        offset: 120
    });
}

function buttonVerMais() {
    $('.js-btn-visualizar').click(function () {
        var $this = $(this);

        $this.toggleClass('js-btn-visualizar-toggle');

        if ($this.hasClass('js-btn-visualizar-toggle')) {
            $this.text('Ver Mais...');
        } else {
            $this.text('Ver Menos...');
        }
    });
}