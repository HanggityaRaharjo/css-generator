@extends('layouts.app')

@section('content')
    <main>
        <div class="container-fluid px-4">
            <h1 class="mt-4">Buttons</h1>
            <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                <li class="breadcrumb-item active">Buttons</li>
            </ol>
            <div class="row">
                <div class="col-sm-6">
                    <div class="card mb-4">
                        <div class="card-header">
                            <i class="fas fa-chart-area me-1"></i>Buttons
                        </div>
                        <div class="card-body">
                            <div class="d-flex mb-2">
                                <h5>Button Default</h5>
                            </div>
                            <button type="button" class="btn btn-primary">Primary</button>
                            <button type="button" class="btn btn-secondary">Secondary</button>
                            <button type="button" class="btn btn-success">Success</button>
                            <button type="button" class="btn btn-danger">Danger</button>
                            <button type="button" class="btn btn-warning">Warning</button>
                            <button type="button" class="btn btn-info">Info</button>
                            <button type="button" class="btn btn-light">Light</button>
                            <button type="button" class="btn btn-dark">Dark</button>

                            <div class="card bg-dark p-2 text-primary d-flex flex-column">
                                <pre>
                                    <code>
                                        <div>"<div>asd</div>"</div>
                                    </code>
                                </pre>
                            </div>


                            <div class="d-flex mt-4 mb-2">
                                <h5>Button Outline</h5>
                            </div>
                            <button type="button" class="btn btn-outline-primary">Primary</button>
                            <button type="button" class="btn btn-outline-secondary">Secondary</button>
                            <button type="button" class="btn btn-outline-success">Success</button>
                            <button type="button" class="btn btn-outline-info">Info</button>
                            <button type="button" class="btn btn-outline-warning">Warning</button>
                            <button type="button" class="btn btn-outline-danger">Danger</button>
                            <button type="button" class="btn btn-outline-dark">Dark</button>
                            <button type="button" class="btn btn-outline-light text-dark">Light</button>
                            <div class="d-flex mt-4 mb-2">
                                <h5>Button Size</h5>
                            </div>
                            <button type="button" class="btn btn-primary btn-lg">Large</button>
                            <button type="button" class="btn btn-primary">Default</button>
                            <button type="button" class="btn btn-primary btn-sm">Small</button>
                            <div class="d-flex mt-4 mb-2">
                                <h5>Block Level Buttons<h5>
                            </div>
                            <button type="button" class="btn btn-primary btn-block">Full-Width Button</button>
                            <div class="d-flex mt-4 mb-2">
                                <h5>Active/Disabled Buttons<h5>
                            </div>
                            <button type="button" class="btn btn-primary active">Active Primary</button>
                            <button type="button" class="btn btn-primary" disabled>Disabled Primary</button>
                            <a href="#" class="btn btn-primary disabled">Disabled Link</a>
                            <div class="d-flex mt-4 mb-2">
                                <h5>Spiner Buttons<h5>
                            </div>
                            <button class="btn btn-primary">
                                <span class="spinner-border spinner-border-sm"></span>
                            </button>

                            <button class="btn btn-primary">
                                <span class="spinner-border spinner-border-sm"></span>
                                Loading..
                            </button>

                            <button class="btn btn-primary" disabled>
                                <span class="spinner-border spinner-border-sm"></span>
                                Loading..
                            </button>

                            <button class="btn btn-primary" disabled>
                                <span class="spinner-grow spinner-grow-sm"></span>
                                Loading..
                            </button>

                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card mb-4">
                        <div class="card-header">
                            <i class="fas fa-chart-area me-1"></i> Button Groups
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="d-flex mb-2">
                                        <h5>Horizontal Button Groups<h5>
                                    </div>
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-success">Apple</button>
                                        <button type="button" class="btn btn-danger">Samsung</button>
                                        <button type="button" class="btn btn-warning">Sony</button>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="d-flex mb-2">
                                        <h5>Nesting Button Groups<h5>
                                    </div>
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-success">Apple</button>
                                        <button type="button" class="btn btn-danger">Samsung</button>
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-warning dropdown-toggle"
                                                data-toggle="dropdown">
                                                Sony
                                            </button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#">Tablet</a>
                                                <a class="dropdown-item" href="#">Smartphone</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="d-flex mt-4 mb-2">
                                        <h5>Vertical Button Groups<h5>
                                    </div>
                                    <div class="btn-group-vertical">
                                        <button type="button" class="btn btn-success">Apple</button>
                                        <button type="button" class="btn btn-danger">Samsung</button>
                                        <button type="button" class="btn btn-warning">Sony</button>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="d-flex mt-4 mb-2">
                                        <h5>Vertical Button Group w/ Dropdown<h5>
                                    </div>
                                    <div class="btn-group-vertical">
                                        <button type="button" class="btn btn-success">Apple</button>
                                        <button type="button" class="btn btn-danger">Samsung</button>
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-warning dropdown-toggle"
                                                data-toggle="dropdown">
                                                Sony
                                            </button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#">Tablet</a>
                                                <a class="dropdown-item" href="#">Smartphone</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="d-flex mt-4 mb-2">
                                        <h5>Large Size Button Groups<h5>
                                    </div>
                                    <div class="btn-group btn-group-lg">
                                        <button type="button" class="btn btn-success">Apple</button>
                                        <button type="button" class="btn btn-danger">Samsung</button>
                                        <button type="button" class="btn btn-warning">Sony</button>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="d-flex mt-4 mb-2">
                                        <h5>Default Size Button Groups<h5>
                                    </div>
                                    <div class="btn-group btn-group">
                                        <button type="button" class="btn btn-success">Apple</button>
                                        <button type="button" class="btn btn-danger">Samsung</button>
                                        <button type="button" class="btn btn-warning">Sony</button>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="d-flex mt-4 mb-2">
                                        <h5>Small Size Button Groups<h5>
                                    </div>
                                    <div class="btn-group btn-group-sm">
                                        <button type="button" class="btn btn-success">Apple</button>
                                        <button type="button" class="btn btn-danger">Samsung</button>
                                        <button type="button" class="btn btn-warning">Sony</button>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="d-flex mt-4 mb-2">
                                        <h5>Split Button Groups<h5>
                                    </div>
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-success">Sony</button>
                                        <button type="button"
                                            class="btn btn-danger dropdown-toggle dropdown-toggle-split"
                                            data-toggle="dropdown">
                                            <span class="caret"></span>
                                        </button>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">Tablet</a>
                                            <a class="dropdown-item" href="#">Smartphone</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex mt-4 mb-2">
                                <h5>Button Groups Side by Side<h5>
                            </div>
                            <div class="btn-group">
                                <button type="button" class="btn btn-success">Apple</button>
                                <button type="button" class="btn btn-danger">Samsung</button>
                                <button type="button" class="btn btn-warning">Sony</button>
                            </div>

                            <div class="btn-group">
                                <button type="button" class="btn btn-success">BMW</button>
                                <button type="button" class="btn btn-danger">Mercedes</button>
                                <button type="button" class="btn btn-warning">Volvo</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





        </div>
    </main>
@endsection
