module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      cursive: "cursive",
      fantasy : "fantasy"
    },
    // boxShadow: {
    //   custom: "rgba(0, 0, 0, 0.4) 0px 30px 90px;"
    // },
    extend: {
     
      animation: {
        pingslow: " slow 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        pulsefast: " pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounceHigh: "bounce 1s infinite"
      },
      keyframes: {
        slow:{
          "75%, 100%" : {
            transform: "scale(1)",
            opacity: 0
          },
         
        },
        pulse: {
          "0%,100%": {
            opacity: 1,
            transform: "scale(1.5)"
          },
          "50%": {
            opacity: 0.5,
            
          }
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(-35%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
            
          },
          "50%": {
            transform: "translateY(0)",
            "animation-timing-function ": "cubic-bezier(0, 0, 0.2, 1)",
          }
        }
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar")
  ],
}
