const initialState = {
    dienAnh :[
        {
            hinhAnh: '/Assets/img/TinTuc/1.png', noiDungChinh:
                'Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất',
            noiDungPhu: 'Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans hâm mộ'
        },
        {
            hinhAnh: '/Assets/img/TinTuc/2.png', noiDungChinh:
                '[MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ] -  GỌI TÊN NHỮNG PHIM ĐIỆN ẢNH NỔI TIẾNG ĐƯỢC CHUYỂN THỂ TỪ CÁC TỰA GAME ĐÌNH ĐÁM',
            noiDungPhu: 'Bên cạnh những kịch bản gốc mới mẻ và đầy bất ngờ, Hollywood cũng không thiếu những tác phẩm đình đám được chuyển thể từ tiểu thuyết, phim hoạt hình, hay thậm chí là cả trò chơi điện tử.'
        },
        {
            hinhAnh: '/Assets/img/TinTuc/3.png', noiDungChinh:
                'PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan và màn trả thù đàn ông để đời',
            noiDungPhu: 'Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở hạng mục nữ chính xuất sắc nhất cho vai diễn "đẫm máu" nhất sự nghiệp của cô trong phim Promising Young Woman (tựa Việt: Cô Gái Trẻ Hứa Hẹn). '
        },
        {
            hinhAnh: '/Assets/img/TinTuc/4.png', noiDungChinh:
                'VỪA ĐẸP LẠI VỪA TÀI NĂNG, DÀN SAO NAM CỦA PHIM “BÀN TAY DIỆT QUỶ” ĐẢM BẢO ĐỐN TIM HỘI CHỊ EM',
            noiDungPhu: 'Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao về năng lực diễn xuất là Park Seo Joon, Woo Do Hwan và Choi Woo Sik, tác phẩm kinh dị – hành động “Bàn Tay Diệt Quỷ” hứa hẹn sẽ làm cho hội chị em phải mê mẩn vào tháng tới.'
        },
        {
            hinhAnh: '/Assets/img/TinTuc/1.1.jpg', noiDungChinh:
            'Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn',
            noiDungPhu: ''
        },
        {
            hinhAnh: '/Assets/img/TinTuc/1.2.png', noiDungChinh:
                '“Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành',
            noiDungPhu: ''
        },
        {
            hinhAnh: '/Assets/img/TinTuc/1.3.png', noiDungChinh:
                'Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công chiếu ',
            noiDungPhu: ''
        },
        {
            hinhAnh: '/Assets/img/TinTuc/1.4.jpg', noiDungChinh:
                'Ngô Thanh Vân chính thức khởi động cuộc thi thiết kết trang phục cho siêu anh hùng đầu tiên của Việt Nam - ViNAMAn',
            noiDungPhu: ''
        },


        {
            hinhAnh: '/Assets/img/TinTuc/5.png', noiDungChinh:
                '[ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị Antebellum: Bẫy Thực Tại Kinh Hoàng',
            noiDungPhu: 'Không đi theo lối mòn máu me, hù dọa mà đầu tư khai thác những mảng tối của xã hội trên nền một câu chuyện kinh dị, có sự tham gia của nhà sản xuất đã làm nên thành công của loạt tác phẩm ấn tượng “Get Out”, “Us” hay “BlacKkKlansman”, và còn nhiều lý do khác khiến người yêu phim không thể bỏ lỡ Ante'
        },
        {
            hinhAnh: '/Assets/img/TinTuc/6.png', noiDungChinh:
                ' Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim đứng đầu doanh thu tại Hàn Quốc mùa dịch',
            noiDungPhu: 'Vượt mặt Peninsula, Ác Quỷ Đối Đầu trở thành phim ăn khách nhất mùa hè 2020 tại Hàn Quốc. Chỉ sau 12 ngày, Ác Quỷ Đối Đầu chạm điểm hoà vốn với 3.5 triệu lượt xem. Ác Quỷ Đối Đầu giữ vững vị trí top 1 doanh thu 2 tuần liên tiếp tại quê nhà Hàn Quốc'
        },
        {
            hinhAnh: '/Assets/img/TinTuc/7.png', noiDungChinh:
                'Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher Nolan',
            noiDungPhu: 'Làng phim đương đại những năm qua chứng kiến sự lên ngôi của cái tên Christopher Nolan, được biết tới như một trong những đạo diễn thiên tài với khả năng tạo ra siêu phẩm bạc tỉ chất lượng.  '
        },
        {
            hinhAnh: '/Assets/img/TinTuc/hinh.png', noiDungChinh:
                'Truy Cùng Giết Tận - Cuộc tái ngộ của hai "ông hoàng phòng vé" xứ Hàn',
            noiDungPhu: 'Sau 7 năm kể từ New World – bộ phim đạt thành tích hơn 4.68 triệu vé, hai tên tuổi lão làng trong làng điện ảnh Hàn Quốc mới tiếp tục tái hợp trong Truy Cùng Giết Tận – một bộ phim hành động siêu “nặng đô”.'
        },
        {
            hinhAnh: '/Assets/img/TinTuc/2.1.png', noiDungChinh:
            '6 đạo diễn tỉ đô làm nên thành công của những bom tấn đình đám nhất Hollywood',
            noiDungPhu: ''
        },
        {
            hinhAnh: '/Assets/img/TinTuc/2.2.png', noiDungChinh:
                'Gái Già Lắm Chiêu V – Những cuộc đời vương giả',
            noiDungPhu: ''
        },
        {
            hinhAnh: '/Assets/img/TinTuc/2.3.png', noiDungChinh:
                'Kaity Nguyễn trở thành mỹ nhân mới của vũ trụ Gái Già Lắm Chiêu',
            noiDungPhu: ''
        },
        {
            hinhAnh: '/Assets/img/TinTuc/2.4.png', noiDungChinh:
                '5 lý do khiến bạn không thể bỏ qua bộ phim Cậu Bé Người Gỗ Pinocchio',
            noiDungPhu: ''
        },




    ],


}

export const arrTinTucReducer = (state = initialState, action) => {
    switch (action.type) {


        default: { return state}
           
    }
}

