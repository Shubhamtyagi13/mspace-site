/**
  Main Script that creates EMI Calculator Widget
  Author: https://emicalculator.net/
*/
(function(){function b(){var a=280;768>document.getElementById("ecww-widgetwrapper").offsetWidth&&(a=840);document.getElementById("ecww-widget-iframe").setAttribute("style","position:absolute;top:0;left:0;width:100%;height:100%;");document.getElementById("ecww-widget").setAttribute("style","position:relative;padding-top:0;height:0;overflow:hidden;padding-bottom:"+a+"px;")}window.onload=function(){var a=document.createElement("iframe");a.id="ecww-widget-iframe";a.frameBorder=0;a.scrolling="no";a.width=
"800px";a.height="280px";a.setAttribute("src","https://www.1stprelaunch.com/projects/emi-calculator.html");document.getElementById("ecww-widget").appendChild(a);b()};window.onresize=function(){b()}})();