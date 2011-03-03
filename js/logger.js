/**
 * @title logger.js
 * @author liuisaac
 * 
 * This is a the javascript that manages the calculation of milages
 * NOTE: Include data.js before this file in the HTML
 */

var total_miles = 0;

function updateTotalMiles (miles) {
	total_miles += miles;
	$("#total_miles").html(total_miles.toFixed(2));
}

function reset_trips (){
	$("#trip_list tbody").html('');	
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
	$("#destination").val("");		
}
 $(function() {
		$( ".schools" ).autocomplete({source: schools});
		$("#add_button").button({
		icons: { secondary: "ui-icon-plusthick"}
		}).click( function () {
			// Add a row to the table and update total miles
			tSource = $("#source").val();
			tDest = $("#destination").val();
			tMiles = distances[schools.indexOf(tSource)][schools.indexOf(tDest)];
			if (tSource != "" && tDest != "") {
				addTrip(tSource,tDest, tMiles);
				updateTotalMiles(tMiles); 
				reset_form();						
			}
			else
				alert("Please fill in both fields")
		});

		$("#reset_button").button({
		icons: { secondary: "ui-icon-refresh" }
		}).click(function() {
			updateTotalMiles(-total_miles);
			reset_form();
			reset_trips();						
		});

		// Update total miles initially, will set it to 0
		updateTotalMiles(total_miles);			
	});