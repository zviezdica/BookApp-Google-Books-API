const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      "2xs": "360px",
      // => @media (min-width: 360px) { ... }
      xs: "450px",
      // => @media (min-width: 576px) { ... }
      sm: "768px",
      // => @media (min-width: 768px) { ... }
      md: "992px",
      // => @media (min-width: 992px) { ... }
      lg: "1300px",
      // => @media (min-width: 1300px) { ... }
      xl: "1536px",
      // => @media (min-width: 1920px) { ... }
      "2xl": "1920px",
      // => @media (min-width: 1536px) { ... }
    },fontSize: {
        8: "8px",
        9: "9px",
        10: "10px",
        12: "12px",
        13: "13px",
        14: "14px",  
        15: "15px",
        16: "16px",
        17: "17px",
        18: "18px",
        19: "19px",
        21: "21px",
        24: "24px",
        25: "25px",
        30: "30px",
        32: "32px",
        35: "35px",
        42: "42px",
        45: "45px",
        '3vw' : '3vw',
        '4vw' : '4vw',
        '5vw' : '5vw',
        '8vw' : '8vw',
        '10vw' : '10vw',
        
    }, minHeight: {
      0: "0px",
      635: "635px",
      '100vh' : '100vh',
      'full': '100%',
      'screen' : '100vh',
    },
    maxHeight: {
      0: "0px",
      150: "150px",
      154: "154px",
      1000: "1000px",
      '70vh' : '70vh',
      '100vh' : '100vh',
      'full': 'full'
      
    },

    
    spacing: {
      0: "0px",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      5: "5px",
      6: "6px",
      7: "7px",
      8: "8px",
      9: "9px",
      10: "10px",
      12: "12px",
      14: "14px",
      15: "15px",
      16: "16px",
      17: "17px",
      18: "18px",
      20: "20px",
      22: "22px",
      23: "23px",
      24: "24px",
      25: "25px",
      26: "26px",
      28: "28px",
      30: "30px",
      32: "32px",
      33: "33px",
      34: "34px",
      35: "35px",
      36: "36px",
      37: "37px",
      38: "38px",
      39: "39px",
      40: "40px",
      42: "42px",
      44: "44px",
      45: "45px",
      46: "46px",
      48: "48px",
      49: "49px",
      50: "50px",
      55: "55px",
      56: "56px",
      58: "58px",
      60: "60px",
      64: "64px",
      65: "65px",
      68: "68px",
      70: "70px",
      72: "72px",
      75: "75px",
      77: "77px",
      78: "78px",
      80: "80px",
      84: "84px",
      85: "85px",
      90: "90px",
      92: "92px",
      93: "93px",
      95: "95px",
      96: "96px",
      100: "100px",
      104: "104px",
      106: "106px",
      110: "110px",
      112: "112px",
      115: "115px",
      120: "120px",
      125: "125px",
      128: "128px",
      130: "130px",
      132: "132px",
      138: "138px",
      140: "140px",
      148: "148px",
      150: "150px",
      160: "160px",
      162: "162px",
      165: "165px",
      170: "170px",
      172: "172px",
      176: "176px",
      180: "180px",
      183: "183px",
      185: "185px",
      190: "190px",
      192: "192px",
      200: "200px",
      210: "210px",
      212: "212px",
      213: "213px",
      218: "218px",
      220: "220px",
      224: "224px",
      230: "230px",
      235: "235px",
      250: "250px",
      256: "256px",
      292: "292px",
      300: "300px",
      302: "302px",
      320: "320px",
      330: "330px",
      350: "350px",
      400: "400px",
      450: "450px",
      480: "480px",
      500: "500px",
      546: "546px",
      600: "600px",
      635: "635px",
      650: "650px",
      688: "688px",
      700: "700px",
      839: "839px",
      1000: "1000px",
      "9/16": "56.25%",
      "1/1": "100%",
      "1/2-screen": "50vw",
      '2/100': '2%',
      '1/20': '5%',
      '1/10': '10%',
      '1/5/5': '18%',
      '1/5': '20%',
      '1/4': '25%',
      // '2/7': '28.55%',
      '1/7': '14%',
      '2/7': '29%',
      '3/10': '30%',
      '6/7': '85%',
      '1/3': '33%',
      '2/5': '40%',
      '12/25': '48%',
      '13/25': '52%',
      '1/2': '50%',
      '55/100': '55%',
      '3/5': '60%',
      '7/10': '70%',
      '4/5': '80%',
      '9/10': '90%',
      '4/3': '133%',
      '3/2': '150%',
      '2/1': '200%',
      '1vw': '1vw',
      '2vw': '2vw',
      '3vw': '3vw',
      '4vw': '4vw',
      '5vw': '5vw',
      '8vw' : '8vw',
      '10vw': '10vw',
      '15vw': '15vw',
      '20vw': '20vw',
      
      '40vh': '40vh',
      '40vh': '40vh',
      '50vh': '50vh',
      '60vh': '60vh',
      '70vh': '70vh',
      '80vh': '80vh',
      '90vh': '90vh',
      '100vh': '100vh',
    },
    colors: {
        "light-grey": "#f2f2f2",
        "pale-grey": "#f7f9fb",
        "greyish": "#e6e6e6",
    //     "pale-opacity": "#f7f9fb99",
        "white": "#ffffff",
        "white-opacity": "#ffffffe6",
        "peacock-blue": "#015697",
        "dark-blue": "#101220",
        "dark-navy-blue": "#000115",
        "transparent-dark-blue" : "#001a66e6",
        "transparent-blue" : "#001a6666",
        "blueish" : "#e3e6fa",
        "dark": "#141f2c",
        "battleship-grey": "#6d7784",
        "lighter-grey":"#b3b3b3",
        "darker-grey":"#595959",
        "cerulean-blue": "#0769e0",
        "darkish-blue": "#004588",
        "faded-blue": "#7399be",
        "faded-blue": "#7399be",
        "greyish-blue": "#254b70",
    //     "faded-blue-opacity": "#7399be0d",
    //     "dark-two": "#293340",
    //     "purple-brown": "#231f20",
        "black": "#000000",
        "transparent-black": "#0000004d",
    //     "dark-peach": "#e86766",
    //     "greenish-teal": "#3dc97d",
    //     "faded-orange": "#e7a650",
    //     "white-two": "#ebebeb"
        "red" : "#C92D0B",
        "silver" : "#dcdcdc",
    },
    boxShadow :{
      bottom: '0 4px 4px -3px #BFBFBF',
      card: '0 0 7px 0 rgba(0,0,0,0.1)',
      hover: '0 0 7px 0 rgba(0,0,0,0.15)',
    },
    borderWidth:{
        '0': '0px',
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',
        '10': '10px',
    },
    extend: {
      spacing: {
        auto: "auto",
      },
      inset: {
        unset: "unset",
      },
      zIndex: {
        "-2": -2,
        "-1": -1,
        1: 1,
        2: 2,
        5: 5,
        9: 9,
      },
      transitionProperty: {
        'height': 'height',
        'display': 'display',
        'width': 'width',
        'spacing': 'margin, padding',
        'max-height':'max-height',
        'bg-color': 'background-color',
        'color': 'color',
        'opacity':'opacity'
      },
      transitionDuration: {
        400: "400ms",
        2000: "2000ms",
      },
      backgroundPosition: {
        'to-center': "center 75%",
        'to-left' : "10px center"
      },
      backgroundSize: {
        '80': "80%",
        '100': "100%",
        '120': "120%",
        '150': "150%",
        '180': "180%",
        '300': "300%",
      },
      maxWidth: {
        '330': "330px",
      },
      letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.5em',
    },
    rotate: {
      "17": "17deg",
      "20": "20deg",
      
      },

    },
  },
  corePlugins: {
    container: false,
  },
  variants:{
    margin: [
      "children",
      "default",
      "children-first",
      "children-last",
      "children-odd",
      "children-even",
      "children-not-first",
      "children-not-last",
      "children-hover",
      "hover",
      "children-focus",
      "focus",
      "children-focus-within",
      "focus-within",
      "children-active",
      "active",
      "children-visited",
      "visited",
      "children-disabled",
      "disabled",
      "responsive",
    ],
    padding: [
      "children",
      "default",
      "children-first",
      "children-last",
      "children-odd",
      "children-even",
      "children-not-first",
      "children-not-last",
      "children-hover",
      "hover",
      "children-focus",
      "focus",
      "children-focus-within",
      "focus-within",
      "children-active",
      "active",
      "children-visited",
      "visited",
      "children-disabled",
      "disabled",
      "responsive",
    ],
    borderWidth: [
      "children",
      "default",
      "children-first",
      "children-last",
      "children-odd",
      "children-even",
      "children-not-first",
      "children-not-last",
      "children-hover",
      "hover",
      "children-focus",
      "focus",
      "children-focus-within",
      "focus-within",
      "children-active",
      "active",
      "children-visited",
      "visited",
      "children-disabled",
      "disabled",
      "responsive",
    ],
    borderColor: [
      "children",
      "default",
      "children-first",
      "children-last",
      "children-odd",
      "children-even",
      "children-not-first",
      "children-not-last",
      "children-hover",
      "hover",
      "children-focus",
      "focus",
      "children-focus-within",
      "focus-within",
      "children-active",
      "active",
      "children-visited",
      "visited",
      "children-disabled",
      "disabled",
      "responsive",
    ],
    backgroundColor: [
      "children",
      "default",
      "children-first",
      "children-last",
      "children-odd",
      "children-even",
      "children-not-first",
      "children-not-last",
      "children-hover",
      "hover",
      "children-focus",
      "focus",
      "children-focus-within",
      "focus-within",
      "children-active",
      "active",
      "children-visited",
      "visited",
      "children-disabled",
      "disabled",
      "responsive",


    ],
    width: [
      "children",
      "default",
      "children-first",
      "children-last",
      "children-odd",
      "children-even",
      "children-not-first",
      "children-not-last",
      "children-hover",
      "hover",
      "children-focus",
      "focus",
      "children-focus-within",
      "focus-within",
      "children-active",
      "active",
      "children-visited",
      "visited",
      "children-disabled",
      "disabled",
      "responsive",
    ],
    borderRadius: ["responsive", "focus"],
  },
  plugins: [
    require('tailwindcss-children'),
    plugin(function ({ addComponents }) {
      const containers = {
        ".container": {
          width: "90%",
          maxWidth: "3000px",
          marginLeft: "auto",
          marginRight: "auto",
        },
        ".container-2": {
          width: "104%",
          maxWidth: "1400px",
          marginLeft: "auto",
          marginRight: "auto",
        },

        ".container--md": {
          maxWidth: "720px",
        },
        ".container--sm": {
          maxWidth: "590px",
        },
        ".container--xs": {
          maxWidth: "400px",
        },
        ".container--2xs": {
          maxWidth: "330px",
        },
      };
      addComponents(containers);
    }),
  ],
}
