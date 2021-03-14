module.exports = function check(str, bracketsConfig) {
        let str2 = str;
        let halfLength = Math.floor(str2.length / 2);
        for (let i = 0; i < halfLength; i++) {
            for (let j = 0; j < bracketsConfig.length; j++) {
                str2 = str2.replace(bracketsConfig[j].join(''), '');
            }
        }
        return str2.length == 0;
    }
}
