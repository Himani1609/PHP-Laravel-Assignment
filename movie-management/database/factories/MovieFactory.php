<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Movie>
 */
class MovieFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(3), 
            'original_language' => fake()->languageCode(), 
            'release_date' => fake()->date(),
            'budget' => fake()->numberBetween(1000000, 300000000),
            'revenue' => fake()->numberBetween(5000000, 1000000000),
            'rating' => fake()->randomFloat(1, 1, 10), 
            'description' => fake()->paragraph(3),
            'imgurl' => 'https://picsum.photos/500/750?random=' . fake()->unique()->numberBetween(1, 1000), 
            'studio_id' => fake()->numberBetween(1, 50)
            ];
    }
}
