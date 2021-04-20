function validKey(key1)
{
    if(key1 < 27 && key1 > -1)
    {
        return key1;
    }
    else if(key1 < 0 )
    {
        return -key1;
    }
    else{
        return key1 % 26;
    }
}

function switchAb(key1)
{
    var alpha = [];
    //Ei = (i + key) mod 26
    console.log(alpha);
    for(var i = 0; i < 26; i++)
    {
        alpha[i] = alphabet[(i+key1)%26];
    }
    console.log(alpha);
    return alpha;
}

 function switchMsg(e, msg)
 {
    for(var i = 0; i < alphabet.lenght; i++)
    {
        msg[i] = e[alphabet.indexof(msg[i])];
    }
    return msg;
 }

function cypher(){
    var message = document.getElementById("message").value;
    //var key = validKey(document.getElementById("key")) + 1;
    var key = Number(document.getElementById("key").value) ;
    //var a = (Number(txtFat.value));
     alphabet = ['a','b', 'c', 'd','e','f', 'g', 'h','i','j', 'k', 'l','m','n', 'o', 'p','q','r', 's', 't','u','v', 'w', 'x','y','z'];

    var E = switchAb(key);
    //message = switchMsg(E, message);
    var aux = "a";
    for(var i = 0; i < message.length ; i++)
    {   
        /*
        console.log(alphabet.indexOf(message[i]));
        aux =E[alphabet.indexOf(message[i])]);
        message[i] = E[alphabet.indexOf(message[i])];
        */
        if (message[i] !=  ' ')
            message = message.replace(message[i], E[alphabet.indexOf(message[i])] );
        console.log(message);
    }
    var resultado =document.getElementById("result");
    resultado.innerText = "Resultado:" + message;
}
