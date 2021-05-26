import React, { Component } from 'react'

class Brand extends Component {
    render() {
        return (
            <div>
                <div ui-view="content" id="mainContent" className="container-fluid ng-scope m-0 p-0">
                    <div ui-view className="ng-scope">
                        <div id="guideline" className="ng-scope">
                    <section className="container-fluid" id="showing">
                        <section className="container-fluid m-0 p-0">
                            <div className=" header row py-5 text-white"  style={{backgroundColor:'#fb4226'}}>
                                <h1 className="text-center  col-12">BRAND GUIDELINES</h1><br></br>
                                <h6 className="text-center col-12">Chào bạn!</h6>
                                <p className="text-center col-12">Sau đây là một số hướng dẫn về cách sử dụng đúng chuẩn Logo, App icon, Font của TIX. Cảm ơn bạn đã dành thời gian quan tâm đến sản phẩm của chúng tôi.</p>
                            </div>
                            <div className="main row">
                                <div id="logoDetail" className="row">
                                    <div className="row detailHeader container m-auto">
                                        <div className="col-sm-4 col-xs-12 headerContain">
                                            <div className="content m-5">
                                                <h2 className="">Logo <br />TIX</h2>
                                                <img src="/Assets/img/Brand/arrow-red.png" alt="arrow" className="arrow-red" />
                                            </div>
                                        </div>
                                        <div className="col-sm-4 col-xs-6 imgContain">
                                            <img src="/Assets/img/Brand/1.png" alt="1" />
                                        </div>
                                        <div className="col-sm-4 col-xs-6 imgContain">
                                            <img src="/Assets/img/Brand/2.png" alt="2" />
                                        </div>
                                    </div>
                                    <div className="row detailContent container  m-auto">
                                        <div className="col-sm-6 col-xs-12 list">
                                            <ul>
                                                <li>Nền đỏ sử dụng khi background là màu tối hoặc sáng (trừ màu đỏ)</li>
                                                <li>Nền trắng dùng khi background là màu đỏ hoặc màu tối</li>
                                                <li>Dùng làm icon chính</li>
                                                <li>Khoảng cách từ biên tới logo = 1/3 kích thước logo</li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-3 col-xs-12 sample">
                                            <div className="row">
                                                <img style={{height:60}} src="/Assets/img/Brand/a.png" alt="a" className="col-sm-4 col-xs-4 sampleImg" />
                                                <div className="col-sm-8 col-xs-8 detail">
                                                    <p><b>White</b></p>
                                                    <p>#F8F8F8</p>
                                                    <p>CMYK: 2 1 1 0</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <img style={{height:60}} src="/Assets/img/Brand/b.png" alt="b" className="col-sm-4 col-xs-4 sampleImg" />
                                                <div className="col-sm-8 col-xs-8 detail">
                                                    <p><b>Light red</b></p>
                                                    <p>#F5DDDA</p>
                                                    <p>CMYK: 2 14 9 0</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <img style={{height:60}} src="/Assets/img/Brand/c.png" alt="c" className="col-sm-4 col-xs-4 sampleImg" />
                                                <div className="col-sm-8 col-xs-8 detail">
                                                    <p><b>Shadow</b></p>
                                                    <p>#000000</p>
                                                    <p>Opacity: 10%</p>
                                                    <p>Blur: 1px</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3 col-xs-12 sample">
                                            <div className="row">
                                                <img style={{height:60}} src="/Assets/img/Brand/d.png" alt="d" className="col-sm-4 col-xs-4 sampleImg" />
                                                <div className="col-sm-8 col-xs-8 detail">
                                                    <p><b>Main Color</b></p>
                                                    <p>#FB4226</p>
                                                    <p>CMYK: 0 90 93 0</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <img style={{height:60}} src="/Assets/img/Brand/e.png" alt="e" className="col-sm-4 col-xs-4 sampleImg" />
                                                <div className="col-sm-8 col-xs-8 detail">
                                                    <p><b>Deep red</b></p>
                                                    <p>#E4362B</p>
                                                    <p>CMYK: 4 93 95 0</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="fontDetail" className="row  m-auto">
                                    <div className="row detailHeader">
                                        <div className="col-sm-4 col-xs-12 headerContain">
                                            <div className="content">
                                                <h2 className="title">Font <br />thương hiệu</h2>
                                                <img src="/Assets/img/Brand/arrow-red.png" alt="arrow" className="arrow-red" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row detailContent">
                                    
                                        <div className="col-sm-7 col-xs-12">
                                            <p>Bộ font được dùng cho thương hiệu là font chữ không chân, được bo tròn góc.</p>
                                            <p>Font chữ được sử dụng: <strong>GOTHAM ULTRA</strong></p>
                                        </div>
                                        <div className="col-sm-5 col-xs-12">
                                            <strong style={{ fontFamily: '"Gotham Ultra"', fontSize: '1.5em' }}>
                                                Aa Bb Cc Dd Ee 1234<br />Gotham Ultra
                    </strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer row text-white py-5" style={{backgroundColor:'#fb4226'}}>
                                <h1 className="text-center title col-12 c">DOWNLOAD FILES</h1>
                                <hr  className="col-12"/>
                                <h5 className="text-center col-12">Chúng tôi cung cấp tất cả các file gốc thương hiệu TIX ở đây, bạn tải về để sử dụng nhé!</h5>
                                <div className="row">
                                    <div className="col-sm-6 col-xs-12 downBack">
                                        <a className="col-sm-12 col-xs-12 btnBig btn btn-default my-3" href="https://s3img.vcdn.vn/123phim/2018/09/576fec996d87f6fec80c4e397d4223de.png" style={{ color: '#FB4226' }} download>
                                            <div className="bigRed m-auto" style={{backgroundColor:'#fff', borderRadius:'25px', width: 400}}>
                                                <img style={{width:100}} src="https://s3img.vcdn.vn/123phim/2018/09/576fec996d87f6fec80c4e397d4223de.png" alt="Logo_red" className="logoDown" />
                                                <span>Red Logo(.png)</span>
                                            </div>
                                        </a>
                                        <a className="col-sm-6 col-xs-6 btn btn-default px-5" href="/brand-guideline/r3" style={{ color: '#FB4226',backgroundColor:'#fff',  borderRadius:'25px'}} download="red-logo" target="_blank">
                                            <img style={{width:100,}} src="/Assets/img/Brand/pts_icon.png" alt="pts" className="mini" />
                                                <span>PTS(.psd)</span>
                                        </a>
                                        <a className="col-sm-6 col-xs-6 btn btn-default px-5" href="/brand-guideline/r2" style={{ color: '#FB4226',backgroundColor:'#fff',  borderRadius:'25px'}} download="red-icon" target="_blank">
                                            <img style={{width:100,}} src="/Assets/img/Brand/ai_icon.png" alt="ai"  className="mini" />
                                            <span>SVG(.ai)</span>
                                        </a>
                                    </div>
                                    <div className="col-sm-6 col-xs-12 downBack">
                                        <a className="col-sm-12 col-xs-12 btnBig btn  my-3" href="https://s3img.vcdn.vn/123phim/2018/09/b79ac4d8839d06c71c684398274620bd.png"  download>
                                            <div className="bigWhite m-auto" style={{backgroundColor:'#ac2925', borderRadius:'25px', width: 400}}> 
                                                <img style={{width:100}} src="https://s3img.vcdn.vn/123phim/2018/09/b79ac4d8839d06c71c684398274620bd.png" alt="Logo_white" className="logoDown" />
                                                <span>White Logo(.png)</span>
                                            </div>
                                        </a>
                                        <a className="col-sm-6 col-xs-6 btnMiniLeft btn " href="/brand-guideline/w3" style={{ color: '#F8F8F8',backgroundColor:'#ac2925' , borderRadius:'25px'}} download="white-logo" target="_blank">
                                            <img style={{width:100,}}  src="/Assets/img/Brand/pts_icon.png" alt="pts" className="mini" />
                                                <span>PTS(.psd)</span>
                                        </a>
                                        <a className="col-sm-6 col-xs-6 btnMiniRight btn " href="/brand-guideline/w2" style={{ color: '#F8F8F8',backgroundColor:'#ac2925', borderRadius:'25px'}} download="white-icon" target="_blank">
                                            <img style={{width:100,}}  src="/Assets/img/Brand/ai_icon.png" alt="ai" className="mini" />
                                                <span>SVG(.ai)</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </section>
                </div></div></div>
            </div>

        )
    }
}

export default Brand
