import React from "react";

const Calculate = (capicty, type) => {

    let percent;

    switch(type) {
        case 'type1':
            percent = 0.031;
            break;
        case 'type2':
            percent = 0.186;
            break;
        case 'type3':
            percent = 0.093;
            break;
        case 'type4':
            percent = 0.093;
            break;
        case 'type5':
            percent = 0.0155;
            break;
        default:
            percent = 0.031;
            break;
    }

    let math = capicty * percent;
  
    math = math.toFixed(2)
    console.log(math)

    return Number(math);
}

export default Calculate;