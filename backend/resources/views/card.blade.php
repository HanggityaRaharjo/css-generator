@extends('layouts.app')

@section('content')
    <main>
        <div class="container-fluid">
            <h1 class="mt-4">Card</h1>
            <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                <li class="breadcrumb-item active">Alert</li>
            </ol>

            {{-- Simple Card --}}
            <div class="card mb-2">
                <div class="card-header">
                    <h3>Simple Card</h3>
                </div>
                <div class="card-body">
                    {{-- Component --}}
                    <div class="mb-5">
                        <div class="card">
                            <div class="card-body">
                                This is some text within a card body.
                            </div>
                        </div>
                    </div>
                    {{-- End Component --}}

                </div>
            </div>
            {{-- End Simple Card --}}

            {{-- Text Card --}}
            <div class="card mb-2">
                <div class="card-header">
                    <h3>Text Card</h3>
                </div>
                <div class="card-body">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of
                                the
                                card's content.</p>
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                        </div>
                    </div>
                </div>
            </div>
            {{-- End Text Card --}}

            {{-- Text Card --}}
            <div class="card mb-2">
                <div class="card-header">
                    <h3>Card With Image</h3>
                </div>
                <div class="card-body">
                    <div class="card" style="width: 18rem;">
                        <img src="https://www.grouphealth.ca/wp-content/uploads/2018/05/placeholder-image.png"
                            class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of
                                the
                                card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
            {{-- End Text Card --}}

            {{-- Text Card --}}
            <div class="card mb-2">
                <div class="card-header">
                    <h3>Card With List Group</h3>
                </div>
                <div class="card-body">
                    <div class="mb-5">
                        {{-- Component --}}
                        <h4>Card & List</h4>
                        <div class="card" style="width: 18rem;">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">An item</li>
                                <li class="list-group-item">A second item</li>
                                <li class="list-group-item">A third item</li>
                            </ul>
                        </div>
                        {{-- Component --}}
                    </div>

                    <div class="mb-5">
                        {{-- Component --}}
                        <h4>Card Header & List</h4>
                        <div class="card" style="width: 18rem;">
                            <div class="card-header">
                                Featured
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">An item</li>
                                <li class="list-group-item">A second item</li>
                                <li class="list-group-item">A third item</li>
                            </ul>
                        </div>
                        {{-- Component --}}
                    </div>

                    <div class="mb-5">
                        <h4>Card Footer & List</h4>
                        {{-- Component --}}
                        <div class="card" style="width: 18rem;">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">An item</li>
                                <li class="list-group-item">A second item</li>
                                <li class="list-group-item">A third item</li>
                            </ul>
                            <div class="card-footer">
                                Card footer
                            </div>
                        </div>
                        {{-- Component --}}
                    </div>

                </div>
            </div>
            {{-- End Text Card --}}

            {{-- Text Card --}}
            <div class="card mb-2">
                <div class="card-header">
                    <h3>Card Image With List Group</h3>
                </div>
                <div class="card-body">
                    <div class="card" style="width: 18rem;">
                        <img src="https://www.grouphealth.ca/wp-content/uploads/2018/05/placeholder-image.png"
                            class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of
                                the
                                card's content.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">An item</li>
                            <li class="list-group-item">A second item</li>
                            <li class="list-group-item">A third item</li>
                        </ul>
                        <div class="card-body">
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                        </div>
                    </div>
                </div>
            </div>
            {{-- End Text Card --}}

            {{-- Text Card --}}
            <div class="card mb-2">
                <div class="card-header">
                    <h3>Use Grid For Card</h3>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Special title treatment</h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional
                                        content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Special title treatment</h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional
                                        content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Special title treatment</h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional
                                        content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {{-- End Text Card --}}

            {{-- Text Card --}}
            <div class="card mb-2">
                <div class="card-header">
                    <h3>All Card</h3>
                </div>

                <div class="card-body">
                    {{-- Component --}}
                    <div class="mb-5">
                        <div class="card">
                            <h5 class="card-header">Featured</h5>
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.
                                </p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    {{-- End Component --}}
                    {{-- Component --}}
                    <div class="mb-5">
                        <div class="card">
                            <div class="card-header">
                                Quote
                            </div>
                            <div class="card-body">
                                <blockquote class="blockquote mb-0">
                                    <p>A well-known quote, contained in a blockquote element.</p>
                                    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source
                                            Title</cite></footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    {{-- End Component --}}
                    {{-- Component --}}
                    <div class="mb-5">
                        <div class="card text-center">
                            <div class="card-header">
                                Featured
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.
                                </p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                            <div class="card-footer text-muted">
                                2 days ago
                            </div>
                        </div>
                    </div>
                    {{-- End Component --}}
                </div>
            </div>
            {{-- End Text Card --}}

        </div>


    </main>
@endsection
