@extends('layout')
@section('content')
<h1>Studios</h1>
<ol>
    @foreach ($studios as $studio)
    <li>
       <p>{{ $studio -> studio_name }}</p>
       <p>{{ $studio -> studio_country }}</p>
       <p>{{ $studio -> studio_year }}</p>
       

    </li>
       
    @endforeach
</ol>
@endsection