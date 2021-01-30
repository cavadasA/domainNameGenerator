let pronouns = ['the', 'our', 'that'];
let adjs = ['great', 'big', 'last'];
let nouns = ['jogger', 'racoon'];
let extensions = ['.com', '.net', '.es', '.io', '.tech'];

function domainNameGenerator(pronouns, adjs, nouns, extensions) {
    let generatedDomains = [];
    for (let i = 0; i < pronouns.length; i++){
        for (let j = 0; j < adjs.length; j++){
            for (let k = 0; k < nouns.length; k++){
                for (let l = 0; l < extensions.length; l++){
                    generatedDomains.push((pronouns[i] + adjs[j] + nouns[k] + extensions[l]));
                }
            }
        }
    }        
    return generatedDomains;
}

console.log(domainNameGenerator(pronouns, adjs, nouns, extensions));

