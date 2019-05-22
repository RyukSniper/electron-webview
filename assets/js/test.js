window.onload = function translate() {
        var script = document.createElement("script");
        script.src = "https://code.jquery.com/jquery-2.1.4.min.js";
        script.onload = script.onreadystatechange = function() {
            $(document).ready(function() {
                    var temp = $('yourscript');
                    $( "<div id='yourscript' style='z-index: 10000065000;  float: left;position: absolute;left: 0px;top: 0px;background-color: white;'></div>" ).prependTo("body");
                    $("#id").prepend(temp);
                    console.log("test");
            });
        };
        document.body.appendChild(script);

    };
