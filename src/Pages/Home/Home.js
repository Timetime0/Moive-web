import React, { Component } from 'react'
import Carousel from '../../Components/Carousel/Carousel'
import DanhSachPhim from '../../Components/DanhSachPhim/DanhSachPhim'
import QuangCao from '../../Components/QuangCao/QuangCao'
import TinTuc from '../../Components/TinTuc/TinTuc'


export class Home extends Component {
    render() {
        return (
            <>
             <Carousel/>  
             <DanhSachPhim/>
             <TinTuc/>
             <QuangCao/>
            </>
        )
    }
}

export default Home
