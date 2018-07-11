if(localStorage.getItem("count") == null){
  localStorage.setItem("count", 0);
}

var count = localStorage.getItem("count")

count++;

localStorage.setItem("count", count);