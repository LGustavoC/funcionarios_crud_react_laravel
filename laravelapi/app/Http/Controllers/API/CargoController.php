<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Funcionario;

class CargoController extends Controller
{
    public function store(Request $request){
        $cargo = new Cargo;
        $cargo->descricao = $request->input('descricao');
        $cargo->save();

        return response()->json([
            'status'=>200,
            'message'=>'Cargo adicionado com sucesso',
        ]);
    }
}
