// 命名空间 namespace

namespace Utility {
  export function log(msg: string) {
    console.log(msg)
  }
  export function error(msg: string) {
    console.log(msg)
  }
}
Utility.log('Call me')
Utility.error('maybe')

//  JavaScript 命名空间
// var Utility;
// (function(Utility) {
//   function log(msg) {
//     console.log(msg)
//   }
//   Utility.log = log
//   function error(msg) {
//     console.log(msg)
//   }
//   Utility.error = error
// })(Utility || (Utility = {}))
// Utility.log('Call me')
// Utility.error('maybe')
