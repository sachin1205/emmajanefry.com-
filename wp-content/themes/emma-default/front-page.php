<?php

	/*
		Template Name: Front Page
	*/
?>
<?php Starkers_Utilities::get_template_parts( array( 'parts/shared/html-header', 'parts/shared/header' ) ); ?>
       
<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

	<!--Site Content-->
	<section class="site-content" role="main">
		<?php Starkers_Utilities::get_template_parts( array( 'parts/flexible-content-home' ) ); ?>
	</section>

<?php endwhile; ?>

<?php Starkers_Utilities::get_template_parts( array( 'parts/shared/html-footer' ) ); ?>