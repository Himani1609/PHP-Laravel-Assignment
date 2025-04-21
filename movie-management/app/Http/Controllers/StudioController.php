<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Studio;
use App\Http\Requests\StoreStudioRequest;
use App\Http\Requests\UpdateStudioRequest;

class StudioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // return view('studios.index', [
        //     'studios' => Studio::all()
        // ]);

        return Inertia::render('studios/index', [
            'studios' => Studio::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // return view('studios.create');

        return Inertia::render('studios/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreStudioRequest $request)
    {
        $studio = Studio::create($request->validated());
        return redirect() -> route('studios.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Studio $studio)
    {
        return Inertia::render('studios/show', [
            'studio' => $studio
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Studio $studio)
    {
        // return view('studios.edit', compact('studio'));
        return Inertia::render('studios/edit', [
            'studio' => $studio
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateStudioRequest $request, Studio $studio)
    {
        $studio -> update($request -> validated());
        return redirect() -> route('studios.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Studio $studio)
    {
        //
    }
}
