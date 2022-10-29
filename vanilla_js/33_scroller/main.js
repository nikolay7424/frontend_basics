const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    looking_for: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },

  {
    name: 'Jen Smith',
    age: 26,
    gender: 'female',
    looking_for: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },

  {
    name: 'William Jonson',
    age: 38,
    gender: 'male',
    looking_for: 'female',
    location: 'Lynn MA',
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  }
];

const profiles = profileIterator(data);

// call first profile
nextProfile();

// next event
document.getElementById('next').addEventListener('click', nextProfile);

// next profile display
function nextProfile() {
  const currentProfile = profiles.next().value;
  if(currentProfile !== undefined) {
    document.getElementById('profile-display').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">name: ${currentProfile.name}</li>
        <li class="list-group-item">age: ${currentProfile.age}</li>
        <li class="list-group-item">location: ${currentProfile.location}</li>
        <li class="list-group-item">gender: ${currentProfile.gender}</li>
        <li class="list-group-item">preference: ${currentProfile.looking_for}</li>
      </ul>  
    `;
  
    document.getElementById('image-display').innerHTML = `
      <img src="${currentProfile.image}">
    `;
  } else {
    // no more profiles
    window.location.reload();
  }
}

// profile iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length ? 
      {value: profiles[nextIndex++], done: false} :
      {done: true};
    }
  }
}