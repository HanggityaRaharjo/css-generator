@extends('layouts.app')

@section('content')
    <h2 class="mt-3">Button</h2>
    <div class="mt-2">
        <h5>Button</h5>
        <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-secondary">Secondary</button>
        <button type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-danger">Danger</button>
        <button type="button" class="btn btn-warning">Warning</button>
        <button type="button" class="btn btn-info">Info</button>
        <button type="button" class="btn btn-light">Light</button>
        <button type="button" class="btn btn-dark">Dark</button>
    </div>

    <div class="mt-2">
        <h5>Outline Button</h5>
        <button type="button" class="btn btn-outline-primary">Primary</button>
        <button type="button" class="btn btn-outline-secondary">Secondary</button>
        <button type="button" class="btn btn-outline-success">Success</button>
        <button type="button" class="btn btn-outline-danger">Danger</button>
        <button type="button" class="btn btn-outline-warning">Warning</button>
        <button type="button" class="btn btn-outline-info">Info</button>
        <button type="button" class="btn btn-outline-light">Light</button>
        <button type="button" class="btn btn-outline-dark">Dark</button>
    </div>
    <div class="mt-2">
        <h5>Disable Button</h5>
        <button type="button" class="btn btn-primary" disabled>Primary</button>
        <button type="button" class="btn btn-secondary" disabled>Secondary</button>
        <button type="button" class="btn btn-success" disabled>Success</button>
        <button type="button" class="btn btn-danger" disabled>Danger</button>
        <button type="button" class="btn btn-warning" disabled>Warning</button>
        <button type="button" class="btn btn-info" disabled>Info</button>
        <button type="button" class="btn btn-light" disabled>Light</button>
        <button type="button" class="btn btn-dark" disabled>Dark</button>
    </div>

    {{-- Size --}}
    <h2 class="mt-5">Size</h2>
    <div class="mt-2">
        <h5>Small Button</h5>
        <button type="button" class="btn btn-sm btn-primary">Primary</button>
        <button type="button" class="btn btn-sm btn-secondary">Secondary</button>
        <button type="button" class="btn btn-sm btn-success">Success</button>
        <button type="button" class="btn btn-sm btn-danger">Danger</button>
        <button type="button" class="btn btn-sm btn-warning">Warning</button>
        <button type="button" class="btn btn-sm btn-info">Info</button>
        <button type="button" class="btn btn-sm btn-light">Light</button>
        <button type="button" class="btn btn-sm btn-dark">Dark</button>
    </div>
    <div class="mt-2">
        <h5>Medium Button</h5>
        <button type="button" class="btn btn-md btn-primary">Primary</button>
        <button type="button" class="btn btn-md btn-secondary">Secondary</button>
        <button type="button" class="btn btn-md btn-success">Success</button>
        <button type="button" class="btn btn-md btn-danger">Danger</button>
        <button type="button" class="btn btn-md btn-warning">Warning</button>
        <button type="button" class="btn btn-md btn-info">Info</button>
        <button type="button" class="btn btn-md btn-light">Light</button>
        <button type="button" class="btn btn-md btn-dark">Dark</button>
    </div>
    <div class="mt-2">
        <h5>Large Button</h5>
        <button type="button" class="btn btn-lg btn-primary">Primary</button>
        <button type="button" class="btn btn-lg btn-secondary">Secondary</button>
        <button type="button" class="btn btn-lg btn-success">Success</button>
        <button type="button" class="btn btn-lg btn-danger">Danger</button>
        <button type="button" class="btn btn-lg btn-warning">Warning</button>
        <button type="button" class="btn btn-lg btn-info">Info</button>
        <button type="button" class="btn btn-lg btn-light">Light</button>
        <button type="button" class="btn btn-lg btn-dark">Dark</button>
    </div>
    {{-- End Size --}}

    {{-- Button Rounded --}}
    <div>

        <h2 class="mt-5">Rounded Button</h2>
        {{-- Circle button --}}
        <div class="mt-2">
            <h5>Rounded</h5>
            <button type="button" class="btn rounded btn-primary">Primary</button>
            <button type="button" class="btn rounded btn-secondary">Secondary</button>
            <button type="button" class="btn rounded btn-success">Success</button>
            <button type="button" class="btn rounded btn-danger">Danger</button>
            <button type="button" class="btn rounded btn-warning">Warning</button>
            <button type="button" class="btn rounded btn-info">Info</button>
            <button type="button" class="btn rounded btn-light">Light</button>
            <button type="button" class="btn rounded btn-dark">Dark</button>
        </div>
        {{-- End Circle button --}}
        {{-- Circle button --}}
        <div class="mt-2">
            <h5>Button Small Rounded</h5>
            <button type="button" class="btn rounded-sm btn-primary">Primary</button>
            <button type="button" class="btn rounded-sm btn-secondary">Secondary</button>
            <button type="button" class="btn rounded-sm btn-success">Success</button>
            <button type="button" class="btn rounded-sm btn-danger">Danger</button>
            <button type="button" class="btn rounded-sm btn-warning">Warning</button>
            <button type="button" class="btn rounded-sm btn-info">Info</button>
            <button type="button" class="btn rounded-sm btn-light">Light</button>
            <button type="button" class="btn rounded-sm btn-dark">Dark</button>
        </div>
        {{-- End Circle button --}}
        {{-- Circle button --}}
        <div class="mt-2">
            <h5>Button Small Rounded</h5>
            <button type="button" class="btn rounded-lg btn-primary">Primary</button>
            <button type="button" class="btn rounded-lg btn-secondary">Secondary</button>
            <button type="button" class="btn rounded-lg btn-success">Success</button>
            <button type="button" class="btn rounded-lg btn-danger">Danger</button>
            <button type="button" class="btn rounded-lg btn-warning">Warning</button>
            <button type="button" class="btn rounded-lg btn-info">Info</button>
            <button type="button" class="btn rounded-lg btn-light">Light</button>
            <button type="button" class="btn rounded-lg btn-dark">Dark</button>
        </div>
        {{-- End Circle button --}}

    </div>
    {{-- End Button Rounded --}}
@endsection
