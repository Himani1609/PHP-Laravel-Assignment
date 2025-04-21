@extends('layout')
@section('content')
<h1>Add Movie</h1>
    @if ($errors -> any())
        @foreach ($errors -> all() as $error)
            <li>{{ $error }}</li>
        @endforeach
    @endif
    <form action="{{ route('movies.store') }}" method="POST">
        {{ csrf_field() }}
        <input type="text" name="title" placeholder="title" value="{{old('title')}}">
        <input type="text" name="original_language" placeholder="original_language" value="{{old('original_language')}}">
        <input type="date" name="release_date" placeholder="release_date" value="{{old('release_date')}}">
        <input type="number" name="budget" placeholder="budget" value="{{old('budget')}}">
        <input type="number" name="revenue" placeholder="revenue" value="{{old('revenue')}}">
        <input type="number" name="rating" placeholder="rating" step="0.01" value="{{old('rating')}}">
        <input type="text" name="description" placeholder="description" value="{{old('description')}}">
        <input type="text" name="imgurl" placeholder="image url" value="{{old('imgurl')}}">

        <select name="studio_id" id="studio">
            @foreach ($studios as $studio)
                <option value="{{ $studio->id }}" {{ old('studio_id') == $studio->id ? 'selected' : '' }}>
                    {{ $studio->studio_name }}
                </option>
            @endforeach
        </select>
        


        <input type="submit" value="Create">
    </form>
@endsection