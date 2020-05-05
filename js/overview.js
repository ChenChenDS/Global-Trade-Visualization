// Initialize the viz variable
var viz1;
var viz2;

window.onload=function(){
    //when the webpage has loaded, load the viz
    var vizDiv = document.getElementById("myViz1");
    var vizURL = "https://public.tableau.com/views/overview_15884588322770/overview?:display_count=y&publish=yes&:origin=viz_share_link&:toolbar=no";
    var options = {
        width:"1300px",
        height:"800px",
        hideToolbar:true,
        hideTabs:true
    };
    viz1 = new tableau.Viz(vizDiv, vizURL, options);

    
    //when the webpage has loaded, load the viz
    var vizDiv = document.getElementById("myViz2");
    var vizURL = "https://public.tableau.com/views/Worldproducttype/WorldTradeFlowbyProductTypefrom2013to2018?:display_count=y&publish=yes&:origin=viz_share_link";
    var options = {
        width:"1300px",
        height:"1200px",
        hideToolbar:true,
        hideTabs:true
    };
    viz2 = new tableau.Viz(vizDiv, vizURL, options);
};
