class fenetre {
    constructor(title, id, icones, content, footer) {
        this.title = title;
        this.id = id;
        this.icones = icones;
        this.content = content;
        this.footer = footer;
    }

    setContent(content) {
        this.content = content;
    }

    setFooter(footer) {
        this.footer = footer;
    }

    getContent() {
        return `
            <div class="fenetre drag" id="${this.id}" >
                <div class="fenetre_title">
                    <img src="${this.icones}" alt="">
                    <h1>${this.title}</h1>
                    <div class="space"></div>
                    <div class="fenetre_button">
                        <button class="close" onclick="close_fenetre('${this.id}')">
                        </button>
                    </div>
                </div>
                <div class="fenetre_content" >
                    ${this.content}
                </div>
                <div class="fenetre_footer">
                    ${this.footer}
                </div>
            </div>
        `
    }

    getIcone() {
        return `
            <div class="app" onclick="display_fenetre('${this.id}')">
                <img src="${this.icones}" alt="">
                <h1>${this.title}</h1>
            </div>
        `
    }

    getBarre() {
        return `
        <div class="app_open" id="${this.id}">
            <img src="${this.icones}" alt="">
            <h1>${this.title}</h1>
        </div>
        `
    }
}


class redirect {
    constructor(title, id, icones, url) {
        this.title = title;
        this.id = id;
        this.icones = icones;
        this.url = url;
    }


    getIcone() {
        return `
            <div class="app" onclick="window.open('${this.url}','_blank').focus();">
                <img src="${this.icones}" alt="">
                <h1>${this.title}</h1>
            </div>

        `
    }

}



const tab = {

    "t1": new fenetre("Nude Yujiro.jpeg", "t1", "public/img/notepad.png", `
        <h1 style="color: red;">Accès Refusée</h1>
    `, "<p></p>"),
    "CCG": new fenetre("Quinque", "CCG", "public/img/folders.png", `
    <div id="confid">
        <p>Identifiant</p>
        <input id="identifiant" type="text" placeholder="Identifiant">
        <p>Mot de Passe</p>
        <input id="password" type="password" placeholder="password">
        </br></br>
        <button onclick='(function(){
            if(document.querySelector("#identifiant").value == "Yori235" && document.querySelector("#password").value == "D4jix188pcQaxCxV"){
                document.querySelector("#confid").innerHTML = "<h3> Vous trouvez ici le plan de la machine a quinque ainsi que les matériaux a utilisé pour la réalisé </h3>"
            }else{
                setTimeout(() => {
                    close_fenetre("CCG");
                },1000);
                document.querySelector("#confid").innerHTML = "<h1>Accès Refusée</h1>"
            }
        })();'>Validation</button>
    </div>
    `, "<p></p>"),
    "t2": new fenetre("Promote chercheur.txt", "t1", "public/img/notepad.png"),
    "t3": new fenetre("Liste des quinques", "t1", "public/img/folders.png"),
    "t4": new fenetre("Porno (Yuri)", "t1", "public/img/folders.png"),
}

for (element in tab) {
    console.log(element);
    document.querySelector(".content").innerHTML += tab[element].getIcone();
};

function display_fenetre(id) {
    console.log(id);
    document.querySelector(".content").innerHTML = tab[id].getContent() + document.querySelector(".content").innerHTML;
    document.querySelector(".barre_app").innerHTML += tab[id].getBarre();
}


function close_fenetre(id) {
    var elements = document.querySelectorAll(`#${id}`);
    for (var i = 0; i < elements.length; i++) {
        elements[i].remove();
    }

}