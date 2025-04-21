@extends("layout")
@section("content")
<h1>Edit Studio</h1>
    @if ($errors -> any())
        @foreach ($errors -> all() as $error)
            <li>{{ $error }}</li>
        @endforeach
    @endif
    <form action="{{ route('studios.update', $studio -> id) }}" method="POST">
        {{ csrf_field() }}
        @method("PUT")
        <input type="text" name="studio_name" placeholder="studio_name" value="{{old('studio_name') ?? $studio -> studio_name}}">
        <input type="text" name="studio_country" placeholder="studio_country" value="{{old('studio_country') ?? $studio -> studio_country}}">
        <input type="number" name="studio_year" placeholder="studio_year" value="{{old('studio_year') ?? $studio -> studio_year}}">
        <input type="submit" value="Edit">
    </form>

@endsection