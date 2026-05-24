console.log("Restaurant UI/UX Project Loaded");

// EXPLORE BUTTON

const exploreBtn =
document.getElementById("exploreBtn");

exploreBtn.addEventListener("click",()=>{

  document
  .getElementById("overview")
  .scrollIntoView({
    behavior:"smooth"
  });

});


// MOBILE MENU

const menuBtn =
document.getElementById("menuBtn");

const closeBtn =
document.getElementById("closeBtn");

const navLinks =
document.getElementById("navLinks");


// OPEN MENU

menuBtn.addEventListener("click",()=>{

  navLinks.classList.add("active");

});


// CLOSE MENU

closeBtn.addEventListener("click",()=>{

  navLinks.classList.remove("active");

});


// CLOSE MENU ON LINK CLICK

const navItems =
document.querySelectorAll("nav ul li a");

navItems.forEach((item)=>{

  item.addEventListener("click",()=>{

    navLinks.classList.remove("active");

  });

});


// CARD CLICK EVENT

const cards =
document.querySelectorAll(".card");

cards.forEach((card,index)=>{

  card.addEventListener("click",()=>{

    alert(`Opening Level ${index+1}`);

  });

});


// DARK MODE

const darkModeBtn =
document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click",()=>{

  document.body.classList.toggle("dark");



  // ICON CHANGE

  if(document.body.classList.contains("dark")){

    darkModeBtn.innerHTML = "☀️";

  }

  else{

    darkModeBtn.innerHTML = "🌙";

  }

});