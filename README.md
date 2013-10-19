tabulous.js
===========

An extremely lightweight jQuery tabs module for todays web!

Less than 2.5 KB CSS + JavaScript (1.3 KB gzipped).

### Documentation

This is a fork of Tabulous.js, which is much simpler:

* All options and customized CSS are removed.
* Tabs are now based on order. They are no longer required to have IDs.

#### ..:: Demo
For a demo visit http://git.aaronlumsden.com/tabulous.js/

##### Create the tabs

`````
  <div id="tabs">
  	<ul>
			<li><a href="#tabs-1" title="">Tab 1</a></li>
			<li><a href="#tabs-2" title="">Tab 2</a></li>
			<li><a href="#tabs-3" title="">Tab 3</a></li>
		</ul>
		<div>
			<div id="tabs-1">
				<!--tab content-->
			</div>
			<div id="tabs-2">
			  <!--tab content-->
			</div>
			<div id="tabs-3">
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
  $('#tabs').tabulous();
});
`````
