import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { ThemeProvider } from 'styled-components'
import {darkTheme} from './StyledComponent/theme/darkTheme'
import Waiting from './Pages/Waiting/Waiting';
import {clientRouter} from './config/router.config'
import { connect } from 'react-redux';
import { Component } from 'react';
import { LOGIN_ADMIN, LOGIN_USER } from './Redux/Types/auth-type';


class App extends Component {
  RenderRouterList = () => {
    return clientRouter.map((item,index)=>{
      return  <Route key={index} exact={item.exact} path={item.path} component={item.component}/>
    })    
  }

  constructor(props){
    super(props)
    this.state= {
      user : 1,
    }
  }
  


  render(){
    return (
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <Header />
          <Waiting/>
          <Switch>
            {this.RenderRouterList()}
            {/* <Route axact path='/admin' render={() => (<Redirect to="/admin/login" />)}/> */}
          </Switch>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
  
    );
  }
  
  getUserFromLocal = () => {
    const userAdmin = localStorage.getItem('admin')
    const userClient = localStorage.getItem('client')
    if(userAdmin){
      this.props.dispatch({
        type:LOGIN_ADMIN,
        data:JSON.parse(userAdmin)
      })
    } 
    if(userClient){
      this.props.dispatch({
        type: LOGIN_USER,
        data: JSON.parse(userClient)
      })
    }

  } 

    componentDidMount(){
        this.getUserFromLocal()
    }
}

const mapStateToProps = (state)=>{
  return{
    admin: state.userReducer.user.admin
  }
}


export default connect(mapStateToProps) (App);


