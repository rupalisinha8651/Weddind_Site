console.log("scripts is working !")


let menu = document.querySelector('#menu-bar');
    let head = document.querySelector('.head .navbar');

    menu.onclick = () => {
        head.classList.toggle('active');
    };

    window.onscroll = () => {
        head.classList.remove('active');
        if (window.scrollY > 60) {
            document.querySelector('#menu-bar').classList.add('active');
        } else {
            document.querySelector('#menu-bar').classList.remove('active');
        }
    };

function alertSomething(e) {
    const venue = document.getElementById("venue")
    const place = document.getElementById("place")
    alert(`Your Vender is ${venue.value} and your selected place is ${place.value}  `)
}

function alertBolte() {
    var enteredEmail = document.getElementById("emailwla").value
    console.log(enteredEmail)
    alert(`Thanks ${enteredEmail} for subscribing to our newsletter !`)
}
// alertSomething() 

