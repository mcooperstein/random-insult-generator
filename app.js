$(document).ready(function () {
    $("p").hide();
    $("#reset").hide();
    var a = ["smelly", "hairy", "ugly", "fat", "manly", "dirty", "slimy"];
    var b = ["eating", "pooping", "drinking", "licking", "sniffing", "sleeping with", "groping", "assaulting"];
    var c = ["poop", "trash", "squirrels", "play-doh", "sewer rats"];

    var adjective = a[Math.floor(Math.random() * 7)];
    var verb = b[Math.floor(Math.random() * 8)];
    var noun = c[Math.floor(Math.random() * 5)];

    var insult = "'s mom is " + adjective + " and likes " + verb + " " + noun + "!!!";

    function getInsult() {
        return insult;
    }

    $("#submit").click(function () {
        var person = $("input").val();
        getInsult();
        $("p").show();
        $("p").text(person + insult);
        $("#reset").show();
        $("#submit").hide();
    });

    $("#reset").click(function () {
        location.reload();
    });
});
