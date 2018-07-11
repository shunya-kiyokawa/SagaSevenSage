if(localStorage.getItem("secret-count") == null){
  localStorage.setItem("secret-count", 0);
}

var count = localStorage.getItem("secret-count")

count++;

localStorage.setItem("secret-count", count);