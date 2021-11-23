import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'antd';
import "./styles.scss"

export function Image({ src, isModal = true, isCentered = true, annotation, ...props }) {
    const [isVisible, setIsVisible] = useState(false)
    const onToggleModal = () => setIsVisible(!isVisible);
    return (
        src ? <div className={`image ${isCentered ? 'image--centered' : ''}`} onClick={onToggleModal}>
            <img draggable={false} src={src} alt={annotation && ''} />
            {annotation && <p className='image__annotation'>{annotation}</p>}
            {isModal && <Modal
                footer={null}
                closable={true}
                centered={true}
                visible={isVisible}
                onCancel={onToggleModal}
                width='auto'
            >
                <div className="modalContent">
                    <img draggable={false} src={src} alt={annotation && ''} />
                </div>
            </Modal>}
        </div> : <div />
    )
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    isModal: PropTypes.bool,
    isCentered: PropTypes.bool,
}
