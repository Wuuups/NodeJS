const cols = document.querySelectorAll(".col")
      // Array.from(cols).map()
      // [...cols].map()
      cols.forEach(col => {
         col.addEventListener("click", function(){
            this.classList.toggle("active")
         })
      });