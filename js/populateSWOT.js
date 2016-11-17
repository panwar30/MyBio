var txt = "";
var strengthObject = {
	"strengths" : [ "Transparent", "Learning new things" ],
	"populateStrengths" : function() {
		for (var i = 0; i < strengthObject.strengths.length; i++) {
			txt += "<li>" + strengthObject.strengths[i] + " </li>";
		}		
		document.getElementById("ul1").innerHTML = txt;
	}
}
strengthObject.populateStrengths();


var txt = "";
var weaknessObject = {
	"weakness" : [ "Nostalgic", "Language problem" ],
	"populateWeakness" : function() {
		for (var i = 0; i < weaknessObject.weakness.length; i++) {
			txt += "<li>" + weaknessObject.weakness[i] + " </li>";
		}		
		document.getElementById("ul2").innerHTML = txt;
	}
}
weaknessObject.populateWeakness();



var txt = "";
var opportunityObject = {
	"opportunitys" : [ "More time", "Good work culture" ],
	"populateOpportunitys" : function() {
		for (var i = 0; i < opportunityObject.opportunitys.length; i++) {
			txt += "<li>" + opportunityObject.opportunitys[i] + " </li>";
		}		
		document.getElementById("ul3").innerHTML = txt;
	}
}
opportunityObject.populateOpportunitys();



var txt = "";
var threatObject = {
	"threats" : [ "Local lang problem", "Far from home" ],
	"populateThreats" : function() {
		for (var i = 0; i < threatObject.threats.length; i++) {
			txt += "<li>" + threatObject.threats[i] + " </li>";
		}		
		document.getElementById("ul4").innerHTML = txt;
	}
}
threatObject.populateThreats();


/*
		               "Transparent", Strength2 : "Learning new things" };
var weaknessObject = {weakness1 : "Can't sit idle" , weakness2 : "nostalgic"};
var x;

for(x in strengthObject){

	txt += "<li>"+strengthObject[x]+" </li>";

}
document.getElementById("ul1").innerHTML = txt;

txt = "";
for(x in weaknessObject){
	txt += "<li>"+ weaknessObject[x]+" </li>";

}
   document.getElementById("ul2").innerHTML = txt;
 */
