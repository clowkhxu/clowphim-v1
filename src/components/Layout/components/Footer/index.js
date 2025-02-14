import { useState } from 'react'
import clsx from 'clsx'
import styles from './Footer.module.scss'
import { showInfoMessage } from '../toastMessage'

function Footer() {
    const [valueSubmid, setValueSubmit] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (valueSubmid === '') {
            showInfoMessage('Chưa nhập lời nhắn!')
            return
        }
        const subject = encodeURIComponent('Xin chào tôi đến từ PHOFLIX!')
        const body = encodeURIComponent(valueSubmid)
        window.location.href = `mailto:qviet092@gmail.com?subject=${subject}&body=${body}`
    }

    return (
        <footer>
            <div className={styles.footer__row}>
                <div className={styles.footer__column}>
                    <h3>Về chúng tôi</h3>
                    <p>CLOWPHIM - Được thực hiện bởi Nhan Quốc Việt, là sinh viên Công nghệ thông tin tại trường Đại học Sư phạm Kỹ thuật Vĩnh Long. Trang web đem đến trải nghiệm xem phim mượt mà, không quảng cáo làm phiền. Tận hưởng bộ sưu tập phong phú từ mọi thể loại, không giới hạn, không gò bó. Chỉ cần tập trung vào việc thưởng thức và khám phá, PHOFLIX sẽ lo phần còn lại.</p>
                </div>
                <div className={styles.footer__column}>
                    <h3>Mạng xã hội</h3>
                    <ul>
                        <li>
                            <a title='CLOWPHIM trên Facebook' href="#" target="_blank">
                                <i className="fa-brands fa-square-facebook"></i>
                                <span>Facebook</span>
                            </a>

                        </li>
                        <li>
                            <a title='CLOWPHIM trên Instagram' href="#" target="_blank">
                                <i className="fa-brands fa-square-instagram"></i>
                                <span>Instagram</span>
                            </a>
                        </li>
                        <li>
                            <a title='CLOWPHIM trên Github' href="#" target="_blank">
                                <i className="fa-brands fa-square-github"></i>
                                <span>Github</span>
                            </a>
                        </li>
                        <li>
                            <a title='CLOWPHIM trên Tiktok' href="#" target="_blank">
                                <i className="fa-brands fa-tiktok"></i>
                                <span>Tiktok</span>
                            </a>
                        </li>
                        <li>
                            <a title='PHOFLIX trên Telegram' href="#" target="_blank">
                                <i className="fa-brands fa-telegram"></i>
                                <span>Telegram</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.footer__column}>
                    <h3>Nguồn phim ở các website</h3>
                    <p>
                        Tất cả nội dung của trang web này đều được tìm kiếm và thu thập ở các trang web phát video trực tuyến chính thống trên Internet, cũng như không cung cấp phát trực tuyến chính hãng.
                        Nếu quyền lợi của bạn bị vi phạm, hãy liên hệ với chúng tôi. Chúng tôi sẽ xử lý và xóa các nội dung liên quan đó kịp thời. Xin cảm ơn!
                    </p>
                </div>
                <div className={styles.footer__column}>
                    <h3>Gửi phản hồi</h3>
                    <form className={styles.footer__form}>
                        <label>
                            <i className="fa-regular fa-message"></i>
                            Lời nhắn
                        </label>
                        <textarea
                            value={valueSubmid}
                            onChange={(e) => setValueSubmit(e.target.value)}
                            placeholder='Hãy phản hồi một cách văn minh và lịch sự!'>
                        </textarea>

                        <button
                            onClick={(e) => handleSubmit(e)}
                            className={clsx('btn', 'btn--primary')}
                        >
                            Gửi
                        </button>
                    </form>
                </div>
            </div>
            <div className={styles.footer__row}>
                <p className={styles.footer__copyright}>© 2025 - CLOWPHIM. Web xem phim chất lượng, không quảng cáo làm phiền.</p>
            </div>
        </footer>
    )
}

export default Footer
