@extends('layout')

@section('content')
    <h1>{{ $movie->title }}</h1>

    <p><strong>Language:</strong> {{ $movie->original_language }}</p>
    <p><strong>Release Date:</strong> {{ $movie->release_date }}</p>
    <p><strong>Budget:</strong> ${{ number_format($movie->budget) }}</p>
    <p><strong>Revenue:</strong> ${{ number_format($movie->revenue) }}</p>
    <p><strong>Rating:</strong> {{ $movie->rating }}</p>
    <p><strong>Description:</strong> {{ $movie->description }}</p>

    <p><strong>Studio:</strong> {{ $movie->studio->studio_name ?? 'N/A' }}</p>

    <img src="{{ $movie->imgurl }}" alt="Movie Poster" style="max-width: 300px;">

    <br><br>
    <a href="{{ route('movies.index') }}">Back to List</a>
@endsection
