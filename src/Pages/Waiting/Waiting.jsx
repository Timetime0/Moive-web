import React, { Component } from 'react'
import imgloading from '../../Assets/img/logo.gif'
import { DivWaiting, ImgWaiting } from '../../StyledComponent/Waiting/Waiting'
import {connect} from 'react-redux'

class Waiting extends Component {
    
    render() {
        if(this.props.isWaiting === true){
            return (
                <>
                <DivWaiting>
                    <ImgWaiting src={imgloading} alt="true"/>
                </DivWaiting>
                </>
            )
        }else{
            return ''
        }   
    }
}


const mapStateToProps = (state)=>{
    return{
        isWaiting :state.waitingReducer.isWaiting,
    }
}


export default connect(mapStateToProps) (Waiting)
