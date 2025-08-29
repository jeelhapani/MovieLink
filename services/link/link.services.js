const { resolve } = require("path");
const linkmodel = require("./index.modal");


module.exports = {
    getFullLinkData: async () => {
        return new Promise(async (resolve) => {
            return resolve(
                await linkmodel.find()
            );
        });
    }
}