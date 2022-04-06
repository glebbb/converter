window.onload = function(){

    let values = {

        metersF: {

            'meters': '1',
            'centimeters': '100',
            'millimeters': '1000',
            'inches': '39.37',
            'foots': '3.28',
            'kilometers': '0.001',
            'yards': '1.09',
    
        },

        centimetersF: {

            'meters': '0.01',
            'centimeters': '1',
            'millimeters': '10',
            'inches': '0.39',
            'foots': '0.032',
            'kilometers': '0.00001',
            'yards': '0.0109',
    
        },

        millimetersF: {

            'meters': '0.001',
            'centimeters': '0.1',
            'millimeters': '1',
            'inches': '0.039',
            'foots': '0.0032',
            'kilometers': '0.000001',
            'yards': '0.00109',
    
        },

        inchesF: {

            'meters': '0.0254',
            'centimeters': '2.54',
            'millimeters': '25.4',
            'inches': '1',
            'foots': '0.083',
            'kilometers': '0.0000254',
            'yards': '0.027',
  
        },
        
        footsF: {

            'meters': '0.304',
            'centimeters': '30.48',
            'millimeters': '304.8',
            'inches': '12',
            'foots': '1',
            'kilometers': '0.000304',
            'yards': '0.333',

        },

        kilometersF: {

            'meters': '1000',
            'centimeters': '100000',
            'millimeters': '1000000',
            'inches': '39370',
            'foots': '3280.83',
            'kilometers': '1',
            'yards': '1093.61',
    
        },

        yardsF: {

            'meters': '0.9144',
            'centimeters': '91.44',
            'millimeters': '914.4',
            'inches': '36',
            'foots': '3',
            'kilometers': '0.000914',
            'yards': '1',
    
        },


        
    }

    let val = document.getElementById('val'); // получает данные с инпута
    let currency1 = document.getElementById('sel1');// получает первый элемент селектора
    let currency2 = document.getElementById('sel2');// получает второй элемент селектора
    let result = document.getElementsByClassName('convert-result')[0];// получает поле в котором будет результат
    let nameOf = document.getElementsByClassName('final-value')[0];//пишет название единицы измерения

    
    function summ(){

        if (currency1.value === currency2.value){

            result.innerText = val.value;

        } else{
            
            if (currency1.value === 'meters'){
                
                result.innerHTML = (val.value * values.metersF[currency2.value]).toFixed(4); // округляем до 4 чисел после запятой, дабы сделать число красивше

            } else if(currency1.value === 'centimeters'){

                result.innerHTML = (val.value * values.centimetersF[currency2.value]).toFixed(4);

            } else if(currency1.value === 'millimeters'){

                result.innerHTML = (val.value * values.millimetersF[currency2.value]).toFixed(4);

            } else if(currency1.value === 'inches'){

                result.innerHTML = (val.value * values.inchesF[currency2.value]).toFixed(4);

            } else if(currency1.value === 'foots'){

                result.innerHTML = (val.value * values.footsF[currency2.value]).toFixed(4);

            } else if(currency1.value === 'kilometers'){

                result.innerHTML = (val.value * values.kilometersF[currency2.value]).toFixed(4);

            } else if(currency1.value === 'yards'){

                result.innerHTML = (val.value * values.yardsF[currency2.value]).toFixed(4);

            }
        
        
        
        }

        

    
    }


    function getName(){


        nameOf.innerText = `${currency2.value}`;

    } 


    val.oninput = function(){
        summ(), getName();
    }
    currency1.onchange = function(){
        summ(), getName();
    }
    currency2.onchange = function(){
        summ(), getName();
    }
}
