var axios = require('axios');
module.exports = async msg=> {
if(msg.content.startsWith('stack')&&msg.content.split(' ')[1]){ 
var key = msg.content.split(' ')[1],
data = await axios.get(`http://api.stackexchange.com/2.2/search/advanced?sort=relevance&site=stackoverflow&q=${key.replace(/ /g,"+")}`)
data.data.items.forEach(lis => msg.reply({embed: {
title:lis.title,
url:lis.link,
author: {
name:lis.owner.display_name,
icon_url:lis.owner.profile_image
},
description:lis.tags.toString()
}}));
}}