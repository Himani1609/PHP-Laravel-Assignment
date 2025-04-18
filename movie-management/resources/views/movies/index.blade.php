@extends('layout')
@section('content')
<h1>Movies</h1>
<ul>
    @foreach ($movies as $movie)
    <li>
       <img src="{{ $movie -> imgurl }}" />
       <p>{{ $movie -> title }}</p>
       <p>{{ $movie -> original_language }}</p>
       <p>{{ $movie -> release_date }}</p>
       <p>{{ $movie -> budget }}</p>
       <p>{{ $movie -> revenue }}</p>
       <p>{{ $movie -> description }}</p>
       <p>{{ $movie -> studio_id }}</p>
       {{-- Checking the foreign key connection --}}
       <p>Studio Details</p>
       <p>{{ $movie -> studio -> studio_name }}</p>
       <p>{{ $movie -> studio -> studio_country }}</p>
       <p>{{ $movie -> studio -> studio_year }}</p>
       

    </li>
       
    @endforeach
</ul>
@endsection