import { ErrorMessages } from './errorMessages';
// this is not the way I want this to stay but nested classes seemed to blown up once its compiled.
const NAME = 'tempus-dominus',
  version = '6.0.0-alpha1',
  dataKey = 'td';

/**
 * Events
 */
class Events {
  key = `.${dataKey}`;

  /**
   * Change event. Fired when the user selects a date.
   * See also EventTypes.ChangeEvent
   */
  change = `change${this.key}`;

  /**
   * Emit when the view changes for example from month view to the year view.
   * See also EventTypes.ViewUpdateEvent
   */
  update = `update${this.key}`;

  /**
   * Emits when a selected date or value from the input field fails to meet the provided validation rules.
   * See also EventTypes.FailEvent
   */
  error = `error${this.key}`;

  /**
   * Show event
   * @event Events#show
   */
  show = `show${this.key}`;

  /**
   * Hide event
   * @event Events#hide
   */
  hide = `hide${this.key}`;

  // blur and focus are used in the jQuery provider but are otherwise unused.
  // keyup/down will be used later for keybinding options

  blur = `blur${this.key}`;
  focus = `focus${this.key}`;
  keyup = `keyup${this.key}`;
  keydown = `keydown${this.key}`;
}

class Css {

  /**
   * The outer element for the widget.
   */
  widget = `${NAME}-widget`;

  /**
   * element for the action to change the calendar view. E.g. month -> year.
   */
  switch = 'picker-switch';

  /**
   * Applied to the widget element when the side by side option is in use.
   */
  sideBySide = 'timepicker-sbs';

  /**
   * element for the action to change the calendar view, e.g. August -> July
   */

  previous = 'previous';

  /**
   * element for the action to change the calendar view, e.g. August -> September
   */
  next = 'next';

  /**
   * Applied to any action that would violate any restriction options. ALso applied
   * to an input field if the disabled function is called.
   */
  disabled = 'disabled';

  /**
   * Applied to any date that is less than requested view,
   * e.g. the last day of the previous month.
   */
  old = 'old';

  /**
   * Applied to any date that is greater than of requested view,
   * e.g. the last day of the previous month.
   */
  new = 'new';

  /**
   * Applied to any date that is currently selected.
   */
  active = 'active';

  //#region date element

  /**
   * The outer most element for the calendar view.
   */
  dateContainer = 'date-container';

  /**
   * The outer most element for the decades view.
   */
  decadesContainer = `${this.dateContainer}-decades`;

  /**
   * Applied to elements within the decades container, e.g. 2020, 2030
   */
  decade = 'decade';

  /**
   * The outer most element for the years view.
   */
  yearsContainer = `${this.dateContainer}-years`;

  /**
   * Applied to elements within the years container, e.g. 2021, 2021
   */
  year = 'year';

  /**
   * The outer most element for the
   */
  monthsContainer = `${this.dateContainer}-months`;

  /**
   *
   */
  month = 'month';

  /**
   * The outer most element for the
   */
  daysContainer = `${this.dateContainer}-days`;

  /**
   *
   */
  day = 'day';

  /**
   *
   */
  calendarWeeks = 'cw';

  /**
   *
   */
  dayOfTheWeek = 'dow';

  /**
   *
   */
  today = 'today';

  /**
   *
   */
  weekend = 'weekend';
  //#endregion

  //#region time element

  /**
   * The outer most element for the
   */
  timeContainer = 'time-container';

  /**
   *
   */
  separator = 'separator';

  /**
   * The outer most element for the
   */
  clockContainer = `${this.timeContainer}-clock`;

  /**
   * The outer most element for the
   */
  hourContainer = `${this.timeContainer}-hour`;

  /**
   * The outer most element for the
   */
  minuteContainer = `${this.timeContainer}-minute`;

  /**
   * The outer most element for the
   */
  secondContainer = `${this.timeContainer}-second`;

  /**
   *
   */
  hour = 'hour';

  /**
   *
   */
  minute = 'minute';

  /**
   *
   */
  second = 'second';

  //#endregion

  //#region collapse

  /**
   *
   */
  show = 'show';

  /**
   *
   */
  collapsing = 'td-collapsing';

  /**
   *
   */
  collapse = 'td-collapse';

  //#endregion

  /**
   *
   */
  inline = 'inline';
}

export default class Namespace {
  static NAME = NAME;
  // noinspection JSUnusedGlobalSymbols
  static version = version;
  static dataKey = dataKey;

  static Events = new Events();

  static Css = new Css();

  static ErrorMessages = new ErrorMessages();
}
