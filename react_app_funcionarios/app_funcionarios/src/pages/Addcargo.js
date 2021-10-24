import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
 
class Addcargo extends Component{

    state = {
        descricao: '',
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    saveCargo = async (e) => {
        e.preventDefault();

        const res = await axios.post('http://localhost:8000/api/add-cargo', this.state);

        if(res.data.status === 200){
            swal({
                title: "Confirmado",
                text: "Requisição confirmada",
                icon: "success",
                button: "Entendido"
            });
            console.log(res.data.message);
            this.setState({
                descricao: '',
            });
        }
    }

        render(){
            return(
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4>Adicionar Cargo
                                            <Link to={'/'} className="btn btn-primary btn-sm float-end">Voltar</Link>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.saveFuncionario}>
                                <div className="form-group mb-3">
                                    <label>Descrição</label>
                                    <input type="text" name="descricao" onChange={this.handleInput} value={this.state.descricao} className="form-control"/>
                                </div>


                                <div className="form-group mb-3">
                                    <button type="submit" className="btn btn-primary">Salvar</button>
                                </div>

                            </form>
                        </div>
                    </div>
            );
        }
}

export default Addcargo;