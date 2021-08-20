function sendMail(contactForm) {
    emailjs.send("service_go8857q","thebraceletcontact", {
        "name": contactForm.name.value,
        "email": contactForm.emailaddress.value,
        "comment": contactForm.comment.value
    })
    .then(
        function(response) {
            var Popupsuccess = Swal.mixin({
                toast: true,
                icon: 'success',
                showConfirmButton: false,
                position: 'center',
                timer: 5000,
              })
              Popupsuccess.fire({
                title: 'Thanks For contact with us.'
              })
        },
        function(error) {
            var Popuperror = Swal.mixin({
                toast: true,
                icon: 'error',
                showConfirmButton: false,
                position: 'center',
                timer: 5000,
              })
              Popuperror.fire({
                title: 'Sorry. The services cannot send the message.'
              })
        }
    );
    return false;  // To block from loading a new page
}

