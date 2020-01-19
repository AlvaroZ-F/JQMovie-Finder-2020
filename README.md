<h2 style="font-family:sans-bury;">Movie browsing application.</h2>
<p>--------------------------------------------------------------------------------------------------------------------------------</p>
<h3 style="font-family:sans-bury;">Application Structure: </h3>
  <div>
  <p style="font-family:verdana;">-> A simple header with a <i>"Home"</i> link for navigating back to the main page.</p>
  <p style="font-family:verdana;">-> A section banner area, we'd see our browsing form and a button to find our movies. Type any movie title in order to find the movies you wish to learn information about.</p>
  <p style="font-family:verdana;">-> A service section. Initially empty, we'll see our browsing results displayed here.</p>
  <p style="font-family:verdana;">-> A footer area with information regarding the website and its creators.</p>
  </div>
<p>--------------------------------------------------------------------------------------------------------------------------------</p>
<h3 style="font-family:sans-bury;">Functionality: </h3>
<p>--------------------------------------------------------------------------------------------------------------------------------</p>
<div>
  <p style="font-family:verdana;">In our initial page, we type out the title of a movie, and we click the search button.</p>
  <p style="font-family:verdana;">The text introduced in the input form is saved in a variable <i>"searchText"</i>, and the method <i>"getMovies"</i> is called with that information inside</p>
  <p style="font-family:verdana;"><strong>getMovies</strong> is a method with two parameters, <i>searchText</i>, and <i>page</i>. Page is equal to 1 by default. The method will make an AJAX request to the <b>OMDB API</b> to access with our key to their JSON database, and will build an output with the html code to give shape to each result given by the title entered. Iterating through the <i>"Search"</i> object in the JSON results, it'll write each movie with text coincidences in its title in our <em>SERVICE SECTION</em>, with a thumbnail, the title and some details. On hover, our cursor will change to a pointer and it'll change its background color.<br/>
    Each result object will be clickeable, expanding into a modal window with more details related with the movie. This is done by calling the method "getMoreDetails", containing the movie's imdbID we've clicked on. Once the output is closed up, the method will append it to the <em>SERVICE SECTION</em> area as html code.
  </p>
  <p style="font-family:verdana;"><strong>getMoreDetails</strong> is a method we've called in the previously mentioned method "getMovies". This method sole function is to gather information from the OMDB API using the imdbID provided by the previous method. By doing so it'd obtain all the required information to fill up a modal that will appear once the movie result is clicked on as described.<br/>
    The results are printed in each field using AJAX syntax, allowing the content to be replaced everytime we open a new movie thumbnail.
  </p>
  <p style="font-family:verdana;"><strong>Infinite Scrolling.</strong> We save the html item "Window" in a variable, in order to detect the scrolling by the user, and if they'd reach the bottom side of the page, the variable we created <i>"currentPage"</i> is incremented by 1, and we call the <i>"getMovies"</i> method again using <i>"currentPage"</i> variable as the second parameter. This would load the second page in OMDB API database results, and will assemble them with the same procedure as described for this method, only for the second page, and appended to the current search.
  </p>
</div>
<p>--------------------------------------------------------------------------------------------------------------------------------</p>
<h3 style="font-family:sans-bury;">Styling: </h3>
<p>--------------------------------------------------------------------------------------------------------------------------------</p>
  <p style="font-family:verdana">
  We've used a bootstrap template from colorlib.com, information is shown in the footer section of the application.
  </p>
  <p style="font-family:verdana">
  Additionally, we've added these changes:
  </p>
  <p style="font-family:verdana"> -> Card input form well structured inside the banner Section with a icon button </p>
  <p style="font-family:verdana"> -> Changed properties for the template to fit more results in each row </p>
  <p style="font-family:verdana"> -> Changed main.css properties, so our cursor would change to a pointer when we hover on each result </p>
  <p style="font-family:verdana"> -> Added a Modal element that'd popup once we click over any result, with information well assembled inside. To close it we just have to click outside.</p>
  <p style="font-family:verdana"> -> Changed banner with a customized picture picked from Internet related with the application's theme </p>
  <p style="font-family:verdana"> -> Added a second css file <i>stylesEdit.css</i> to add small changes in the styling for the modal object </p>
<p>--------------------------------------------------------------------------------------------------------------------------------</p>
