class SecondBackTask {

    getResult(a:number, b: number): number {
        let result = 1;

        const lastDigitOfA = a % 10;
      
        for (let i = 0; i < b; i++) {
          result = (result * lastDigitOfA) % 10;
        }
      
        return result;
    }
}


export default SecondBackTask