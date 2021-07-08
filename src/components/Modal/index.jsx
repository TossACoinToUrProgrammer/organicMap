import React from 'react'

import css from './Popup.module.css'

import landSvg from '../../assets/land.svg'
import farmerSvg from '../../assets/farmer.svg'
import pasturesSvg from '../../assets/pastures.svg'
import plantSvg from '../../assets/plant.svg'

const Modal = ({ title, setViewport, setSelected }) => {

    const closePopup = () => {
        setSelected('')
        setViewport(() => ({
            transitionDuration: 300,
            longitude: 74.65086,
            latitude: 41.3,
            zoom: 6.5
        }))
    }

    return (
        <div className={css.modal}>
            <div className={css.modal__top}>
                <div className={css.modal__title}><p>{title + ' район'}</p></div>
                <div
                    className={css.modal__close}
                    onClick={closePopup}
                >
                    X
                </div>
            </div>

            <div className={css['modal__content-wrapper']}>
                <div className={css.modal__description}>
                    <div className={css['modal__description-img__wrapper']}>
                        <img src={landSvg} alt="q" />
                    </div>
                    <p className={css['modal__description-text']}>16877 ГА</p>
                </div>
                <div className={css.modal__description}>
                    <div className={css['modal__description-img__wrapper']}>
                        <img src={pasturesSvg} alt="q" />
                    </div>
                    <p className={css['modal__description-text']}>32 РА</p>
                </div>
                <div className={css.modal__description}>
                    <div className={css['modal__description-img__wrapper']}>
                        <img src={plantSvg} alt="q" />
                    </div>
                    <p className={css['modal__description-text']}>401 ТА</p>
                </div>
                <div className={css.modal__description}>
                    <div className={css['modal__description-img__wrapper']}>
                        <img src={farmerSvg} alt="q" />
                    </div>
                    <p className={css['modal__description-text']}>110 фер</p>
                </div>
            </div>

            <div className={css['modal__label-wrapper']}>
                <div className={css['modal__label-elem']}>Исторические культуры</div>
                <div className={css['modal__label-elem']}>Органические культуры</div>
            </div>

            <div className={css.modal__list}>
                <div className={css['modal__list-item']}>
                    <div className={css['modal__list-img']}>
                        <img src="" alt="" />
                    </div>
                    <button className={css['modal__list-btn']}>Картошка</button>
                </div>
                <div className={css['modal__list-item']}>
                    <div className={css['modal__list-img']}>
                        <img src="" alt="" />
                    </div>
                    <button className={css['modal__list-btn']}>Малина</button>
                </div>
                <div className={css['modal__list-item']}>
                    <div className={css['modal__list-img']}>
                        <img src="" alt="" />
                    </div>
                    <button className={css['modal__list-btn']}>Груша</button>
                </div>
                <div className={css['modal__list-item']}>
                    <div className={css['modal__list-img']}>
                        <img src="" alt="" />
                    </div>
                    <button className={css['modal__list-btn']}>Персик</button>
                </div>
            </div>
        </div>
    )
}

export { Modal }
