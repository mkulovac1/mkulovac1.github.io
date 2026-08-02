let menuLi = document.querySelectorAll('header ul li a')
let section = document.querySelectorAll('section')

function activeMenu() {
    let len = section.length
    while(--len && window.scrollY + 97 < section[len].offsetTop) {}
    menuLi.forEach(s => s.classList.remove("active"))
    menuLi[len].classList.add("active")
}

activeMenu()
window.addEventListener("scroll", activeMenu)

const header = document.querySelector("header")
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 50)
})


function hireMe() {
    /* const hire = document.getElementById("paragraph-hire-me")
    if(hire) {
        const content = "You can hire me by sending an offer to my e-mail merim.kulovac@outlook.com or merimkulovac2@gmail.com or calling me on phone number +38761299602."
        hire.textContent = content
    } */

    var emailAdresa = "merim.kulovac@outlook.com";
    var subject = "Job offer";
    var body = "I wanna hire you to work on specific project...";
    var mailtoLink = "mailto:" + emailAdresa + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.location.href = mailtoLink;
}


let menuIcon = document.querySelector("#menu-icon")
let navlist = document.querySelector(".navlist")
menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x")
    navlist.classList.toggle("open")
}
window.onscroll = () => {
    menuIcon.classList.remove("bx-x")
    navlist.classList.remove("open")
}


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting)
            entry.target.classList.add("show-items")
        else
            entry.target.classList.remove("show-items")
    })
})

const scrollScale = document.querySelectorAll(".scroll-scale")
scrollScale.forEach((e) => observer.observe(e))

const scrollBottom = document.querySelectorAll(".scroll-bottom")
scrollBottom.forEach((e) => observer.observe(e))

const scrollTop = document.querySelectorAll(".scroll-top")
scrollTop.forEach((e) => observer.observe(e))


/* scroll progress bar */
const scrollProgress = document.getElementById("scrollProgress")
function updateScrollProgress() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0
    scrollProgress.style.width = progress + "%"
}
window.addEventListener("scroll", updateScrollProgress)
updateScrollProgress()


/* cursor glow, desktop only */
const cursorGlow = document.getElementById("cursorGlow")
if (window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener("mousemove", (e) => {
        cursorGlow.style.opacity = "1"
        cursorGlow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    })
    window.addEventListener("mouseleave", () => {
        cursorGlow.style.opacity = "0"
    })
}


function contactMe() {
  var name = document.getElementById("contact_name").value;
  var emailSender = document.getElementById("contact_email").value;
  var email = "merim.kulovac@outlook.com"
  var adress = document.getElementById("contact_adress").value;
  var phone = document.getElementById("contact_number").value;
  var message = document.getElementById("contact_message").value;

  var subject = "[Portfolio] Contact me";
  var body = message + "\n\n" + "Sincerely,\nName: " + name + ',\nE-mail: ' + emailSender +",\nAdress: " + adress + ",\nPhone number: " + phone + "\n"
  var mailtoLink = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  if(name.length > 0 && adress.length > 0 && phone.length > 0 && message.length > 0) {
    event.preventDefault();
    window.open(mailtoLink);
  }
}