import React, { useState, useEffect } from 'react'
import CrContent from '../CrContent'
import SideBar from '../SideBar'
import './index.css'
import Footer from '../../../components/Footer'
import { useTranslation } from 'react-i18next'
import api from '../../../api/posts'

export default function About() {
    const [posts, setPosts] = useState([]);
    const menuId = "about"

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await api.get(`/post?menuId=${menuId}`);
            setPosts(res.data.data);
        };


        fetchPosts();
    }, []);

    const { t } = useTranslation()
    return (
        <div className='About-js'>
            <div className='heading'>
                <div className='container'>
                    <div className='text'>
                        <h1>{t("about_title")}</h1>
                        <h3>{t("about_caption")}</h3>
                    </div>
                </div>
            </div>
            <div className='About container'>
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
                                    <CrContent mediatype="image" src={`https://api.mamadaliyev.uz/imkoniyat/${post.headImage}`} title={post.title} caption={post.body} />
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
        </div>
    )
}
