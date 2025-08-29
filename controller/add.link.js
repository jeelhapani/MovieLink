const { link } = require("../services/index");

module.exports = {
    linkPageRender: async(req, res, next) => {
        try {
            const linkList = await link.getFullLinkData();
            console.log(linkList);
            
            res.render("link_list");
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
}