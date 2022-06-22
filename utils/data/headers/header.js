/**
 *@author Dhruv Choudhary <dhruv.1si12cs038@gmail.com>
 @created 2019-25-6
 */

module.exports = {
    /**
     * for all requests use json headers
     */
     plainHeader: function () {
        var headers = {
            "Content-Type": "application/json",
            "X-country": "CL",
            "X-commerce": "Sodimac",
            "X-chRef": "WEB",
            "X-rhsRef": "localhost",
            "X-cmRef": "1234",
            "X-txRef": "1234567890",
            "X-apiKey": "06320a5975084b9db9ebbdece33e7eb5",
            "Cookie": "__cfduid=dc1592e7a2d7d0829888381812a9558281607979116; __cf_bm=2eb505318471b589bbedca0c5f00a8cae397d150-1608236953-1800-AYxbargg+BLAGTVbrUOzun6ISQKpBB7G1MF94wQqEqUvb3wOaBxioWkqykNa89MbceFsEVGQJLrsDazGQhgWy2k="
        };

        return headers;
    },
}