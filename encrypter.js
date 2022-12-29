function encrypText() {
    let getText = document.getElementById("text").value.toLowerCase();
    let newTxt = "";

    for(let i=0; i<getText.length; i++){
        switch(getText.charAt(i)){
            case "a":
                newTxt = newTxt.concat("ai");
                break;
            case "e":
                newTxt = newTxt.concat("enter");
                break;
            case "i":
                newTxt = newTxt.concat("imes");
                break;
            case "o":
                newTxt = newTxt.concat("ober");
                break;
            case "u":
                newTxt = newTxt.concat("ufat");
                break;
            default:
                newTxt = newTxt.concat(getText.charAt(i));
        }
    }
    document.getElementById("result").value = newTxt;
    document.getElementById("text").value = "";
}

function decrypText() {
    let getText = document.getElementById("text").value.toLowerCase();
    let newTxt = "";

    for(let i=0; i<getText.length; i++){
        switch(getText.charAt(i)){
            case "a":
                newTxt = newTxt.concat("a");
                i=i+1;
                break;
            case "e":
                newTxt = newTxt.concat("e");
                i=i+4;
                break;
            case "i":
                newTxt = newTxt.concat("i");
                i=i+3;
                break;
            case "o":
                newTxt = newTxt.concat("o");
                i=i+3;
                break;
            case "u":
                newTxt = newTxt.concat("u");
                i=i+3;
                break;
            default:
                newTxt = newTxt.concat(getText.charAt(i));
        }
    }
    document.getElementById("result").value = newTxt;
    document.getElementById("text").value = "";
}


