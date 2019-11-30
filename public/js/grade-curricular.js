$(document).ready(function () {
    collapseColumn();
});

$(window).on('resize', collapseColumn);

function collapseColumn() {
    if (screen.width > 767) {
        $(".grade a.titulo").removeClass('collapsed');
        $(".grade .collapse-content").removeClass('collapse');
        
    } else {
        $(".grade a.titulo").addClass('collapsed');
        $(".grade .collapse-content").addClass('collapse');
    }
}