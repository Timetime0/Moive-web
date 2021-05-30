import React, { Component } from 'react'
import Carousel from '../../Components/Carousel/Carousel'
import DanhSachPhim from '../../Components/DanhSachPhim/DanhSachPhim'
import Finding from '../../Components/Finding/Finding'
import QuangCao from '../../Components/QuangCao/QuangCao'
import TinTuc from '../../Components/TinTuc/TinTuc'


export class Home extends Component {
    render() {
        return (
            <>
             <Carousel/>  
             <Finding/>
             <DanhSachPhim/>
             <TinTuc/>
             <QuangCao/>
            </>
        )
    }
}

export default Home
