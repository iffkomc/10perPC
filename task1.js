function compile_csv_search(text, key_name) {
// useless variable;    :D
    var name = key_name;
    return function (name) {
        var nameId;
        // create array of rows;
        var list = text.split("\n");
        // create array of header names 
        var arrayHead = list[0].split(',');
        // find  id of Name in array
        for (var i = 0; i < arrayHead.length; i++) {
            if (arrayHead[i] == key_name) {
                nameId = i;
                break;
            }
        }
        // check correctness of input name
        if(nameId == undefined){
            return(undefined);
        }
        for (i = 1; i <= list.length; i++) {
            
            // create array of values
            var arr = list[i].split(",");
            // find row with typed name
            if (arr[nameId] == name) {
                
                for (j = 0; j < arr.length; j++) {
                    
                    if (j == 0) {
                        var arrayReturn = arrayHead[j] + ': \"' + arr[j] + '\"';
                        
                    } 
                    else {
                        var arrayReturn = arrayReturn + ', ' + arrayHead[j] + ': \"' + arr[j] + '\"';
                    }
                }
                return (arrayReturn);
            }

        }
    }
}
var csv_by_name = compile_csv_search(
    "ip,name,desc\n" +
    "10.49.1.4,server1,Main Server\n" +
    "10.52.5.1,server2,Backup Server\n",
    "name");
console.log(csv_by_name('server2')); 
console.log(csv_by_name('server9'));
// »> {ip: "10.52.5.1", name: "server2", desc: "Backup Server"}
//console.log(csv_by_name("server9")); // »> undefined