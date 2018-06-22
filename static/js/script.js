console.log(
  '%cWelcome to my %cportfolio.',
  'color:blue; font-size:1.5em;',
  'color:green; font-weight:bold; font-size:1.5em;'
);

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
    myAnimation.classList.add('fadeInDown');
  } else {
    myAnimation.classList.remove('fadeInDown');
  }
});
observer.observe(myAnimation);

const headerAnimation = document.querySelectorAll('.mycon');
observerHeader = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      console.log(`entered view of ${entry}`);
      entry.target.classList.add('animated-icons');
      entry.target.classList.add('bounceIn');
    } else {
      entry.target.classList.remove('bounceIn');
    }
  });
});

headerAnimation.forEach(header => {
  observerHeader.observe(header);
});

//get top position of various sections

// let projectOnePosition = document
//   .getElementById("project1")
//   .getBoundingClientRect().top;
// let projectTwoPosition = document
//   .getElementById("project2")
//   .getBoundingClientRect().top;
// let contactPosition = document.getElementById("contact").getBoundingClientRect()
//   .top;

// //get links by id
// let projectOneLink = document.getElementById("projectOneLink");
// let projectTwoLink = document.getElementById("projectTwoLink");
// let contactLink = document.getElementById("contactLink");

// //adjust for navbar offset
// projectOneLink.addEventListener("click", e => {
//   console.log(projectOnePosition);
//   e.preventDefault();
//   window.scrollTo(0, projectOnePosition - 300);
// });

// $("#projectOneLink").click(function() {
//   $("html, body").animate(
//     {
//       scrollTop: $("#project1").offset().top
//     },
//     2000
//   );
// });
