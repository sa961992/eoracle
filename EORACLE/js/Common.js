//Global Attributes
var activeTabStyle = "background-color: #c02;border-bottom: 1.5px solid #ff1a25;";
var deactivateTabStyle = "background-color:black;1.5px solid #ff1a25;";
var currTab = "";
var slideIndex = 0;




function loadTab(obj,masterTab){
	hideLayouts();
	if(currTab == ""){
		var homeTab = document.getElementById("homeNav");
		homeTab.setAttribute("style", deactivateTabStyle);
		currTab = obj;
	}else{
		currTab.setAttribute("style", deactivateTabStyle);
		currTab = obj;
	}
	
	
	obj.setAttribute("style", activeTabStyle);
	document.getElementById(masterTab).style.display="block";
}



function hideLayouts(){
	document.getElementById("homeMasterDiv").style.display="none";
	document.getElementById("monitorMasterDiv").style.display="none";
	document.getElementById("systemMasterDiv").style.display="none";
	document.getElementById("commsMasterDiv").style.display="none";
	document.getElementById("userMasterDiv").style.display="none";
	document.getElementById("serviceMasterDiv").style.display="none";
	document.getElementById("factoryMasterDiv").style.display="none";
	
}


function editUserData(obj){
	//obj.parentElement.parentElement.cells[1].firstElementChild.style.backgroundColor="#ffffbd";
	obj.parentElement.parentElement.cells[1].firstElementChild.style.border="0.5px solid #d3d3d3";
	obj.parentElement.parentElement.cells[1].firstElementChild.contentEditable="true";
	obj.parentElement.parentElement.cells[2].firstElementChild.classList.remove("disable");
	obj.parentElement.parentElement.cells[2].firstElementChild.setAttribute("onmousedown","")
}

function preventNewLine(e){
    if (window.event.keyCode != 13 ) return false;
	window.event.preventDefault();
	e.innerText = e.innerText.trim();
	
}

function addNewUser(){
	  var xTable=document.getElementById('userListTab');
	  var sno = document.getElementById('userListTab').rows.length + 1;
      var tr=document.createElement('tr');
      tr.innerHTML ='<td class="snoUserInnertd">'+sno+'</td><td class="usernameUserInnertd"><div class="userNameDiv" onkeydown="preventNewLine(this)" contenteditable="true" style="border: 0.5px solid rgb(211, 211, 211);"></div></td><td class="roleUserInnertd"><select class="med_dropdown" onmousedown=""><option>Read</option><option>Read/Write</option><option>Admin</option></select></td><td class="editbutUserInnertd"></td>'
      xTable.appendChild(tr);
}

function loginPS(){
	showInfoBox("Logged in Successfully !!");
	document.getElementById("logoutdiv").style.display="";
	document.getElementsByClassName("centeredMainLayoutTabsOuter")[0].style.display="";
	document.getElementsByClassName("centeredMainLayout")[0].style.display="";
	document.getElementsByClassName("centeredLoginMainLayout")[0].style.display="none";
}

function showInfoBox(info){
	document.getElementById("infoboxtxt").innerText=info;
	document.getElementById("infoBox").style.display="block";
	document.getElementById("infoBox").style.opacity="0.7";
	setTimeout(function(){document.getElementById("infoBox").style.opacity="0.3";setTimeout(function(){document.getElementById("infoBox").style.display="none";},3000);},3000);
	
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}