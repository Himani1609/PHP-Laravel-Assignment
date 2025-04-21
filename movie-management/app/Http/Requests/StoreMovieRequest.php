<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreMovieRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'original_language' => 'required|string|max:10',
            'release_date' => 'required|date',
            'budget' => 'required|numeric|min:0',
            'revenue' => 'required|numeric|min:0',
            'rating' => 'required|numeric|between:0,10',
            'description' => 'required|string',
            'imgurl' => 'required|url',
            'studio_id' => 'required|exists:studios,id'
        ];
    }
}
