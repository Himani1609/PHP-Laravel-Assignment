@extends('layout')
@section('content')
<h1>Movies</h1>
<p><a href="/movies/create">Add</a></p>
<ul>
    @foreach ($movies as $movie)
    <div>
       <img src="{{ $movie -> imgurl }}" />
       <p>{{ $movie -> title }}</p>
        <p><a href="{{route('movies.show', $movie -> id)}}">View Details</a></p>
        <p><a href="{{route('movies.edit', $movie -> id)}}">Edit</a></p>
        <form action="{{ route('movies.destroy', $movie -> id) }}" method="POST">
            {{ csrf_field() }}
            @method("DELETE")
            <input type="submit" value="Delete" />
       </form>
    </div>
       
    @endforeach
</ul>
@endsection