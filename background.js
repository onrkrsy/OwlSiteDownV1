
if (!localStorage.isInitialized) {
  localStorage.isActivated = true;   // The display activation.
  localStorage.frequency = 1;        // The display frequency, in minutes.
  localStorage.urls = "http://google.com"; // The option initialization.
  localStorage.isInitialized = true; // The option initialization.
  
}
basla(); 

function basla() { 
console.log("basla");
	sure =	localStorage.frequency;
	setInterval(function(){ 
			 if (JSON.parse(localStorage.isActivated)) 
			 { console.clear();
				 var strs = localStorage.urls.split(",");
				 iter = 0;
				 strs.forEach(function(str) {
					 iter++;
					 checkHttpStatus(str,iter);
				});
				//checkHttpStatus("http://pasper2.mu.edu.tr");
			 } 
		 }, (sure*60*1000)); 
}

function createNotification(msg,id){	
	console.log("createNotification");	
    var opt = {type: "basic",title: "OWL Site Down",message: msg,iconUrl: "owl.png"}
    chrome.notifications.create("notificationName"+id,opt,function(){});
    //include this line if you want to clear the notification after 5 seconds
    setTimeout(function(){chrome.notifications.clear("notificationName"+id,function(){});},7000);	 
		 
}
function checkHttpStatus(url,id) { 
	$.ajax({
        type: "GET",
        data: {},
        url: url,
		timeout: 10000,
        error: function(xhr, response, errorThrown) { 
			 var ht = xhr.status  +" " + xhr.statusText; 
			 HataOldu(url +" "+ht,id);
        }, 
		success: function(adata, response, xhr) {
              
        }
		
    });
	 
}
function HataOldu(msg,id){ 
createNotification("Siteye Ulaşılamıyor  --  "+msg,id);
}
function Basarili(msg){ 
//createNotification("Sorun yok  --  Status Kod "+msg);
}