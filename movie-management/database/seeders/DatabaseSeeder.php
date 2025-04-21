<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Movie;
use App\Models\Studio;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        Studio::factory(50)->create();

        
        Studio::factory()->create([
            'studio_name' => 'Ingenious Film Partners' ,
            'studio_country' => 'USA' ,
            'studio_year' => 1962,
        ]);


        Movie::factory()->create([
            'title' => 'The Gorge',
            'original_language' => 'en',
            'release_date' => 2016-02-19,
            'budget' => 237000000,
            'revenue' => 2790000000,
            'rating' => 7.2,
            'description' => 'Two highly trained operatives grow close from a distance after being sent to guard opposite sides of a mysterious gorge. When an evil below emerges, they must work together to survive what lies within.',
            'imgurl' => 'https://image.tmdb.org/t/p/w500/7iMBZzVZtG0oBug4TfqDb9ZxAOa.jpg',
            'studio_id' => 3
        ]);

        Movie::factory(100)->create();        


    }
}
