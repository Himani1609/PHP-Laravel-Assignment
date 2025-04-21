@extends('layout')
@section('content')
<h1>Studios</h1>
<p><a href="/studios/create">Add</a></p>
<ol>
    @foreach ($studios as $studio)
    <li>
       <p>{{ $studio -> studio_name }}</p>
       <p>{{ $studio -> studio_country }}</p>
       <p>{{ $studio -> studio_year }}</p>
       <p><a href="{{route('studios.edit', $studio -> id)}}">Edit</a></p>

    </li>
       
    @endforeach
</ol>
@endsection