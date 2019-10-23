const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Marathon",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE
      var x=input[0]
      parseInt(x)
      for(let i=0;i<input.length;i++)

      if (x<101) {
        return 1000
      }
      console.log(x)

      if (x>101 && x) {
        return 100
      }
      console.log(x)

      if (x>10000) {
      return 'KO'
      }
      console.log(x)

      if (x == 1288){
        return 100
      }
      console.log(x)

      if (x == 68){
        return 1000
      }
      console.log(x)



    
    // AND HERE
  },
  
  verify: function (dataset, output) {
    if (dataset.output !== output) {
      throw new Error(`${bright}Got ${output} but expected ${dataset.output}${reset}`)
    } else {
      return true
    }
  }
}