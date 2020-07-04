import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UploadFile from './components/UploadFile/UploadFile';
import ListFileUploaded from './components/ListFileUploaded/ListFileUploaded';
import configAxios from './services/configAxios'

class App extends Component {
  state = {
    filesUploaded: []
  }

  onUploadFile = (files) =>  {
    files.map(file => {
      const fileUpload = {
        arquivo: file,
        nome: file.name, 
        tamanho: `${file.size} KB`,  
        percentual: 0,
        id: new Date().getTime()
      }

      this.setState({
        filesUploaded: this.state.filesUploaded.concat([fileUpload])
      })

      
    const data = new FormData();

    data.append('file', fileUpload.arquivo, fileUpload.arquivo.name);

    configAxios.post('/file', data, {
        onUploadProgress: e => {
            const percentual = parseInt(Math.round(e.loaded*100)/e.total);

            this.setState({filesUploaded: this.state.filesUploaded.map(file => {
              return file.id == fileUpload.id ? {nome: file.nome, tamanho: file.tamanho, percentual: percentual, id: file.id} : file;
            })})
        },
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    })
    })
  }

  render(){

    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
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
          </a> */}
        <UploadFile onUploadFile={this.onUploadFile}/>
        <ListFileUploaded filesUploaded={this.state.filesUploaded}/>
        </header>
      </div>
    );
  }
}

export default App;
