<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFuncTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('funcionarios', function (Blueprint $table) {
            $table->increments('id'); 
            $table->string('nome');
            $table->string('sobrenome');
            $table->integer('cargo')->unsigned();
            $table->foreign('cargo')->references('id')->on('cargos')->onDelete('cascade')->onUpdate('cascade');
            $table->date('data_nasc');
            $table->double('salario',10,2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('funcionarios');
    }
}

