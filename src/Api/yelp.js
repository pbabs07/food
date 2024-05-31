import axios from "axios";



export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer Ljtsv_NeBJss2XRkQ-uoXPB8ENuXdT2BjKg15081tnWCMwbRE10DbIIzfBIpAjhKudWkXA3TtEqakjY7M_fw9NsUS331J8anacY-xoCEr1PqMzpnzZSFKAyrvooyZnYx'
    },

});

 