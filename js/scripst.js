const firstName = prompt("nome")
const lastName = prompt("cognome")
const color = prompt ("colore")
console.log(firstName);
console.log(lastName);
console.log(color);

const output = 
`
<ul>
<li>Nome:<strong> ${firstName} </strong></li>
<li>Nome:<strong> ${lastName} </strong></li>
<li>Nome:<strong> ${color} </strong></li>

`
console.log(output);
document.getElementById("lista").innerHTML = output
document.getElementById("lista-unita").innerHTML = firstName + lastName + color

