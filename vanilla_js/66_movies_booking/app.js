const one = document.querySelectorAll('#one > .movie-schedule_time');
const two = document.querySelectorAll('#two > .movie-schedule_time');
const three = document.querySelectorAll('#three > .movie-schedule_time');
const four = document.querySelectorAll('#four > .movie-schedule_time');
const five = document.querySelectorAll('#five > .movie-schedule_time');
const six = document.querySelectorAll('#six > .movie-schedule_time');

const dimm = document.getElementById('dimm');
const modalWrapper = document.querySelector('.modal-wrapper');
const modal = document.querySelector('.modal');

dimm.addEventListener('click', function() {
  dimm.style.display = 'none';
  modalWrapper.style.display = 'none';
});


one.forEach(time => {
  time.addEventListener('click', function() {
    dimm.style.display = 'block';
    modalWrapper.style.display = 'flex';
  });
});

