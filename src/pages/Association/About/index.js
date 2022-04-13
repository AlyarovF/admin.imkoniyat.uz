import React, { Component } from 'react'
import CrContent from '../CrContent'
import SideBar from '../SideBar'
import './index.css'
import Footer from '../../../components/Footer'

export default function About() {
    return (
        <div className='About-js'>
            <div className='heading'>
                <div className='container'>
                    <div className='text'>
                        <h1>Об ассоциации</h1>
                        <h3>В целях объединения усилий и координации действий общественных организации инвалидов в вопросах создание инклюзивного общества, а также имплементации Конвенции ООН «О правах инвалидов», по инициативе общественных объединений инвалидов 21 февраля 2018 года была создана и зарегистрирована Ассоциация инвалидов Узбекистана.</h3>
                    </div>
                </div>
            </div>
            <div className='About container'>
                <SideBar />
                <div className='content'>
                    <CrContent mediatype="image" src="https://picsum.photos/2000/1000" title="Описание символики (логотипа)" caption="Ассоциация инвалидов Узбекистана является уникальной организацией так как объединяет 28 общественных объединений представляющих инвалидов всех форм и видов во всём их разнообразии (кросс-инвалидность), это в свою очередь позволяет в деятельности Ассоциации учитывать многообразные интересы всех категорий лиц с инвалидностью, а также их организации." />
                    <CrContent mediatype="youtube" src="x7VS6qdF9X4" title="Описание символики (логотипа)" caption="Ассоциация инвалидов Узбекистана является уникальной организацией так как объединяет 28 общественных объединений представляющих инвалидов всех форм и видов во всём их разнообразии (кросс-инвалидность), это в свою очередь позволяет в деятельности Ассоциации учитывать многообразные интересы всех категорий лиц с инвалидностью, а также их организации." />
                </div>
            </div>
            <Footer />
        </div>
    )
}
