const alan = {
    ask: function(question, answer){
       console.log(question)
       alan.responds = answer
   }
}

alan.ask('Do you want to sleep in, or go to work early?', function(answer){
   switch (answer){
       case 'sleep in': 
           alan.ask("Do you walk or call uber?", function(answer){
               switch (answer){
                   case 'walk': 
                       alan.ask("Do you run for the tunnels or brave the rain?", function(answer){
                           switch (answer){
                               case 'run for the tunnels': console.log("ded")
                               break;

                               case 'brave the rain':
                               alan.ask("Turn back or continue walking?", function(answer){
                                   switch(answer){
                                       case 'turn back': console.log('you die');
                                       break;
                                       case 'continue walking':
                                       alan.ask("Have you push and committed your work?", function(answer){
                                           switch(answer){
                                               case 'yes':
                                               console.log('great!');
                                               break;
                                               case 'no':
                                               console.log('die');
                                               break;
                                           }
                                       })

                                   }
                               })
                               break;
                           }
                       })
                   break;
                   case 'uber':
                       alan.ask("Do you stay in his car, join him, or walk", function(answer){
                           switch(answer){
                               case 'walk':
                                   alan.ask("Do you run for the tunnels or brave the rain?", function (answer) {
                                       switch (answer) {
                                           case 'run for the tunnels': console.log("ded")
                                               break;

                                           case 'brave the rain':
                                               alan.ask("Turn back or continue walking?", function (answer) {
                                                   switch (answer) {
                                                       case 'turn back': console.log('you die');
                                                           break;
                                                       case 'continue walking':
                                                           alan.ask("Have you push and committed your work?", function (answer) {
                                                               switch (answer) {
                                                                   case 'yes':
                                                                       console.log('great!');
                                                                       break;
                                                                   case 'no':
                                                                       console.log('die');
                                                                       break;
                                                                   default:
                                                                       console.log('you suck');    
                                                               }
                                                           })

                                                   }
                                               })
                                               break;
                                       }
                                   })
                                   break;
                               case 'join him':
                               console.log('die');
                               break;
                               case 'stay in his car':
                               console.log('die');
                               break;
                               default:
                               console.log('you suck');
                               
                           }

                       })
               }
           })
       case 'go to work early':
           alan.ask("Do you join the game?", function(answer){
               switch(answer){
                   case 'yes':
                   console.log("die");
                   break;
                   case 'no':
                   console.log('great');
                   break;
                   default:
                   console.log('you suck');
               }
           })

   }
})