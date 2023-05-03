import { useState } from 'react';
import axios from 'axios';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min";
function App() {

  const [photo, setPhoto] = useState("")
  const [result, setResult] = useState([])


  const selectPhoto = () => {

    axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=9xU9UvaRpxTr9MW49t59NTZL8PNmas4JUbZFAgzVQ2k`)
      .then((response) => {
        // console.log(response.data);
        setResult(response.data.results);
      })
  }

  return (
    <>
    
      <div className='container my-5 sticky-top bg-light'>
      <center>
        <h3 className='sticky-top bg-light' 
        style={{color: "cadetblue", marginTop: 10}}
        >
          SEARCH ITEMS
          </h3>
      </center>
        <input type='text' 
        className='form-control'
        placeholder='Search Here Every Things'
          value={photo}
          onChange={(e) => {
            setPhoto(e.target.value)
          }}
        />
        <center>
          <button className='btn btn-primary m-4'
            type='submit'

            onClick={selectPhoto}
          >
            Get Results
          </button>
        </center>
      </div>

      <div className="container">
        <div className="row text-center text-lg-start bg-light">
          {result.map((value) => {
            return (
              <div className="col-lg-3 col-md-4 col-6">
                <img className="img-fluid img-thumbnail d-block mb-4 h-100"
                  src={value.urls.small} alt='' />
              </div>
            )
          })}
        </div>

      </div>
    </>
  );
}

export default App;
