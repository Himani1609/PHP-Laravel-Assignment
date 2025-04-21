<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Movie;
use App\Models\Studio;
use App\Http\Requests\StoreMovieRequest;
use App\Http\Requests\UpdateMovieRequest;

class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // return view('movies.index', [
        //     'movies' => Movie::all()
        // ]);

        // remove this bit below and uncomment above, once CRUD is done
        // return view('movies.index', [
        //     'movies' => Movie::with('studio')->get()
        // ]);
        return Inertia::render('movies/index', [
            'movies' => Movie::all() // Make sure data is passed
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // $studios = Studio::all();
        // return view('movies.create', compact('studios'));

        $studios = Studio::all();

    return Inertia::render('movies/create', [
        'studios' => $studios
    ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMovieRequest $request)
    {
        $movie = Movie::create($request->validated());
        return redirect() -> route('movies.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Movie $movie)
    {
        // return view('movies.show', compact('movie'));

        // return Inertia::render('movies/show', [
        //     'movie' => $movie->load('studio') // Make sure to load the studio relation as well
        // ]);
        // $movieWithStudio = $movie->load('studio');
    
    // Log the data to ensure studio is being loaded
    // \Log::info($movieWithStudio);

    $movie = $movie->load('studio');

    // Passing the movie data to the Inertia view
    return Inertia::render('movies/show', [
        'movie' => $movie, // Ensure this data is passed to Inertia
    ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Movie $movie)
    {
        // return view('movies.edit', compact('movie'));
        // $studios = Studio::all(); // fetch all studios
        // return view('movies.edit', compact('movie', 'studios'));

        $studios = Studio::all();
    return Inertia::render('movies/edit', [
        'movie' => $movie,
        'studios' => $studios,
    ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMovieRequest $request, Movie $movie)
    {
        $movie->update($request->validated());
        return redirect()->route('movies.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Movie $movie)
    {
        // Movie::destroy($movie -> id); 
        // return redirect() -> route('movies.index');

        $movie->delete();

        return redirect()->route('movies.index')->with('success', 'Movie deleted successfully.');
    }
}
