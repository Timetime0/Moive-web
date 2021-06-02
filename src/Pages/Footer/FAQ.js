import React, { Component } from 'react'
import {   Link  } from 'react-router-dom'

class FAQ extends Component {
    render() {
        return (

            <div className="row" style={{paddingTop:'90px'}}>
                <div className="col-3">
                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <Link className="nav-link " id="v-pills-home-tab" data-toggle="pill" to="/noidung/thoathuan" role="tab" aria-controls="v-pills-home" aria-selected="true">Thỏa thuận sử dụng</Link>
                        <Link className="nav-link" id="v-pills-profile-tab" data-toggle="pill" to="/noidung/baomat" role="tab" aria-controls="v-pills-profile" aria-selected="false">Chính sách bảo mật</Link>
                        <Link className="nav-link active" id="v-pills-messages-tab" data-toggle="pill" to="/noidung/faq" role="tab" aria-controls="v-pills-messages" aria-selected="false">FAQ</Link>
                    </div>
                </div>

                <div className="col-9">
                    <div className="row">
                        <div className="col-8">
                            <div className="group">
                                <div className="terms-detail">
                                    <h1 id="timetime"> FAQ - TIX</h1>
                                    <h2 id="section-1">1. TIX là gì?</h2>
                                    <div className="section">
                                        <p>Là ứng dụng trên điện thoại thông minh và website đặt vé xem phim trực tuyến tại các rạp như BHD, Galaxy, CineStar. TIX giúp bạn mua vé trước để không phải đến rạp sớm xếp hàng mua vé, hoặc lo lắng về việc hết vé. Bên cạnh đó, TIX còn cập nhật thường xuyên các thông tin phim như trailer, tin tức, thông tin rạp, suất chiếu, các đánh giá phim, chương trình khuyến mãi từ rạp và của riêng TIX dành cho người sử dụng.</p>
                                        <p>Truy cập website TIX tại <a href="https://tix.vn">tix.vn</a></p>
                                        <p>Ứng dụng TIX hiện có trên các hệ điều hành: iOS, Android. Bạn có thể tải nhanh về điện thoại bằng cách truy cập <a href="https://tix.vn/app/download">tix.vn/app/download</a></p>
                                    </div>
                                    <h2 id="section-2">2. Tại sao tôi không xem phim được tại TIX?</h2>
                                    <div className="section">
                                        <p>TIX gồm có ứng dụng trên điện thoại và website, là nơi giới thiệu thông tin và hỗ trợ đặt vé cho các phim chiếu tại rạp, không phải là nơi xem phim trực tuyến không bản quyền.</p>
                                    </div>
                                    <h2 id="section-3">3. Tôi có thể đặt giữ vé trước qua điện thoại và thanh toán sau khi nhận vé không?</h2>
                                    <div className="section">
                                        <p>TIX chỉ hỗ trợ đặt vé trực tuyến, không hỗ trợ giữ vé qua điện thoại. Bạn vui lòng chọn ghế và thanh toán trước cho vé.</p>
                                    </div>
                                    <h2 id="section-4">4. Tôi có thể mua vé dành cho trẻ em, học sinh/sinh viên với giá ưu đãi như mua trực tiếp tại rạp không?</h2>
                                    <div className="section">
                                        <p>TIX chỉ áp dụng duy nhất 01 loại giá vé dành cho người lớn khi mua vé trực tuyến, với các loại vé khác bạn vui lòng mua vé trực tiếp tại rạp.</p>
                                    </div>
                                    <h2 id="section-5">5. Làm sao để tôi có thể đặt vé và thanh toán trực tuyến?</h2>
                                    <div className="section">
                                        <p>Để đặt vé trực tuyến, bạn vui lòng thực hiện các bước sau:</p>
                                        <ul>
                                            <li>Vào phần Lịch chiếu, bạn có thể chọn theo tựa phim, hoặc theo rạp chiếu.</li>
                                            <li>Tiến hành chọn suất chiếu, ghế.</li>
                                            <li>Điền thông tin của người nhận vé, sau đó bạn chọn hình thức thanh toán phù hợp và tiến hành thanh toán trực tuyến cho vé.</li>
                                        </ul>
                                        <p>Các hình thức thanh toán trực tuyến TIX đang áp dụng:</p>
                                        <ul>
                                            <li>Thanh toán qua ZaloPay</li>
                                            <li>Thanh toán qua ATM nội địa</li>
                                            <li>Thanh toán qua Visa/Master</li>
                                        </ul>
                                    </div>
                                    <h2 id="section-6">6. Mã giảm giá (e-voucher) có dùng được trên website TIX không?</h2>
                                    <div className="section">
                                        <p>Mã giảm giá chỉ có thể dùng được trên ứng dụng TIX, không thể áp dụng trên website của TIX.</p>
                                    </div>
                                    <h2 id="section-7">7. Làm sao để nhập mã giảm giá trên ứng dụng TIX?</h2>
                                    <div className="section">
                                        <ul>
                                            <li>Mở ứng dụng (app) – Chọn phim – Bấm Mua vé – Chọn suất chiếu – Chọn ghế – Thanh toán</li>
                                            <li>Nhập mã code vào ô "Mã giảm giá".</li>
                                            <li>Điền đầy đủ thông tin và Thanh toán.</li>
                                        </ul>
                                        {/* <p>Bạn có thể tham khảo cách nhập mã giảm giá tại link <a href="http://www.tix.vn/e-voucher">www.tix.vn/e-voucher</a></p> */}
                                    </div>
                                    <h2 id="section-8">8. Tôi đã nhập thông tin thẻ ngân hàng nhưng vẫn không thanh toán được?</h2>
                                    <div className="section">
                                        <p>Thẻ ngân hàng bạn đang sử dụng phải được đăng ký dịch vụ thanh toán trực tuyến với ngân hàng (Internet Banking) để thực hiện thanh toán. Nếu bạn đã đăng ký dịch vụ này mà vẫn không thanh toán được, vui lòng liên hệ tổng đài 1900 545 436 để TIX kiểm tra và hỗ trợ ngay cho bạn.</p>
                                    </div>
                                    <h2 id="section-9">9. Sau khi đặt vé trực tuyến, làm sao để tôi có thể vào xem phim?</h2>
                                    <div className="section">
                                        <p>Ngay sau khi đặt vé trực tuyến thành công, TIX sẽ gửi mã vé qua SMS và Email mà bạn đăng ký nhận khi đặt vé. Sau đó, bạn vui lòng đến quầy dịch vụ khách hàng tại rạp, xuất trình mã vé để đổi sang vé giấy vào xem phim.</p>
                                        <p>Trong trường hợp không nhận được bất kỳ thông tin mã vé nào từ TIX, bạn vui lòng liên hệ tổng đài 1900 545 436 để TIX kiểm tra và hỗ trợ ngay cho bạn.</p>
                                    </div>
                                    <h2 id="section-10">10. Sau khi đặt vé thành công, tôi phải tới rạp lấy vé trước giờ chiếu bao nhiêu phút?</h2>
                                    <div className="section">
                                        <p>Với vé đã được thanh toán thành công, bạn chỉ cần đến rạp trước giờ chiếu để lấy vé. Tuy nhiên, TIX khuyến khích bạn nên sắp xếp thời gian đến lấy vé sớm để tránh các tình huống ngoài dự kiến xảy ra.</p>
                                    </div>
                                    <h2 id="section-11">11. Tôi có thể hủy/đổi vé sau khi đã đặt vé thành công được không?</h2>
                                    <div className="section">
                                        <p>Rất tiếc, TIX chưa hỗ trợ dịch vụ hủy hay thay đổi thông tin vé bạn đã thanh toán thành công. Trước khi thanh toán cho vé, bạn nên xác nhận lại Tên phim, Giờ chiếu và Rạp chiếu của bộ phim bạn muốn xem.</p>
                                    </div>
                                    <h2 id="section-12">12. Tôi đã nhận được mã vé nhưng lỡ xóa mất tin nhắn chứa mã vé, tôi phải làm sao?</h2>
                                    <div className="section">
                                        <p>Bạn có thể kiểm tra mã vé trong Email, chụp lại màn hình có thông tin mã vé và đến quầy dịch vụ khách hàng tại rạp, xuất trình mã vé này để đổi sang vé giấy vào xem phim. Hoặc bạn có thể liên hệ tổng đài 1900 545 436 để TIX hỗ trợ xác nhận và gửi mã vé lại cho bạn.</p>
                                    </div>
                                    <h2 id="section-13">13. Mua vé trên TIX có thể tích điểm thành viên của các rạp không?</h2>
                                    <div className="section">
                                        <p>Hiện tại TIX đã có thể kết nối thẻ thành viên với rạp BHD và Galaxy trên ứng dụng TIX. Rất đơn giản chỉ với 3 bước sau:</p><p>
                                        </p><p><u>Bước 1:</u> Đăng nhập hoặc đăng ký thành viên TIX</p>
                                        <p><u>Bước 2:</u> Vào mục tài khoản cá nhân</p>
                                        <p><u>Bước 3:</u> Chọn mục “Thẻ thành viên của rạp BHD Star, Galaxy” và tiến hành nhập tài khoản đã đăng ký của rạp</p>
                                        <p>Chỉ 1 lần thực hiện duy nhất, tất cả điểm, visit của những lần mua vé sau sẽ được tự động được cập nhật.</p>
                                    </div>
                                    <h2 id="section-14">14. TIX có điểm thành viên không? Làm sao để có?</h2>
                                    <div className="section">
                                        <p>TIX có điểm thành viên, điểm này có tên gọi là <strong>TIX</strong>. Mỗi điểm <strong>TIX</strong> = 1000 và có thể dùng để đổi quà trên TixShop. Miễn là số <strong>TIX</strong> không nhỏ hơn giá trị giao dịch được thực hiện.</p>
                                        <p><strong>Lưu ý:</strong></p>
                                        <ul>
                                            <li>Hiện tại khi đặt vé xem phim tại app và website (www.TIX.vn) đều nhận được điểm <strong>TIX</strong>. Tuy nhiên khi đổi <strong>TIX</strong>, khách hàng cần giao dịch trên <a href="http://www.tix.vn/app?utm_source=tix&utm_medium=promotion_detail&utm_campaign=payoo" target="_blank" rel="noreferrer">app</a>.</li>
                                            <li><strong>TIX</strong> được ghi nhận theo mỗi tài khoản riêng biệt sau khi khách hàng đăng nhập tại TIX (bằng Zalo hay Facebook, Gmail). Không thể liên kết nhiều tài khoản hoặc trao đổi <strong>TIX</strong> giữa các tài khoản.</li>
                                        </ul>
                                    </div>
                                    <h2 id="section-15">15. TIX có đăng bài bán bắp nước online của rạp Galaxy, tại sao trên ứng dụng TIX tôi lại không thấy?</h2>
                                    <div className="section">
                                        <p>Bạn vui lòng cập nhật ứng dụng TIX lên phiên bản mới nhất sẽ thấy trang chọn combo bắp nước của rạp Galaxy.</p>
                                    </div>
                                    <h2 id="section-16">16. Tại sao điểm Tix của tôi bị trừ?</h2>
                                    <div className="section">
                                        <p>Điểm Tix được cộng vào tài khoản của bạn cho mỗi giao dịch khi bạn thanh toán thành công trên TIX. Mỗi điểm Tix có thời hạn sử dụng là 1 năm kể từ ngày phát sinh giao dịch thành công, nếu không được sử dụng Tix sẽ bị trừ và mất đi sau 1 năm</p>
                                        <p>Ví dụ: Bạn mua vé vào ngày 1/1/2019 thì Tix sẽ tồn tại đến 31/12/2019</p>
                                    </div>
                                    <h2 id="section-17">17. Làm sao để tham gia các trò chơi, cập nhật tin tức thường xuyên từ TIX?</h2>
                                    <div className="section">
                                        <p>Các cuộc thi, giải thưởng, thông tin quà tặng, v.v từ TIX được cập nhật thường xuyên tại các trang cộng đồng của TIX.</p>
                                        <p>Bạn có thể tham gia vào các cộng đồng này như sau:</p>
                                        <ul>
                                            <li>Facebook: <a href="https://www.facebook.com/tix.vn" rel="noreferrer" target="_blank">https://www.facebook.com/tix.vn</a></li>
                                            <li>Instagram: <a href="https://www.instagram.com/atixbox/" rel="noreferrer" target="_blank">https://www.instagram.com/atixbox/</a></li>
                                            <li>Zalo:<br />
                                                <p>- Cách 1: Mở app Zalo – vào Zalo page – Nhập TIX trên thanh Tìm Kiếm.</p>
                                                <p>- Cách 2: Quét mã QR code để vào Zalo page của TIX.</p>
                                                <p align="center"><img src="https://s3img.vcdn.vn/123phim/2017/12/7a5717b3506a1d021d45ef65bfed671b.png" style={{ width: '200px !important' }} alt="Zalo Page TIX QR code" /></p>
                                            </li>
                                        </ul>
                                    </div>
                                    <h2 id="section-18">18. Bình luận, đánh giá, và những nội dung khác</h2>
                                    <div className="section">
                                        <p>Khách hàng có thể đăng tải các bình luận, đánh giá và những nội dung khác; và gửi các gợi ý, ý tưởng, bình luận, câu hỏi, hoặc những loại thông tin khác nếu như những thông tin này không chứa các nội dung bất hợp pháp, đồi trụy, đe dọa, phỉ báng, xâm phạm quyền riêng tư cá nhân, xâm phạm quyền sở hữu trí tuệ, hoặc những nội dung gây hại cho bên thứ ba, hoặc những nội dung không phù hợp với thuần phong mỹ tục, và không chứa virut, nội dung vận động chính trị, nội dung mang tính thương mại, hoặc bất kỳ hình thức thư rác nào.</p>
                                        <p>Khi bạn đăng tải thông tin hoặc gửi các loại tài liệu cho TIX, thì TIX có toàn quyền sử dụng, sao chép, thay đổi, biên dịch, công bố, hiển thị nội dung đó cho tất cả mọi người dưới bất kỳ hình thức nào trừ trường hợp có thỏa thuận khác giữa TIX và người dùng. Đồng thời, bạn cũng cho phép TIX có quyền được sử dụng tên đi kèm với nội dung mà bạn gửi hoặc đăng tải. Bạn đảm bảo rằng bạn sở hữu và có toàn quyền sử dụng nội dung mà bạn đăng tải; rằng nội dung được đăng tải là chính xác; rằng việc sử dụng các nội dung bạn cung cấp không vi phạm Thỏa thuận sử dụng này và không gây hại cho bên thứ ba nào; và rằng bạn sẽ bồi thường cho TIX nếu như có bất kỳ khiếu kiện nào phát sinh từ những nội dung mà bạn cung cấp. TIX có quyền nhưng không phải là nghĩa vụ kiểm soát và thay đổi hoặc xóa bỏ bất kỳ nội dung nào. TIX không chịu bất kỳ trách nhiệm pháp lý nào cho những nội dung được đăng tải từ người dùng hoặc bất kỳ bên thứ 3 nào.</p>
                                    </div>
                                    <h2 id="section-19">19. Giá cả</h2>
                                    <div className="section">
                                        <p>Trừ phi có ghi chú khác bằng văn bản, mức giá được hiển thị cho mỗi loại sản phẩm trên TIX là mức giá bán lẻ cuối cùng của sản phẩm dựa trên thông tin từ nhà cung cấp dịch vụ.</p>
                                        <p>Chúng tôi không cam kết mức giá của chỗ ngồi bạn đặt sẽ không thay đổi cho đến khi bạn đặt vé. Tuy nhiên, đối với những chỗ ngồi bị sai giá, nếu như mức giá của chỗ ngồi trên thực tế cao hơn mức giá hiển thị trên TIX, thì chúng tôi sẽ liên lạc trực tiếp với bạn về vấn đề này.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-4">
                            <div className="sidebar">
                                <div className="sidebar-related">
                                    <div className="group" style={{ marginTop: 90 }}>
                                        <ol id="nav" className="overview">
                                            <li><a href="#section-1" className="sidebar-section">TIX là gì?</a></li>
                                            <li><a href="#section-2" className="sidebar-section">Tại sao tôi không xem phim được tại TIX?</a></li>
                                            <li><a href="#section-3" className="sidebar-section">Tôi có thể đặt giữ vé trước qua điện thoại và thanh toán sau khi nhận vé không?</a></li>
                                            <li><a href="#section-4" className="sidebar-section">Tôi có thể mua vé dành cho trẻ em, học sinh/sinh viên với giá ưu đãi như mua trực tiếp tại rạp không?</a></li>
                                            <li><a href="#section-5" className="sidebar-section">Làm sao để tôi có thể đặt vé và thanh toán trực tuyến?</a></li>
                                            <li><a href="#section-6" className="sidebar-section">Mã giảm giá (e-voucher) có dùng được trên website TIX không?</a></li>
                                            <li><a href="#section-7" className="sidebar-section">Làm sao để nhập mã giảm giá trên ứng dụng TIX?</a></li>
                                            <li><a href="#section-8" className="sidebar-section">Tôi đã nhập thông tin thẻ ngân hàng nhưng vẫn không thanh toán được?</a></li>
                                            <li><a href="#section-9" className="sidebar-section">Sau khi đặt vé trực tuyến, làm sao để tôi có thể vào xem phim?</a></li>
                                            <li><a href="#section-10" className="sidebar-section">Sau khi đặt vé thành công, tôi phải tới rạp lấy vé trước giờ chiếu bao nhiêu phút?</a></li>
                                            <li><a href="#section-11" className="sidebar-section">Tôi có thể hủy/đổi vé sau khi đã đặt vé thành công được không?</a></li>
                                            <li><a href="#section-12" className="sidebar-section">Tôi đã nhận được mã vé nhưng lỡ xóa mất tin nhắn chứa mã vé, tôi phải làm sao?</a></li>
                                            <li><a href="#section-13" className="sidebar-section">Mua vé trên TIX có thể tích điểm thành viên của các rạp không?</a></li>
                                            <li><a href="#section-14" className="sidebar-section">TIX có điểm thành viên không? Làm sao để có?</a></li>
                                            <li><a href="#section-15" className="sidebar-section">TIX có đăng bài bán bắp nước online của rạp Galaxy, tại sao trên ứng dụng TIX tôi lại không thấy?</a></li>
                                            <li><a href="#section-16" className="sidebar-section">Tại sao điểm Tix của tôi bị trừ?</a></li>
                                            <li><a href="#section-17" className="sidebar-section">Làm sao để tham gia các trò chơi, cập nhật tin tức thường xuyên từ TIX?</a></li>
                                            <li><a href="#section-18" className="sidebar-section">Bình luận, đánh giá, và những nội dung khác</a></li>
                                            <li><a href="#section-19" className="sidebar-section">Giá cả</a></li>
                                        </ol>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        )
    }

    goToTheHeader = ()=>{
        return window.$('html,body').scrollTop(0);
    }

    componentDidMount(){
        this.goToTheHeader()
    }
}

export default FAQ






