function searchServices() {
          let input = document.getElementById("search-input").value.toLowerCase().trim();
          let services = document.querySelectorAll(".flex-box");
          let noResults = document.getElementById("no-results");
          let found = false;
        
          services.forEach(service => {
            let text = service.querySelector("p").textContent.toLowerCase();
            if (text.includes(input)) {
              service.style.display = "flex"; 
              found = true;
            } else {
              service.style.display = "none"; 
            }
          });
        
          noResults.style.display = found ? "none" : "block";
        }


        