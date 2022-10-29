const github = new GitHub();
const ui = new UI();

const searchUser = document.getElementById('search-user');

searchUser.addEventListener('keyup', (e) => {
  const userText = e.target.value;


  if(userText !== ''){
    github.getUser(userText)
      .then(data => {
        if(data.profile.message == 'Not Found'){
          // show alert
          ui.showAlert(userText);
        } else {
          // show profile
          ui.removeAlert();
          ui.showProfile(data.profile);
        }
      });
  } else {
    // clear
    ui.clearProfile();
    ui.removeAlert();
  }
});