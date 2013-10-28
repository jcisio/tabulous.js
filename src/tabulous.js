(function ($) {

  var init = function (element) {
    var me = $(element).addClass('tabulous-js');
    var links = me.find('>ul');
    var tabs = me.find('>div').addClass('transition');
    links.find('li:first-child').find('a').addClass('active');
    links.find('li:last-child').after('<span style="clear:both;display:block"/>');
    tabs.find('>div').addClass('make_transist');
    show(links, tabs, 1);
    links.on('click', 'a', function () {
      var n = links.find('a').index(this) + 1;
      show(links, tabs, n);
    });
  };

  var show = function (links, tabs, n) {
    links.find('li:not(:nth-child(' + n + ')) a').removeClass('active');
    links.find('li:nth-child(' + n + ') a').addClass('active');
    tabs.find('>div:not(:nth-child(' + n + '))').removeClass('showleft').addClass('hideleft');
    tabs.find('>div:nth-child(' + n + ')').removeClass('hideleft').addClass('showleft');
    tabs.css('height', tabs.find('>div:nth-child(' + n + ')').height() + 'px');
  };

  $.fn.tabulous = function () {
    return this.each(function () {
      init(this);
    });
  };

})(jQuery);
