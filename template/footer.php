<script>            
	jQuery(document).ready(function() {
		var offset = 220;
		var duration = 500;
		jQuery(window).scroll(function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.crunchify-top').fadeIn(duration);
			} else {
				jQuery('.crunchify-top').fadeOut(duration);
			}
		});
 
		jQuery('.crunchify-top').click(function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
	});
</script>
<footer>
	<div class="container-fluid">
  		<p id="copy_text">Fabiello theme 2016 - By <a href="http://lfcassaro.com" target="_blank">L.F. Cassaro</a></p>
  		<a href="#" class="crunchify-top">↑</a>
  	</div>
</footer>
</div>
  </body>
  </html>
