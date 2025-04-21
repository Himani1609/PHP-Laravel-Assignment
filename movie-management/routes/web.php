<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Movie;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\StudioController;

// Route::get('/', function () {
//     return Inertia::render('welcome');
// })->name('home');

Route::get('/', function () {
    // Show public page if guest, authenticated view if logged in
    $movies = Movie::all();
    return Inertia::render(
      auth()->check() ? 'movies/index' : 'public/movies',
      ['movies' => $movies]
    );
  });

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        $movies = Movie::all();
        return Inertia::render('movies/index', [
            'movies' => $movies
        ]);
    })->name('dashboard');
 
    Route::resource('/movies', MovieController::class);
    Route::resource('/studios', StudioController::class);
});

// Route::middleware('guest')->group(function () {
//     // Login
//     Route::get('/login', [AuthenticatedSessionController::class, 'create'])->name('login');
//     Route::post('/login', [AuthenticatedSessionController::class, 'store']);
    
//     // Register
//     Route::get('/register', [RegisteredUserController::class, 'create'])->name('register');
//     Route::post('/register', [RegisteredUserController::class, 'store']);
// });

// Route::get('/login', function () {
//     return inertia('auth/login'); // Lowercase 'auth' to match your folder
// })->name('login');

// Route::get('/register', function () {
//     return inertia('auth/register'); // Lowercase 'auth' to match your folder
// })->name('register');

// Route::get('/login', function () {
//     return inertia('auth/login'); // Matches your existing file
// })->name('login');

// Route::get('/register', function () {
//     return inertia('auth/register'); // Matches your existing file
// })->name('register');



Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
    ->middleware('auth')
    ->name('logout');
   

//Route::post('/logout', [\App\Http\Controllers\Auth\AuthenticatedSessionController::class, 'destroy'])->name('logout');


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
