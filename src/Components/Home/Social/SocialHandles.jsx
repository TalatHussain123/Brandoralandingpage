import React from 'react'
import { Icon } from '@iconify/react';
function SocialHandles() {
    return (
        <>
            <div className="socialHandles">
                <div className="socialLinks">
                    <ul className="socialsV">
                        <li className="sLinkV">
                            <a href="https://www.instagram.com/brandora2021" className="sLink" target={'_blank'}>
                                <Icon icon={'ant-design:instagram-outlined'} />
                            </a>
                        </li>
                        <li className="sLinkV">
                            <a href="https://facebook.com/brandora2021" className="sLink" target={'_blank'}>
                                <Icon icon={'bxl:facebook'} />
                            </a>
                        </li>
                        <li className="sLinkV">
                            <a href="https://www.behance.net/brandora2021" className="sLink" target={'_blank'}>
                                <Icon icon={'ant-design:behance-outlined'} />
                            </a>
                        </li>
                        <li className="sLinkV">
                            <a href="https://www.linkedin.com/company/brandora2021/" className="sLink" target={'_blank'}>
                                <Icon icon={'akar-icons:linkedin-fill'} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default React.memo(SocialHandles)