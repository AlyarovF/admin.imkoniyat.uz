import React, { useState, useEffect } from 'react'
import CrContent from '../CrContent'
import SideBar from '../SideBar'
import './index.css'
import Footer from '../../../components/Footer'
import { useTranslation } from 'react-i18next'
import api from '../../../api/posts'

export default function Report2020() {
    const [posts, setPosts] = useState([]);
    const menuId = "report2020"

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await api.get(`/post?menuId=${menuId}`);
            setPosts(res.data.data);
        };


        fetchPosts();
    }, []);

    const { t } = useTranslation()
    return (
        <div className='Report2020-js'>
            <div className='container'>
                <h1>{t("report2020_title")}</h1>
            </div>
            <div className='Report2020 container'>
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
