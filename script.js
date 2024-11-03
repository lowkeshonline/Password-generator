const passwordBox = document.getElementById("pass-box");
const passLength = 12;

const ucAlphabets = "ABCDEFGHIKLMNOPQRSTVXYZ";
const lcAplhabets = "abcdefghiklmnopqrstvxyz";
const numbers = "1234567890";
const specialChars = "!@#$%^&*()_+=-<>?/}{][";
const allChars = ucAlphabets + lcAplhabets + numbers + specialChars;


function createRandomPass(){
    let password = "";
    while(password.length < passLength){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
    console.log(password);
}

function copyPass(){
    passwordBox.select();
    document.execCommand("copy")
}