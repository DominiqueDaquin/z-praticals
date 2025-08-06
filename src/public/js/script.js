const SLIDE_SPORT=document.getElementById('slide-sport')
const LISTE_SPORT=[

    {
        image:"public/assets/images/football.png",
        text:"Football"
    },
    {
        image:"public/assets/images/nfl.png",
        text:"NFL Game Pass"
    },
        {
        image:"public/assets/images/boxing.png",
        text:"Boxing"
    },
        {
        image:"public/assets/images/liv.png",
        text:"Liv Golf"
    },
        {
        image:"public/assets/images/enterprise.png",
        text:"Enterprise National Ligu"
    },
        {
        image:"public/assets/images/lega.png",
        text:"Lega Serie A"
    }
        ,
        {
        image:"",
        text:"FiFa +"
    },
     {
        image:"public/assets/images/liv.png",
        text:"Liv Golf"
    },
        {
        image:"public/assets/images/enterprise.png",
        text:"Enterprise National Ligu"
    },
        {
        image:"public/assets/images/lega.png",
        text:"Lega Serie A"
    }
        ,
        {
        image:"",
        text:"FiFa +"
    }, {
        image:"public/assets/images/liv.png",
        text:"Liv Golf"
    },
        {
        image:"public/assets/images/enterprise.png",
        text:"Enterprise National Ligu"
    },
        {
        image:"public/assets/images/lega.png",
        text:"Lega Serie A"
    }
        ,
        {
        image:"",
        text:"FiFa +"
    }
    


]

LISTE_SPORT.forEach(element => {

    var my_span=`
    
    <span class="span-item">
                <img src=${element.image} class=" h-[20px]" alt=""> <span>${element.text}</span>
    </span>
    
    `
SLIDE_SPORT.innerHTML= SLIDE_SPORT.innerHTML + my_span;
    
});



function repeatCard(elementId,liste){
    const HtmlElement= document.getElementById(elementId)
    liste.forEach(e=>{
        HtmlElement.innerHTML=HtmlElement.innerHTML+e.item
    })

}


function Card(width=300,height=0,title="",subtitle="",imageUrl="",isVertical=false){

    var h= height!=0?`${height}px`:'auto';
    var w=`${width}px`

    var my_card=`
    
            <article class="h-[${h}] w-[${w}]">
               
                <header class="h-[${isVertical?450:170}px] ${isVertical ? "vertical-height":""}  overflow-hidden" >
                    <img src=${imageUrl} alt="" class="w-full h-full  rounded-xl mb-1 ">
                </header>
                <footer>
                    <h3 class="">
                        ${title}
                    </h3>
                    <p class="text-[#b6b9bb] text-[12px]">
                        ${subtitle}
                    </p>
                </footer>
            </article>
    
    `
    return my_card


}

const Liste_best=[
    {
        item:Card(width=300,height=0,title="Ariel X Ade: The boxing show | ep. 37",subtitle="Ariel and Ade show",imageUrl="https://image.discovery.indazn.com/eu/v3/eu/none/1sqzdbkq8evsi136fqtlxqepw9_image-header_pRow_1754424973000/fill/none/top/none/85/334/187/webp/image")
    },
        {
        item:Card(width=300,height=0,title="Itauma vs. Whyte: The Debate",subtitle="Esport world cup Fight week",imageUrl="https://image.discovery.indazn.com/eu/v3/eu/none/g20tg6qupmg1wmqvxd5g5vzw_image-header_pRow_1754383338000/fill/none/top/none/85/334/187/webp/image")
    }
    ,
        {
        item:Card(width=300,height=0,title="Pro League Highlights Show | Matchday 2",subtitle="Jupiler Pro League",imageUrl="https://image.discovery.indazn.com/eu/v3/eu/none/1a5l373ipq2ef1r7agc9qaqoaf_image-header_pRow_1754422859000/fill/none/top/none/85/334/187/webp/image")
    }
    ,
        {
        item:Card(width=300,height=0,title="Castillo &amp; Moses Itauma | The Main Event",subtitle="One on One Boxing",imageUrl="https://image.discovery.indazn.com/eu/v3/eu/none/1i0u4mmy9emvw1nijvb515xq4p_image-header_pRow_1754471837000/fill/none/top/none/85/334/187/webp/image")
    }
    ,
        {
        item:Card(width=300,height=0,title="DAZN Transfer by Fabrizio Romano - 4 August",subtitle="Esport world cup Fight week",imageUrl="https://image.discovery.indazn.com/eu/v3/eu/none/7b01j188tropi6o7anuxap7ry_image-header_pRow_1754325577000/fill/none/top/none/85/334/187/webp/image")
    }, 
    {
        item:Card(width=300,height=0,title="On the Ground | Itauma Prepares for Whyte",subtitle="Esport world cup Fight week",imageUrl="https://image.discovery.indazn.com/eu/v3/eu/none/1clklcugw025v1apc8f5f9ird5_image-header_pRow_1754320196000/fill/none/top/none/85/334/187/webp/image")
    }



]


const Dont_miss_list=[
    {
        item:Card(width=400,height=0,title="",subtitle="",imageUrl="https://image.discovery.indazn.com/eu/v3/eu/none/e35ergit2m67xbt6xdr7cqgw3_image-gallery_pRow_1754049020000/fill/none/top/none/85/500/187/webp/image"),
        
    },
        {
        item:Card(width=400,height=0,title="",subtitle="",imageUrl="https://image.discovery.indazn.com/eu/v3/eu/none/1l9a8plq3vq6w1gcqn4tbtdg7d_image-gallery_pRow_1754321535000/fill/none/top/none/85/500/187/webp/image"),
        
    },
        {
        item:Card(width=400,height=0,title="",subtitle="",imageUrl="https://image.discovery.indazn.com/eu/v3/eu/none/twtee2nfu7ft1ci0lhnfm3594_image-gallery_pRow_1750789701000/fill/none/top/none/85/500/187/webp/image"),
        
    }
    ,
        {
        item:Card(width=400,height=0,title="",subtitle="",imageUrl="https://image.discovery.indazn.com/eu/v3/eu/none/1d4jirwlwemj11cmclej4pww7u_image-gallery_pRow_1754407914000/fill/none/top/none/85/500/187/webp/image"),
        
    }
    ,
        {
        item:Card(width=400,height=0,title="",subtitle="",imageUrl="https://image.discovery.indazn.com/eu/v3/eu/none/qot19n3oe1yc13j6so2fhuxsn_image-gallery_pRow_1752681713000/fill/none/top/none/85/500/187/webp/image"),
        
    }
    ,
        {
        item:Card(width=400,height=0,title="",subtitle="",imageUrl="https://image.discovery.indazn.com/eu/v3/eu/none/v65hu2lqy2xe1dabf79sbfs5h_image-gallery_pRow_1751993139000/fill/none/top/none/85/500/187/webp/image"),
        
    }
]


const Liste_live=[
    {
        item:Card(width=300,height=0,title="Japan vs.Syria",subtitle="FIBA Asia Cup",imageUrl="https://image.discovery.indazn.com/eu/v3/eu/none/7u22vomqy50bidjg45qx1r0kk_image-header_pRow_1752232328000/fill/none/top/none/85/334/187/webp/image")
    },
        {
        item:Card(width=300,height=0,title="Guam vs. Iran",subtitle="FIBA Asia Cup",imageUrl="https://image.discovery.indazn.com/eu/v3/eu/none/f1v4q52dtl8isc29527mb4qiz_image-header_pRow_1752002452000/fill/none/top/none/85/334/187/webp/image")
    }
    ,
        {
        item:Card(width=300,height=0,title="Qatar vs. Lebanon",subtitle="FIBA Asia Cup",imageUrl="https://image.discovery.indazn.com/eu/v3/eu/none/nxa6w3nnxfkdktpqywz7g6z8_image-header_pRow_1752002453000/fill/none/top/none/85/334/187/webp/image")
    }
    ,
        {
        item:Card(width=300,height=0,title="India vs. China",subtitle="FIBA Asia Cup",imageUrl="https://image.discovery.indazn.com/eu/v3/eu/none/af0mco3knqrswo70f9egw619f_image-header_pRow_1751559463000/fill/none/top/none/85/334/187/webp/image")
    }
    ,
        {
        item:Card(width=300,height=0,title="Gateshead vs. Southend",subtitle="FIBA Asia Cup",imageUrl="https://image.discovery.indazn.com/eu/v3/eu/none/cw2d4is3ukdz1h3w601u48k84_image-header_pRow_1753278612000/fill/none/top/none/85/334/187/webp/image")
    }, 
    {
        item:Card(width=300,height=0,title="Iraq vs. Chinese Taipei",subtitle="FIBA Asia Cup",imageUrl="https://image.discovery.indazn.com/eu/v3/eu/none/5r3566z2dtajprau3x7iynv9v_image-header_pRow_1751559463000/fill/none/top/none/85/334/187/webp/image")
    }



]

const nfl_list= [
    {
        item: Card(width=300, height=0, title="Fantasy Football 101: How to Draft Your Team", subtitle="NFL Game Pass", imageUrl="https://image.discovery.indazn.com/eu/v3/eu/none/1b27vwm9dn21q1wkofeldskqh1_image-header_pRow_1748015790000/fill/none/top/none/85/334/187/webp/image")
    },
    {
        item: Card(width=300, height=0, title="25 Unmissable NFL Games You Have to Watch in 2025", subtitle="NFL Game Pass", imageUrl="https://image.discovery.indazn.com/eu/v3/eu/none/4cfnfgsd3z1v1hp3fetwexwo1_image-header_pRow_1748015790000/fill/none/top/none/85/334/187/webp/image")
    },
    {
        item: Card(width=300, height=0, title="Japan vs. Syria", subtitle="FIBA Asia Cup", imageUrl="https://image.discovery.indazn.com/eu/v3/eu/none/7u22vomqy50bidjg45qx1r0kk_image-header_pRow_1752232328000/fill/none/top/none/85/334/187/webp/image")
    },
    {
        item: Card(width=300, height=0, title="Guam vs. Iran", subtitle="FIBA Asia Cup", imageUrl="https://image.discovery.indazn.com/eu/v3/eu/none/f1v4q52dtl8isc29527mb4qiz_image-header_pRow_1752002452000/fill/none/top/none/85/334/187/webp/image")
    },
    {
        item: Card(width=300, height=0, title="Qatar vs. Lebanon", subtitle="FIBA Asia Cup", imageUrl="https://image.discovery.indazn.com/eu/v3/eu/none/nxa6w3nnxfkdktpqywz7g6z8_image-header_pRow_1752002453000/fill/none/top/none/85/334/187/webp/image")
    },
    {
        item: Card(width=300, height=0, title="India vs. China", subtitle="FIBA Asia Cup", imageUrl="https://image.discovery.indazn.com/eu/v3/eu/none/af0mco3knqrswo70f9egw619f_image-header_pRow_1751559463000/fill/none/top/none/85/334/187/webp/image")
    },
    {
        item: Card(width=300, height=0, title="Gateshead vs. Southend", subtitle="FIBA Asia Cup", imageUrl="https://image.discovery.indazn.com/eu/v3/eu/none/cw2d4is3ukdz1h3w601u48k84_image-header_pRow_1753278612000/fill/none/top/none/85/334/187/webp/image")
    },
    {
        item: Card(width=300, height=0, title="Iraq vs. Chinese Taipei", subtitle="FIBA Asia Cup", imageUrl="https://image.discovery.indazn.com/eu/v3/eu/none/5r3566z2dtajprau3x7iynv9v_image-header_pRow_1751559463000/fill/none/top/none/85/334/187/webp/image")
    }
];

const discover_more = [
    {
        item: Card(width=300, height=0, title="Sunday Recap | Secto Rally Finland", subtitle="WRC", imageUrl="https://image.discovery.indazn.com/eu/v3/eu/none/xvd7fflfbh5h1frhggxz49pjm_image-header_pRow_1754255148000/fill/none/top/none/85/334/187/webp/image")
    },
    {
        item: Card(width=300, height=0, title="CrossFit Games 2025 - Day 3", subtitle="CrossFit Games", imageUrl="https://image.discovery.indazn.com/eu/v3/eu/none/at4e2tmib34ljrtxdp5fyhb6_image-header_pRow_1753806060000/fill/none/top/none/85/334/187/webp/image")
    },
    {
        item: Card(width=300, height=0, title="BIG3: Houston", subtitle="Big3", imageUrl="https://image.discovery.indazn.com/eu/v3/eu/none/cmrbd12tj4xhppd0ha7qqnb1g_image-header_pRow_1752675877000/fill/none/top/none/85/334/187/webp/image")
    },
    {
        item: Card(width=300, height=0, title="Saturday Recap | Secto Rally Finland", subtitle="WRC", imageUrl="https://image.discovery.indazn.com/eu/v3/eu/none/g4kvcultj80w1v099okg35n10_image-header_pRow_1754217152000/fill/none/top/none/85/334/187/webp/image")
    },
    {
        item: Card(width=300, height=0, title="CrossFit Games 2025 - Day 2", subtitle="CrossFit Games", imageUrl="https://image.discovery.indazn.com/eu/v3/eu/none/7jpxr3j17vzv6r5h2oks59vor_image-header_pRow_1753805332000/fill/none/top/none/85/334/187/webp/image")
    },
    {
        item: Card(width=300, height=0, title="RWS: Chalarmchon vs. Kradooklek", subtitle="RWS Muay Thai", imageUrl="https://image.discovery.indazn.com/eu/v3/eu/none/agexvjubq2q07bhsf4fqjepjv_image-header_pRow_1753693661000/fill/none/top/none/85/334/187/webp/image")
    },
    {
        item: Card(width=300, height=0, title="Friday Recap | Secto Rally Finland", subtitle="WRC", imageUrl="https://image.discovery.indazn.com/eu/v3/eu/none/190maie4w6kvf17ngmh8om7ind_image-header_pRow_1754127493000/fill/none/top/none/85/334/187/webp/image")
    },
    {
        item: Card(width=300, height=0, title="Duarte vs. Sims Jr.: Weigh-In", subtitle="Golden Boy Promotions", imageUrl="https://image.discovery.indazn.com/eu/v3/eu/none/1dq12uswy4gc31x25g4onwa8k3_image-header_pRow_1753698261000/fill/none/top/none/85/334/187/webp/image")
    }
];

const upcoming_championship_fights = [
    {
        item: Card(width=400, height=450, title="Esports World Cup Fight Week", subtitle="", imageUrl="https://image.discovery.indazn.com/ca/v2/ca/image?id=c327d2bb-60c3-4393-982d-b52b43258445&quality=45&width=666&height=374&resizeAction=fill&verticalAlignment=top&format=jpg&effect=blackTileGradient",isVertical=true)
    },
    {
        item: Card(width=400, height=450, title="Queensberry Promotions", subtitle="", imageUrl="https://image.discovery.indazn.com/ca/v2/ca/image?id=f726f408-0f77-4be7-91ef-b8042fa14df1&quality=45&width=666&height=374&resizeAction=fill&verticalAlignment=top&format=jpg&effect=blackTileGradient",isVertical=true)
    },
    {
        item: Card(width=400, height=450, title="Most Valuable Promotions", subtitle="", imageUrl="https://image.discovery.indazn.com/ca/v2/ca/image?id=564433e2-aadc-491f-90ed-9aa924a87ab7&quality=45&width=666&height=374&resizeAction=fill&verticalAlignment=top&format=jpg&effect=blackTileGradient",isVertical=true)
    },
    {
        item: Card(width=400, height=450, title="MF & DAZN: X Series 22", subtitle="", imageUrl="https://image.discovery.indazn.com/ca/v2/ca/image?id=3c0c4654-fc39-4875-8119-f79eef28bb1c&quality=45&width=666&height=374&resizeAction=fill&verticalAlignment=top&format=jpg&effect=blackTileGradient",isVertical=true)
    },
    {
        item: Card(width=400, height=450, title="Matchroom Boxing", subtitle="", imageUrl="https://image.discovery.indazn.com/ca/v2/ca/image?id=584d70e1-c3bc-453c-8c9b-b6723b431932&quality=45&width=666&height=374&resizeAction=fill&verticalAlignment=top&format=jpg&effect=blackTileGradient",isVertical=true)
    },
    {
        item: Card(width=400, height=450, title="Matchroom Boxing", subtitle="", imageUrl="https://image.discovery.indazn.com/ca/v2/ca/image?id=3c58bc82-5c1a-4b88-ae25-39ec2091cf1b&quality=45&width=666&height=374&resizeAction=fill&verticalAlignment=top&format=jpg&effect=blackTileGradient",isVertical=true)
    },
    {
        item: Card(width=400, height=450, title="Queensberry Promotions", subtitle="", imageUrl="https://image.discovery.indazn.com/ca/v2/ca/image?id=2345cd73-2124-4cbc-801c-124e7b5d5014&quality=45&width=666&height=374&resizeAction=fill&verticalAlignment=top&format=jpg&effect=blackTileGradient",isVertical=true)
    },
    {
        item: Card(width=400, height=450, title="Matchroom Boxing", subtitle="", imageUrl="https://image.discovery.indazn.com/ca/v2/ca/image?id=4c3752b0-71d1-4db3-89c2-86997fe62510&quality=45&width=666&height=374&resizeAction=fill&verticalAlignment=top&format=jpg&effect=blackTileGradient",isVertical=true)
    },
    {
        item: Card(width=300, height=450, title="Ring Magazine", subtitle="", imageUrl="https://image.discovery.indazn.com/ca/v2/ca/image?id=d8860e57-8452-40a9-a5e8-6717e642a3e0&quality=45&width=666&height=374&resizeAction=fill&verticalAlignment=top&format=jpg&effect=blackTileGradient",isVertical=true)
    }
];

const plus=[
    {
    item: Card(width=150, height=150, title="Live TV", subtitle="", imageUrl="https://image.discovery.indazn.com/ca/v2/ca/image?id=033b3e33-658a-4f64-9c65-ab25d0e060b0&quality=45&width=666&height=374&resizeAction=fill&verticalAlignment=top&format=jpg&effect=blackTileGradient")
},
{
    item: Card(width=150, height=150, title="Boxing", subtitle="", imageUrl="https://image.discovery.indazn.com/ca/v2/ca/image?id=a4525262-877e-49cb-b5f0-b36edfa9ae13&quality=45&width=666&height=374&resizeAction=fill&verticalAlignment=top&format=jpg&effect=blackTileGradient")
},
{
    item: Card(width=150, height=150, title="NFL Game Pass", subtitle="", imageUrl="https://image.discovery.indazn.com/ca/v2/ca/image?id=8d0bd143-4dad-4b98-b874-5eee6338b5d2&quality=45&width=666&height=374&resizeAction=fill&verticalAlignment=top&format=jpg&effect=blackTileGradient")
},
{
    item: Card(width=150, height=150, title="Enterprise National League", subtitle="", imageUrl="https://image.discovery.indazn.com/ca/v2/ca/image?id=c5fb20ee-dcfb-41a8-9392-f94ac6aaeb33&quality=45&width=666&height=374&resizeAction=fill&verticalAlignment=top&format=jpg&effect=blackTileGradient")
},
{
    item: Card(width=150, height=150, title="Women's Football", subtitle="", imageUrl="https://image.discovery.indazn.com/ca/v2/ca/image?id=4366b040-3f3f-4997-b117-d681476e5ee7&quality=45&width=666&height=374&resizeAction=fill&verticalAlignment=top&format=jpg&effect=blackTileGradient")
},
{
    item: Card(width=150, height=150, title="MMA", subtitle="", imageUrl="https://image.discovery.indazn.com/ca/v2/ca/image?id=a8628a34-d093-469c-9725-59ebbd4e6b26&quality=45&width=666&height=374&resizeAction=fill&verticalAlignment=top&format=jpg&effect=blackTileGradient")
},
{
    item: Card(width=150, height=150, title="X Series", subtitle="", imageUrl="https://image.discovery.indazn.com/ca/v2/ca/image?id=b19f951f-4a58-42b1-957c-b6ece6defe17&quality=45&width=666&height=374&resizeAction=fill&verticalAlignment=top&format=jpg&effect=blackTileGradient")
},
{
    item: Card(width=150, height=150, title="Golf", subtitle="", imageUrl="https://image.discovery.indazn.com/ca/v2/ca/image?id=6205d340-5244-47f2-afb3-4d1100228955&quality=45&width=666&height=374&resizeAction=fill&verticalAlignment=top&format=jpg&effect=blackTileGradient")
},
{
    item: Card(width=150, height=150, title="ELF", subtitle="", imageUrl="https://image.discovery.indazn.com/ca/v2/ca/image?id=cc054e8c-ee88-4644-b15b-b57d34b3ae4c&quality=45&width=666&height=374&resizeAction=fill&verticalAlignment=top&format=jpg&effect=blackTileGradient")
},
{
    item: Card(width=400, height=450, title="Courtside 1891", subtitle="", imageUrl="https://image.discovery.indazn.com/ca/v2/ca/image?id=2d3b92f7-7d33-42d5-9730-2b85b4d7a4b5&quality=45&width=666&height=374&resizeAction=fill&verticalAlignment=top&format=jpg&effect=blackTileGradient")
}

]

repeatCard("best-of-dazn",Liste_best)
repeatCard("dont-miss",Dont_miss_list)
repeatCard("live",Liste_live)
repeatCard("upcoming",Liste_live)
repeatCard("nfl",nfl_list)
repeatCard("discover",discover_more)
repeatCard("upcoming-fights",upcoming_championship_fights)
repeatCard("plus",plus)
