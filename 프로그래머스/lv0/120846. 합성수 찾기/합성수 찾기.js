function solution(n) {
    const getPrime = (n) => {
        const arr = new Array(n + 1).fill(true).fill(false, 0, 1);

        for(let i = 2; i * i <= n; i++) {
            if(arr[i]) {
                for(let j = i * i; j <= n; j += i) {
                    arr[j] = false;
                }
            }
        }
        
        return arr.filter(el => el).length;
    }
    
    const prime = getPrime(n);
    
    return n - prime;
}

