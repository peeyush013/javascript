let city2 = "i"                  // invalid city
switch(city2){
    case "pune":
        console.log("MH")
    case 'indore':
        console.log('MP')
    case 'jaipur':
        console.log('RJ')
    default:
        console.log('invalid city')
}

let city22 = "pune"              // MH MP RJ invalid city
switch(city22){
    case "pune":
        console.log("MH")
    
    case 'indore':
        console.log('MP')
    
    case 'jaipur':
        console.log('RJ')
        
    default:
        console.log('invalid city')
}


let city222 = "pune"              // MH
switch(city222){
    case "pune":
        console.log("MH")
        break;
    case 'indore':
        console.log('MP')
        break;
    case 'jaipur':
        console.log('RJ')
        break;
    default:
        console.log('invalid city')
}

// prorgram 3
let city = "nagpur"               // MH
switch(city){
    case "pune":
    case "nagpur":
        console.log("MH")
        break;
    case 'indore':
    case 'bhopal':
        console.log('MP')
        break;
    case 'jaipur':
    case 'udaipur':
        console.log('RJ')
        break;
    default:
        console.log('invalid city')
}
