document.addEventListener("DOMContentLoaded", function () { 
    const searchInput = document.getElementById("searchInput"); //récupère l'élément "searchInput" et le stocke dans la variable searchInput
    const searchResults = document.getElementById("searchResults"); // """"""

    function search(query) {  //la fonction est responsable de la recherche des termes saisis par l'utilisateur et de l'affichage des résultats correspondants
        query = query.toLowerCase(); //convertit le terme de recherche en minuscules.
        searchResults.innerHTML = ""; //vide le contenu précédent des résultats de recherche

        document.querySelectorAll('.liens1 a').forEach(function (element) { // sélectionne tous les éléments < a > à l'intérieur de l'élément ayant la classe "liens1"
            const text = element.textContent.toLowerCase(); //récupère le contenu dans l'élément <a> en cours de traitement et le convertit en minuscules

            if (text.includes(query)) { //vérifie si le texte de l'élément <a> contient le terme de recherche. Si c'est le cas, l'élément est ajouté aux résultats de recherche
                const li = document.createElement("li");
                const link = document.createElement("a");
                link.href = element.getAttribute("href"); //crée un élément <li> et un élément <a> pour chaque résultat trouvé, puis les ajoute à la liste des résultats de recherche

                link.textContent = element.textContent;
                li.appendChild(link);
                searchResults.appendChild(li);
            }
        });

        if (searchResults.childElementCount === 0) {  //vérifie si aucun résultat n'a été trouvé. Si tel est le cas, un message indiquant "Aucun résultat trouvé" est ajouté à la liste des résultats de recherche
            const li = document.createElement("li");
            li.textContent = "Aucun résultat trouvé";
            searchResults.appendChild(li);
        }
    }

    searchInput.addEventListener("input", function () {
        search(this.value); //écoute l'événement "input" sur le champ de saisie de recherche. À chaque fois que l'utilisateur saisit quelque chose dans le champ de recherche, la fonction search est appelée avec la valeur actuelle du champ de saisie
                           //Cela déclenche une nouvelle recherche à chaque modification de la saisie de l'utilisateur.
    });
});







       

                

