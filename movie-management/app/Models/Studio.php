<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Studio extends Model
{
    /** @use HasFactory<\Database\Factories\StudioFactory> */
    use HasFactory;

    protected $fillable = [
        'studio_name',
        'studio_country',
        'studio_year',
    ];

    public function movies(): HasMany
    {
        return $this->hasMany(Movie::class);
    }

}
