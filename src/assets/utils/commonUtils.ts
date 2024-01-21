export function insertIntoArray(arr:any[], index:number, value:any) {
    var temp = arr.slice(0, index);
    temp.push(value);
    return temp.concat(arr.slice(index));
}