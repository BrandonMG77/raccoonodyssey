let clock = 0;
let life = 7;
let porcentage = Number;
let effect = Number;
let margin = Number;
let timer = 0;
let scenario = '';
let bonus = Number;
let test = Number;
let height = Number;
let running = 1;


// Start button: game starts
document.querySelector(".start").addEventListener('click', function(){
    
    
    let myInterval = setInterval(function(
     
        ){
            
            if (life < 7) {
                
                bonus = 7 - life;
                document.querySelector("#little").textContent = "Has recibido un bonus de " + bonus;
                clock = clock + bonus;
                life = 7;
                
            }
            document.querySelector("#showing-score").textContent = "Time left: " + (56-life) * 2;
            document.querySelector("#real-score").textContent = "Your score is : " + clock;
            clock = clock + 1;
            life = life + 0.5;
            console.log(clock);
            console.log('Life ' + life);
        
            margin = document.querySelector('#life').style.marginTop = life +"vh";
            

            if (life < 26){
                document.querySelector("#life").style.backgroundColor = "green";
               }
           if (life > 26){
            document.querySelector("#life").style.backgroundColor = "orange";
           } 
           if (life > 48){
            document.querySelector("#life").style.backgroundColor = "red";
           } 


          
           
        // Dead Game Ends

            if (life > 56) {
                running = 0;
                alert('Perdiste. ' + 'Tu score es de ' + clock );
                document.querySelector("#obstacle").style.display = "block";
                document.querySelector('img').src= 'dead.jpg';
                clearInterval(myInterval);
                
                
            }
        
        },1000)
        
        // First button level easy
        
        document.querySelector(".first").addEventListener('click', function(){
            
            document.querySelector("#obstacle").style.display = "block";

            if (running == 1) {


                let internInterval = setInterval(function(){
               
                    timer = timer + 1;
                    document.querySelector("#showing").textContent = "Searching ... " + timer;
    
    
                }, 1000);
    
    
                console.log(margin);
            setTimeout(() => {
            
            if (running == 0) {}
            
                porcentage = Math.random() * 100; 
                console.log(porcentage);
                
                switch (true) {
                
                case (porcentage <80 && porcentage >=0):
                scenario ='Nada';
                effect = 0;
                break;
                
                case (porcentage <90 && porcentage >=80):
                scenario = 'Basura';
                effect = 1;
                life = life -0.5;
                break;
                
                case (porcentage <95 && porcentage >=90):
                scenario ='Carroña';
                effect = 3;
                life = life -1.5;
                break;
                
                case (porcentage <97 && porcentage >=95):
                scenario = 'Pizza';
                effect =10;
                life = life -5;
                break;
                
                case (porcentage <98 && porcentage >=97):
                scenario = 'Illness';
                effect = -20;
                life = life + 10;
                break;
                
                case (porcentage <99 && porcentage >=98):
                scenario = 'Poison';
                effect = -40;
                life = life + 20;
                break;
                
                case (porcentage <=100 && porcentage >=99):
                scenario = 'Dead';
                scenario = 'You died. ' + 'Your score is ' + clock ;
                alert('You died. ' + 'Tu score es de ' + clock );
                document.querySelector("#showing").textContent = ':( ' + scenario;
                clearInterval(myInterval);
                
                break;
                
                }
            
               
                document.querySelector("#obstacle").style.display = "none";
          
                clearInterval(internInterval);
                // This timer shows button working time in screen.
                timer = 0;
                document.querySelector("#showing").textContent = scenario;
                document.querySelector('img').src= effect +'.jpg';
    
            }, 2000);
                // Time ends so button appears again
                

            } else {}


            
           
        
        
        
        
        
        
        
        })

        // Second Button level 2

        document.querySelector(".second").addEventListener('click', function(){
            document.querySelector("#obstacle").style.display = "block";


            let internInterval = setInterval(function(){
               
                timer = timer + 1;
                document.querySelector("#showing").textContent = "Searching ... " + timer;


            }, 1000);


            console.log(margin);
        setTimeout(() => {
        
        
        
            porcentage = Math.random() * 100; 
            console.log(porcentage);
            
            switch (true) {
            
            case (porcentage <60 && porcentage >=0):
            scenario = 'Nada';
            effect = 0;
            break;
            
            case (porcentage <80 && porcentage >=60):
            scenario = 'Basura';
            effect = 1;
            life = life -0.5;
            break;
            
            case (porcentage <90 && porcentage >=80):
            scenario ='Carroña';
            effect = 3;
            life = life -1.5;
            break;
            
            case (porcentage <95 && porcentage >=90):
            scenario = 'Pizza';
            effect = 10;
            life = life -5;
            break;
            
            case (porcentage <97 && porcentage >=95):
            scenario = 'Complete Dinner';
            effect = 50;
            life = life -25;
            break;
            
            case (porcentage <98 && porcentage >=97):
            scenario = 'Illness';
            effect = -20;
            life = life + 10;
            break;
            
            case (porcentage <99 && porcentage >=98):
            scenario = 'Poison';
            effect = -40;
            life = life + 20;
            
            break;

            case (porcentage <=100 && porcentage >=99):
            scenario ='Dead';
            scenario = 'Perdiste. ' + 'Tu score es de ' + clock ;
            alert('Perdiste. ' + 'Tu score es de ' + clock );
            document.querySelector("#showing").textContent = ':( ' + scenario;
            clearInterval(myInterval);
            
            break;
            
            }
        
        
            document.querySelector("#obstacle").style.display = "none";
            clearInterval(internInterval);
            // This timer shows button working time in screen.
            timer = 0;
            document.querySelector("#showing").textContent = scenario;
            document.querySelector('img').src= effect +'.jpg';

        }, 4000);
            // Time ends so button appears again
           
        
        
        
        
        
        
        
        })

         // Third Button level 3

         document.querySelector(".third").addEventListener('click', function(){
            document.querySelector("#obstacle").style.display = "block";


            let internInterval = setInterval(function(){
               
                timer = timer + 1;
                document.querySelector("#showing").textContent = "Searching ... " + timer;


            }, 1000);


            console.log(margin);
        setTimeout(() => {
        
        
        
            porcentage = Math.random() * 100; 
            console.log(porcentage);
            
            switch (true) {
            
            case (porcentage <50 && porcentage >=0):
            scenario = 'Nada';
            effect = 0;
            break;
            
            case (porcentage <60 && porcentage >=50):
            scenario = 'Basura';
            effect = 1;
            life = life -0.5;
            break;
            
            case (porcentage <70 && porcentage >=60):
            scenario ='Carroña';
            effect = 3;
            life = life -1.5;
            break;
            
            case (porcentage <80 && porcentage >=70):
            scenario = 'Pizza';
            effect = 10;
            life = life -5;
            break;
            
            case (porcentage <90 && porcentage >=80):
            scenario = 'Complete Dinner';
            effect = -50;
            life = life - 25;
            break;

            case (porcentage <95 && porcentage >=90):
            scenario = 'Hit';
            effect = -5;
            life = life + 2.5;
            break;
            
            case (porcentage <97 && porcentage >=95):
            scenario = 'Illness';
            effect = -20;
            life = life + 10;
            break;
            
            case (porcentage <99 && porcentage >=97):
            scenario = 'Poison';
            effect = -40;
            life = life + 20;
            
            break;

            case (porcentage <=100 && porcentage >=99):
            scenario ='Dead';
            scenario = 'Perdiste. ' + 'Tu score es de ' + clock ;
            alert('Perdiste. ' + 'Tu score es de ' + clock );
            document.querySelector("#showing").textContent = ':( ' + scenario;
            clearInterval(myInterval);
            
            break;
            
            }
        
            document.querySelector("#obstacle").style.display = "none";
            clearInterval(internInterval);
            // This timer shows button working time in screen.
            timer = 0;
            document.querySelector("#showing").textContent = scenario;
            document.querySelector('img').src= effect +'.jpg';

        }, 8000);
            // Time ends so button appears again
           
        
        
        
        
        
        
        
        })

        // Fourth Button level 4

        document.querySelector(".fourth").addEventListener('click', function(){
            document.querySelector("#obstacle").style.display = "block";

            let internInterval = setInterval(function(){
               
                timer = timer + 1;
                document.querySelector("#showing").textContent = "Searching ... " + timer;


            }, 1000);


            console.log(margin);
        setTimeout(() => {
        
        
        
            porcentage = Math.random() * 100; 
            console.log(porcentage);
            
            switch (true) {
            
            case (porcentage <20 && porcentage >=0):
            scenario = 'Nada';
            effect = 0;
            break;
            
            case (porcentage <40 && porcentage >=20):
            scenario = 'Basura';
            effect = 1;
            life = life -0.5;
            break;
            
            case (porcentage <60 && porcentage >=40):
            scenario ='Carroña';
            effect = 3;
            life = life -1.5;
            break;
            
            case (porcentage <75 && porcentage >=60):
            scenario = 'Pizza';
            effect = 10;
            life = life -5;
            break;
            
            case (porcentage <85 && porcentage >=75):
            scenario = 'Complete Dinner';
            effect = -50;
            life = life - 25;
            break;

            case (porcentage <90 && porcentage >=85):
            scenario = 'Hit';
            effect = -5;
            life = life + 2.5;
            break;
            
            case (porcentage <93 && porcentage >=90):
            scenario = 'Illness';
            effect = -20;
            life = life + 10;
            break;
            
            case (porcentage <96 && porcentage >=93):
            scenario = 'Poison';
            effect = -40;
            life = life + 20;
            
            break;

            case (porcentage <99 && porcentage >=96):
            scenario ='Dead';
            scenario = 'Perdiste. ' + 'Tu score es de ' + clock ;
            alert('Perdiste. ' + 'Tu score es de ' + clock );
            document.querySelector("#showing").textContent = ':( ' + scenario;
            clearInterval(myInterval);
            
            break;

            case (porcentage <=100 && porcentage >=99):
                scenario ='You found an owner';
                scenario = 'Ganaste?. ' + 'Has encontrado un dueño humano, vivirás, pero el juego se ha acabado' + clock ;
                alert('Ganaste?. ' + 'Tu score es de ' + clock );
                document.querySelector("#showing").textContent = ':) ' + scenario;
                clearInterval(myInterval);
                
                break;
            
            }
        
        
            document.querySelector("#obstacle").style.display = "none";
            clearInterval(internInterval);
            // This timer shows button working time in screen.
            timer = 0;
            document.querySelector("#showing").textContent = scenario;
            document.querySelector('img').src= effect +'.jpg';

        }, 11000);
            // Time ends so button appears again
           
        
        
        
        
        
        
        
        })

        // Fifth Button level 5

        document.querySelector(".fifth").addEventListener('click', function(){
            document.querySelector("#obstacle").style.display = "block";

            let internInterval = setInterval(function(){
               
                timer = timer + 1;
                document.querySelector("#showing").textContent = "Searching ... " + timer;


            }, 1000);


            console.log(margin);
        setTimeout(() => {
        
        
        
            porcentage = Math.random() * 100; 
            console.log(porcentage);
            
            switch (true) {
            
                /*
            case (porcentage <20 && porcentage >=0):
            scenario = 'Nada';
            effect = 0;
            break;
            
            case (porcentage <40 && porcentage >=20):
            scenario = 'Basura';
            effect = 1;
            life = life -0.5;
            break;
            */
            case (porcentage <10 && porcentage >=0):
            scenario ='Carroña';
            effect = 3;
            life = life -1.5;
            break;
            
            case (porcentage <20 && porcentage >=10):
            scenario = 'Pizza';
            effect = 10;
            life = life -5;
            break;
            
            case (porcentage <40 && porcentage >=20):
            scenario = 'Complete Dinner';
            effect = -50;
            life = life - 25;
            break;

            /*
            case (porcentage <45 && porcentage >=40):
            scenario = 'Hit';
            effect = -5;
            life = life + 2.5;
            break;
            */

            case (porcentage <60 && porcentage >=40):
            scenario = 'Illness';
            effect = -20;
            life = life + 10;
            break;
            
            case (porcentage <90 && porcentage >=60):
            scenario = 'Poison';
            effect = -40;
            life = life + 20;
            
            break;

            case (porcentage <95 && porcentage >=90):
            scenario ='Dead';
            scenario = 'Has muerto, alguien te asesinó en tu búsqueda de alimento ' + 'Tu score es de ' + clock ;
            alert('Perdiste. ' + 'Tu score es de ' + clock );
            document.querySelector("#showing").textContent = ':( ' + scenario;
            clearInterval(myInterval);
            
            break;

            case (porcentage <=100 && porcentage >=95):
                scenario ='You found an owner';
                scenario = 'Ganaste?. ' + 'Has encontrado un dueño humano, vivirás, pero el juego se ha acabado' + clock ;
                alert('Ganaste?. ' + 'Tu score es de ' + clock );
                document.querySelector("#showing").textContent = ':) ' + scenario;
                clearInterval(myInterval);
                
                break;
            
            }
        
        
            document.querySelector("#obstacle").style.display = "none";
            clearInterval(internInterval);
            // This timer shows button working time in screen.
            timer = 0;
            document.querySelector("#showing").textContent = scenario;
            document.querySelector('img').src= effect +'.jpg';

        }, 15000);
            // Time ends so button appears again
           
        
        
        
        
        
        
        
        })





        // This is inside of the game start button

})
