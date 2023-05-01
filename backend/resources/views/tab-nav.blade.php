@extends('layouts.app')

@section('content')
    <main>
        <div class="container-fluid px-4">
            <h1 class="mt-4">Tabs Accordions & Nav</h1>
            <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                <li class="breadcrumb-item active">Tabs Accordions & Nav</li>
            </ol>
            <div class="row">
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                            <h2 class="mb-0">
                                <button type="button" class="btn btn-link" data-toggle="collapse"
                                    data-target="#collapseOne"><i class="fa fa-plus"></i> First Tab</button>
                            </h2>
                        </div>
                        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div class="card-body">
                                <p>First Tab Content</p>
                            </div>
                        </div>
                    </div>
                    <br>

                    <div class="card mb-4">
                        <div class="card-header">

                            <i class="fas fa-chart-area me-1"></i> Default Tabs
                            <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                    <i class="fas fa-minus"></i>
                                </button>
                            </div>
                        </div>
                        <div class="card-body">
                            asdfsadf
                        </div>
                    </div>
                </div>
            </div>



            <div style="height: 100vh"></div>

        </div>
    </main>
@endsection
