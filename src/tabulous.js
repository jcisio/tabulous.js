(function ($) {

  var init = function (element, options) {
    options = options || {};
    options = $.extend({
      target: '.title'
    }, options);

    var me = $(element).addClass('tabulous-js');
    var tabs = $('<ul/>').addClass('tabulous-tabs').prependTo(me);
    var content = me.find('>div').addClass('tabulous-content transition');

    content.find(options.target).each(function() {
      $('<li>').html($(this).html()).appendTo(tabs);
      $(this).remove();
    });
    tabs.find('li:first-child').find('a').addClass('active');
    tabs.find('li:last-child').after('<span style="clear:both;display:block"/>');
    content.find('>div').addClass('make_transist');
    show(tabs, content, 1);
    tabs.on('click', 'li', function () {
      var n = tabs.find('li').index(this) + 1;
      show(tabs, content, n);
    });
  };

  var show = function (links, tabs, n) {
    links.find('li:not(:nth-child(' + n + '))').removeClass('active');
    links.find('li:nth-child(' + n + ')').addClass('active');
    tabs.find('>div:not(:nth-child(' + n + '))').removeClass('showleft').addClass('hideleft');
    tabs.find('>div:nth-child(' + n + ')').removeClass('hideleft').addClass('showleft');
    tabs.css('height', tabs.find('>div:nth-child(' + n + ')').height() + 'px');
  };

  $.fn.tabulous = function (options) {
    this.each(function () {
      init(this, options);
    });
  };

})(jQuery);
