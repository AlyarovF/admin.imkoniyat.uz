import React, { useState, useEffect } from 'react'
import Footer from '../../components/Footer'
import { useTranslation } from 'react-i18next'
import api from '../../api/posts'
import { useParams } from 'react-router-dom'
import CrContent from '../CrContent'
import { useNavigate } from 'react-router-dom';
import './index.css'

export default function News() {
    const { id } = useParams()
    const [posts, setPosts] = useState({})
    let navigate = useNavigate();

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await api.get(`/post/${id}`)
            setPosts(res.data.data)
        };
        fetchPosts();
    }, []);

    const handleEdit = async (id) => {
    }

    const handleDelete = async () => {
        // e.preventDefault();
        try {
            const id = posts._id
            await api.delete(`/post/${id}`)
            navigate(`/press-center/${posts.menuId}`)
        } catch (err) {
            console.log(`Error: ${err.message}`)
        }
    }

    const { t } = useTranslation()
    return (
        <div className='news'>
            <h1>{t("press_center_news_title")}</h1>
            <div className='news-block container'>
                <CrContent title={posts.title} caption={posts.body} mediatype="image" src={`https://api.mamadaliyev.uz/imkoniyat/${posts.headImage}`} views="0" />
                <div className='admin-tools'>
                    <button onClick={handleDelete}><i className="fa-solid fa-trash"></i> {t("delete_button")}</button>
                    {/* <button onClick={handleEdit}>{t("edit_button")}</button> */}
                </div>
            </div>

            <Footer />
        </div >
    )
}
