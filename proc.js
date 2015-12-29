fs = require('fs')
var formattor = require("formattor")
var jsdom = require("jsdom")
var document = jsdom.jsdom("<!doctype html>< html><body></body></html>")
var window = document.parentWindow



var $ = require('jquery')(window);
$.fn.outerHTML = function(s) {
    return (s)
        ? this.before(s).remove()
          : jQuery("<p>").append(this.eq(0).clone()).html();
          }

var text = '<html><analysis_result analysis="peptideprophet">' +
          '<peptideprophet_result probability="0" PEP="0">' +
          '</analysis_result></html>';
var anal = $(text)

var data = fs.readFileSync("UF_DIA_Good_Q1.pepXML", "utf8")
var dom  = $("<div>" + data + "</div>");
var results = dom.find("search_score[name='PeptideShaker PSM confidence']")
results.each(function(id, res) {
  var v = +$(res).attr("value") / 100.0;
  var a2 = $(text);
  a2.find("peptideprophet_result").attr("probability", v.toFixed(2)).attr("PEP", v.toFixed(2));
  $(res).parent().append(a2);

});

fs.writeFileSync("output.xml", formattor(dom.html(), {method:"xml"}));
