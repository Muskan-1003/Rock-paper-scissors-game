//DOM elements
const gameContainer=document.querySelector(".container"),
      userResult=document.querySelector(".user_result img"),
      cpuResult=document.querySelector(".cpu_result img"),
      result=document.querySelector(".result "),
      optionImages=document.querySelectorAll(".option_image ");

      optionImages.forEach((image,index)=>{
        image.addEventListener("click",(e)=>{
            image.classList.add("active");
            userResult.src=cpuResult.src="images/rock.png";
            result.textContent="Wait.....";
            
            optionImages.forEach((image2,index2)=>{
                if(index!=index2){
                    image.classList.remove("active");

                }

            })
            gameContainer.classList.add("start");
            let time=setTimeout(()=>{
                gameContainer.classList.remove("start");
                let imageSrc=e.target.querySelector("img").src;
                userResult.src=imageSrc;//user result
                //---------//
                let randomNumber=Math.floor(Math.random()*3);
                let cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];
                cpuResult.src=cpuImages[randomNumber];//cpu result
                let cpuValue=["R","P","S"][randomNumber];
                let userValue=["R","P","S"][index];
                let outComes={
                    RR:"Draw",
                    RP:"Cpu",
                    RS:"User",
                    PP:"Draw",
                    PR:"User",
                    PS:"Cpu",
                    SS:"Draw",
                    SR:"Cpu",
                    SP:"User",

                };
                let outValue=outComes[userValue+cpuValue];
                result.textContent=userValue===cpuValue?"Match Draw":`${outValue}"Won!!"`;

            },2500);

        })

    })


      
