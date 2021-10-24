import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

class Funcionario extends Component{

    state = {
        funcionarios: [],
        loading: true,
    }
    async componentDidMount(){
        const res = await axios.get('http://localhost:8000/api/funcionarios');
        if(res.data.status === 200){
            this.setState({
                funcionarios: res.data.funcionarios,
                loading: false,
            });
        }    
    }

    deleteFuncionario=(e,id)=>{
        const thisClickedFunda = e.currentTarget;

        thisClickedFunda.innerText = "Deletando";

        const res= axios.delete(`http://localhost:8000/api/delete-funcionario/${id}`);

        if(res.data.status === 200){
            swal({
                title: "Confirmado",
                text: "Requisição confirmada",
                icon: "success",
                button: "Entendido"
            });
            thisClickedFunda.closest("tr").remove();
            console.log(res.data.message);
            return (<Redirect to="/" />);   
        }
    }

    render(){

        var funcionario_HTMLTABLE = "";
        if(this.state.loading){
            funcionario_HTMLTABLE = <tr><td colSpan="7"><h2>Carregando...</h2></td></tr>
        }
        else{
            funcionario_HTMLTABLE =
            this.state.funcionarios.map((item)=>{
                return(
                    <tr key={item.id}>
                        <td>{item.nome}</td>
                        <td>{item.sobrenome}</td>
                        <td>{item.data_nasc}</td>
                        <td>{item.cargo}</td>
                        <td>{item.salario}</td>
                        <td>
                            <Link to={`editar-funcionario/${item.id}`} className="btn btn-success btn-sm">Editar</Link>
                        </td>
                        <td>
                            <button type="button" onClick={(e)=>this.deleteFuncionario(e, item.id)} className="btn btn-danger btn-sm">Deletar</button>
                        </td>
                    </tr>
                )
            });
        }
        return(
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Dados Funcionários
                                        <Link to={'add-funcionario'} className="btn btn-primary btn-sm float-end">Adicionar Funcionário</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <table className="table table-bordered table-striped"> 
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Sobrenome</th>
                                    <th>Nascimento</th>
                                    <th>Cargo</th>
                                    <th>Salário</th>
                                    <th>Editar</th>
                                    <th>Deletar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {funcionario_HTMLTABLE}
                            </tbody>
                        </table>
                        <Link to={'add-cargo'} className="btn btn-primary btn-sm float-end">Adicionar Cargo</Link>
                    </div>
                </div>
        );
    }
}

export default Funcionario;