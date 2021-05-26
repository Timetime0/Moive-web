const initialState = {
    danhSachNewPhim: [
        {
            maPhim: 230421,
            tenPhim: "LẬT MẶT: 48H",
            biDanh: "lat-mat-48h",
            trailer: "https://www.youtube.com/watch?v=kBY2k3G6LsM",
            hinhAnh: "/Assets/img/Carousel/latmat.jpg",
            hinhAnhDung: "/Assets/img/Carousel/latmat_dung.jpg",
            moTa: "Chuyện phim kể về Hiền (Võ Thành Tâm) - một cựu vận động viên võ thuật sau khi giải nghệ vì chấn thương đã cùng vợ (Ốc Thanh Vân) và con gái về quê thăm gia đình Lâm (Mạc Văn Khoa). Họ bị cuốn vào một cuộc rượt đuổi với tay phản diện A Dìn (Huỳnh Đông). Để bảo vệ cho gia đình nhỏ, Hiền phải đưa vợ con chạy trốn khắp miền Tây sông nước với sự trợ giúp của người bạn thật thà và hài hước. ",
            maNhom: "GP01",
            phatHanh: "16/04/2021",
            danhGia: 9.3,
            thongtincoban: "Action/Adventure/SF Vietnam",
            Loại: " 2D | Normal | Normal sound | Lồng tiếng",
        },
        {
            maPhim: 230422,
            tenPhim: "THIÊN THẦN HỘ MỆNH",
            biDanh: "thien-than-ho-menh",
            trailer: "https://www.youtube.com/watch?v=1H-2FeFOM08",
            hinhAnh: "/Assets/img/Carousel/thienthan.jpg",
            hinhAnhDung: "/Assets/img/Carousel/thienthan_dung.jpg",
            moTa: 'Cái chết của một cô ca sĩ nổi tiếng dẫn đến sự thành công của một cô ca sĩ trẻ khác. Câu chuyện này có liên quan như thế nào đến sự giúp đỡ của một "thiên thần hộ mệnh"? ',
            maNhom: "GP01",
            phatHanh: "30/04/2021",
            danhGia: 0,
            thongtincoban: "Thriller/Criminal/Horror Vietnam",
            Loại: " 2D | Normal | Normal sound | Lồng tiếng",
        },
        {
            maPhim: 230423,
            tenPhim: "GODZILLA VS. KONG",
            biDanh: "godzilla-kong",
            trailer: "https://www.youtube.com/watch?v=9TxSXabRS5M",
            hinhAnh: "/Assets/img/Carousel/kong.jpg",
            hinhAnhDung: "/Assets/img/Carousel/king_dung.jpg",
            moTa: "Khi hai kẻ thù truyền kiếp gặp nhau trong một trận chiến ngoạn mục, số phận của cả thế giới vẫn còn bị bỏ ngỏ… Bị đưa khỏi Đảo Đầu Lâu, Kong cùng Jia, một cô bé mồ côi có mối liên kết mạnh mẽ với mình và đội bảo vệ đặc biệt hướng về mái nhà mới. Bất ngờ, nhóm đụng độ phải Godzilla hùng mạnh, tạo ra một làn sóng hủy diệt trên toàn cầu. Thực chất, cuộc chiến giữa hai kẻ khổng lồ dưới sự thao túng của các thế lực vô hình mới chỉ là điểm khởi đầu để khám phá những bí ẩn nằm sâu trong tâm Trái đất.",
            maNhom: "GP01",
            phatHanh: "16/04/2021",
            danhGia: 9.6,
            thongtincoban: "Action/Adventure/SF USA",
            Loại: "2D | Normal | Normal sound | Phụ đề,Phụ đề tiếng Việt và tiếng Hàn Quốc",
        },
    ]
}



export const arrNewPhimReducer = (state = initialState, action) => {
    switch (action.type) {

        default: return state
    }
}

