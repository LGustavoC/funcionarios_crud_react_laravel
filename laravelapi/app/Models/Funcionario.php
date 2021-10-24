<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Funcionario extends Model
{
    use HasFactory;
    protected $table = 'funcionarios';
    protected $fillable = [
        'nome',
        'sobrenome',
        'data_nasc',
        'cargo',
        'salario',
    ];

    public function relCargo(){
        return $this -> hasOne('App\Models\Cargo','id', 'cargo');
    }
}
