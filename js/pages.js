let pages = {
  home,
  me,
  myProject,
  contact,
};

export default pages;
async function getData() {
  const Data = await fetch("../data.json");
  let data = await Data?.json();

  return data;
}

const { homeData,education,myWork } = await getData();
const { jobtitle, firstWord, myname, description, download } = homeData;

function getHome() {
  return `<div class = " home row  align-items-center      ">
  <div class = " home-contant col-sm-12 col-lg-6      " >
  <span class="firstWord"  >${firstWord}</span>
  <h3><span class="name"></span>&nbsp;</h3>
  <h4 class= "jobtitle" >${jobtitle}</h4>
  <p class= "description" >${description}</p>
  <a class=" cv-btn btn btn-link btn-outline-success " download  href="./pdf/MohammedOsama-cv">${download}<i class="fa-solid p-2  fa-cloud-arrow-down"></i></a>
 </div> 
   <div class="col-sm-12 col-lg-6 ">
                <lottie-player
                class=" "
                  src="https://assets4.lottiefiles.com/packages/lf20_k9drntq4.json"
                  background="transparent"
                  speed="1"
                  style="width: 100%; height: auto"
                  loop
                  autoplay
                ></lottie-player>
              </div> 
              </div> 
   `;
}
const { educ1, date1, educ2, date2 } = education;
function getMe() {
  return `  
      <div id="me" class="me   ">
         <header class=" me-header ">
            <h1>About <span>me</span></h1>
            <div class="line-bar"></div>
         </header>

            <div class="me-content row justify-content-space-between   ">
             <div class=" col-sm-12 col-lg-6  ">
             <div class="education">
             <h2>Education</h2>
             <p>${educ1}<br/>
             <span>${date1}</span>
             </p>
              <p>${educ2}<br/>
             <span>${date2}</span>
             </p>
                  <h2>PERSONAL DATA</h2>
  <div class="d-flex">
  <p  class="me-2"><span class="fa-solid text-success fa-location-dot"></span> Alexandria, Egypt </p>  
  <p  class="ms-2"><span class="fa-brands fa-whatsapp text-success"></span> 01204667810</p>
  </div>
  <p><span>Date of Birth:</span> 9/1/1997</p>


             
             </div>
        

             </div>
             <div class=" Skills col-sm-12 col-lg-6  ">
             <h2> Skills </h2>
      <div class="icons ">
                  <span
                    class="d-flex flex-column align-items-center iconSkills"
                  >
                    <i class="devicon-html5-plain colored"></i>
                    <span>Html</span>
                  </span>
                  <span
                    class="d-flex flex-column align-items-center iconSkills"
                  >
                    <i class="devicon-css3-plain colored"></i>
                    <span>Css</span>
                  </span>
                  <span
                    class="d-flex flex-column align-items-center iconSkills"
                  >
                    <i class="devicon-javascript-plain colored"></i>
                    <span>JavaScript</span>
                  </span>
                  <span
                    class="d-flex flex-column align-items-center iconSkills"
                  >
                 
            <i class="devicon-typescript-plain colored"></i>
          
                    <span>TypeScript</span>
                  </span>
                  <span
                    class="d-flex flex-column align-items-center iconSkills"
                  >
                    <i class="devicon-react-original colored"></i>
                    <span>ReactJs</span>
                  </span>
                  <span
                    class="d-flex flex-column align-items-center iconSkills"
                  >
                    <i class="devicon-github-original "></i>
                    <span>Github</span>
                  </span>
                  <span
                    class="d-flex flex-column align-items-center iconSkills"
                  >
                    <i class="devicon-redux-original colored"></i>
                    <span>Redux</span>
                  </span>
                  <span
                    class="d-flex flex-column align-items-center iconSkills"
                  >
                    <i class="devicon-jquery-plain colored"></i>
                    <span>Jquery</span>
                  </span>
                  <span
                    class="d-flex flex-column align-items-center iconSkills"
                  >
                    <i class="devicon-bootstrap-plain colored"></i>
                    <span>Bootstrap</span>
                  </span>
                  <span
                    class="d-flex flex-column align-items-center iconSkills"
                  >
                    <i class="devicon-tailwindcss-plain colored"></i>
                    <span>Tailwind-css</span>
                  </span>
                 
                  <span
                    class="d-flex flex-column align-items-center iconSkills"
                  >
                    <i class="devicon-sass-original colored"></i>
                    <span>Sass</span>
                  </span>
                  <span
                    class="d-flex flex-column align-items-center iconSkills"
                  >
                  <i class="devicon-nextjs-original"></i>
                    <span>Next.js</span>
                  </span>
                </div>
 
  
  </div>
       <div class=" col-sm-12 col-lg-6 mx-auto my-2  ">
  
 <lottie-player
                  src="https://assets8.lottiefiles.com/packages/lf20_to66647u.json"
                  background="transparent"
                  speed="1"
                  style="width: 95%; height: auto"
                  loop
                  autoplay
                ></lottie-player>
  
  </div>


            </div>
  



    </div>`;
}

function showMyWork(){
return` <div id="myProject" class="myProject  p-3   ">
         <header class=" Mywork-header ">
            <h1>My <span>Work</span></h1>
            <div class="line-bar"></div>
         </header>
         <div class="myProject-content  row justify-content-center align-items-center ">

   ${myWork.map(({ img, github, preview,title }) => `
          <div class=" card project-item col-sm-12 col-md-5 m-3 p-0 position-relative d-flex justify-content-center align-items-center ">
          <div class="proj-links  position-absolute  " >
          <h3 class=" card-title " >${title}</h3>
          <div class=" links d-flex justify-content-center   "  >
          <a class="card-link card-link-1  fa-brands fa-github" href=${github} target="_blank" rel="noopener noreferrer"></a>
<a class="fas fa-search card-link card-link-2 " href=${preview} target="_blank" rel="noopener noreferrer"></a>
          </div>
          </div>
            <div div class="card-img object-fit-cover   ">
            <img class=" d-block w-100 " src=${img} alt=${title} >
            </div>          
          </div>
        `).join('')}

         </div>

         </div>`
};
function getcontact() {
  return `<div class = " contact row  align-items-center    ">
   <header class="contact-header ">
            <h1>Get <span>In</span> Touch...!</h1>
            <div class="line-bar"></div>
         </header>
  <div class = " contact-contant col-sm-12 col-lg-6       " >
<form id="contact-form">

 <div class="mb-3">
  
  <input id="name" type="text" class="form-control .username" id="exampleFormControlInput1" placeholder="Name">
</div>
 <div class="mb-3">
  
  <input id="email" type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email">
</div>
<div class="mb-3">
  
  <textarea id="message"  type="text" placeholder="Messag" class="form-control" id="exampleFormControlTextarea1" cols="30" rows="3" "></textarea>
</div>
 
 
  <button id="btnSubmit" type="submit" class="btn   btn-outline-success  "  >send</button>
</form>

      </div>  
 
 <div class="col-sm-12  col-lg-6 mx-auto ">
                <lottie-player
                class=" "
             src="https://assets4.lottiefiles.com/packages/lf20_0wye9soi.json"
                  background="transparent"
                  speed="1"
                  style="width: 90%; height: auto"
                  loop
                  autoplay
                ></lottie-player>
               
              </div> 
   `;
}

(function loadate(){
  pages.home = getHome();
pages.me = getMe();
pages.myProject=showMyWork();
pages.contact = getcontact();
document.querySelector(".loader").classList.add("loader-hide");
document.body.style.overflowY = "auto";
})();