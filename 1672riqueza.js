// 1672. La riqueza del cliente más rico.

/**
 * @param {number[][]} accounts
 * @return {number}
 */
 let maximumWealth = function(accounts) {
    let riqueza = 0;
    let riquezaMasAlta = 0;
    for (let n = 0; n < accounts.length; n++) {
        for (let m = 0; m < accounts[n].length; m++) {

            riqueza += accounts[n][m];            
        }

        if (riqueza > riquezaMasAlta) {
            riquezaMasAlta = riqueza;
        }
        riqueza = 0;
    }
    return riquezaMasAlta;
};

console.log(maximumWealth([[1,2,3],[3,2,1]]));
console.log(maximumWealth([[1,5],[7,3],[3,5]]));
console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]]));