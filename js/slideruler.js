


$("#example").slider({

      // the id of the slider element
      id:"",

      // minimum value

      min: 0,
      // maximum value

      max: 10,

      // increment step

      step: 1,

     

      // the number of digits shown after the decimal.
      precision: 0,

      // 'horizontal' or 'vertical'

      orientation:'horizontal',

      // initial value

      value: 5,

      // enable range slider
      range:false,

      // selection placement.
      // 'before', 'after' or 'none'.
      // in case of a range slider, the selection will be placed between the handles
      selection:'before',

      // 'show', 'hide', or 'always'

      tooltip:'show',

      // show two tooltips one for each handler

      tooltip_split:false,

      // lock to ticks

      lock_to_ticks:false,

      // 'round', 'square', 'triangle' or 'custom'

      handle:'round',

      // whether or not the slider should be reversed

      reversed:false,

      // RTL mode

      rtl:'auto',

      // whether or not the slider is initially enabled

      enabled:true,

      // callback

      formatter:function formatter(val) {

        if (Array.isArray(val)) {

          return val[0] +" : " + val[1];

        }else {

          return val;

        }

      },

      // The natural order is used for the arrow keys.

      // Arrow up select the upper slider value for vertical sliders, arrow right the righter slider value for a horizontal slider - no matter if the slider was reversed or not.

      // By default the arrow keys are oriented by arrow up/right to the higher slider value, arrow down/left to the lower slider value.

      natural_arrow_keys:false,

      // Used to define the values of ticks.

      // Tick marks are indicators to denote special values in the range.

      // This option overwrites min and max options.

      ticks: [],

      // Defines the positions of the tick values in percentages.

      // The first value should always be 0, the last value should always be 100 percent.

      ticks_positions: [],

      // Defines the labels below the tick marks. Accepts HTML input.

      ticks_labels: [],

      // Used to define the snap bounds of a tick.

      // Snaps to the tick if value is within these bounds.

      ticks_snap_bounds: 0,

      // Used to allow for a user to hover over a given tick to see it's value.

      ticks_tooltip:false,

      // Position of tooltip, relative to slider.

      // Accepts 'top'/'bottom' for horizontal sliders and 'left'/'right' for vertically orientated sliders.

      // Default positions are 'top' for horizontal and 'right' for vertical slider.

      tooltip_position:null,

      // Set to 'logarithmic' to use a logarithmic scale.

      scale: 'linear',

      // Focus the appropriate slider handle after a value change.

      focus: false,

      // ARIA labels for the slider handle's, Use arrayfor multiple valuesin a range slider.

      labelledby:null,

      // Defines a range array that you want to highlight

      rangeHighlights: []

    });
    