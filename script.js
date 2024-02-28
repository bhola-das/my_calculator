const calculatetemp=() =>{
    const numbertemp=document.getElementById('temp').value;
    const tempSelected=document.getElementById('temp_diff');
    const valueTemp=temp_diff.options[tempSelected.selectedIndex].value;

    const celtofeh =(cel) =>{
        let fahrenheit=math.round((cel*9/5)+32);
        return fahrenheit;
    }
    const fehtocel =(feh) =>{
        let celcius=math.round((feh-32)*5/9);
        return celcius;
    }

    let result;
    if(valueTemp=='cel')
    {
        result=celtofah(numbertemp);
        document.getElementById('resultContainer').innerHTML=`= ${result}fahrenheit`;
    }
    else
    {
        result=fehtocel(numbertemp);
        document.getElementById('resultContainer').innerHTML=`= ${result}celcius`;
    }
} 