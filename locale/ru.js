import 'moment/locale/ru';
import * as FullCalendar from 'fullcalendar';


/* Russian (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Andrew Stromnov (stromnov@gmail.com). */
FullCalendar.datepickerLocale('ru', 'ru', {
	closeText: "Закрыть",
	prevText: "&#x3C;Пред",
	nextText: "След&#x3E;",
	currentText: "Сегодня",
	monthNames: [ "Январь","Февраль","Март","Апрель","Май","Июнь",
	"Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
	monthNamesShort: [ "Янв","Фев","Мар","Апр","Май","Июн",
	"Июл","Авг","Сен","Окт","Ноя","Дек" ],
	dayNames: [ "воскресенье","понедельник","вторник","среда","четверг","пятница","суббота" ],
	dayNamesShort: [ "вск","пнд","втр","срд","чтв","птн","сбт" ],
	dayNamesMin: [ "Вс","Пн","Вт","Ср","Чт","Пт","Сб" ],
	weekHeader: "Нед",
	dateFormat: "dd.mm.yy",
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: "" });


FullCalendar.locale("ru", {
	buttonText: {
		month: "Месяц",
		week: "Неделя",
		day: "День",
		list: "Повестка дня"
	},
	allDayText: "Весь день",
	eventLimitText: function(n) {
		return "+ ещё " + n;
	},
	noEventsMessage: "Нет событий для отображения"
});
