const timeAdder = (value1, label1, value2, label2) => {
    let value;
    switch(value1, label1, value2, label2){
        case(label1 === 'minutes'):
        case(label2 === 'minutes'):
        value = value1 + label1 + value2 + label2;
        break;
    default:
        value = "not good";
        return
    }

    console.log(value);
}

timeAdder(3, 'minutes', 3, 'minutes');

const toSeconds = (value1, label1, value2, label2) => {

    switch (label1) {
      case "minute":
      case "minutes":
        return value1 + value2 + label1; 
        
      case "hour":
      case "hours":
        return  value * 5;
        
      case "day":
      case "days":
        return value * dayInSeconds;
        
      default:
        return "did not understand"
    }
    
  };

  const WriteOut = (value1, label1, value2, label2) => {
    const Time = toSeconds(value1, label1, value2, label2);
    console.log("time is " + Time);
  }
  
WriteOut(2, "minute", 2, "minute");