import React, { useState } from 'react';
import './Videoframe.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { m_icon } from '../assets';
const Videoframe = () => {
    const [screen1, setScreen1] = useState(false);
    const [screen2, setScreen2] = useState(false);
    const [screen3, setScreen3] = useState(false);
    const [screen4, setScreen4] = useState(false);

    const onOpenModalScrren1 = () => setScreen1(true);
    const onCloseModalScrren1 = () => setScreen1(false);

    const onOpenModalScrren2 = () => setScreen2(true);
    const onCloseModalScrren2 = () => setScreen2(false);

    const onOpenModalScrren3 = () => setScreen3(true);
    const onCloseModalScrren3 = () => setScreen3(false);

    const onOpenModalScrren4 = () => setScreen4(true);
    const onCloseModalScrren4 = () => setScreen4(false);
    
    
    const video1 = "https://www.youtube.com/embed/smpE8K2ylPw?autoplay=1";
    const proxyUrl = "https://grid-server-ewal.onrender.com/api/proxy-website";

    const websiteLink = proxyUrl;

    return (
        <div className="parent">
            <div className="video-container">
                <iframe width="100%" height="100%" src={websiteLink} title="Website 1" frameBorder="0" allowFullScreen></iframe>
                {/* <button onClick={onOpenModalScrren1}>[]</button> */}
                <img alt="logo" onClick={onOpenModalScrren1} src={m_icon} style={{height : '30px' ,  width : '30px'}} />
                <Modal
                    styles={{
                        modal: {
                            width: '100%', // Specify the desired width
                            height: '90%', // Specify the desired height
                        },
                    }}
                    open={screen1}
                    onClose={onCloseModalScrren1}
                    center
                >
                    <iframe width="100%" height="100%" src={websiteLink} title="Website 1" frameBorder="0" allowFullScreen></iframe>
                </Modal>
            </div>
            <div className="video-container">
                <iframe width="100%" height="100%" src={websiteLink} title="Website 2" frameBorder="0" allowFullScreen></iframe>
                <img alt="logo" onClick={onOpenModalScrren2} src={m_icon} style={{height : '30px' ,  width : '30px'}} />
                <Modal
                    styles={{
                        modal: {
                            width: '100%', // Specify the desired width
                            height: '90%', // Specify the desired height
                        },
                    }}
                    open={screen2}
                    onClose={onCloseModalScrren2}
                    center
                >
                    <iframe width="100%" height="100%" src={websiteLink} title="Website 2" frameBorder="0" allowFullScreen></iframe>
                </Modal>
            </div>
            <div className="video-container">
                <iframe width="100%" height="100%" src={video1} title="Video 3" frameBorder="0" allowFullScreen></iframe>
                <img alt="logo" onClick={onOpenModalScrren3} src={m_icon} style={{height : '30px' ,  width : '30px'}} />
                <Modal
                    styles={{
                        modal: {
                            width: '100%', // Specify the desired width
                            height: '90%', // Specify the desired height
                        },
                    }}
                    open={screen3}
                    onClose={onCloseModalScrren3}
                    center
                >
                    <iframe width="100%" height="100%" src={video1} title="Video 3" frameBorder="0" allowFullScreen></iframe>
                </Modal>
            </div>
            <div className="video-container">
                <iframe width="100%" height="100%" src={video1} title="Video 4" frameBorder="0" allowFullScreen></iframe> 
                <img alt="logo" onClick={onOpenModalScrren4} src={m_icon} style={{height : '30px' ,  width : '30px'}} />
                <Modal
                    styles={{
                        modal: {
                            width: '100%', // Specify the desired width
                            height: '90%', // Specify the desired height
                        },
                    }}
                    open={screen4}
                    onClose={onCloseModalScrren4}
                    center
                >
                    <iframe width="100%" height="100%" src={video1} title="Video 4" frameBorder="0" allowFullScreen></iframe>
                </Modal>
            </div>
        </div>
    );
};

export default Videoframe;
