let words = document.querySelectorAll(".word")

words.forEach((word) => {
    let letters = word.textContent.split("")
    word.textContent=""
    letters.forEach((letter) => {
        let span = document.createElement("span")
        span.textContent = letter
        span.className = "letter"
        word.append(span)
    })
})

let currentWordIndex = 0
let maxWordIndex = words.length - 1
words[currentWordIndex].style.opacity = "1"

let changeText = () => {
    let currentWord = words[currentWordIndex]
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1]

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out"
        }, i * 80)
    })

    nextWord.style.opacity = "1"

    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind"
        setTimeout(() => {
            letter.className = "letter in"
        }, 340 + i * 80)
    })

    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1
}

changeText()
setInterval(changeText, 3000)


function readMore() {
  var content = document.getElementById("paragraph-about-content");
  var expandedText = "My name is Merim Kulovac. I was born in the Balkans, in a small state of Bosnia and Herzegovina. I grew up and live in Sarajevo. I graduated from the High School of Electrical Engineering in Sarajevo, major: computer science and informatics. I recently graduated from the Faculty of Electrical Engineering at the University of Sarajevo, department: computer science and informatics. During my studies, I worked on a lot of projects (private and for university). My focus is mainly on full-stack development of web applications, although lately I have also been attracted to the development of mobile applications and programming in the field of artificial intelligence. I am a very ambitious and hard-working person. I am looking for an opportunity to prove and improve myself. I am ready for new experiences and challenges, too.";
  var button = document.getElementById("btn-about");

  if (content.innerHTML === expandedText) {
    content.innerHTML = "My name is Merim Kulovac. I was born in the Balkans, in a small state of Bosnia and Herzegovina. I grew up and live in Sarajevo. I graduated from the High School of Electrical Engineering in Sarajevo, major: computer science and informatics. I recently graduated from the Faculty of Electrical Engineering at the University of Sarajevo, department: computer science and informatics.";
    button.innerText = 'Read more';
  } else {
    content.innerHTML = expandedText;
    button.innerText = 'Read less';
  }
}

function readMoreWebDevelopment() {
    var content = document.getElementById("paragraph-web-dev");
    var expandedText = "I am a person who is dedicated to delivering top-notch web solutions tailored to meet your unique needs. With a passion for coding and an eye for design, I’m specialize in creating stunning, responsive websites that not only captivate your audience but also drive meaningful results for your business. Whether you're a startup looking to establish an online presence or an established company seeking to revamp your website, I've got you covered. From front-end development using the latest HTML, CSS, and JavaScript technologies (frameworks like React or Angular) to back-end implementation with robust frameworks (Spring Boot, Node.JS, .net), I ensure your website is not just visually appealing but also efficient and secure. With a client-centric approach, clear communication, and a commitment to delivering on time, I strive to exceed your expectations and make your online vision a reality. Partner with me today, and let's embark on a journey to elevate your digital presence to new heights.";
    var button = document.getElementById("btn-web");
  
    if (content.innerHTML === expandedText) {
        content.innerHTML = "I am a person who is dedicated to delivering top-notch web solutions tailored to meet your unique needs. With a passion for coding and an eye for design, I'm specialize in creating stunning, responsive websites that not only captivate your audience but also drive meaningful results for your business.";
        button.innerText = 'Read more';
    } else {
      content.innerHTML = expandedText;
      button.innerText = 'Read less';
    }
  }
  
  function readMoreMobileDevelopment() {
    var content = document.getElementById("paragraph-mob-dev");
    var expandedText = "As a dedicated and skilled freelance mobile developer, I offer top-notch mobile development services that cater to your unique needs. With a passion for creating innovative and user-friendly mobile applications, I bring expertise in both Android and iOS platforms. Whether you're an ambitious startup or an established business, I am committed to delivering high-quality, tailor-made solutions that align perfectly with your vision. From conceptualization to the final product, I ensure a smooth and transparent development process, keeping you involved at every stage. My proficiency in the latest technologies and programming languages allows me to build responsive and feature-rich apps that exceed industry standards. As a freelancer working alone, I guarantee prompt communication, attention to detail, and a focus on meeting deadlines. Let's collaborate and turn your app ideas into reality, providing your users with an exceptional mobile experience. Together, we can bring success to your project and make a significant impact in the ever-evolving mobile landscape.";
    var button = document.getElementById("btn-mob");
  
    if (content.innerHTML === expandedText) {
      content.innerHTML = "As a dedicated and skilled freelance mobile developer, I offer top-notch mobile development services that cater to your unique needs. With a passion for creating innovative and user-friendly mobile applications, I bring expertise in both Android and iOS platforms. Whether you're an ambitious startup or an established business...";
      button.innerText = 'Read more';
    } else {
      content.innerHTML = expandedText;
      button.innerText = 'Read less';
    }
  }
  
  function readMoreAIDevelopment() {
    var content = document.getElementById("paragraph-ai-dev");
    var expandedText = "As a freelancer working alone, incorporating artificial intelligence (AI) services into your repertoire can be a game-changer for your business. AI services offer a wide array of solutions that can streamline your workflow, enhance productivity, and provide valuable insights to your clients. By leveraging AI, you can automate repetitive tasks, such as data analysis, content generation, and customer support, allowing you to focus on more creative and high-value projects. Moreover, AI-powered tools can assist in market research, trend analysis, and personalized recommendations, giving you a competitive edge and enabling you to deliver tailored solutions to your clients. Embracing AI services can not only boost your efficiency but also elevate the overall quality of your work, positioning you as a forward-thinking and innovative freelancer in the ever-evolving digital landscape. Embrace the power of AI to expand your capabilities and offer cutting-edge solutions that meet the diverse needs of your clients, ultimately establishing yourself as a sought-after freelancer in the AI-driven era.";
    var button = document.getElementById("btn-ai");
  
    if (content.innerHTML === expandedText) {
      content.innerHTML = "As a freelancer working alone, incorporating artificial intelligence (AI) services into your repertoire can be a game-changer for your business. AI services offer a wide array of solutions that can streamline your workflow, enhance productivity, and provide valuable insights to your clients.";
      button.innerText = 'Read more';
    } else {
      content.innerHTML = expandedText;
      button.innerText = 'Read less';
    }
  }
  
      
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