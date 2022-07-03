import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './index.css'
import { options } from './options';
import { useTranslation } from 'react-i18next';

import api from "../../api/posts"

export default function Editor() {
    const { t } = useTranslation()

    const [bodyCK, setBodyCK] = useState('');

    const [file, setfile] = useState();
    const [fileUrl, setfileUrl] = useState('');

    const [post, setPost] = useState({
        title: '',
        shortText: '',
        body: '',
        headImage: '',
        menuId: ''
    });

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setPost({ ...post, [name]: value });
    }

    function handleInputChange(e) {
        setfile(e.target.files);
    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const newPost = { title, shortText, body, menuId }
    //     try {
    //         const response = await api.post('/post', newPost)
    //         console.log(response)
    //     } catch (err) {
    //         console.log(`Error: ${err.message}`)
    //     }
    // }

    const handleSubmit = async (event) => {
        event.preventDefault();
        let postData
        if (file) {
            try {
                const formData = new FormData();
                formData.append('file', file[0]);

                const data = await api.post('/upload', formData);

                postData = { ...post, "headImage": data.data.data };
            } catch (err) {
                console.log(`Error: ${err.message}`)
            }
        } else {
            postData = { ...post };
        }
        try {
            // const config = {
            //     headers: {
            //         'Authorization': localStorage.getItem('token')
            //     }
            // }

            const data = await api.post('/post', postData);

            alert(t("editor_success"))
        } catch (err) {
            console.log(`Error: ${err.message}`)
            alert(t("editor_error"))
        }

    }

    const handleDelete = async (id) => {

    }

    return (
        <div className="EditorCk container">
            <form onSubmit={handleSubmit}>
                <div className='EditorCk-item'>
                    <label>{t("editor_section")}</label>
                    <select value={post.menuId} name="menuId" onChange={handleChange}>
                        {options.map((option) => (
                            <option value={option.value}>{t(option.lable)}</option>
                        ))}
                    </select>
                </div>
                <div className='EditorCk-item'>
                    <label>{t("editor_title")}</label>
                    <input type="text" name="title" onChange={handleChange} placeholder='' value={post.title} required />
                </div>
                <div className='EditorCk-item'>
                    <label>{t("editor_shortTitle")}</label>
                    <input type="text" name="shortText" onChange={handleChange} placeholder='' value={post.shortText} />
                </div>
                <div className='EditorCk-item'>
                    <label>{t("editor_file")}</label>
                    <input type="file" onChange={handleInputChange} />
                </div>
                <CKEditor
                    editor={ClassicEditor}
                    data={bodyCK}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setBodyCK(data)
                        const name = "body";
                        setPost({ ...post, "body": data });
                    }}
                />

                <input className='submitButton' type='submit' value={t("editor_submit")} />
            </form>
        </div>
    );
}