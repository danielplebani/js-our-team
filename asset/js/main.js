/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
*/

//creo l'array con dentro ogni persona e lo loggo in console
const team = [
    {
        nome : 'Wayne Barnett' ,
        ruolo : 'Founder & CEO' ,
        foto : 'wayne-barnett-founder-ceo.jpg'
    } ,

    {
        nome : 'Angela Caroll' ,
        ruolo : 'Chief Editor' ,
        foto : 'angela-caroll-chief-editor.jpg'
    } ,

    {
        nome : 'Walter Gordon' ,
        ruolo : 'Office Manager' ,
        foto : 'walter-gordon-office-manager.jpg'
    } ,

    {
        nome : 'Angela Lopez' ,
        ruolo : 'Social Media Manager' ,
        foto : 'angela-lopez-social-media-manager.jpg'
    } ,

    {
        nome : 'Scott Estrada' ,
        ruolo : 'Developer' ,
        foto : 'scott-estrada-developer.jpg'
    } ,

    {
        nome : 'Barbara Ramos' ,
        ruolo : 'Graphic Designer' ,
        foto : 'barbara-ramos-graphic-designer.jpg'
    } ,
]
//console.log(team);

//stampo su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < team.length; i++) {
    const member = team[i];
    //console.log(member.nome, member.ruolo, member.foto);

    //creo il markup e lo pusho in pagina
    function createMemberCard(member) {
        return `
        <div class="col-sm-4 col-md-3 m-2">
            <div class="card">
                <img src="/asset/img/${member.foto}" class="card-img-top">
                <div class="card-body">
                    <h4>${member.nome}</h4>
                    <p>${member.ruolo}</p>
                </div>
            </div>
        </div>`;
    }
    
    function addNewMarkup(markup) {
        const container = document.querySelector('.container');
        container.insertAdjacentHTML('beforeend', markup);
    }
    addNewMarkup(createMemberCard(member));
}


//bonus
//Aggiungo un form in pagina per permettere all’utente di aggiungere nuovi membri del team: cliccando sul pulsante “add” viene creato un nuovo oggetto, il quale viene inserito nell’array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall’utente.
const newCard = document.querySelector('button');
newCard.addEventListener('click', function(){
    const newName = document.getElementById('newName').value;
    const newLastName = document.getElementById('newLastName').value;
    const newJob = document.getElementById('newJob').value;

    const member = {
        nome : newName + ' ' + newLastName ,
        ruolo : newJob ,
        foto : 'daniel-plebani.jpg'
    };
    //console.log(member);

    createMemberCard(member);
    addNewMarkup(createMemberCard(member));
});