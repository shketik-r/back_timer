const days = document.getElementById("name_days");
const hours = document.getElementById("name_hours");
const minutes = document.getElementById("name_minutes");
const seconds = document.getElementById("name_seconds");

function media(){
  if (window.innerWidth > 760) {
    days.textContent = "Days";
    hours.textContent = "Hours";
    minutes.textContent = "Minutes";
    seconds.textContent = "Seconds";
  }else{
    days.textContent = "DD";
    hours.textContent = "HH";
    minutes.textContent = "MM";
    seconds.textContent = "SS";
  }
}

media()
window.addEventListener(`resize`,(event) => {
  media()
  },
  false
);
