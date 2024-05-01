const Page= require('../models/pages');


exports.getAllPages= async (req,res) => {
    const pages= await Page.find();
    return ({pages: pages});
};