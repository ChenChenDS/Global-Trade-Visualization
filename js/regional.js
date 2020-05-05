// Initialize the viz variable
var viz1;
var viz2;

window.onload=function(){
    //when the webpage has loaded, load the viz
    var vizDiv = document.getElementById("myViz1");
    var vizURL = "https://public.tableau.com/views/overviewtableau_15884693408090/TradeFlowbyRegions?:display_count=y&publish=yes&:origin=viz_share_link";
    var options = {
        width:"1300px",
        height:"1000px",
        hideToolbar:true,
        hideTabs:true
    };
    viz1 = new tableau.Viz(vizDiv, vizURL, options);

    //when the webpage has loaded, load the viz
    var vizDiv = document.getElementById("myViz2");
    var vizURL = "https://public.tableau.com/views/regionsankey/Dashboard?:display_count=y&publish=yes&:origin=viz_share_link";
    var options = {
        width:"1300px",
        height:"1000px",
        hideToolbar:true,
        hideTabs:true
    };
    viz2 = new tableau.Viz(vizDiv, vizURL, options);

};