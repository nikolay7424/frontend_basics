class GitHub {
  constructor(){
    this.clientID = 'fed42021af561519ce71';
    this.clientSecret = '035b334e807613b66ad95584401f5eb1d4ce7365';  
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientID}&client_secret=${this.clientSecret}`);
    
    const profile = await profileResponse.json();

    return {
      profile
    }

  }
}