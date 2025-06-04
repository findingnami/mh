document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".navbar a");
    
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector(".navbar").offsetHeight,
                behavior: "smooth"
            });
        });
    });
});

const countdown = () => {
    const eventDate = new Date("August 9, 2025 10:00:00").getTime();
    const now = new Date().getTime();
    const gap = eventDate - now;
  
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);
  
    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
  };
  
  setInterval(countdown, 1000);
  
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
});

const images = document.querySelectorAll('.carousel-img');
  let current = 0;

  setInterval(() => {
    images[current].classList.remove('active');
    current = (current + 1) % images.length;
    images[current].classList.add('active');
  }, 4000); // every 4 seconds


const gallery = document.querySelector('.gallery');
  
  gallery.addEventListener('mouseover', () => {
    gallery.style.animationPlayState = 'paused';
  });

  gallery.addEventListener('mouseout', () => {
    gallery.style.animationPlayState = 'running';
  });

const playBtn = document.getElementById('playMusicBtn');
  const bgMusic = document.getElementById('bgMusic');

  playBtn.addEventListener('click', () => {
    bgMusic.play();
    playBtn.style.display = 'none'; // hide button after play (optional)
  });


const bgMusic = document.getElementById('bgMusic');

function unmuteAndPlay() {
    bgMusic.muted = false;
    bgMusic.play().catch(err => {
      // Optional: Handle any playback errors
      console.log("Playback failed:", err);
    });

    // Remove the event listeners after first interaction
    document.removeEventListener('click', unmuteAndPlay);
    document.removeEventListener('touchstart', unmuteAndPlay);
    document.removeEventListener('scroll', unmuteAndPlay);
  }

  // Listen for any user interaction
  document.addEventListener('click', unmuteAndPlay);
  document.addEventListener('touchstart', unmuteAndPlay);
  document.addEventListener('scroll', unmuteAndPlay);

