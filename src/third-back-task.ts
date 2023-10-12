class ThirdBackTask {

    atomicResult(subString: any) {
        let data = '';

        const result = subString.replace(/[{ }]/g, '');
        const firstChar = subString.substring(0, 1);
        const layer = result.substring(1);

        for (let i = 0; i < parseInt(firstChar); i++) {
            data += layer;
        }

        return data;
    }

    getResult(notation: any, depth = 5): any {
        try {
            const pattern = /\d{\d+}/g;

            if (depth <= 0 && /\{\w+\}/g.test(notation)) {
                return '';
            }

            const matches = notation.match(pattern);

            if (matches) {
                for (const match of matches) {
                    const subNotation = match;
                    const stringOffset = notation.indexOf(subNotation);
                    notation = notation.substring(0, stringOffset) + this.atomicResult(subNotation) + notation.substring(stringOffset + subNotation.length);
                }

                depth--;

                return this.getResult(notation, depth);
            }

            return notation;
        } catch (error) {
            console.log(error);
            return false
        }

    }

}

export default ThirdBackTask