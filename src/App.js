import './App.css';
import React from "react";
import UserService from "./services/UserService";
import Alert from "./services/Alert";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user : []
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData(){
    UserService.getAllUser().then( res => {
      console.log(res.data)
      this.setState({user: res.data})
    })
  }

  download(hw){
    Alert.getInput().then( res =>{
      if(res.value !== undefined){
        const user = this.state.user.filter(r => r.studentId === res.value.login)
        const password = user.map(r => r.password)[0]
        if(password === res.value.password){
          UserService.getPdf(hw,res.value.login).then( res => {
            window.open(URL.createObjectURL(res.data));
          }, e => {
            console.log(e)
          })
        }else{
          Alert.getGeneralAlertMsg('error','ข้อมูลไม่ถูกต้อง')
        }
      }
    })
  }

  render() {
    return (
      <div className="relative flex flex-col w-screen h-screen bg-gray-50">
        <div className="absolute top-0 flex items-center justify-center mx-auto w-full h-16 bg-opacity-90 bg-red-300">
          <p className="flex text-white text-2xl font-Kanit font-bold">INT 101 | Home Work</p>
        </div>
        <div className="mt-24 flex flex-col items-center w-8/12 h-5/6 bg-white rounded-md shadow-lg mx-auto">
          <div className="p-5 w-full">
            <p className="text-4xl font-Kanit font-bold">Computer Programming</p>
          </div>
          <div className="mt-18 lg:mt-36 w-11/12 md:w-5/12 bg-white rounded-lg shadow">
            <ul className="divide-y-2 divide-gray-100">
              <li className="flex p-3 w-full items-center">
                <div className="w-1/2">
                  <p className="font-Kanit font-bold">HomeWork 1</p>
                </div>
                <div className="w-1/2">
                <span className="flex items-end justify-end">
                  <p className="p-1 bg-gray-500 rounded-md font-Kanit font-bold text-white cursor-pointer">Download</p>
                </span>
                </div>
              </li>
              <li className="flex p-3 w-full items-center">
                <div className="w-1/2">
                  <p className="font-Kanit font-bold">HomeWork 2</p>
                </div>
                <div className="w-1/2">
                <span className="flex items-end justify-end" onClick={ ()=> this.download("2")}>
                  <p className="p-1 bg-green-400 hover:bg-green-600 rounded-md font-Kanit font-bold text-white cursor-pointer">Download</p>
                </span>
                </div>
              </li>
              <li className="flex p-3 w-full items-center">
                <div className="w-1/2">
                  <p className="font-Kanit font-bold">HomeWork 3</p>
                </div>
                <div className="w-1/2">
                <span className="flex items-end justify-end">
                  <p className="p-1 bg-gray-500 rounded-md font-Kanit font-bold text-white cursor-pointer">Download</p>
                </span>
                </div>
              </li>
              <li className="flex p-3 w-full items-center">
                <div className="w-1/2">
                  <p className="font-Kanit font-bold">HomeWork 4</p>
                </div>
                <div className="w-1/2">
                <span className="flex items-end justify-end">
                  <p className="p-1 bg-gray-500 rounded-md font-Kanit font-bold text-white cursor-pointer">Download</p>
                </span>
                </div>
              </li>
              <li className="flex p-3 w-full items-center">
                <div className="w-1/2">
                  <p className="font-Kanit font-bold">HomeWork 5</p>
                </div>
                <div className="w-1/2">
                <span className="flex items-end justify-end">
                  <p className="p-1 bg-gray-500 rounded-md font-Kanit font-bold text-white cursor-pointer">Download</p>
                </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex mt-3 items-center justify-center w-full h-10 bottom-0">
          <p>© 2021 tarkom-projects.com All Rights Reserved</p>
        </div>
      </div>
    );
  }


}

export default App;
