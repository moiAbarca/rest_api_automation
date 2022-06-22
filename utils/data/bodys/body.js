/**
 *@author Dhruv Choudhary <dhruv.1si12cs038@gmail.com>
 @created 2019-25-6
 */

module.exports = {
    /**
     * for all requests use json headers
     */
     plainBody: function () {
        var bodys = {
            "Content-Type": "application/json",
            "X-country": "CL",
            "X-commerce": "Sodimac",
            "X-chRef": "WEB",
            "X-rhsRef": "localhost",
            "X-cmRef": "1234",
            "X-txRef": "1234567890",
            "X-apiKey": "06320a5975084b9db9ebbdece33e7eb5",
            "Cookie": "__cfduid=dc1592e7a2d7d0829888381812a9558281607979116; __cf_bm=9d68721bf0f208d6e74ea1c21fbd554644308b5c-1608143860-1800-AcUQjmupJ28BTnZeRnopznEvEcsXNiE3S7iowEPD1y/NgY/0xugBqrs8/l8Iv47NMWvPUTxRWzDuLggBVCE/K+w="
        };

        return headers;
    },
}