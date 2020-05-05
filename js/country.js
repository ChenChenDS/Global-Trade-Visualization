// Initialize the viz variable
var viz1;
var viz2;
var viz3;

window.onload=function(){
    //when the webpage has loaded, load the viz
    var vizDiv = document.getElementById("myViz1");
    var vizURL = "https://public.tableau.com/views/countryoverview/Dashboard1?:display_count=y&publish=yes&:origin=viz_share_link";
    var options = {
        width:"1300px",
        height:"1000px",
        hideToolbar:true,
        hideTabs:true
    };
    viz1 = new tableau.Viz(vizDiv, vizURL, options);

    //when the webpage has loaded, load the viz
    var vizDiv = document.getElementById("myViz2");
    var vizURL = "https://public.tableau.com/views/China_15886017723770/China?:retry=yes&:display_count=y&:origin=viz_share_link";
    var options = {
        width:"1300px",
        height:"1000px",
        hideToolbar:true,
        hideTabs:true
    };
    viz2 = new tableau.Viz(vizDiv, vizURL, options);

    //when the webpage has loaded, load the viz
    var vizDiv = document.getElementById("myViz3");
    var vizURL = "https://public.tableau.com/views/countryoriented/Dashboard2?:display_count=y&:origin=viz_share_link";
    var options = {
        width:"1300px",
        height:"800px",
        hideToolbar:true,
        hideTabs:true
    };
    viz3 = new tableau.Viz(vizDiv, vizURL, options);
};
