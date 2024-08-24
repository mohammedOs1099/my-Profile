 

  export function validation(){
    let nameIput = document.getElementById("name");
    let emailInput = document.querySelector("#email");
    let messageInput = document.querySelector("#message");
    let btn = document.querySelector("#btnSubmit");
    btn.addEventListener("click",(e)=>{
        e.preventDefault();
        
        error()
    });
  };
function error() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    confirmButtonText: 'OK',
    html:` 
    <p class="pop-p" >  We Apologize,The Service Is Currently Unavailable. You Can Contact Us Via WhatsApp:"01204667810", <br/> LinkedIn, or Email. </p>
    <ul class="social-icon justify-content-center align-items-center  ">
              <li class="linked-in">
                <a
                  href="https://www.linkedin.com/in/mohammed-osama-9263b422b"
                  target="_blank"
                  ><i class="fa-brands fa-linkedin"></i
                ></a>
              </li>

              <li class="gmail">
                <a
                  href="mailto:mohammedosama1099@gmail.com"
                  target="_blank"
                  data-art="Gmail"
                  ><i class="fa-brands fa-m"></i
                ></a>
              </li>
            </ul>`,
            customClass: {
                popup: 'my-popup',
                title: 'my-title',
                content: 'my-content',
                confirmButton: 'my-confirm-button',
              
              }
            
            

  });
}

