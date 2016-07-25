<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class producto extends Model
{
     protected $table = 'productos';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['noproducto', 'descripcioncorta', 'descripcioncompleta', 'costo', 'cantidadalmacen', 'imagen', 'idcategoria'];

}