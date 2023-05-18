module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            animation:{
                none: 'none',
                spin: 'spin 1s linear infinite',
                ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
                pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                bounce: 'bounce 1s infinite',
                wiggle: 'wiggle 1s infinite',


            },
           
            keyframes:{
                spin:{
                    to:{transform: 'rotate(360deg)'}

                },
                ping:{
                    '75%, 100%':{transform: 'scale(2.5)', opacity: '0'},
                },
                pulse:{
                    '50%':{opacity: '0.5'},
                },
                bounce:{
                    '0%, 100%':{transform: 'translateY(-25%)',
                    animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
                },
                '50%':{transform: 'none',
                animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
            }

            },
            wiggle:{
                '0%, 100%':{transform: 'scale(1.2), rotate(360deg)'
                
            },
            '50%':{transform: 'scale(1.2), rotate(360deg)'
        } 
        }

        },
            colors: {
                "regal-blue": "#73C6CA",
                "regal-cyan": "#036792",
                "regal-cyan-blue": "#C5F7FA",
                "regal-cyan-teal": "#26A9AF",
                "regal-paste": "#CEF0FF",
                "regal-teal": "#005072",
                "regal-white": "#F2FBFC",
                "regal-bg": "#ECFBFC",
                "regal-light": "#7FBED7",
                "regal-green": "#A6D2E3",
                "regal-light-blue": "#E5F2F7",
                "regal-red": "#FE646F",
                "regal-success": "#3EBB52",
                "regal-examined": "#BDD2CB",
                "regal-scheduled": "#2BD799",
                "regal-cancelled": "#FF796F",
                "regal-gray": "#E9F0F0",
                "regal-lightblue": "#407BFF",
                "regal-teethblue": "#46CDD3",
                "regal-light-green": "#7BF2FF",
                "regal-delay": "#F3CA8D",
                "regal-gradientButton1": "#58AFBC",
                "regal-gradientButton2": "#13759A",
                "regal-ash": "#C9DBDE",
                "regal-footer": "#E7EEEF",
                "regal-presGreen": "#47B2B7",
                "regal-treatGreen": "#2E8E93",
                "regal-xrayGreen": "#206C70",
                "regal-visGreen": "#174D50",
                "regal-black": "#292929",
                "regal-dark-red": "#AE3939",
                "regal-light-red": "#FFDFE1",
                "regal-light-green": "#E3FFDF",
                "regal-dark-green": "#0F7D56",
                "regal-brown": "#805C27",
                "regal-yellow-ochre": "#CAA273",
                "regal-skin": "#FFE3BA",
                "regal-sta-green": "#0F7D56",
                "regal-light-pink": "#FFA5AB",

                "regal-lightred": "#FFA5AB",
                "regal-ruby": "#A73E45",
                "regal-light-cyan": "#F4FAF8",
                "regal-blackgray": "#384449",
                "regal-lightishblue": "#20CDD6",
                "regal-grayish": "#5B6D67",
                "regal-gb3": "#85E2E7",
                "regal-gb4": "#75C3C7",
                "regal-bluishlight": "#F2FBFC",
                "regal-lightishgreen": "#D3EDCF",
                "regal-deepgreen": "#116824",
                "regal-lightishred": "#FFCDD1",
                "regal-deepred": "#AE3939",
                "regal-yellow": "#FFE3BA",
                "regal-brown": "#805C27",
                "regal-lightgreen": "#C7EFB9",
                "regal-deepishgreen": "#0F7D56",
                "regal-darkishgreen": "#08696D",
            },
            height: {
                sm: "8px",
                md: "16px",
                lg: "24px",
                xl: "48px",
                yxl: "500px",
                yyxl:"680px",
                zxl: "770px",
                xxl: "800px",
                xxxl: "900px",
            },
            borderRadius: {
                "4xl": "2.5rem",
            },
        },
    },
    variants: {
        backgroundColor: ["checked", "focus", "group-hover", "first", "last", "odd", "even" ,"hover"],
        margin: ['responsive', 'hover', 'first'],
        borderWidth: ['responsive', 'hover', 'first'],
        borderColor: ['responsive', 'hover', 'first', 'focus', 'focus-within'],
        borderRadius: ['first', 'last' ,'hover'],
       
        // textColor: ["responsive", "hover", "focus", "group-hover"],
        // textDecoration: ["responsive", "hover", "focus", "group-hover"],
        // boxShadow: ["responsive", "hover", "focus", "group-hover"],
        // opacity: ["responsive", "hover", "focus", "group-hover"],
        // backgroundPosition: ["responsive", "hover", "focus", "group-hover"],
        // backgroundSize: ["responsive", "hover", "focus", "group-hover"],
        // backgroundRepeat: ["responsive", "hover", "focus", "group-hover"],
        // backgroundAttachment: ["responsive", "hover", "focus", "group-hover"],
        // backgroundImage: ["responsive", "hover", "focus", "group-hover"],
        // backgroundOpacity: ["responsive", "hover", "focus", "group-hover"],
        // background: ["responsive", "hover", "focus", "group-hover"],
        border: ["first", "last"],
        extend: {},
    },

    plugins: [],
};