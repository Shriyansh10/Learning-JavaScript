document.querySelector("#input_form").addEventListener("click", (e) => {
    if(e.target.id === "button_submit"){
        e.preventDefault();
        const height = document.querySelector("input#height").value;
        const weight = document.querySelector("input#weight").value;
        const result = document.createElement("div");
        const bmi_index = weight*10000/(height*height);
        
        if(bmi_index < 18.6){
            result.innerText = `Your BMI is ${bmi_index.toFixed(1)} and you are under weight`;
        }else if(bmi_index>=18.6 && bmi_index<24.9){
            result.innerText = `Your BMI is ${bmi_index.toFixed(1)} and you have normal weight`;
        }else{
            result.innerText = `Your BMI is ${bmi_index.toFixed(1)} and you are over weight`;
        }

        const first_Child = document.querySelector(".result");
        if(first_Child.firstChild) first_Child.firstChild.remove();
        
        document.querySelector(".result").appendChild(result);
    }
})

