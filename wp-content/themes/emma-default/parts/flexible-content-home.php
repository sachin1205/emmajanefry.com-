<?php the_field('home_aside_cta'); ?>
<?php if( have_rows('home_intro') ): echo '<div id="fullpage">';
    while ( have_rows('home_intro') ) : the_row(); ?>
         <?php if( get_row_layout() == 'home_intro_section' ): echo '<div class="section" id="section0"><div class="inner-wrap">'?>
     <section class="typography-module" style="background-image:url(<?php the_sub_field('intro_background'); ?>);">
     	<h1 class="tm-header"><?php the_sub_field('intro_heading'); ?></h1>
     	<div class="featured-on-section"><span>Featured on</span>
     	<?php	
       $rows = get_sub_field('intro_logo');
     	if ($rows){
            foreach($rows as $row){
              echo '<a href="'.($row['logo_link_url']).'"><img src="'.$row['logo_image'].'" alt="'.$row['logo_title'].'"></a>';
            }
          }
          ?>
          </div></section></div></div>
     <?php endif; ?>
      <?php if( get_row_layout() == 'health_wellness' ): echo '<div class="section" id="section1">'?>
<section class="health-module" style="background-image:url(<?php the_sub_field('section_background_top'); ?>), url(<?php the_sub_field('section_background_bottom'); ?>);">
        <div class="inner-wrap"><div class="hm-top">';
		<h1 class="hm-header"><?php the_sub_field('section_heading'); ?></h1>
		<p><?php the_sub_field('section_sub_heading'); ?></p></div>
	  <div class="hm-bottom"><p><?php the_sub_field('section_content'); ?></p>
	  	<?php the_sub_field('section_cta'); ?>
	  </div></div></section></div>
<?php endif; ?>

 <?php if( get_row_layout() == 'travel_adventure' ): echo '<div class="section" id="section2">'?>
<section class="travel-module" style="background-image:url(<?php the_sub_field('section_background_image'); ?>);">
        <div class="inner-wrap">';
		<h1 class="tam-header"><?php the_sub_field('section_heading'); ?></h1>
		<p class="tam-subheader"><?php the_sub_field('section_sub_heading'); ?></p>
	  <p class="tam-text"><?php the_sub_field('section_content'); ?></p>
	  	<?php the_sub_field('section_cta'); ?>
	  </div></section></div>
<?php endif; ?>
<?php if( get_row_layout() == 'collective_wisdom' ): echo '<div class="section" id="section3">'?>
<section class="collective-module" style="background-image:url(<?php the_sub_field('section_background_image'); ?>);">
        <div class="inner-wrap">
		<h1 class="cm-header"><?php the_sub_field('section_heading'); ?></h1>
		<p class="cm-subheader"><?php the_sub_field('section_sub_heading'); ?></p>
	  <p class="cm-text"><?php the_sub_field('section_content'); ?></p>
	  	<?php the_sub_field('section_cta'); ?>
	  </div></section></div>
<?php endif; ?>

<?php endwhile; ?>
<?php endif; ?>
</div>
<ul id="menu">
  <li data-menuanchor="Typography" class="active"><a href="#Typography">1</a></li>
  <li data-menuanchor="HealthWellness"><a href="#HealthWellness">Scroll to Explore</a></li>
  <li data-menuanchor="TravelAdventure"><a href="#TravelAdventure">Travel & Adventure</a></li>
  <li data-menuanchor="CollectiveWisdom"><a href="#CollectiveWisdom">Collective Wisdom</a></li>
  </ul>