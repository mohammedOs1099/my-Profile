// Function to load content based on the hash in the URL

import pages from "./pages.js";
import { validation } from "./form.js";

(function() {




  let skills = document.querySelectorAll(".iconSkills");
  let themeToggler = document.querySelector(".theme-toggler");
  let navLinks = document.querySelectorAll(".anchor");
  themeToggler.addEventListener("click", e => {
    themeToggler.children[0].classList.toggle("fa-sun");
    themeToggler.children[0].classList.toggle("fa-moon");
    document.body.classList.toggle("body-theme-light-mode");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      let id = e.target.getAttribute("id");
      if (!id || !pages[id]) {
        return;
      } else {
        navLinks.forEach(link => {
          link.classList.remove("active-link");
        });
        e.currentTarget.classList.add("active-link");
       
        
      }
      // if (id === "me") {
      //   console.log(":dssdd");
        
      //   [...skills].forEach((elems, index) => {
      //     setTimeout(() => {
      //       elems.classList.add("iconSkillShow");
      //     }, index * 100);
      //   });
      // } else {
      //   [...skills].forEach(elems => {
      //     elems.classList.remove("iconSkillShow");
      //   });
      // }
      document.getElementById("content").innerHTML = pages[id];
      if (id === "home") {
        new Typed(".name", {
          strings: ["Mohammed osama"],
          typeSpeed: 30,
          loop: false
        });
      }
      if (id === "contact") {
      validation();
      }


    });
  });

  document.getElementById("content").innerHTML = pages["home"];

  new Typed(".name", {
    strings: ["Mohammed Osama"],
    typeSpeed: 30,
    loop: false
  });



  

})();





// function loadContent() {
//     // Get the current hash from the URL
//     let page = window.location.hash.substring(1);
//     if (!page || !pages[page]) {
//         page = "home"; // Default to home if no valid hash is found
//     }

//     // Inject content into the content div
//     document.getElementById("content").innerHTML = pages[page];

//     document.querySelectorAll("nav ul li a").forEach((link)=>{
//         link.classList.remove("active-linke")
//     })

//     document.getElementById(`${page}`).classList.add('active-linke');
// }

// // Listen for hash changes in the URL
// window.addEventListener("hashchange", ()=>{loadContent()

// } );

// // Load the initial content when the page loads
// window.addEventListener("load", loadContent);
