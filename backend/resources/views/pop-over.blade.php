@extends('layouts.app')

@section('content')
    <main>
        <div class="container-fluid px-4">
            <h1 class="mt-4">Popover Confirmations</h1>
            <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                <li class="breadcrumb-item active">Popover Confirmations</li>
            </ol>
            <div class="row">
                <div class="col-sm-12">
                    <div class="card mb-4">
                        <div class="card-header">
                            <i class="fas fa-chart-area me-1"></i> Popover
                        </div>
                        <div class="card-body">
                            <h5>Default</h5>
                            <a href="#" class="btn btn-primary" data-placement="top"
                                data-trigger=""data-toggle="popover" title="Popover Header"
                                data-content="popover content <br><p class='mt-3' align='center'><a href='#' class='btn btn-sm btn-primary'>Yes</a> <a href='#' class='btn btn-sm btn-danger'>No</a></b></p>">Default
                                Toggle</a>
                            <h5 class="mt-4">Directions</h5>
                            <div class="d-flex flex-row">
                                <div class="p-2"><a href="#" class="btn btn-success" data-placement="top"
                                        data-trigger=""data-toggle="popover" title="Popover Top"
                                        data-content="popover content <br><p class='mt-3' align='center'><a href='#' class='btn btn-sm btn-primary'>Yes</a> <a href='#' class='btn btn-sm btn-danger'>No</a></b></p>">Top
                                        Toggle</a></div>
                                <div class="p-2"><a href="#" class="btn btn-danger" data-placement="bottom"
                                        data-trigger=""data-toggle="popover" title="Popover Bottom"
                                        data-content="popover content <br><p class='mt-3' align='center'><a href='#' class='btn btn-sm btn-primary'>Yes</a> <a href='#' class='btn btn-sm btn-danger'>No</a></b></p>">Bottom
                                        Toggle</a></div>
                                <div class="p-2"><a href="#" class="btn btn-warning" data-placement="left"
                                        data-trigger=""data-toggle="popover" title="Popover Left"
                                        data-content="popover content <br><p class='mt-3' align='center'><a href='#' class='btn btn-sm btn-primary'>Yes</a> <a href='#' class='btn btn-sm btn-danger'>No</a></b></p>">Left
                                        Toggle</a></div>
                                <div class="p-2"><a href="#" class="btn btn-info" data-placement="right"
                                        data-trigger=""data-toggle="popover" title="Popover Right"
                                        data-content="popover content <br><p class='mt-3' align='center'><a href='#' class='btn btn-sm btn-primary'>Yes</a> <a href='#' class='btn btn-sm btn-danger'>No</a></b></p>">Right
                                        Toggle</a></div>
                            </div>
                            <h5 class="mt-4">Hover</h5>
                            <div class="p-2"><a href="#" class="btn btn-success" data-placement="top"
                                    data-trigger="hover" data-toggle="popover" title="Popover Hover"
                                    data-content="popover content">Hover Toggle</a></div>




                        </div>
                    </div>
                </div>
            </div>



            <div style="height: 100vh"></div>

        </div>
    </main>
@endsection
