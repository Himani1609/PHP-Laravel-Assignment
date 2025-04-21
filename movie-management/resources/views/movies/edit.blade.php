@extends("layout")
@section("content")
<h1>Edit Movie</h1>
    @if ($errors -> any())
        @foreach ($errors -> all() as $error)
            <li>{{ $error }}</li>
        @endforeach
    @endif
    <form action="{{ route('movies.update', $movie -> id) }}" method="POST">
        {{ csrf_field() }}
        @method("PUT")
        <input type="text" name="title" placeholder="title" value="{{old('title') ?? $movie -> title}}">
        <input type="text" name="original_language" placeholder="original_language" value="{{old('original_language') ?? $movie -> original_language}}">
        <input type="date" name="release_date" placeholder="release_date" value="{{old('release_date') ?? $movie -> release_date}}">
        <input type="number" name="budget" placeholder="budget" value="{{old('budget') ?? $movie -> budget}}">
        <input type="number" name="revenue" placeholder="revenue" value="{{old('revenue') ?? $movie -> revenue}}">
        <input type="number" name="rating" placeholder="rating" step="0.01" value="{{old('rating') ?? $movie -> rating}}">
        <input type="text" name="description" placeholder="description" value="{{old('description') ?? $movie -> description}}">
        <input type="text" name="imgurl" placeholder="image url" value="{{old('imgurl') ?? $movie -> imgurl}}">
        <select name="studio_id">
            @foreach ($studios as $studio)
                <option value="{{ $studio->id }}" {{ $studio->id == old('studio_id', $movie->studio_id) ? 'selected' : '' }}>
                    {{ $studio->studio_name }}
                </option>
            @endforeach
        </select>
        <input type="submit" value="Edit">
    </form>

@endsection