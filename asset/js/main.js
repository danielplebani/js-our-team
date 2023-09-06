/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
*/

//creo l'array con dentro ogni persona e lo loggo in console
//1-definizione dell’array del team
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
console.log(team);

//stampo su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
//2-for che si ripete per lunghezzza array
for (let i = 0; i < team.length; i++) {
    const member = team[i];
    //console.log(member);
    console.log(member.nome);
    console.log(member.ruolo);
    console.log(member.foto);

    //stampo le stesse informazioni sul DOM 
    //3-costruzione markup card con valori del team
    const markup = 
    `<div class="col-sm-4 col-md-3 m-2">
        <div class="card">
            <img src="/asset/img/${member.foto}" class="card-img-top">
            <div class="card-body">
                <h4>${member.nome}</h4>
                <p>${member.ruolo}</p>
            </div>
        </div>
    </div>`

    //4-inserisco costante markup nel DOM
    const container = document.querySelector('.container');
    container.insertAdjacentHTML('beforeend', markup);
}

//bonus
const newCard = document.querySelector('button');
//5-aggiunge funzione che si attiva al click del pulsante add
newCard.addEventListener('click', function(){

    //6-collego i valori scritti nel form
    const newName = document.getElementById('newName').value;
    const newLastName = document.getElementById('newLastName').value;
    const newJob = document.getElementById('newJob').value;

    //7-creo un nuovo membro dell'array in una costante
    const newMember = {
        nome : newName + ' ' + newLastName ,
        ruolo : newJob ,
        foto : 'daniel-plebani.jpg'
    };
    console.log(newMember);

    //8-pusho la costante nell'array team
    team.push(newMember);

    for (let i = 0; i < 1; i++) {

        //stampo le stesse informazioni sul DOM 
        const markup = 
        `<div class="col-sm-4 col-md-3 m-2">
            <div class="card">
                <img src="/asset/img/${newMember.foto}" class="card-img-top">
                <div class="card-body">
                    <h4>${newMember.nome}</h4>
                    <p>${newMember.ruolo}</p>
                </div>
            </div>
        </div>`
    
        const container = document.querySelector('.container');
        container.insertAdjacentHTML('beforeend', markup);
    }
});