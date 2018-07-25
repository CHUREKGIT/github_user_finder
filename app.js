//Init Github
const github = new GitHub;

//Init uo
const ui = new UI;

//search input 
const searchUser = document.getElementById('searchUser');

//Search input event listener
searchUser.addEventListener('keyup', (e)=>{
    //get text input
    const userText =e.target.value;

    if(userText !== ''){
        //make http call
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === "Not Found"){
                ui.showAlert('Cant find this user', 'alert alert-danger');    
            }else{
                //Show profile
                
                ui.showProfile(data.profile);
                ui.showRepos(data.repos)
            }
        })
    }else {
        ui.clearProfile();
    }
})