import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'antd';
import "./styles.scss"
import { throttle } from 'lodash'

export function Image({ src, isModal = true, isCentered = true, annotation, ...props }) {
    const [isVisible, setIsVisible] = useState(false)
    const onToggleModal = () => setIsVisible(!isVisible);
    const [imgWidth, setImgWidth] = useState(0);
    const [isZoomedIn, setIsZoomedIn] = useState(false)

    const onImgLoad = ({ target: img }) => {
        setImgWidth(img.offsetWidth + 50);
    }

    const [isActive, setIsActive] = useState(false)
    const currentElement = useRef(null);
    const onScroll = throttle(() => {
        if (!currentElement.current) {
            setIsActive(false);
            return;
        }
        const top = currentElement.current.getBoundingClientRect().top;
        top >= 0 && top <= window.innerHeight && setIsActive(true);
    }, 100);

    useEffect(() => {
        document.addEventListener('scroll', onScroll, true);
        if (isActive) document.removeEventListener('scroll', onScroll, true);
        return () => document.removeEventListener('scroll', onScroll, true);
    }, [isActive]);
    
    const onWheel = (e) => {
        const delta = Math.sign(e.deltaY);
        setIsZoomedIn(delta > 0)
        if (!isZoomedIn && (window.innerWidth - 100 > +imgWidth + 50) && delta === -1) {
            setImgWidth(+imgWidth + 50)
        }
        if (+imgWidth - 50 > 100 && isZoomedIn && delta === 1) {
            setImgWidth(+imgWidth - 50)
        }
    }
    return (
        <div className={`wrapper ${isActive ? 'wrapper--active' : ''}`} ref={currentElement}>
                {<div className={`image ${isCentered ? 'image--centered' : ''}`} onClick={onToggleModal}>
                    <img style={{
                        cursor: isModal ? 'pointer' : 'default'
                    }}
                        onLoad={onImgLoad}
                        draggable={false}
                        src={src}
                        alt={annotation && ''}
                    />
                    {annotation && <p className='image__annotation'>{annotation}</p>}
                </div>}
                {src && isModal && <Modal
                    footer={null}
                    closable={true}
                    centered={true}
                    visible={isVisible}
                    onCancel={onToggleModal}
                    width='auto'
                >
                    <div className={`modalContent ${isZoomedIn ? 'modalContent--zoomedIn' : ''}`} onWheelCapture={(e) => onWheel(e)}>
                        <img width={imgWidth} draggable={false} src={src} alt={annotation && ''} />
                    </div>
                </Modal>}
            </div>
    )
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    isModal: PropTypes.bool,
    isCentered: PropTypes.bool,
}
