import React, { Component } from 'react'
import {   Link  } from 'react-router-dom'

class ChinhSachBaoMat extends Component {
    render() {
        return (
            <div className="row">
            <div className="col-3">
                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <Link className="nav-link " id="v-pills-home-tab" data-toggle="pill" to="/noidung/thoathuan" role="tab" aria-controls="v-pills-home" aria-selected="true">Thỏa thuận sử dụng</Link>
                    <Link className="nav-link active" id="v-pills-profile-tab" data-toggle="pill" to="/noidung/baomat" role="tab" aria-controls="v-pills-profile" aria-selected="false">Chính sách bảo mật</Link>
                    <Link className="nav-link" id="v-pills-messages-tab" data-toggle="pill" to="/noidung/faq" role="tab" aria-controls="v-pills-messages" aria-selected="false">FAQ</Link>
                </div>
            </div>
            <div className="col-9">

            <div className="row">
            <div className="col-8">
                <div className="group">
                    <div className="terms-detail">
                        <h1>Chính sách Bảo vệ thông tin cá nhân của người tiêu dùng</h1>
                        <p><strong>Mục đích, phạm vi và nguyên tắc thu thập thông tin</strong></p>
                        <h2 id="main-sec-1">1. MỤC ĐÍCH THU THẬP</h2>
                        <div className="m-section">
                            <div className="section">
                                <p>TIX thu thập thông tin cá nhân nhằm phục vụ cho các mục đích sau:</p>
                                <ul>
                                    <li><strong>Duy Trì Tài Khoản</strong>: để tạo và duy trì tài khoản của thành viên, bao gồm cả các chương trình thành viên thân thiết hoặc các chương trình thưởng đi kèm với tài khoản của thành viên;</li>
                                    <li><strong>Đặt vé</strong>: TIX sẽ dựa trên thông tin thành viên cung cấp để đặt vé cho thành viên.</li>
                                    <li><strong>Dịch Vụ Chăm Sóc Thành viên</strong>: để nhận và phản hồi cho các yêu cầu, khiếu nại và phản hồi của thành viên;</li>
                                    <li><strong>Cá Nhân Hóa</strong>: TIX có thể tổ hợp dữ liệu được thu thập để có một cái nhìn hoàn chỉnh hơn về từng thành viên và từ đó cho phép chúng tôi phục vụ tốt hơn với sự cá nhân hóa mạnh hơn ở các khía cạnh, bao gồm nhưng không giới hạn: (i) để cải thiện và cá nhân hóa trải nghiệm của thành viên trên Ứng dụng TIX (ii) để cải thiện các tiện ích, dịch vụ, điều chỉnh chúng phù hợp với các nhu cầu được cá thể hóa và đi đến những ý tưởng dịch vụ mới (iii) để phục vụ thành viên với những giới thiệu, quảng cáo được điều chỉnh phù hợp với sự quan tâm của thành viên.</li>
                                    <li><strong>An Ninh</strong>: cho các mục đích ngăn ngừa các hoạt động phá hủy tài khoản người dùng của thành viên hoặc các hoạt động giả mạo thành viên.</li>
                                    <li><strong>Theo yêu cầu của pháp luật</strong>: tùy quy định của pháp luật vào từng thời điểm, TIX có thể thu thập, lưu trữ và cung cấp theo yêu cầu của cơ quan nhà nước có thẩm quyền.</li>
                                </ul>
                            </div>
                        </div>
                        <h2 id="main-sec-2">2. PHẠM VI THU THẬP</h2>
                        <div className="m-section">
                            <div className="section">
                                <ul>
                                    <li>Việc cung cấp thông tin cá nhân của thành viên được thực hiện chủ yếu trực tiếp trên Ứng dụng TIX trong quá trình thành viên đăng ký tài khoản và tương tác với TIX (Ví dụ, TIX sử dụng "cookies" giống như nhiều website khác để ghi nhận một số loại thông tin khi trình duyệt web của thành viên truy cập vào TIX hoặc các quảng cáo và các nội dung khác được hiển thị trên TIX, hoặc về TIX trên các website khác..) Các thông tin thu thập chủ yếu bao gồm: Họ tên, ngày tháng năm sinh, địa chỉ, số điện thoại, email, thông tin đăng nhập tài khoản (tên đăng nhập,, địa chỉ đăng nhập,...).</li>
                                    <li>Ngoài ra, khi tải Ứng dụng TIX, Ứng dụng sẽ yêu cầu người dùng cho phép truy cập thêm những thông tin trên thiết bị di động để cung cấp 1 số tính năng nâng cao. Các thông tin dự kiến bao gồm nhưng không giới hạn các nội dung sau:  Vị trí (đề xuất rạp gần nhất, để đưa ra các ưu đãi, điểm chấp nhận thanh toán gần thành viên); … Sau khi nhận được thông báo, Khách hàng được quyền lựa chọn việc cho phép hay không cho phép thu thập thông qua cơ chế của Ứng dụng.</li>
                                </ul>
                            </div>
                        </div>
                        <h2 id="main-sec-3">3. NGUYÊN TẮC THU THẬP VÀ QUẢN LÝ THÔNG TIN</h2>
                        <div className="m-section">
                            <div className="section">
                                <ul>
                                    <li>Thông tin cá nhân của thành viên trên Ứng dụng TIX được TIX cam  kết bảo mật tuyệt đối theo chính sách bảo vệ thông tin cá nhân của TIX, phù hợp với quy định của Luật Bảo về quyền lợi người tiêu dùng. Việc thu thập và sử dụng thông tin của mỗi Thành viên chỉ được thực hiện khi có sự đồng ý của thành viên đó trừ những trường hợp pháp luật có quy định khác. Thành viên có quyền cung cấp thông tin cá nhân cho TIX và có thể thay đổi quyết định đó vào bất cứ lúc nào.</li>
                                    <li>Mọi thông tin cá nhân do thành viên cung cấp sẽ được lưu giữ bởi TIX. Nhân viên và Đối tác của TIX trong quá trình thực hiện các mục đích nêu tại Điểm a Điều này có thể tiếp cận với thông tin của thành viên. Những chủ thể này có trách nhiệm giữ bí mật và chỉ được phép sử dụng thông tin của thành viên cho mục đích được chỉ định, không sử dụng cho mục đích của riêng họ (kể cả tiếp thị trực tiếp) trừ khi được thành viên đồng ý.</li>
                                    <li>Trong trường hợp máy chủ lưu trữ thông tin bị hacker tấn công dẫn đến mất mát dữ liệu cá nhân thành viên, TIX sẽ có trách nhiệm thông báo vụ việc cho cơ quan chức năng điều tra xử lý kịp thời và thông báo cho thành viên được biết.</li>
                                    <li>Trách nhiệm của thành viên trong quá trình cung cấp và quản lý thông tin:</li>
                                    <ul style={{ listStyleType: 'circle', paddingInlineStart: 25 }}>
                                        <li>Đảm bảo tính xác thực, đầy đủ, chính xác, và cập nhật thường xuyên đối với các thông tin cung cấp cho Ứng dụng TIX và chịu trách nhiệm về tính pháp lý của những thông tin đó. TIX không chịu trách nhiệm cũng như không giải quyết mọi khiếu nại có liên quan đến quyền lợi của Thành viên đó nếu xét thấy thông tin cá nhân thành viên đó cung cấp không chính xác.</li>
                                        <li>Bảo mật thông tin và lưu giữ mọi hoạt động sử dụng dịch vụ dưới tên đăng ký, mật khẩu và hộp thư điện tử của mình.</li>
                                        <li>Thông báo kịp thời cho TIX về những hành vi sử dụng trái phép, lạm dụng, vi phạm bảo mật, lưu giữ tên đăng ký và mật khẩu của bên thứ ba để có biện pháp giải quyết phù hợp.</li>
                                    </ul>
                                </ul>
                            </div>
                        </div>
                        <h2 id="main-sec-4">4. PHẠM VI SỬ DỤNG THÔNG TIN</h2>
                        <div className="m-section">
                            <div className="section">
                                <p>Ứng dụng TIX sử dụng thông tin thành viên cung cấp để:</p>
                                <ul>
                                    <li>Xác thực năng lực của thành viên;</li>
                                    <li>Cung cấp đơn hàng đến cho thành viên;</li>
                                    <li>Thông tin gửi cho rạp, kiểm tra thông tin để soát vé;</li>
                                    <li>Gửi các thông báo về các hoạt động trao đổi thông tin giữa các Thành viên và Ứng dụng TIX;</li>
                                    <li>Ngăn ngừa các hoạt động phá hủy tài khoản người dùng của Thành viên hoặc các hoạt động giả mạo Thành viên;</li>
                                    <li>Tiến hành các hoạt động tra cứu và phân tích người dùng nhằm nâng cao chất lượng dịch vụ, quản lý và bảo vệ các thông tin, hệ thống kỹ thuật dịch vụ, đo lường hiệu suất dịch vụ do TIX cung ứng và cải thiện sản phẩm, dịch vụ của TIX.</li>
                                    <li>Liên lạc và giải quyết với thành viên trong những trường hợp đặc biệt;</li>
                                    <li>Không sử dụng thông tin cá nhân của thành viên ngoài mục đích xác nhận và liên hệ có liên quan đến giao dịch tại Ứng dụng TIX;</li>
                                </ul>
                            </div>
                        </div>
                        <h2 id="main-sec-5">5. THỜI GIAN LƯU TRỮ THÔNG TIN</h2>
                        <div className="m-section">
                            <div className="section">
                                <p>Thông tin cá nhân của thành viên sẽ được lưu trữ trên Ứng dụng cho đến khi thành viên có yêu cầu hủy bỏ hoặc thành viên tự đăng nhập và thực hiện hủy bỏ. Trong mọi trường hợp, thông tin cá nhân thành viên sẽ được bảo mật trên máy chủ của TIX theo thời hạn được quy định tại các Pháp luật có liên quan.</p>
                            </div>
                        </div>
                        <h2 id="main-sec-6">6. NHỮNG NGƯỜI HOẶC TỔ CHỨC CÓ THỂ ĐƯỢC TIẾP CẬN VỚI NHỮNG THÔNG TIN ĐÓ</h2>
                        <div className="m-section">
                            <div className="section">
                                <p>Thông tin về thành viên là một phần dữ liệu quan trọng để TIX có thể khai thác và cải thiện trải nghiệm của thành viên. Và hoạt động kinh doanh của TIX không bao gồm việc bán các thông tin đấy cho bên thứ ba. Chúng tôi chỉ cung cấp thông tin thành viên cho các bên được liệt kê dưới đây, hoặc cho bên thứ ba nhằm đảm bảo quyền lợi của thành viên theo những cam kết bảo mật của TIX.</p>
                                <ul>
                                    <li><strong>Nhân viên của TIX</strong>: Trong quá trình vận hành, Nhân viên TIX có thể tiếp cận với thông tin của Thành viên. Những chủ thể này có trách nhiệm giữ bí mật và chỉ được pháp sử dụng thông tin của thành viên cho mục đích được chỉ định.</li>
                                    <li><strong>Đối Tác</strong>: TIX liên kết chặt chẽ với rất nhiều đối tác, tiêu biểu là các rạp chiếu phim. Khi một bên thứ ba liên quan với các giao dịch của thành viên, TIX sẽ chia sẻ những thông tin thành viên liên quan đến giao dịch đó cho bên thứ ba tương ứng.</li>
                                    <li><strong>Nhà cung cấp dịch vụ độc lập</strong>: TIX sử dụng những tổ chức và cá nhân khác để thay mặt TIX thực hiện một số chức năng, như cung cấp dịch vụ thanh toán qua thẻ... Họ có thể tiếp cận những thông tin cá nhân cần thiết để hoàn thành công việc của họ, nhưng không được quyền sử dụng các thông tin cá nhân đó để phục vụ cho mục đích khác.</li>
                                    <li><strong>Bảo vệ TIX và các đối tác khác</strong>: TIX sẽ cung cấp các thông tin tài khoản và các thông tin cá nhân trong trường hợp TIX tin rằng sự cung cấp thông tin này không vi phạm pháp luật; bị bắt buộc hoặc phù hợp với các <a ui-sref="main.term" href="/thoa-thuan-su-dung">Thỏa thuận sử dụng</a> và các thỏa thuận khác; hoặc bảo vệ quyền, tài sản, và sự an toàn của TIX, các thành viên khác, và các đối tượng khác. Sự cung cấp này có thể bao gồm việc trao đổi thông tin với các công ty, tổ chức nhằm chống lại những gian lận và giảm thiểu rủi ro. Tuy nhiên, sự cung cấp này không bao gồm việc bán, cho thuê, chia sẻ, hoặc công bố các thông tin cá nhân vì mục đích thương mại.</li>
                                </ul>
                                <p>Một số trường hợp khác với những trường hợp được đề cập ở trên, thành viên sẽ nhận được thông báo về việc thông tin của bạn có thể được chia sẻ cho bên thứ ba, và bạn có quyền lựa chọn cho phép sự chia sẻ đó hay không.</p>
                            </div>
                        </div>
                        <h2 id="main-sec-7">7. PHƯƠNG TIỆN VÀ CÔNG CỤ ĐỂ NGƯỜI DÙNG TIẾP CẬN VÀ CHỈNH SỬ DỮ LIỆU CÁ NHÂN CỦA MÌNH</h2>
                        <div className="m-section">
                            <div className="section">
                                <ul>
                                    <li>Thành viên có quyền cập nhật, kiểm tra, điều chỉnh hoặc hủy bỏ thông tin cá nhân của mình theo các phương thức mà TIX hỗ trợ tại thời điểm phát sinh nhu cầu cập nhật thông tin hoặc hướng dẫn của TIX tại thời điểm thực hiện cập nhật.</li>
                                    <li>Khi có bất kỳ thay đổi thông tin nào, Thành viên có trách nhiệm thông báo cho TIX việc thay đổi trước ngày áp dụng thay đổi.</li>
                                </ul>
                            </div>
                        </div>
                        <h2 id="main-sec-8">8. ĐỊA CHỈ CỦA ĐƠN VỊ THU THẬP VÀ QUẢN LÝ THÔNG TIN CÁ NHÂN</h2>
                        <div className="m-section">
                            <div className="section">
                                <ul>
                                    <li>Công ty Cổ phần ZION.</li>
                                    <li>Trụ sở chính: Z06, đường số 13, KCX Tân Thuận, Phường Tân Thuận Đông, Q7, HCM.</li>
                                    <li>Email: <a href="mailto:support@tix.vn">support@tix.vn</a> - Hotline: 1900&nbsp;54&nbsp;54&nbsp;36.</li>
                                </ul>
                            </div>
                        </div>
                        <h2 id="main-sec-9">9. THÔNG BÁO VÀ SỬA ĐỔI</h2>
                        <div className="m-section">
                            <div className="section">
                                <p>Khi thành viên truy cập vào TIX, sự truy cập của thành viên và bất kỳ vấn đề phát sinh nào liên quan đến sự bảo mật đều tuân theo các điều khoản trong <i>Chính sách bảo mật</i> này và <a ui-sref="main.term" href="/thoa-thuan-su-dung">Thỏa thuận sử dụng</a>, bao gồm giới hạn thiệt hại, cách giải quyết các vấn đề phát sinh, và việc áp dụng luật Việt Nam. Nếu thành có bất kỳ câu hỏi nào liên quan đến sự bảo mật tại TIX, vui lòng liên lạc với TIX thông qua điện thoại 1900&nbsp;545&nbsp;436. Do TIX liên tục cải thiện dịch vụ và sản phẩm để phục vụ thành viên tốt hơn, nên <i>Chính sách bảo mật</i> và <a ui-sref="main.term" href="/thoa-thuan-su-dung">Thỏa thuận sử dụng</a> sẽ thường xuyên được thay đổi và cập nhật. TIX có thể email thông báo cho thành viên về những thay đổi trong những chính sách. Tuy nhiên, TIX cũng khuyến khích thành viên thường xuyên theo dõi trên website của TIX để cập nhật với những thay đổi trong chính sách của chúng tôi. Trừ trường hợp có văn bản với nội dung khác, <i>Chính sách bảo mật</i> hiện tại của chúng tôi được áp dụng cho tất cả những thông tin mà chúng tôi có về bạn và tài khoản của bạn.</p>
                            </div>
                        </div>
                        <p>Ngoài các quy định ở trên, Thành viên có thể vào phần <a ui-sref="main.faq" href="/faq">FAQ</a> để tham khảo một số câu hỏi tiêu biểu liên quan đến việc bảo mật thông tin trên TIX.</p>
                    </div>
                </div>

            </div>
            <div className="col-4">
                <div className="sidebar">
                    <div className="sidebar-related">
                        <div className="group" style={{ marginTop: 90 }}>
                            <ul id="nav" className="overview">
                                <li><a href="#main-sec-1" className="sidebar-section">MỤC ĐÍCH THU THẬP</a></li>
                                <li><a href="#main-sec-2" className="sidebar-section">PHẠM VI THU THẬP</a></li>
                                <li><a href="#main-sec-3" className="sidebar-section">NGUYÊN TẮC THU THẬP VÀ QUẢN LÝ THÔNG TIN</a></li>
                                <li><a href="#main-sec-4" className="sidebar-section">PHẠM VI SỬ DỤNG THÔNG TIN</a></li>
                                <li><a href="#main-sec-5" className="sidebar-section">THỜI GIAN LƯU TRỮ THÔNG TIN</a></li>
                                <li><a href="#main-sec-6" className="sidebar-section">NHỮNG NGƯỜI HOẶC TỔ CHỨC CÓ THỂ ĐƯỢC TIẾP CẬN VỚI NHỮNG THÔNG TIN ĐÓ</a></li>
                                <li><a href="#main-sec-7" className="sidebar-section">PHƯƠNG TIỆN VÀ CÔNG CỤ ĐỂ NGƯỜI DÙNG TIẾP CẬN VÀ CHỈNH SỬ DỮ LIỆU CÁ NHÂN CỦA MÌNH</a></li>
                                <li><a href="#main-sec-8" className="sidebar-section">ĐỊA CHỈ CỦA ĐƠN VỊ THU THẬP VÀ QUẢN LÝ THÔNG TIN CÁ NHÂN</a></li>
                                <li><a href="#main-sec-9" className="sidebar-section">THÔNG BÁO VÀ SỬA ĐỔI</a></li>
                            </ul>
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

export default ChinhSachBaoMat
