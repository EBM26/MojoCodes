 	$(document).ready(function() {

				$.extend({
					  getUrlVars: function(){
					    var vars = [], hash;
					    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
					    for(var i = 0; i < hashes.length; i++)
					    {
					      hash = hashes[i].split('=');
					      vars.push(hash[0]);
					      vars[hash[0]] = hash[1];
					    }
					    return vars;
					  },
					  getUrlVar: function(name){
					    return $.getUrlVars()[name];
					  }
					});
				
					var byName = $.getUrlVar('c');

					if (byName == 'Iwentz') {
						$('.influImage img').attr("src","https://mojonow.blob.core.windows.net/cmr/t1913/src/8405a960d32443db9fbc7c0cddbc9369_1.png");
						$('.influTitle').html('<p>Get the Dr. Wentz Discount</p>');
						$('.influImage img, .influTitle').show();

					}

					if (byName == 'drz') {
						$('.influImage img').attr("src","https://mojonow.blob.core.windows.net/cmr/t1913/src/de43ae8ef0aa4a88a97f3106da9e7bb0_1.png");
						$('.influTitle').html('<p>Get the Dr. Z Discount</p>');
						$('.influImage img, .influTitle').show();

					}

					if (byName == 'family') {
						$('.influImage img').attr("src","https://mojonow.blob.core.windows.net/cmr/t1913/src/de43ae8ef0aa4a88a97f3106da9e7bb0_1.png");
						$('.influTitle').html('<p>Get the Dr. Z Discount</p>');
						$('.influImage img, .influTitle').show();

					}


					if (byName == 'robbins') {
						$('.influImage img').attr("src","https://mojonow.blob.core.windows.net/cmr/t1913/src/4f19131ffa9141e9b70facc42135e48e_1.png");
						$('.influTitle').html('<p>Get the Ocean Robbins Discount</p>');
						$('.influImage img, .influTitle').show();

					}

					if (byName == 'Sji') {
						$('.influImage img').attr("src","https://mojonow.blob.core.windows.net/cmr/t1913/src/838d5bf8adf8453caf845188bc8b1c8f_1.png");
						$('.influTitle').html('<p>Get the Sayer Ji Discount</p>');
						$('.influImage img, .influTitle').show();

					}

					if (byName == 'HNN') {
						$('.influImage img').attr("src","https://mojonow.blob.core.windows.net/cmr/t1913/src/c56c039f698d4b0e8c1d982ebd2701d6_1.png");
						$('.influTitle').html('<p>Get the Health Nut News Discount</p>');
						$('.influImage img, .influTitle').show();

					}

					if (byName == 'MHymanBrain') {
						$('.influImage img').attr("src","https://mojonow.blob.core.windows.net/cmr/t1913/src/17fd080d6b5042b6b5787e1dae190c11_1.png");
						$('.influTitle').html('<p>Get the Dr. Hyman Discount</p>');
						$('.influImage img, .influTitle').show();

					}

					if (byName == 'MHyman') {
						$('.influImage img').attr("src","https://mojonow.blob.core.windows.net/cmr/t1913/src/17fd080d6b5042b6b5787e1dae190c11_1.png");
						$('.influTitle').html('<p>Get the Dr. Hyman Discount</p>');
						$('.influImage img, .influTitle').show();

					}

					if (byName == 'Speirce') {
						$('.influImage img').attr("src","https://mojonow.blob.core.windows.net/cmr/t1913/src/2bc17941e3ba43008db49cf7a0f12349_1.png");
						$('.influTitle').html('<p>Get the Dr. Peirce Discount</p>');
						$('.influImage img, .influTitle').show();

					}

					if (byName == 'Dwolfe') {
						$('.influImage img').attr("src","https://mojonow.blob.core.windows.net/cmr/t1913/src/8f317cb36aac41bca5779cdfad606db8_1.png");
						$('.influTitle').html('<p>Get the David Wolfe Discount</p>');
						$('.influImage img, .influTitle').show();

					}
					
					if (byName == 'Brocker') {
						$('.influImage img').attr("src","https://mojonow.blob.core.windows.net/cmr/t1463/src/214dda687b124460b3c0565b45cd06a3_1.png");
						$('.influTitle').html('<p>Get the Betty Rocker Discount</p>');
						$('.influImage img, .influTitle').show();

					}

					if (byName == 'HormonesBalance') {
						$('.influImage img').attr("src","https://mojonow.blob.core.windows.net/cmr/t1913/src/e8a87d9275a145d288cfbe7fea455fe0_1.png");
						$('.influTitle').html('<p>Hormones Balance Discount</p>');
						$('.influImage img, .influTitle').show();

					}

					if (byName == 'HashimotoSummit') {
						$('.influImage img').attr("src","https://mojonow.blob.core.windows.net/cmr/t1729/src/698a15019528489080ab487e5d194952_1.png");
						$('.influTitle').html("<p>Hashimoto's Summit Discount</p>");
						$('.influImage img, .influTitle').show();

					}

					if (byName == 'vitalanimal') {
						$('.influImage img').attr("src","https://mojonow.blob.core.windows.net/cmr/t1907/src/13673626dd9d497cad11297ce3cb13e1_1.png");
						$('.influTitle').html("<p>Vital Animal Discount</p>");
						$('.influImage img, .influTitle').show();

					}

					if (byName == 'drshippy') {
						$('.influImage img').attr("src","https://mojonow.blob.core.windows.net/cmr/t1913/src/8af822b596c4410a8a5f128bc3b6547e_1.png");
						$('.influTitle').html("<p>Dr. Shippy Discount</p>");
						$('.influImage img, .influTitle').show();

					}
 				
  				    if (byName == 'estutland') {
						$('.influImage img').attr("src","https://mojonow.blob.core.windows.net/cmr/t1913/src/6b33f1662a5046659086d172d845bb72_1.png");
						$('.influTitle').html("<p>Get the Erin Stutland Discount</p>");
						$('.influImage img, .influTitle').show();

					}
		});