var inputs = [];

function makeParagraph()
{

    inputs = [];

    for (var n = 1; n <= 6; n++)
    {

        inputs.push(document.getElementById("input" +n).value);

    }

    console.log(inputs);

    document.getElementById("paragraph").innerHTML = inputs.join(". ");

}
