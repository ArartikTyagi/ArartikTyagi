// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Scroll sections
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
           // Active navbar links
           navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
           });
           // Active section for animation scroll
           sec.classList.add('show-animate')
        }
        // Remove animation scroll if not in section
        else {
            sec.classList.remove('show-animate');
        }
    });

    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when navbar links are clicked for scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // Animation footer scroll
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

// Confetti Animation
const Confettiful = function(el) {
    this.el = el;
    this.containerEl = null;
    
    this.confettiFrequency = 3;
    this.confettiColors = ['#EF2964', '#00C09D', '#754ef9', '#48485E','#ededed'];
    this.confettiAnimations = ['slow', 'medium', 'fast'];
    
    this._setupElements();
    this._renderConfetti();
};
  
Confettiful.prototype._setupElements = function() {
    const containerEl = document.createElement('div');
    const elPosition = this.el.style.position;
    
    if (elPosition !== 'relative' || elPosition !== 'absolute') {
      this.el.style.position = 'relative';
    }
    
    containerEl.classList.add('confetti-container');
    this.el.appendChild(containerEl);
    this.containerEl = containerEl;
};
  
Confettiful.prototype._renderConfetti = function() {
    this.confettiInterval = setInterval(() => {
      const confettiEl = document.createElement('div');
      const confettiSize = (Math.floor(Math.random() * 3) + 7) + 'px';
      const confettiBackground = this.confettiColors[Math.floor(Math.random() * this.confettiColors.length)];
      const confettiLeft = (Math.floor(Math.random() * this.el.offsetWidth)) + 'px';
      const confettiAnimation = this.confettiAnimations[Math.floor(Math.random() * this.confettiAnimations.length)];
      
      confettiEl.classList.add('confetti', 'confetti--animation-' + confettiAnimation);
      confettiEl.style.left = confettiLeft;
      confettiEl.style.width = confettiSize;
      confettiEl.style.height = confettiSize;
      confettiEl.style.backgroundColor = confettiBackground;
      
      confettiEl.removeTimeout = setTimeout(function() {
        confettiEl.parentNode.removeChild(confettiEl);
      }, 3000);
      
      this.containerEl.appendChild(confettiEl);
    }, 25);
};
  
function start() {
    new Confettiful(document.querySelector('.js-container'));  // Assuming js-container exists for confetti
    let congratEl = document.querySelector('.congrats');
    congratEl.style.display = 'block';  // Show the congratulations section
}
  
// Assuming you have an element with class 'recruter' to trigger the confetti animation
let test = document.querySelector('.recruter');
test.addEventListener('click', start );

// Button to end animation and hide congrats
const endanim = document.querySelector('#endanim');
endanim.addEventListener('click', () => {
    const el = document.querySelector('.congrats');
    const congratsEl = document.querySelector('.confetti-container');
    congratsEl.style.display = 'none';  // Hide confetti container
    el.style.display = 'none';  // Hide congrats message
});