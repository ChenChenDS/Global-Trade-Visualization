// Initialize the viz variable
var viz;

window.onload=function(){
    //when the webpage has loaded, load the viz
    var vizDiv = document.getElementById("myViz1");
    var vizURL = "https://public.tableau.com/views/unemploymentandtrade/Dashboard1?:display_count=y&publish=yes&:origin=viz_share_link";
    var options = {
        width:"1300px",
        height:"1000px",
        hideToolbar:true,
        hideTabs:true
    };
    viz = new tableau.Viz(vizDiv, vizURL, options);

};