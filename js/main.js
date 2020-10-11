    //===== close navbar-collapse when a  clicked
    $(".one-page .navbar-nav a").on('click', function() {
        $(".navbar-collapse").removeClass("show");
    });
    $(".navbar-toggler").on('click', function() {
        $(this).toggleClass("active");
    });
    $(".one-page .navbar-nav a").on('click', function() {
        $(".navbar-toggler").removeClass('active');
    });