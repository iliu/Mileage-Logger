/**
 * @title logger.js
 * @author liuisaac
 * 
 * This is a the javascript that manages the calculation of milages
 * Google spreadsheet publish key: 0Au7rq5Ie3aF6dFBidzR3NVo3YXhxQTg1QXJRTUY4SVE
 * Link: http://spreadsheets.google.com/feeds/cells/0Au7rq5Ie3aF6dFBidzR3NVo3YXhxQTg1QXJRTUY4SVE/od6/public/basic?alt=json-in-script&callback=myFunc
 * NOTE: Include data.js before this file in the HTML
 */

var total_miles = 0;
var lastDest = -1;
var numSchools = 0;
var schools = [];
var distances = [];

function updateTotalMiles (miles) {
	total_miles += miles;
	$("#total_miles").html(total_miles.toFixed(2));
}

function reset_trips (){
	$("#trip_list tbody").html('');	
	numSchools = 0;
	lastDest = -1;			
}

function addStartSchool (source) {
	row = document.createElement("tr");
	cSource = document.createElement("td");
	cSource.appendChild(document.createTextNode(source));
	$(cSource).attr('class', 'ui-widget-content');
	cDest = document.createElement("td");
	$(cDest).attr('class', 'ui-widget-content');
	cMiles = document.createElement("td");
	$(cMiles).attr('class', 'ui-widget-content');
	cButton = document.createElement("td");
	$(cButton).attr('class', 'ui-widget-content');

	row.appendChild(cButton);
	row.appendChild(cSource);
	row.appendChild(cDest);
	row.appendChild(cMiles);
	$("#trip_list tbody").append(row);
}

function addTrip (source, destination, miles) {
	row = document.createElement("tr");
	cSource = document.createElement("td");
	cSource.appendChild(document.createTextNode(source));
	$(cSource).attr('class', 'ui-widget-content');
	cDest = document.createElement("td");
	cDest.appendChild(document.createTextNode(destination));
	$(cDest).attr('class', 'ui-widget-content');
	cMiles = document.createElement("td");
	cMiles.appendChild(document.createTextNode(miles));
	$(cMiles).attr('class', 'ui-widget-content');
	
	cButton = document.createElement("td");
	bRemove = document.createElement("button");
	bRemove.appendChild(document.createTextNode("Remove"));
	$(bRemove).button({
	icons: { secondary: "ui-icon-close" }, text: false
		}).click(function() {
			updateTotalMiles(-miles);
			$(this).parent().parent().remove();
		});
	cButton.appendChild(bRemove);
	$(cButton).attr('class', 'ui-widget-content');
	
	
	row.appendChild(cButton);
	row.appendChild(cSource);
	row.appendChild(cDest);
	row.appendChild(cMiles);
	$("#trip_list tbody").append(row);
}

function reset_form() {
	//Reset fields
	$("#source").val("");	
}

$(function(){

	// Get data from Google Spreadsheet
    jQuery.getJSON("http://spreadsheets.google.com/feeds/list/0Au7rq5Ie3aF6dFBidzR3NVo3YXhxQTg1QXJRTUY4SVE/od6/public/basic?alt=json", 
		function listEntries(json){
            for (var i = 0; i < json.feed.entry.length; i++) {
    			schools[i] = json.feed.entry[i].title.$t;
				$("select#source").append("<option value='"+schools[i]+"'>"+schools[i]+"</option>"); 
				var dist = json.feed.entry[i].content.$t.split(',');
				distances[i] = new Array();
				for (var j = 0; j < dist.length ; j++){
					distances[i][j] = parseFloat(dist[j].split(':')[1]);
				}
	        }
    });
    $("#add_button").button({
        icons: {
            secondary: "ui-icon-plusthick"
        }
    }).click(function(){
        // Add a row to the table and update total miles
		chosenSchool = $("#source").val();
		if (chosenSchool == "") {
			alert("Please select a school before clicking add!");
			reset_form();
			return false;
		}
        schoolNum = schools.indexOf(chosenSchool);
		if (schoolNum == lastDest) {
			alert("Please choose the next school.");
			reset_form();
			return false;
		}
        if (lastDest != -1) {
            if (numSchools == 1) {
                // Remove the first row inserted
                $("#trip_list tbody").html('');
            }
            tMiles = distances[lastDest][schoolNum];
            addTrip(schools[lastDest], schools[schoolNum], tMiles);
            updateTotalMiles(tMiles);
        }
        else {
            // First school without destination yet
            addStartSchool(schools[schoolNum]);
        }
        reset_form();
        lastDest = schoolNum;
        numSchools += 1;
    });
    
    $("#reset_button").button({
        icons: {
            secondary: "ui-icon-refresh"
        }
    }).click(function(){
        updateTotalMiles(-total_miles);
        reset_form();
        reset_trips();
    });
    
    // Update total miles initially, will set it to 0
    updateTotalMiles(total_miles);
});