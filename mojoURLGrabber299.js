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

					if (byName == 'Justingredients') {
						$('.influImage img').hide();
						$('.influTitle').html('<p>Get the Just Ingredients Discount</p>');

					}

					if (byName == 'arena'){
						$('.influImage img').hide();
						$('.influTitle').html("<p>TODAY'S SPECIAL DISCOUNT</p><br><p style='color: #000000;'>$150 Off</p><br>");

					}

					if (byName == 'plateful'){
						$('.influImage img').hide();
						$('.influTitle').html("<p>TODAY'S SPECIAL DISCOUNT</p><br><p style='color: #000000;'>$150 Off</p><br>");

					}

					if (byName == 'empowered'){
						$('.influImage img').hide();
						$('.influTitle').html("<p>TODAY'S SPECIAL DISCOUNT</p><br><p style='color: #000000;'>$150 Off</p><br>");

					}

					if (byName == 'caltonnutrition'){
						$('.influImage img').attr("src","https://mojonow.blob.core.windows.net/cmr/t1917/src/a595934c0aa7411490422611ef9f3ab5_1.png");
						$('.influImage img').show();
						$('.influTitle').html('<p>Get the Calton Nutrition Discount</p>');

					}

					if (byName == 'Mlugavere2') {
						$('.influImage img').attr("src","https://mojonow.blob.core.windows.net/cmr/t1380/opt/cbce3263b8cd4b009d52f854f748de19_1.png");
						$('.influImage img').show();
						$('.influTitle').html('<p>Get the Max Lugavere Discount</p>');

					}

					if (byName == 'kitchenshift') {
						$('.influImage img').show();
						$('.influTitle').html('<p>Get the Kitchen Shift Series Discount</p>');

					}

					if (byName == 'nutritionstripped299') {
						$('.influImage img').hide();
						$('.influTitle').html("<p>TODAY'S SPECIAL DISCOUNT</p><br><p style='color: #000000;'>$150 Off</p><br>");

					}

					if (byName == 'erinwolfe') {
						$('.influImage img').attr("src","https://mojonow.blob.core.windows.net/cmr/t1917/src/9d55908ea0e744ef87ec24a0007ccd33_1.png");
						$('.influImage img').show();
						$('.influTitle').html('<p>Get the Podcast Discount</p>');

					}

				    if (byName == 'pedramshojai5') {
						$('.influImage img').attr("src","https://mojonow.blob.core.windows.net/cmr/t1913/src/e7660d4e63274fafa46309a559173396_1.png");
						$('.influTitle').html("<p>Get the Pedram Shojai Discount</p>");
						$('.influImage img, .influTitle').show();

					}

					if (byName == 'pedramshojai4') {
						$('.influImage img').attr("src","https://mojonow.blob.core.windows.net/cmr/t1913/src/e7660d4e63274fafa46309a559173396_1.png");
						$('.influTitle').html("<p>Get the Pedram Shojai Discount</p>");
						$('.influImage img, .influTitle').show();

					}

					if (byName == 'pedramshojai3') {
						$('.influImage img').attr("src","https://mojonow.blob.core.windows.net/cmr/t1913/src/e7660d4e63274fafa46309a559173396_1.png");
						$('.influTitle').html("<p>Get the Pedram Shojai Discount</p>");
						$('.influImage img, .influTitle').show();

					}

					
				   if (byName == 'pedramshojai2') {
						$('.influImage img').attr("src","https://mojonow.blob.core.windows.net/cmr/t1913/src/e7660d4e63274fafa46309a559173396_1.png");
						$('.influTitle').html("<p>Get the Pedram Shojai Discount</p>");
						$('.influImage img, .influTitle').show();

					}

					if (byName == 'pedramshojai') {
						$('.influImage img').attr("src","https://mojonow.blob.core.windows.net/cmr/t1913/src/e7660d4e63274fafa46309a559173396_1.png");
						$('.influTitle').html("<p>Get the Pedram Shojai Discount</p>");
						$('.influImage img, .influTitle').show();

					}

					if (byName == 'sayerji') {
						$('.influImage img').attr("src","https://mojonow.blob.core.windows.net/cmr/t1913/src/838d5bf8adf8453caf845188bc8b1c8f_1.png");
						$('.influTitle').html('<p>Get the Sayer Ji Discount</p>');
						$('.influImage img, .influTitle').show();

					}
					
 			});