// Navbar shadow on scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.style.background = "rgba(0,0,0,0.85)";
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
  } else {
    header.style.background = "rgba(0,0,0,0.45)";
    header.style.boxShadow = "none";
  }
});

// Hero button animation
const buttons = document.querySelectorAll(".hero-buttons a");

buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "scale(1.08)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "scale(1)";
  });
});

// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if(target){
      target.scrollIntoView({
        behavior:'smooth'
      });
    }
  });
});
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section").forEach(section=>{
    section.classList.add("fade");
    observer.observe(section);
});
// Animated Counter

const counters = document.querySelectorAll(".counter");

const speed = 200;

counters.forEach(counter=>{

const updateCount=()=>{

const target=+counter.getAttribute("data-target");

const count=+counter.innerText;

const inc=target/speed;

if(count<target){

counter.innerText=Math.ceil(count+inc);

setTimeout(updateCount,10);

}

else{

counter.innerText=target;

}

}

updateCount();

});
// FAQ Toggle

document.querySelectorAll(".faq-question").forEach(button=>{

button.addEventListener("click",()=>{

const answer=button.nextElementSibling;

if(answer.style.display==="block"){

answer.style.display="none";

}else{

answer.style.display="block";

}

});

});
