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
    }
]
//console.log(team);

//stampo su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < team.length; i++) {
    const member = team[i];
    //console.log(member);
    console.log(member.nome);
    console.log(member.ruolo);
    console.log(member.foto);

    //stampo le stesse informazioni sul DOM 
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

    const container = document.querySelector('.container');
    container.insertAdjacentHTML('beforeend', markup);
}
