//Version compacte avec innerHTML
document.getElementById("boutonAjouter").onclick= function () {
    document.getElementById("todos").innerHTML+=
        '<li>'+prompt("Entrez un todo :")+'</li>';
};
