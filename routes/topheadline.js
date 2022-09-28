const express = require('express')
const axios = require('axios')
const router = new express.Router()
require('dotenv').config();
const url= process.env.baseurl + 'country=in&apikey='+process.env.apikey;

router.get('/news',async(req,res)=>{
    try{
        const response = await axios.get(url)
        if(response.status!=200)
        {
            console.log('Fetching news failed')
            throw new Error('Getting news failed')
        }
        const articles = response.data.articles
        const data=[];
        for(const article of articles)
        {
            const news = {
                source:article.source.name,
                title:article.title,
                description:article.description,
                content:article.content,
                time:article.publishedAt
            }
            data.push(news);
        }
        res.status(200).send(data)
    }catch(e){
        res.status(400).send(e);
    }
})

module.exports=router