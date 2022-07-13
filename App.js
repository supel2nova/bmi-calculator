var opacity = 0;
var intervalID = 0;


function calBMI() {

    let mass = document.getElementById('inputMass').value
    let height = document.getElementById('inputHeight').value
    let heightDivide = height / 100
    let valueR = ((mass) / (heightDivide * heightDivide));

    if (valueR >= 35.00.toFixed(2)) {

        imgR = document.getElementById('imgBMI').src = "img/BMI5.jpg"
        valueR = "คำนวณดัชนีมวลร่างกายของคุณคือ : " + valueR.toFixed(2) + "<br>" + "คุณอ้วนเกินไป";

    } else if (valueR >= 30) {

        imgR = document.getElementById('imgBMI').src = "img/BMI4.jpg"
        valueR = "คำนวณดัชนีมวลร่างกายของคุณคือ : " + valueR.toFixed(2) + "<br>" + "คุณอ้วนมาก";

    } else if (valueR >= 25) {

        imgR = document.getElementById('imgBMI').src = "img/BMI3.jpg"
        valueR = "คำนวณดัชนีมวลร่างกายของคุณคือ : " + valueR.toFixed(2) + "<br>" + "คุณอ้วน";

    } else if (valueR >= 18.5) {

        imgR = document.getElementById('imgBMI').src = "img/BMI2.jpg"
        valueR = "คำนวณดัชนีมวลร่างกายของคุณคือ : " + valueR.toFixed(2) + "<br>" + "คุณน้ำหนักปกติ";

    } else if (valueR <= 18.49) {

        imgR = document.getElementById('imgBMI').src = "img/BMI1.jpg"
        valueR = "คำนวณดัชนีมวลร่างกายของคุณคือ : " + valueR.toFixed(2) + "<br>" + "คุณน้ำหนักน้อยเกินไป";

    } else {
        imgR = document.getElementById('imgBMI').src = "img/BMI0.jpg"
        valueR = "กรุณากรอกข้อมูล" + "<br>" + "เพื่อทำการคำนวณ BMI ของคุณ"
    }

    document.getElementById('result').innerHTML = valueR;
}


function calBMR() {

    let mass = document.getElementById('inputMass').value
    let height = document.getElementById('inputHeight').value
    let age = document.getElementById('inputYears').value;

    if (document.getElementById('male').checked == true) {

        BMR = (66 + (13.7 * mass) + (5 * height) - (6.8 * age));
        resultBMR =`พลังงานที่จำเป็นพื้นฐานในการมีชีวิต ${BMR.toFixed(0)} กิโลแคลอรี่`
        resultTDEE = `พลังงานที่คุณใช้ในแต่ละวัน ${(BMR * (document.getElementById('inputoption').value)).toFixed(0)} กิโลแคลอรี่`;

    } else if (document.getElementById('female').checked == true) {

        BMR = (665 + (9.6 * mass) + (1.8 * height) - (4.7 * age));
        resultBMR =`พลังงานที่จำเป็นพื้นฐานในการมีชีวิต ${BMR.toFixed(0)} กิโลแคลอรี่`;
        resultTDEE = `พลังงานที่คุณใช้ในแต่ละวัน ${(BMR * (document.getElementById('inputoption').value)).toFixed(0)} กิโลแคลอรี่`;

    } else {

        resultBMR = "กรุณากรอกข้อมูลเพื่อทำการคำนวณ" + "<br>" + "BMR และ TDEE ของคุณ";
        resultTDEE = ""

    }

    document.getElementById('resultBMR').innerHTML = resultBMR;
    document.getElementById('resultTDEE').innerHTML = resultTDEE;

}









