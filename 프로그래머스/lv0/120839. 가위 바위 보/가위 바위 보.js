function solution(rsp) {
    return [...rsp].reduce((acc, cur) => {
        if (cur === "0") return acc += "5";
        if (cur === "2") return acc += "0";
        if (cur === "5") return acc += "2";
    }, '');
}