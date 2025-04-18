<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Movie extends Model
{
    /** @use HasFactory<\Database\Factories\MovieFactory> */
    use HasFactory;

    protected $fillable = [
        'title',
        'original_language',
        'release_date',
        'budget',
        'revenue',
        'rating',
        'description',
        'imgurl',
        'studio_id'
    ];

    public function studio(): BelongsTo
    {
        return $this->belongsTo(Studio::class);
    }

}
