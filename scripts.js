function find()
{
   //comment added
    //document.getElementById("data").innerHTML= cityName;
    //console.log(cityName)
    async function fetchdet(){
        var input=document.getElementById("getinput").value;
        var output=' ';
        const res=await fetch('https://jsonplaceholder.typicode.com/users');
        const dat=await res.json();
        //  console.log(dat);
        for (var i = 0; i <dat.length; i++) {  
           var object = dat[i];
           console.log(object[input])
           if(input!=="address"){          
           output +="<ul>"+object[input]+"</ul>"
           document.getElementById("data").innerHTML= output;
            }
            else{
              //for(var i in input)
                console.log(input)
                document.getElementById("data").innerHTML= input;
            }

          // for (input in object) {
          //     console.log(object.input)
                //alert('item ' + i + ': ' + property + '=' + object[property]);
          //  }
        }
        //for(i in dat.name){
      //  console.log(dat.name);
      // var output=' ';
    //    for(var name in user)
    //    {
    //     console.log(name);
        
    //    }
      // output="<ul>"+user.name+"</ul>"
      //  document.getElementById("data").innerHTML= output;
      }
       // console.log(output)   
       // console.log(data);
        fetchdet();
    }
    
    // if(cityName!=" ")
    // {
     
        // var request = new XMLHttpRequest();
        // request.open("GET", "api.openweathermap.org/data/2.5/weather?q="+cityName+"&units=metric"+"&APPID=14efcdbc68ec8ea0d1012e2cb2dd177d",true);
        // request.onreadystatechange = function() {
        //     if (this.readyState == this.done && this.status == 200) {
        //         if (this.responseText) { 
        //            // document.getElementById("data").innerHTML= this.responseText;
        //             console.log(this.responseText)
        //         }
        //         else {
        //             console.log("Error: Data is empty");
        //         }
        //     }
        // };
        // request.send();
   // }
    

