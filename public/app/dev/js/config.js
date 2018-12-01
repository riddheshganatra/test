var config = {
  videoUrl: 'https://storage.googleapis.com/dynamic-video-hdfc/HDFC-original-Edited-compess.mp4',
  textUrl: 'data.json',
  fbLogin: false,
  rules: [
    {
      id: 'textAnimate1',
      class: 'charlie js-name',
      animations: 'textAnimate1',
      times: '1',
      target: 'name',
    },
    {
      id: 'textAnimate2',
      class: 'charlie js-month',
      animations: 'textAnimate2',
      times: '2',
      target: 'month',
      split: {
        separator: '',
        time: 2
      }
    },
    {
      id: 'textAnimate4'
    },
    {
      class: 'textAnimate4',
      parent: '#textAnimate4'
    },
    {
      class: 'charlie',
      animations: 'textAnimate4Letter, textAnimate4LetterOut',
      times: "7.2, 14",
      text: "MOST",
      parent: '.textAnimate4'
    },
    {
      tag: 'span',
      text: " ",
      class: 'space',
      parent: '.textAnimate4'
    },
    {
      class: 'charlie',
      animations: 'textAnimate4Letter, textAnimate4LetterOut',
      times: "7.3, 14",
      text: "RECENT ",
      parent: '.textAnimate4'
    },
    {
      tag: 'span',
      text: " ",
      class: 'space',
      parent: '.textAnimate4'
    },
    {
      class: 'charlie',
      animations: 'textAnimate4Letter, textAnimate4LetterOut',
      times: "7.4, 14",
      text: "PAYMENT:",
      parent: '.textAnimate4'
    },
    {
      id: 'textAnimate4amount',
      class: 'charlie js-recent_pmt_amt',
      animations: 'textAnimate4__amount',
      times: '11.7',
      text: '₹ ',
      parent: '#textAnimate4'
    },
    {
      tag: 'span',
      text: " ",
      class: 'space',
      parent: '#textAnimate4'
    },
    {
      tag: 'span',
      class: 'number shuffle number1',
      target: 'recent_pmt_amt',
      parent: '#textAnimate4amount',
    },
    {
      id: 'calendar',
      class: 'charlie js-recent_pmt_date',
      animations: 'textAnimate4__calendar',
      times: "9.2",
      parent: '#textAnimate4'
    },
    {
      tag: 'span',
      class: 'calendar__month',
      parent: '#calendar',
      text: 'April'
    },
    {
      class: "calendar__data",
      parent: '#calendar',
    },
    {
      tag: "span",
      class: 'num',
      text: "5",
      parent: '#calendar .calendar__data'
    },
    {
      tag: "span",
      class: 'year',
      text: "2018",
      parent: '#calendar .calendar__data'
    },
    {
      class: 'textAnimate5',
    },
    {
      class: 'd-flex textAnimate5Child',
      parent: '.textAnimate5'
    },
    {
      class: 'charlie',
      animations: 'textAnimate5Letter, textAnimate5LetterOut',
      times: '15, 20.4',
      parent: '.textAnimate5Child',
      text: 'OVERALL'
    },
    {
      tag: 'span',
      parent: '.textAnimate5Child',
      text: ' ',
      class: 'space'
    },
    {
      class: 'charlie',
      animations: 'textAnimate5Letter, textAnimate5LetterOut',
      times: '15.1, 20.4',
      parent: '.textAnimate5Child',
      text: 'BALANCE:'
    },
    {
      class: 'charlie js-overall_balance',
      parent: '.textAnimate5',
      animations: 'textAnimate5__amount',
      times: '16',
      id: 'textAnimate5amount',
      text: "₹ "
    },
    {
      tag: 'span',
      class: 'number shuffle number2',
      parent: '#textAnimate5amount',
      target: 'overall_balance'
    },
    {
      class: 'textAnimate6'
    },
    {
      id: 'textAnimate6',
      animations: 'textAnimate6Letter',
      times: '20.2',
      class: 'charlie',
      parent: '.textAnimate6'
    },
    {
      class: 'charlie',
      animations: 'textAnimate4Letter',
      times: '21.2',
      text: "MINIMUM ",
      parent: '#textAnimate6'
    },
    {
      tag: 'span',
      text: ' ',
      class: 'space',
      parent: '#textAnimate6'
    },
    {
      class: 'charlie',
      animations: 'textAnimate4Letter',
      times: '21.3',
      text: "PAYMENT",
      parent: '#textAnimate6'
    },
    {
      id: 'textAnimate6amount',
      animations: 'textAnimate6__amount',
      times: '21.7',
      class: 'charlie js-min_payment',
      text: "₹ ",
      parent: '.textAnimate6'
    },
    {
      tag: 'span',
      target: 'min_payment',
      class: 'number3 shuffle number',
      parent: '.js-min_payment'
    },
    {
      class: 'charlie js-due_date',
      animations: 'textAnimate6__calendar',
      times: '24.7',
      id: 'calendar2',
      parent: '.textAnimate6'
    },
    {
      tag: 'span',
      class: 'calendar__month',
      parent: '#calendar2',
      target: 'due_month'
    },
    {
      class: "calendar__data",
      parent: '#calendar2',
    },
    {
      tag: "span",
      class: 'num',
      target: 'due_date',
      parent: '#calendar2 .calendar__data'
    },
    {
      tag: "span",
      class: 'year',
      target: 'due_year',
      parent: '#calendar2 .calendar__data'
    },
    {
      class: 'textAnimate7',
    },
    {
      class: 'textAnimate7__block1',
      parent: '.textAnimate7'
    },
    {
      class: 'charlie',
      animations: 'textAnimate7__block1__Letter',
      times: '29.2',
      text: "EARNED POINTS",
      parent: '.textAnimate7__block1'
    },
    {
      class: 'charlie',
      animations: 'textAnimate7__block1__Letter',
      times: '29.2',
      text: " THIS MONTH:",
      parent: '.textAnimate7__block1'
    },
    {
      class: 'charlie js-points_earned_month',
      animations: 'textAnimate7__block1__amount',
      times: '29.3',
      id: 'textAnimate7__amount1',
      parent: '.textAnimate7__block1'
    },
    {
      class: 'number shuffle number4',
      tag: 'span',
      parent: '#textAnimate7__amount1',
      target: 'points_earned_month'
    },
    {
      class: 'textAnimate7__block2',
      parent: '.textAnimate7'
    },
    {
      class: 'charlie',
      animations: 'textAnimate7__block2__Letter',
      times: '33.2',
      text: 'TOTAL POINTS:',
      parent: '.textAnimate7__block2',
    },
    {
      class: 'charlie js-total_points_earned',
      animations: 'textAnimate7__block2__amount',
      times: '33.3',
      id: 'textAnimate7__amount2',
      parent: '.textAnimate7__block2',
    },
    {
      class: 'number shuffle number5',
      tag: 'span',
      parent: '#textAnimate7__amount2',
      target: 'total_points_earned'
    },

  ]
};

var pictor = new Pictor(config);
pictor.init();