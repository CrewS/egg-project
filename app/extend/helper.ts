const bcrypt = require('bcrypt');

export const bhash = (str: string) => bcrypt.hashSync(str, 10);
export const bcompare = (str: string, hash: string) => bcrypt.compareSync(str, hash);
export const validateId = (str: string) => /^[a-zA-Z0-9\-_]+$/i.test(str);
