import { useEffect, useState } from "react";//to automatically call api on mounting of article components
import infiniteScroll from 'react-infinite-scroll-component';
import { getnews } from '../service/Api';
import Article from "./Article";
const Articles = () => {
    const [news, setnews] = useState([]);
    const [page, setpage] = useState(0);
    const dailyNews = async () => {
        let response = await getnews(page);
        setnews([...news,...response.data]);
        console.log(response);
    }
    useEffect(() => {
        dailyNews();
    }, [page])
    return (
        <infiniteScroll 
        dataLength={news.length}
        next={()=>setpage(page=>page+1)}
        hasMore={true}
        >
        {
        news?.length > 0 && news.map(article => (
            <Article article={article}/>
        ))}
        </infiniteScroll>
    )
}

export default Articles;