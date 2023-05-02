@extends('layouts.app')

@section('content')
    <main>
        <div class="container-fluid">
            <h1 class="mt-4">Collapse</h1>
            <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                <li class="breadcrumb-item active">Collapse</li>
            </ol>



            {{-- Simple Collapse --}}
            <div class="card mb-2">
                <div class="card-header">
                    <h3>Simple Collapse</h3>
                </div>

                <div class="card-body">
                    <p>
                        <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button"
                            aria-expanded="false" aria-controls="collapseExample">
                            Link with href
                        </a>
                        <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample"
                            aria-expanded="false" aria-controls="collapseExample">
                            Button with data-target
                        </button>
                    </p>
                    <div class="collapse" id="collapseExample">
                        <div class="card card-body">
                            Some placeholder content for the collapse component. This panel is hidden by default but
                            revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                </div>

            </div>
            {{-- End Simple Collapse --}}


            {{-- Simple Collapse --}}
            <div class="card mb-2">
                <div class="card-header">
                    <h3>Multiple targets</h3>
                </div>

                <div class="card-body">
                    <p>
                        <a class="btn btn-primary" data-toggle="collapse" href="#multiCollapseExample1" role="button"
                            aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
                        <button class="btn btn-primary" type="button" data-toggle="collapse"
                            data-target="#multiCollapseExample2" aria-expanded="false"
                            aria-controls="multiCollapseExample2">Toggle second element</button>
                        <button class="btn btn-primary" type="button" data-toggle="collapse" data-target=".multi-collapse"
                            aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both
                            elements</button>
                    </p>
                    <div class="row">
                        <div class="col">
                            <div class="collapse multi-collapse" id="multiCollapseExample1">
                                <div class="card card-body">
                                    Some placeholder content for the first collapse component of this multi-collapse
                                    example. This panel is hidden by default but revealed when the user activates the
                                    relevant trigger.
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="collapse multi-collapse" id="multiCollapseExample2">
                                <div class="card card-body">
                                    Some placeholder content for the second collapse component of this multi-collapse
                                    example. This panel is hidden by default but revealed when the user activates the
                                    relevant trigger.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {{-- End Simple Collapse --}}


            {{-- Simple Collapse --}}
            <div class="card mb-2">
                <div class="card-header">
                    <h3>Accordion</h3>
                </div>

                <div class="card-body">
                    <div class="accordion" id="accordionExample">
                        <div class="card">
                            <div class="card-header" id="headingOne">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                                        data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Collapsible Group Item #1
                                    </button>
                                </h2>
                            </div>

                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                                data-parent="#accordionExample">
                                <div class="card-body">
                                    Some placeholder content for the first accordion panel. This panel is shown by default,
                                    thanks to the <code>.show</code> class.
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingTwo">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left collapsed" type="button"
                                        data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
                                        aria-controls="collapseTwo">
                                        Collapsible Group Item #2
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                                data-parent="#accordionExample">
                                <div class="card-body">
                                    Some placeholder content for the second accordion panel. This panel is hidden by
                                    default.
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingThree">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left collapsed" type="button"
                                        data-toggle="collapse" data-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                        Collapsible Group Item #3
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                                data-parent="#accordionExample">
                                <div class="card-body">
                                    And lastly, the placeholder content for the third and final accordion panel. This panel
                                    is hidden by default.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {{-- End Simple Collapse --}}

        </div>


    </main>
@endsection
