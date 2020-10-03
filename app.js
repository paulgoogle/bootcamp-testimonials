let leftArrow = document.querySelector('.left-arrow');
let rightArrow = document.querySelector('.right-arrow');

leftArrow.addEventListener('click', function(){
  document.getElementById('quote').innerHTML = '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”';

  document.getElementById('author-name').innerHTML = 'Tanya Sinclair';
  document.getElementById('author-job').innerHTML = 'UX Engineer';

  document.getElementById('image').src='images/image-tanya.jpg';

});

rightArrow.addEventListener('click', function(){
 document.getElementById('quote').innerHTML = '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”';

document.getElementById('author-name').innerHTML = 'John Tarkpor';
document.getElementById('author-job').innerHTML = 'Junior Front-end Developer';

document.getElementById('image').src='images/image-john.jpg';

});