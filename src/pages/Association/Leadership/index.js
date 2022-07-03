import React, { useState, useEffect } from 'react'
import SideBar from '../SideBar'
import './index.css'
import Footer from '../../../components/Footer'
import LeaderPerson from '../LeaderPerson'
import { useTranslation } from 'react-i18next'
import api from '../../../api/posts'

export default function Leadership() {
    const [posts, setPosts] = useState([]);
    const menuId = "leadership"

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await api.get(`/post?menuId=${menuId}`);
            setPosts(res.data.data);
        };


        fetchPosts();
    }, []);

    const { t } = useTranslation()
    return (
        <div className='Leadership'>
            <div className='container'>
                <h1>{t("leadership_title")}</h1>
            </div>
            <div className='Leadership-js container'>
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
                                <div>
                                    <LeaderPerson src={`https://api.mamadaliyev.uz/imkoniyat/${post.headImage}`} who={post.shortText} fullname={post.title} caption={post.body} />
                                    <div className='admin-tools'>
                                        <button onClick={handleDelete}><i className="fa-solid fa-trash"></i> {t("delete_button")}</button>
                                        {/* <button onClick={handleEdit}>{t("edit_button")}</button> */}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Footer />
        </div >
    )
}
