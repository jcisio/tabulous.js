tabulous.js
===========

An extremely lightweight jQuery tabs module for todays web!

Less than 2.5 KB CSS + JavaScript (1.3 KB gzipped).

### Documentation

This is a fork of Tabulous.js, which is much simpler:

* All options and customized CSS are removed.
* No need to declare tabs, they are automatically built.

#### ..:: Demo
For a demo visit http://git.aaronlumsden.com/tabulous.js/

##### Create the tabs

`````
  <div id="tabs">
    <div class="wrapper">
      <div>
        <h2>Tab 1</h2>
        <!--tab content-->
      </div>
      <div>
        <h2>Tab 2</h2>
        <!--tab content-->
      </div>
      <div>
        <h2>Tab 3</h2>
        <!--tab content-->
      </div>
    </div>
  </div>
`````
##### Initiate the plugin

Once you have created your tabs you will need to initiate the plugin.

At its most basic level you can initiate the plugin like:

`````					
$(document).ready(function ($) {
  $('#tabs').tabulous({
    target: 'h2'
  });
});
`````
