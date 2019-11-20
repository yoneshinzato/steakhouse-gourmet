$(function() {
    var initialLocaleCode = 'pt-br';
  
    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listMonth'
      },
      locale: initialLocaleCode,
      buttonIcons: false, // show the prev/next text
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      eventLimit: true // allow "more" link when too many events
    });
  
    // build the locale selector's options
    $.each($.fullCalendar.locales, function(localeCode) {
      $('#locale-selector').append(
        $('<option/>')
          .attr('value', localeCode)
          .prop('selected', localeCode == initialLocaleCode)
          .text(localeCode)
      );
    });
  
    // when the selected option changes, dynamically change the calendar option
    $('#locale-selector').on('change', function() {
      if (this.value) {
        $('#calendar').fullCalendar('option', 'locale', this.value);
      }
    });
  });
