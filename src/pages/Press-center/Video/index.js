import React, { useState, useEffect } from 'react'
import Footer from '../../../components/Footer'
import Blocks from '../Blocks'
import '../index.css'
import { useTranslation } from 'react-i18next'
import api from '../../../api/posts'
import { createBrowserHistory } from 'history';

export default function Video() {
    const [posts, setPosts] = useState([]);
    const history = createBrowserHistory();
    const menuId = "video"

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await api.get(`/post?menuId=${menuId}`);
            setPosts(res.data.data);
        };


        fetchPosts();
    }, []);

    const { t } = useTranslation()
    return (
        <div className='news'>
            <h1>{t("press_center_video_title")}</h1>
            <div className='news-block'>
                {posts.map((post) => {
                    console.log(post)
                    const date = post.createdAt.split("T")
                    let dateTime = date[1]
                    const timeHour = dateTime.split(":")
                    const time = `${timeHour[0]}:${timeHour[1]}`
                    return (
                        <div>
                            <Blocks image={`https://api.mamadaliyev.uz/imkoniyat/${post.headImage}`} title={post.title} url={post._id} views="0" date={date[0]} published={time} menuId={menuId} />
                        </div>
                    )
                })}

            </div>

            <Footer />
        </div>
    )
}
