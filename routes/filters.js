const express=require('express')
const router=new express.Router()
const axios=require('axios')

require('dotenv').config()

router.post('/news/topic',async (req,res)=>{
    try{
        const Url= process.env.baseurl + 'q='+req.body.topic+'&apikey=' + process.env.apikey
        const response = await axios.get(Url)
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


router.post('/news/category',async (req,res)=>{
    try{
        const Url= process.env.baseurl + 'category='+req.body.category+'&apikey=' + process.env.apikey
        const response = await axios.get(Url)
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

module.exports=router;
