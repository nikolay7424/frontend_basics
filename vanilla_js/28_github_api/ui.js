class UI {
  constructor() {
    this.profile = document.getElementById('profile');
    this.searchUser = document.getElementById('search-user');
    this.invalidUser = document.getElementById('invalid-user');
  }

  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <div class="d-grid gap-2 mb-4">
              <a href="${user.html_url}" target="_blank" class="btn btn-primary rounded-1">View profile</a>
            </div>
          </div>
          <div class="col-md-9">
            <span class="badge mb-2 bg-primary">Public repos: ${user.public_repos}</span>
            <span class="badge mb-2 bg-secondary">Public gists: ${user.public_gists}</span>
            <span class="badge mb-2 bg-success">Followers: ${user.followers}</span>
            <span class="badge mb-2 bg-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/blog: <a href="${user.blog}" target="_blank">link</a></li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card card-body mb-3">
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
      </div>  
    `;
  }

  clearProfile() {
    this.profile.innerHTML = '';
  }

  showAlert(userText) {
    this.searchUser.classList.add('is-invalid');
    this.searchUser.parentElement.classList.add('is-invalid');
    this.invalidUser.innerText = userText;
  }

  removeAlert() {
    this.searchUser.classList.remove('is-invalid');
    this.searchUser.parentElement.classList.remove('is-invalid');
  }
}