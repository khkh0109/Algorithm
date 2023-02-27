function solution(num_list, n) {
    const answer = [];
    let start = 0;
    let end = n;
    
    while(end <= num_list.length) {
        const sliceArr = num_list.slice(start, end);
        answer.push(sliceArr);
        start += n;
        end += n;
    }
    
    return answer;
}