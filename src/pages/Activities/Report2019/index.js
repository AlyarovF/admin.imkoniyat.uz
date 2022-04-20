import React, { useState, useEffect } from 'react'
import CrContent from '../CrContent'
import SideBar from '../SideBar'
import './index.css'
import Footer from '../../../components/Footer'
import { useTranslation } from 'react-i18next'
import api from '../../../api/posts'

export default function Report2019() {
    const [posts, setPosts] = useState([]);
    const menuId = "report2019"

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await api.get(`/post?menuId=${menuId}`);
            setPosts(res.data.data);
        };


        fetchPosts();
    }, []);

    const { t } = useTranslation()
    return (
        <div className='Report2019-js'>
            <div className='container'>
                <h1>{t("report2019_title")}</h1>
            </div>
            <div className='Report2019 container'>
                <SideBar />
                <div className='content'>
                    {
                        posts.map((post) => {
                            const handleDelete = async () => {
                                // e.preventDefault();
                                try {
                                    const id = post._id
                                    await api.delete(`/post/${id}`)
                                    window.location.reload(false);
                                } catch (err) {
                                    console.log(`Error: ${err.message}`)
                                }
                            }
                            return (
                                <CrContent mediatype="image" src={`http://135.181.200.92:3005/${post.headImage}`} title={post.title} caption={post.body} />
                            )
                        })
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}
