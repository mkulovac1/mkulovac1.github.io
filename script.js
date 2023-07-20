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
  var expandedText = "My name is Merim Kulovac. I was born in the Balkans, in a small state of Bosnia and Herzegovina. I grew up and live in Sarajevo. I graduated from the High School of Electrical Engineering in Sarajevo, major: computer science and informatics. I recently graduated from the Faculty of Electrical Engineering at the University of Sarajevo, department: computer science and informatics. During my studies, I worked on a lot of projects, both university and private. My focus is mainly on full-stack development of web applications, although lately I have also been attracted to the development of mobile applications and programming in the field of artificial intelligence. I am a very ambitious and hard-working person. I am looking for an opportunity to prove and improve myself. I am ready for new experiences and challenges, too.";
  var button = document.getElementById("btn-about");

  if (content.innerHTML === expandedText) {
    content.innerHTML = "My name is Merim Kulovac. I was born in the Balkans, in a small state of Bosnia and Herzegovina. I grew up and live in Sarajevo. I graduated from the High School of Electrical Engineering in Sarajevo, major: computer science and informatics. I recently graduated from the Faculty of Electrical Engineering at the University of Sarajevo, department: computer science and informatics.";
    button.innerText = 'Read less';
  } else {
    content.innerHTML = expandedText;
    button.innerText = 'Read more!';
  }
}




