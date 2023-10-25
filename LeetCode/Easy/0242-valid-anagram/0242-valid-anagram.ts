function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) {
        return false;
    }
    
    const sCounter = {};
    const tCounter = {};
    
    for(const val of s) {
        sCounter[val] = (sCounter[val] || 0) + 1;
    }
    
    for(const val of t) {
        tCounter[val] = (tCounter[val] || 0) + 1;
    }
    
    for(const key in sCounter) {
        if(!(key in tCounter)) {
            return false;
        }
        
        if(sCounter[key] !== tCounter[key]) {
            return false;
        }
    }
    
    return true;
};