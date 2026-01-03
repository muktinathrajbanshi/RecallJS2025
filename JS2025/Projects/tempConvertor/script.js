const calculateTemp = () => {
    
    const numberTemp = document.getElementById("temp").value;
    // console.log(numberTemp);
    
    const tempSelected = document.getElementById("temp_diff");
    const valueTemp = tempSelected.options[tempSelected.selectedIndex].value;
    // console.log(valueTemp);

    var result;

    if(valueTemp == "cel") {
        result = celToFah(numberTemp);
        document.getElementById("resultContainer").innerHTML = `= ${result} °Celsius`;
    } else {
        result = fehtoCel(numberTemp);
        document.getElementById("resultContainer").innerHTML = `= ${result} °Celsius`;
    }
    

}