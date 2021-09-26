import React, { useState } from 'react'
import './Content.css'

const Content = () => {

    const [text, setText] = useState('Banner')

    return (
        <div className="content">
        <p>Dib Tester</p>
        <label for="random">Exchange: </label>
        <select name="random" id="random" style={{ fontSize: "1.5rem" }}>
          <option>admedia</option>
          <option>adprudence</option>
          <option>appnexus</option>
          <option>atomx</option>
          <option>atomx</option>
          <option>atomx</option>
          <option>atomx</option>
          <option>atomx</option>
          <option>atomx</option>
          <option>atomx</option>
          <option>atomx</option>
          <option>atomx</option>
        </select>
        <br />
        <input
          style={{
            display: "block",
            width: "100%",
            padding: "10px",
            outlineColor: "lightblue",
            color: "gray",
          }}
          type="text"
          placeholder="Url Specification"
          value="http://localhost:8080/btr/bds/"
        />
        <br />
        <span>Dib Type </span>
        <button className="blue-button" onClick={() => setText('Banner')}>Display</button>
        <button className="blue-button" onClick={() => setText('Native (app-wall)')}>Native (App Wall)</button>
        <button className="blue-button" onClick={() => setText('Video')}>Video</button>
        <div style={{marginTop: '10px'}}>Sample Dib Request: {text}</div>
        <div style={{height: '40vh'}}></div>
        <button className='yellow-button'>Send Dib Request</button>
        <hr />
        <p>X-TIME: 0, RTT: 0</p>
        <p>X-INSTANCE:</p>
        <p>NURL:</p>
        <div style={{backgroundColor: 'lightgray', fontSize: '20px'}}>
            Click Through Image  
        <textarea rows="4" cols="50">
            Click Through Image
        </textarea>
      </div>
      <br />
        <div style={{backgroundColor: 'lightgray'}}>
        <textarea rows="30" cols="50">
        </textarea>
        <textarea rows="30" cols="50">
        </textarea>
        </div>
        <br />
        <br />
      </div>
    )
}

export default Content
