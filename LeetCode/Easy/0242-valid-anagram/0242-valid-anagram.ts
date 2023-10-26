function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) {
        return false;
    }
    
    const lookup = {};
    
    for(let i = 0; i < s.length; i++) {
        const letter = s[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    
    for(let i = 0; i < t.length; i++) {
        const letter = t[i];
        if(!(lookup[letter])) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    
    return true;
};