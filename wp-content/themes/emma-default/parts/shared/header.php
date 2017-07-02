<div class="site-wrap">
    <!--Site Header-->
    <div class="site-header-wrap">
      <header class="site-header" role="banner">
        <div class="sh-sticky-wrap">
        <div class="inner-wrap clearfix">
          <a href="<?php bloginfo('url'); ?>" class="site-logo">Emma Jane Fry</a>
          <!--Site Nav-->
           <nav class="site-nav-menu"><a href="http://localhost/wordpress/about/" class="about-link">About</a><a href="javascript:void(0);" class="menu-link">Menu</a></nav>
          <div class="site-nav-container">
            <div class="snc-header">
              <a href="#" class="close-menu menu-link">Close</a>
            </div>  
      <?php wp_nav_menu(array(
      'menu'            => 'Primary Nav',
      'container'       => 'nav',
      'container_class' => 'site-nav',
      'menu_class'      => 'sn-level-1',
      'walker'        => new themeslug_walker_nav_menu
      )); ?>
    </div><!-- site-nav-container END-->
    <?php wp_nav_menu(array(
      'menu'            => 'Top Nav',
      'container'       => 'nav',
      'container_class' => 'site-nav-primary',
      'menu_class'      => '',
      'walker'        => new themeslug_walker_nav_menu
      )); ?>
              </div><!--inner-wrap END-->
        </div>
      </header>

</div><!-- site-header-wrap END -->