$("#contact-form").submit(function(e) {
  let email = document.getElementById("email-input");
  let name = document.getElementById("name-input");
  let message = document.getElementById("message-input");
  let data = { email, name, message };
  console.log(data);
  if (!name.value || !email.value || !message.value) {
    alertify.error("Please check your entries");
  } else {
    $.ajax({
      url: "https://formspree.io/bsadick@gmail.com",
      method: "POST",
      data: $(this).serialize(),
      dataType: "json"
    });

    e.preventDefault();
    $(this)
      .get(0)
      .reset();
    alertify.success("Message sent");
  }
});

$(".materialboxed").materialbox({
  inDuration: 400,
  ourDuration: 400
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
