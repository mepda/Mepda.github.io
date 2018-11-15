let BLUE_BIG_FONT = 'color:blue; font-size:1.5em;';
let BLACK_BIG_FONT = 'color:black; font-weight:bold; font-size:1.5em;';
console.log('%cWelcome to my %cportfolio.', BLUE_BIG_FONT, BLACK_BIG_FONT);

$('#contact-form').submit(function(e) {
  let email = document.getElementById('email-input');
  let name = document.getElementById('name-input');
  let message = document.getElementById('message-input');
  let data = { email, name, message };
  console.log(data);
  if (!name.value || !email.value || !message.value) {
    alertify.error('Please check your entries');
  } else {
    $.ajax({
      url: 'https://formspree.io/bsadick@gmail.com',
      method: 'POST',
      data: $(this).serialize(),
      dataType: 'json'
    });

    e.preventDefault();
    $(this)
      .get(0)
      .reset();
    alertify.success('Message sent');
  }
});

$('.materialboxed').materialbox({
  inDuration: 400,
  ourDuration: 400
});

$('.collapsible').collapsible();

const myAnimation = document.querySelector('#icon-recent-projects');
observer = new IntersectionObserver((entry, observer) => {
  if (entry[0].intersectionRatio > 0) {
    setTimeout(() => {
      myAnimation.classList.add('fadeInDown');
    }, 60);
  } else {
    myAnimation.classList.remove('fadeInDown');
  }
});
observer.observe(myAnimation);

const headerAnimation = document.querySelectorAll('.mycon');
observerHeader = new IntersectionObserver(entries => {
  console.log(entries);
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      console.log(`entered view of ${entry}`);
      setTimeout(() => {
        console.log(entry.target.style.visibility);
        entry.target.style.visibility = 'visible';
        entry.target.classList.add('animated');
        entry.target.classList.add('bounceIn');
      }, 60);
    } else {
      entry.target.style.visibility = 'hidden';
      entry.target.classList.remove('bounceIn');
    }
  });
});

headerAnimation.forEach(header => {
  observerHeader.observe(header);
});

// const stick = document.getElementById('scrolld');
// const startSticky = document.getElementById('nav-starter');
// navObserver = new IntersectionObserver((entry, observer) => {
//   if (entry[0].intersectionRatio > 0) {
//     console.log('in view');
//     stick.style.display = 'block';
//     stick.style.visibility = 'visible';
//   } else {
//     console.log('out of view');
//     stick.style.display = 'none';
//     stick.style.visibility = 'hidden';
//   }
// });
// navObserver.observe(startSticky);
