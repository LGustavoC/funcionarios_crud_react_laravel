import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
 
class Addfuncionario extends Component{

    state = {
        nome: '',
        sobrenome: '',
        data_nasc: '',
        cargo: '',
        salario: '',
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    saveFuncionario = async (e) => {
        e.preventDefault();

        const res = await axios.post('http://localhost:8000/api/add-funcionario', this.state);
        if(res.data.status === 200){
            console.log(res.data.message);
            swal({
                title: "Confirmado",
                text: "Requisição confirmada",
                icon: "success",
                button: "Entendido"
            });

            this.setState({
                nome: '',
                sobrenome: '',
                data_nasc: '',
                cargo: '',
                salario: '',
            });
        }
        else{
            swal({
                title: "Erro na Requisição",
                text: "Requisição cancelada",
                icon: "error",
                button: "Entendido"
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
                                        <h4>Adicionar Funcionários
                                            <Link to={'/'} className="btn btn-primary btn-sm float-end">Voltar</Link>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.saveFuncionario}>
                                <div className="form-group mb-3">
                                    <label>Nome</label>
                                    <input type="text" name="nome" onChange={this.handleInput} value={this.state.nome} className="form-control"/>
                                </div>

                                <div className="form-group mb-3">
                                    <label>Sobrenome</label>
                                    <input type="text" name="sobrenome" onChange={this.handleInput} value={this.state.sobrenome} className="form-control"/>
                                </div>

                                <div className="form-group mb-3">
                                    <label>Data de Nascimento</label>
                                    <input type="date" name="data_nasc" onChange={this.handleInput} value={this.state.data_nasc} className="form-control"/>
                                </div>

                                <div className="form-group mb-3">
                                    <label>Cargo</label>
                                    <select onChange={this.handleInput} class="form-select" className="form-control" name="cargo" aria-label="Cargos">
                                        <option value='1'>Desenvolvedor</option>
                                        <option value='2'>Gerente</option>
                                        <option value='3'>Presidente</option>
                                    </select>
                                </div>

                                <div className="form-group mb-3">
                                    <label>Salário</label>
                                    <input type="double" name="salario" onChange={this.handleInput} value={this.state.salario} className="form-control"/>
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

export default Addfuncionario;