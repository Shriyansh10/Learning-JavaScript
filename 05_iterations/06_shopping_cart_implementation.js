let myBalance = 100000;   // bad practice has to follow encapsulation concept now anyone can access the myBalance variable which is bad

const shoppingCart = [1000, 35343, 232, 535];

const totalPayment = shoppingCart.reduce((acc, currVal) => (acc+currVal) ,0);

function final_payment(){
    if(myBalance > 0 && totalPayment>myBalance){
        const payment = (totalPayment - myBalance);
        myBalance = 0;
        return payment;
    }else if(myBalance>0 && totalPayment<myBalance){
        myBalance =  myBalance - totalPayment;
        return 0;
    }else{
        return totalPayment;
    }
}
const finalPayment = final_payment();

console.log(`Your final payment will be ${finalPayment.toLocaleString()} and your balance is ${myBalance.toLocaleString()}`)

