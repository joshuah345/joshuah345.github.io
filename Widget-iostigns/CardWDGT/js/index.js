$(() => {
  let $clock = $('.clock');
      $hour = $('.hour'),
      $minute = $('.minute'),
      $weekday = $('.weekday'),
      $date = $('.date'),
      $month = $('.month'),
      $year = $('.year'),
      weekdays = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'],
      months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];

  function setDateTime() {
    var now = new Date();
    var hours = now.getHours();
    $hour.text(hours > 12 ? hours - 12 : hours);
    $minute.text(('0' + now.getMinutes()).slice(-2));
    $month.text(months[now.getMonth()]);
    $date.text(('0' + now.getDate()).slice(-2));
    $weekday.text(weekdays[now.getDay()]);
    $year.text(now.getFullYear());
    $clock
      .removeClass('dawn')
      .removeClass('day')
      .removeClass('sunset')
      .removeClass('night');
    if (hours < 6) {
      $clock.addClass('dawn');
    } else if (hours < 17) {
      $clock.addClass('day');
    } else if (hours == 17) {
      $clock.addClass('sunset');
    } else {
      $clock.addClass('night');
    }
    
    setTimeout(setDateTime, (60 - now.getSeconds()) * 1000);
  }
  
  setDateTime();
});