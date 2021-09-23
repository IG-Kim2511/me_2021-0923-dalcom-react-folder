
import React ,{useState} from 'react'

import abc from './img/abc.png';
import disabled from './img/page-0.png';
import bag from './img/page-first/page-first(6).png';
import Request from './img/page-first/page-first(1).png';
import cancel from './img/page-first/page-first(2).png';
import keycode from './img/page-first/page-first(3).png';
import Remove from './img/page-first/page-first(4).png';
import selection from './img/page-second/page-second(1).png';
import cash from './img/page-second/page-second(2).png';
import credit from './img/page-second/page-second(3).png';
import Scan from './img/page-second/page-second(4).png';
import Help from './img/page-second/page-second(5).png';
import phone from './img/page-third/phone.png';
import cancel_third from './img/page-third/page-third(2).png';
import Request_third from './img/page-third/page-third(3).png';



import './App.css';

function App() {
  return (
    <div>
        
        {/*    
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header> */}

              
        <div className="world">       
            
            <section className="world-left">       

                <h2 className="notification"> This site is made by 100%-full screen browser</h2>
                
                <div className="left-parent_lay">        
                    <div className="left-second-container">
                        <div className="abc ">                        
                          
                            <div>
                                <img src={abc} alt=""/>
                                

                                <p>8-D Oak Branch Drive</p>
                              <p>Greensboro, NC 27407</p>
                              <p>(336) 851 - 1802</p>

                              <div className="cashier">
                                  <p>TERM#1</p>
                                  <p>CASHIER 9999</p>
                                  <p>TRANS 9999</p>
                                  <p>STR#0001</p>                                 
                              </div>
                      

                              
                                <table className="check-wrap">                              
                                    <tbody className="check">
                                        <tr className="items">
                                            <td>44237</td>
                                            <td>Tito's Handmade...</td>
                                            <td>1.75L</td>
                                            <td></td>
                                            <td>$48.70</td>
                                        </tr>
                                        <tr className="tax">
                                            <th > </th>
                                            <th > </th>
                                            <th > </th>
                                            <th>Tax:</th>
                                            <th className="tax-price">$3.14 </th>
                                        </tr>
                                        <tr className="total">
                                            <th > </th>
                                            <th > </th>
                                            <th > </th>
                                            <th >Total:</th>
                                            <th >$51.84</th>
                                        </tr>
                                    </tbody>                             
                                </table>
                              
                            </div>

                        </div>
                        
                        <div className="disabled">                    
                            <img src={disabled} alt="" className="disabled-img"/>          
                        </div>
                    </div>
                </div>

            </section>

            <section className="world-middle"></section>


    <section className="world-right page1">

        <div className="right-con">

            <div className="bags">            
                    <h3 className="bags-title1"> Do Not Remove Bags    </h3>
                    <img src={bag} alt=""/>
                    <h4 className="bags-title2">Place Item in Bag</h4>          
            </div>

            <div className="btn-container">

                <button href="#" className="myButton grid-a ">
                    <div className="img_container">
                        <img src={Request} alt=""/>
                    </div>
                        Request
                        <br></br>Help
                </button>

                <button href="#" className="myButton grid-b">
                    <div>
                        Cancel
                        <br></br>Transaction
                    </div>
                    <div className="img_container">
                        <img src={cancel} alt=""/>
                  </div>
                </button>

                <button href="#" className="myButton grid-c">
                    Key in
                    <br></br>Code
                    <img src={keycode} alt=""/>
                </button>

                <button href="#" className="myButton grid-d">
                    Remove
                    <br></br>Item
                    <img src={Remove} alt=""/>
                </button>

                <button href="#" className="myButton grid-e finish">
                    Finish and Pay
                </button>
            </div>
        </div>
    </section>
    
    <section className="world-right page2">

        <div className="right-con">
            <div className="title">
                <h1>Make Your <br></br>
                    Selection Now</h1>
                <img src={selection} alt=""/>
            </div>


            <div className="btn-container">

                <button href="#" className="myButton grid-a ">
                    <p className="img_container">
                        <img src={cash} alt=""/>
                    </p>
                    <div>
                        Cash
                    </div>
                </button>

                <button href="#" className="myButton grid-b credit">
                    <p className="img_container">
                        <img src={credit} alt=""/>
                    </p>
                    Credit
                </button>

                <button href="#" className="myButton grid-c">
                    <div>
                        Debit / Credit <br></br>
                        Gift Cards <br></br>
                        EBT - where <br></br>
                        available                
                    </div>
                </button>

                <button href="#" className="myButton grid-d">
                    
                </button>

                <button href="#" className="myButton grid-e return">
                    RETURN <br></br>
                    <div className="scan">
                        <p className="img_container">
                          <img src={Scan} alt=""/>
                        </p>
                        <p>
                            Scan More <br></br>
                            Items
                        </p>
                    </div>
                </button>

                <button href="#" className="myButton grid-f">
                    Request <br></br>
                    Help
                    <p className="img_container">
                      <img src={Help} alt=""/>
                  </p>
                </button>
            </div>
        </div>
    </section> 



    <section className="world-right page3">

        <div className="right-con">
          
                <div className="title">                
                    <img src={phone} alt=""/>
                </div>
        
                <div className="explain">
                    Follow Instructions on<br></br>
                    the PIN Pad
                </div>
        
                <div className="btn-container">    
                    <button href="#" className="myButton grid-a cancel">
                        <p className="img_container">
                            <img src={cancel_third} alt=""/>
                        </p>
                        Cancel
                    </button>

                    <button href="#" className="myButton grid-b ">
                        <p className="img_container">
                            <img src={Request_third} alt=""/>
                        </p>
                        Request <br></br>
                        Help
                    </button>
                </div>
        </div>
    </section>
    



    </div>
  </div>
  );
}

export default App;
