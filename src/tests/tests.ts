import FirstBackTask from "../first-back-task";
import SecondBackTask from "../second-back-task";
import ThirdBackTask from "../third-back-task";

const testFirst = new FirstBackTask()
const testSecond = new SecondBackTask()
const testThird = new ThirdBackTask()


const result1 = testFirst.getResult(["start", "connect", "message", "end", "start", "connect", "message", "end"])
if (result1 == 2) {
    console.log('Test 1 successfully finished');
}

const result2 = testSecond.getResult(5, 123456789)
if (result2 == 5) {
    console.log('Test 2 successfully finished'); 
}

const result3 = testThird.getResult("4{93}")
if (result3 == '93939393') {
    console.log('Test 3 successfully finished');
}