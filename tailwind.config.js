/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
   
    extend: {
      screens:{
        kt:'600px',
        md:'800px',
        lg:'1100px',
        xl:'1200px',
      },
    },
    container:{
      center:true
    }
  },
  plugins: [],
}


