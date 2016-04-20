angular.module('starter.services')


.service('authService',	function ($rootScope, $http)
{
	var service = {
		//Establish connection to SEMA server
		SemaLogin: function($user, $pass)
		{
			console.log("Try auth with user=" + $user + " and pass=" + $pass)

			var request = {};
            request.method = 'GET';
            //request.url = "https://172.16.16.204:8080/SemaServer/public/v2/devices/message";
            request.url = "http://172.16.16.204:8080/SemaServer/public/v1/info";
            request.headers = {'Access-Control-Allow-Origin': '', 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT', 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': '' };

			var dataObj = {

				//javax text: ".faces.partial.ajax=true&javax.faces.source=loginView%3AloginForm%3Aj_idt15&javax.faces.partial.execute=%40all&javax.faces.partial.render=loginView%3AloginForm%3Amsgs&loginView%3AloginForm%3Aj_idt15=loginView%3AloginForm%3Aj_idt15&loginView%3AloginForm=loginView%3AloginForm&loginView%3AloginForm%3Ausername="+$user+"&loginView%3AloginForm%3Apassword="+$pass+"&javax.faces.ViewState=2267611403022817880%3A-1000591452974209503&javax.faces.RenderKitId=PRIMEFACES_MOBILE"
				username : $user,
				password : $pass,
			};

			$http(request)
			//$http.post("https://semadev.schiller.fr:8181/SemaLibertyMobile/index.xhtml", dataObj)
			//$http.get("http://172.16.16.204:8080/SemaServer/public/v1/info")
			.success(function(data, status, headers, config)
			{
				//console.log("Response = " + status)
				$rootScope.$broadcast('event:authSucceed', status);
			})
			.error(function(data, status, headers, config)
			{
				//console.log("Response = " + status)
				$rootScope.$broadcast('event:authFailed', status);
			});
		}
	};

	return service;
})


;

/*.factory('Base64', function () {
  
    var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  
    return {
        encode: function (input) {
            var output = "";
            var chr1, chr2, chr3 = "";
            var enc1, enc2, enc3, enc4 = "";
            var i = 0;
  
            do {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);
  
                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;
  
                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }
  
                output = output +
                    keyStr.charAt(enc1) +
                    keyStr.charAt(enc2) +
                    keyStr.charAt(enc3) +
                    keyStr.charAt(enc4);
                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";
            } while (i < input.length);
  
            return output;
        },
  
        decode: function (input) {
            var output = "";
            var chr1, chr2, chr3 = "";
            var enc1, enc2, enc3, enc4 = "";
            var i = 0;
  
            // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
            var base64test = /[^A-Za-z0-9\+\/\=]/g;
            if (base64test.exec(input)) {
                window.alert("There were invalid base64 characters in the input text.\n" +
                    "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
                    "Expect errors in decoding.");
            }
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
  
            do {
                enc1 = keyStr.indexOf(input.charAt(i++));
                enc2 = keyStr.indexOf(input.charAt(i++));
                enc3 = keyStr.indexOf(input.charAt(i++));
                enc4 = keyStr.indexOf(input.charAt(i++));
  
                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;
  
                output = output + String.fromCharCode(chr1);
  
                if (enc3 != 64) {
                    output = output + String.fromCharCode(chr2);
                }
                if (enc4 != 64) {
                    output = output + String.fromCharCode(chr3);
                }
  
                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";
  
            } while (i < input.length);
  
            return output;
        }
    };
});*/

