<?php

use App\Http\Controllers\API\FuncionarioController;
use App\Http\Controllers\API\CargoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/funcionarios', [FuncionarioController::class, 'index']);
Route::post('/add-funcionario', [FuncionarioController::class, 'store']);
Route::post('/add-cargo', [CargoController::class, 'store']);
Route::get('/edit-funcionario/{id}', [FuncionarioController::class, 'edit']);
Route::put('update-funcionario/{id}', [FuncionarioController::class, 'update']);
Route::delete('delete-funcionario/{id}', [FuncionarioController::class, 'destroy']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
