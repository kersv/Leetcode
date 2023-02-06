var isAnagram = function(s, t) {
    if (s.length !== t.length){
        return false
    }
    let hashmap = new Map()
    let hashmap2 = new Map()
    for(let i = 0; i < s.length; i++){
        if (!hashmap.has(s[i])){
            hashmap.set(s[i], 1)
        }
        else{
            hashmap.set(s[i], hashmap.get(s[i]) +1 )
        }
        if (!hashmap2.has(t[i])){
            hashmap2.set(t[i], 1)
        }
        else{
            hashmap2.set(t[i], hashmap2.get(t[i]) + 1)
        }
    }
    for(let i = 0; i < s.length; i++){
        if(hashmap.get(s[i]) !== hashmap2.get(s[i])){
            return false
        }
    }
    return true
};