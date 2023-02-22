function solution(rsp) {
    let result = "";
    
    [...rsp].forEach(item => {
        if(item === "0") {
            result += "5";
        } else if (item === "2") {
            result += "0";
        } else {
            result += "2";
        }
    });
    
    return result;
}