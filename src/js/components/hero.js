function hero() {
    window.addEventListener("load", function() {
        var fieldOne = $(".field")[0];
        var fieldTwo = $(".field-two")[0];
        var button = $(".button")[0];
        var overlay = $("#form-sent");
        var drawing = $(".draw");

        var intervalID = window.setInterval(animateForm, 11250);
        var stopDrawing = window.setTimeout(removeDrawingClass, 4500);

        drawing = [].slice.call(drawing);

        function animateForm() {
            $(fieldOne).removeClass("field");
            $(fieldTwo).removeClass("field-two");
            $(button).removeClass("button");
            $(overlay).addClass("is-hidden");
            $(overlay).id = "";

            setTimeout(function() {
                    $(fieldOne).addClass("field");
                    $(fieldTwo).addClass("field-two");
                    $(button).addClass("button");
                    $(overlay).id = "form-sent";
                    $(overlay).removeClass("is-hidden");
            }, 50);
        }

        function removeDrawingClass() {
            drawing.forEach(function(draw) {
                    $(draw).removeClass("draw");
            });
        }
    });
}
