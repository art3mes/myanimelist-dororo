window.addEventListener('load', function() {
    document.addEventListener('click', function(event) {
      document.querySelectorAll('.dropdown,.bluet1_drop,.bluet2_drop').forEach(function(class_holder) {
        if (class_holder !== event.target) 
            class_holder.classList.remove('show');
      });
      if (event.target.matches('.cate')) {
        event.target.closest('.cate').querySelector('.dropdown').classList.toggle('show');
      }
      if (event.target.matches('.bluet1')) {
        event.target.closest('.bluet1').querySelector('.bluet1_drop').classList.toggle('show');
      }
      if (event.target.matches('.bluet2')) {
        event.target.closest('.bluet2').querySelector('.bluet2_drop').classList.toggle('show');
      }
    })
}) 
function scoreColorToggle(event){
  var scoreTextHolder=event;
  document.querySelector(".bluet1").innerText=scoreTextHolder;
  if(scoreTextHolder=== "Watching")
  {
    document.querySelector(".bluet1").style.color="green";
  }
  if(scoreTextHolder=== "Completed")
  {
    document.querySelector(".bluet3_eps").value="24";
  } 
  if(scoreTextHolder=== "On-Hold")
  {
    document.querySelector(".bluet1").style.color="#e5de00";
  }
  if(scoreTextHolder=== "Dropped")
  {
    document.querySelector(".bluet1").style.color="crimson";
  }
  if(scoreTextHolder=== "Plan to Watch")
  {
    document.querySelector(".bluet1").style.color="gray";
  }
}
function ratingToggler(event){
  var ratingTextHolder=event;
  document.querySelector(".bluet2").innerText="⭐"+ratingTextHolder;
}

function episodeToggler(){
  document.querySelector(".bluet3_eps").removeAttribute('disabled');
  document.querySelector(".bluet3_eps").style.backgroundColor="white";
}
function episodeValidator(){
  var value=document.querySelector(".bluet3_eps").value;
 
  if(!isNaN(value))
  {
    if(value < 0){
      document.querySelector(".bluet3_eps").value="0";
    }
    if(value > 24){
      document.querySelector(".bluet3_eps").value="24";
    }
  }
  else{
    alert("Enter Numeric Values only.");
  }
  document.querySelector(".bluet3_eps").style.backgroundColor="rgb(246, 246, 246)";
  document.querySelector(".bluet3_eps").setAttribute('disabled','');
}
