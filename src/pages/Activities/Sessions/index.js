import React, { useState, useEffect } from 'react'
import CrContent from '../CrContent'
import './index.css'
import Footer from '../../../components/Footer'
import { useTranslation } from 'react-i18next'
import api from '../../../api/posts'

export default function Sessions() {
    const [posts, setPosts] = useState([]);
    const menuId = "sessions"

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await api.get(`/post?menuId=${menuId}`);
            setPosts(res.data.data);
        };


        fetchPosts();
    }, []);

    const { t } = useTranslation()
    return (
        <div className='Sessions-js'>
            <div className='heading'>
                <div className='container'>
                    <div className='text'>
                        <h1>{t("sessions_title")}</h1>
                        <h3>{t("sessions_caption")}</h3>
                    </div>
                </div>
            </div>
            <div className='Sessions container'>
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
