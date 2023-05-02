@extends('layouts.app')

@section('content')
    <main>
        <div class="container-fluid px-4">
            <h1 class="mt-4">Tabs Accordions & Nav</h1>
            <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                <li class="breadcrumb-item active">Alert</li>
            </ol>
            <div class="row">
                <div class="col-sm-12">
                    <div class="card mb-4">
                        <div class="card-header">
                            <div class="card-tools">
                                <i class="fas fa-chart-area me-1"></i> Default Alert
                                <button type="button" class="btn collapsed" data-card-widget="collapse" style="float:right"
                                    data-toggle="collapse" data-target="#defaultTabs" aria-expanded="false"
                                    aria-controls="defaultTabs">
                                    <i class="fa fa-caret-down"></i>
                                </button>
                            </div>
                        </div>
                        <div class="collapse show" id="defaultTabs" aria-labelledby="headingOne"
                            data-parent="#sidenavAccordion">
                            <div class="card-body">
                                <h2>Alerts</h2>
                                <p>Alerts are created with the .alert class, followed by a contextual color classes:</p>
                                <div class="alert alert-success">
                                    <strong>Success!</strong> This alert box could indicate a successful or positive action.
                                </div>
                                <div class="alert alert-info">
                                    <strong>Info!</strong> This alert box could indicate a neutral informative change or
                                    action.
                                </div>
                                <div class="alert alert-warning">
                                    <strong>Warning!</strong> This alert box could indicate a warning that might need
                                    attention.
                                </div>
                                <div class="alert alert-danger">
                                    <strong>Danger!</strong> This alert box could indicate a dangerous or potentially
                                    negative action.
                                </div>
                                <div class="alert alert-primary">
                                    <strong>Primary!</strong> Indicates an important action.
                                </div>
                                <div class="alert alert-secondary">
                                    <strong>Secondary!</strong> Indicates a slightly less important action.
                                </div>
                                <div class="alert alert-dark">
                                    <strong>Dark!</strong> Dark grey alert.
                                </div>
                                <div class="alert alert-light">
                                    <strong>Light!</strong> Light grey alert.
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



            <div style="height: 100vh"></div>

        </div>
    </main>
@endsection
