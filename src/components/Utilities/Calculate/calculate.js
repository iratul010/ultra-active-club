import "../../Info/Info.js";
let time = 0;
function add(data) {
  let totalTime = (time += data);

  return totalTime;
}
export default add;
