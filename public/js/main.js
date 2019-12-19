window.onload = function(){

                        // NAVIGATION SIDE BAR//
        const myNavbar = document.querySelector('#myNavbar');
        myNavbar.onclick = function(){ 
        document.querySelector('#side-menu').style.width = '250px';
        };

        const closeBtn = document.querySelector('#closeBtn');
        closeBtn.onclick = function(){
        document.querySelector('#side-menu').style.width = '0';
        };


        const myBtn = document.querySelector('#myBtn');
        let contactForm = document.querySelector('#contact-form');
        let inputs = document.querySelectorAll('input');
        console.log(inputs);

        let patterns = {
            telephone: /^\d{10}$/, // to match any digit from 0 - 9 with only 10 characters;
            fname : /^[a-z\d]{3,12}$/i,
            lname : /^[a-z\d]{5,12}$/i,
            email:     /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
          };

          let validate = (field,regex) =>{
              console.log(regex.test(field.value))
              if(regex.test(field.value)){
                field.className = 'valid';
              }
              else{
                field.className = 'invalid';
              }
            }
              
          inputs.forEach((input)=>{
              input.addEventListener('keyup',(e) => {
             console.log(e.target.attributes.name.value)
              validate(e.target, patterns[e.target.attributes.name.value])
            });
         });

        myBtn.onclick =  (e) =>{
            //e.preventDefault();
            console.log('Im alive');
            contactForm.setAttribute('action', 'https://formspree.io/' + 'Ortegar95' + '@' + 'gmail' + '.' + 'com');           

        }
      }


     
    
        
        

   
    

                

