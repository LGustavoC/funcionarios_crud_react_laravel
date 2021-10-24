<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Funcionario;

class FuncionarioController extends Controller
{
    public function index(){
        $funcionarios = Funcionario::all();
        return response()->json([
            'status'=>200,
            'funcionarios'=>$funcionarios,
        ]);
    }

    public function store(Request $request){
        $funcionario = new Funcionario;
        $funcionario->nome = $request->input('nome');
        $funcionario->sobrenome = $request->input('sobrenome');
        $funcionario->data_nasc = $request->input('data_nasc');
        $funcionario->cargo = $request->input('cargo');
        $funcionario->salario = $request->input('salario');
        $funcionario->save();

        return response()->json([
            'status'=>200,
            'message'=>'Funcionário adicionado com sucesso',
        ]);
    }

    public function edit($id){
        $funcionario = Funcionario::find($id);
        return response()->json([
            'status'=>200,
            'funcionario'=>$funcionario,
        ]);
    }

    public function update(Request $request, $id){
        $funcionario = Funcionario::find($id);
        $funcionario->nome = $request->input('nome');
        $funcionario->sobrenome = $request->input('sobrenome');
        $funcionario->data_nasc = $request->input('data_nasc');
        $funcionario->cargo = $request->input('cargo');
        $funcionario->salario = $request->input('salario');
        $funcionario->update();

        return response()->json([
            'status'=>200,
            'message'=>'Funcionário alterado com sucesso',
        ]);
    }

    public function destroy($id)
    {
        $funcionario = Funcionario::find($id);
        if($funcionario)
        {
            $funcionario->delete();
            return response()->json([
                'status'=> 200,
                'message'=>'Funcionário Deletado',
            ]);
        }
        else
        {
            return response()->json([
                'status'=> 404,
                'message' => 'Funcionário não encontrado',
            ]);
        }
    }
}
