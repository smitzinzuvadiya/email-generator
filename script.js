var arr =[];
var stopid = null;
function email() {

    if (stopid !== null) {
        clearInterval(stopid);
        stopid = null;
      }

    stopid = setTimeout(() =>{
      var abcd = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
      var no = [0,1,2,3,4,5,6,7,8,9];
      var str = "";

      var noabcd = ((Math.random() * 7)+5).toFixed(0)
      var noofno = ((Math.random() * 3)+1).toFixed(0)
      
      for (let i = 0; i < noabcd; i++) {
          var abcdindexno = (Math.random() * (abcd.length-1)).toFixed(0)
          str += abcd[abcdindexno];
      }
      
      for (let i = 0; i < noofno ; i++) {
          var noindex = (Math.random() * (no.length-1)).toFixed(0)
          str += no[noindex];
      }

    document.getElementById("display").innerText = str + "@gmail.com";
    arr.unshift(str+"@gmail.com")
    document.getElementById("displayhistory").innerText = arr.slice(0, 5).join("\n\n");

    },0)

  //   document.getElementById("displayhistory").innerHTML = arr
  // .map(email => `<div style="justify-content:space-between; ">
  //     ${email}
  //     <img src="local/copy-removebg-preview.png" class="copy" onclick="copyThisEmail('${email}')">
  //   </div>`)
  // .join("");


    document.getElementById("clearalll").innerText = "";
    
  }


  function stop(){
    clearInterval(stopid);
    document.getElementById("stop").innerText ="stoped!!!!!!!!!!!!!!";
  }

  function clearall(){
    arr = [];
    document.getElementById("display").innerText = "genrated email showing here";
    document.getElementById("displayhistory").innerText = "";
    document.getElementById("stop").innerText = "";
    document.getElementById("clearalll").innerText = "All cleared succesfuly !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!";
  }

  const copyEmail = () => {
    const p = document.getElementById("display").innerText;
    navigator.clipboard.writeText(p)
  }

  // function copyThisEmail(email) {
  //   navigator.clipboard.writeText(email)
  // }

  