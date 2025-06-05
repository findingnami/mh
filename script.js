/* nav
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
}); */

/* hamburger menu
  document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
}); */

document.addEventListener('DOMContentLoaded', () => {
  console.log("Script loaded and running");


/* countdown */
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

/* carousel */
  const images = document.querySelectorAll('.carousel-img');
    let current = 0;

    setInterval(() => {
      images[current].classList.remove('active');
      current = (current + 1) % images.length;
      images[current].classList.add('active');
    }, 4000); // every 4 seconds


/* gallery */
  const gallery = document.querySelector('.gallery');
  
  gallery.addEventListener('mouseover', () => {
    gallery.style.animationPlayState = 'paused';
  });

  gallery.addEventListener('mouseout', () => {
    gallery.style.animationPlayState = 'running';
  });

/* music */
  const playBtn = document.getElementById('playMusicBtn');
  const bgMusic = document.getElementById('bgMusic');

  playBtn.addEventListener('click', () => {
    bgMusic.play();
    playBtn.style.display = 'none'; // hide button after play (optional)
  });


// h1 fade in
/* const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log('Intersecting:', entry.target);
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  const h1Elements = document.querySelectorAll('h1');
  h1Elements.forEach(h1 => {
    console.log('Observing:', h1);
    observer.observe(h1);
  }); */


});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('h1').forEach(h1 => {
    h1.classList.add('fade-in');
  });
});
