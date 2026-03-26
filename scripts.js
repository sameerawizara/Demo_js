function find() {
  //comment added

  async function fetchdet() {
    var input = document.getElementById("getinput").value;
    var output = " ";
    const res = await fetch("https://jsonplaceholder.typicode.com/users"); //users api url 
    const dat = await res.json();
    //  console.log(dat);
    for (var i = 0; i < dat.length; i++) {
      var object = dat[i];
      console.log(object[input]);
      if (input !== "address") {
        output += "<ul>" + object[input] + "</ul>";
        document.getElementById("data").innerHTML = output;
      } else {
        //for(var i in input)
        console.log(input);
        document.getElementById("data").innerHTML = input;
        console.log("data changed");
      }
    }
  }
  // console.log(output)
  // console.log(data);
  fetchdet();
}
