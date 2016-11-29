$(document).ready(function () {
    $("p").hide();
    $("#reset").hide();
    var a = ["smelly", "hairy", "ugly", "fat", "manly", "dirty", "slimy"];
    var b = ["eating", "pooping", "drinking", "licking", "sniffing", "sleeping with", "groping", "assaulting", "shoveling"];
    var c = ["poop", "trash", "squirrels", "play-doh", "sewer rats"];
    var d = ["armpit", "ear", "nose", "elbow", "belly-button", "butt"];

    var e = ["Shut up", "Piss off", " "]


    var adjective = a[Math.floor(Math.random() * 7)];
    var verb = b[Math.floor(Math.random() * 9)];
    var noun = c[Math.floor(Math.random() * 5)];
    var body = d[Math.floor(Math.random() * 6)];

    var i = "'s mom is " + adjective + " and likes " + verb + " " + noun + "!!!";
    var i2 = " likes " + verb + " " + adjective + " " + body + "s.";

    var insults = [i, i2];
    var insult = insults[Math.floor(Math.random() * insults.length)];

    function getInsult() {
        return insult;
    }

    $("#submit").click(function () {
        var person = $("input").val();
        if (person.length == 0) {
            alert("You must enter a name");
        } else {
            getInsult();
            $("p").show();
            $("p").text(person + insult);
            $("#reset").show();
            $("#submit").hide();
        }
    });

    $(document).on("keydown", function (event) {
        if (event.which === 13) {
            var person = $("input").val();
            if (person.length == 0) {
                alert("You must enter a name");
            } else {
                getInsult();
                $("p").show();
                $("p").text(person + insult);
                $("#reset").show();
                $("#submit").hide();
            }
        }
    });

    $("#reset").click(function () {
        location.reload();
    });
});
