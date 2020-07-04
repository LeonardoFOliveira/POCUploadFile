import React from 'react';
import './ListFileUploaded.css';

export default function ListFileUploaded(props){
    const {filesUploaded} = props;
    return (
    <div className="fundo">
        <table>
            <thead className="borda">
                <tr className="linha">
                    <td>Nome</td>
                    <td>Tamanho</td>
                    <td>Percentual</td>
                </tr>
            </thead>
            <tbody>
                {filesUploaded.map(file => (
                    <tr key={file.id} className="linha">
                        <td className="borda">{file.nome}</td>
                        <td className="borda">{file.tamanho}</td>
                        <td className="borda">{file.percentual}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    )
}