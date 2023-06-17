import React from "react";

const Calculate = (capicty, type) => {

    let percent;

    switch(type) {
        case 'type1':
            percent = 3.1;
            break;
        case 'type2':
            percent = 18.6;
            break;
        case 'type3':
            percent = 9.3;
            break;
        case 'type4':
            percent = 9.3;
            break;
        case 'type5':
            percent = 1.55;
            break;
        default:
            percent = 3.1;
            break;
    }

    let math = capicty / percent;
  
    math = math.toFixed(2)

    return Number(math);
}

export default Calculate;