const site = "http://www.recipepuppy.com/api/?q="
let url = site
let search = document.getElementById("search")
let container = document.getElementById("container")
let submit = document.getElementById("submit")
let missingpic = "http://img.recipepuppy.com/9.jpg"



submit.addEventListener('click', function(event) {
  //2. Grab value of search box and add it to the url
    
    url = site 
    url += search.value
    console.log(url)
  //3. call doFetch()
    container.innerHTML = ""
    doFetch();
});


//1. wrap fetch in it's own function
function doFetch() {
fetch(url)
	.then(

		function(response) {

      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
      response.json().then(function(data) {

          //console.log(data)
          data.results.forEach(function(data){
          
           
           
           if(data.thumbnail = ){
            
           data.thumbnail = missingpic

           }

           

          


          let resultBlock = '' 

          resultBlock = `

          <div class = "resultcontainer">
          <img src = "${data.thumbnail}" alt = "${data.title}">
          <h3>${data.title}</h3>
          <p>${data.ingredients}</p>
          <a href = "${data.href}">
          </div>

          `
          

          container.innerHTML += resultBlock

          })
        
          



        // console.log("Here is the data:", data);
        // reqListener(data); 

      });
    }
  )
  .catch(function(err) {
    console.log("Fetch Error :-S", err);
  });
}


//function reqListener(data){
//console.log(data)
//for(i = 0; i < data.results.length; i ++){
//data.results.forEach(function(item){
// let title = item.results.title
// let href = item.results.href
// let thumbnail = item.results.thumbnail
// let ingredients = item.results.ingredients

//let container = document.getElementById("container")
// let search = document.getElementById("search").value
//   if(item.results.includes("$[search]")){   
  
//   return

//   let resultBlock = `

//   <div class = "resultcontainer">
//   <img src = "$[thumbnail$">
//   <h3>$[title]</h3>
//   <p>$[ingredients]</p>
//   <a href = "$[href]">
//   </div>
// `
 //return resultblock

//container.innerHTML = resultBlock


// let searchHeader = getElementById("searchHeader")
// let searchBar = document.createElement("form")
// searchBar.setAttribute("action", "")
// searchHeader.appendChild(searchBar)
// let search = document.createElement("input")
// search.setAttribute("type", "search")
// let submit = document.createElement("input")
// submit.setAttribute("type", "submit")
// search.appendChild(submit)
// searchBar.appendChild(search)





///if(search ===)






  
