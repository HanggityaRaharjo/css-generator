@extends('layouts.app')

@section('content')
    <main>
        <div class="container-fluid px-4">
            <h1 class="mt-4">Font Awesome Icons</h1>
            <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                <li class="breadcrumb-item active">Font Icons</li>
            </ol>
            <div class="row">
                <div class="col-sm-6">
                    <div class="card mb-4">
                        <div class="card-header">
                            <i class="fas fa-chart-area me-1"></i> Font Awesome Icons
                        </div>
                        <div class="card-body">
                            To use the Font Awesome icons, add the following line inside the

                            <head> section of your HTML page:
                                <p><b>Note</b>: No downloading or installation is required!</p>
                                <b>Embeded Code :</b><br>
                                < link rel="stylesheet"
                                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                                    <br>
                                    <b> Font Library : <a
                                            href="https://fontawesome.com/search">https://fontawesome.com/search</a></b>
                                    <p class="mt-2">Some Font icons:</p>
                                    <i class="fa fa-cloud"></i>
                                    <i class="fa fa-heart"></i>
                                    <i class="fa fa-car"></i>
                                    <i class="fa fa-file"></i>
                                    <i class="fa fa-bars"></i>

                                    <p class="mt-4">Styled Font Awesome icons (size, color, and shadow):</p>
                                    <i class="fa fa-cloud" style="font-size:24px;"></i>
                                    <i class="fa fa-cloud" style="font-size:36px;"></i>
                                    <i class="fa fa-cloud" style="font-size:48px;color:red;"></i>
                                    <i class="fa fa-cloud"
                                        style="font-size:60px;color:lightblue;text-shadow:2px 2px 4px #000000;"></i>


                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card mb-4">
                        <div class="card-header">
                            <i class="fas fa-chart-area me-1"></i> Google Font Icons
                        </div>
                        <div class="card-body">
                            To use the Google icons, add the following line inside the

                            <head> section of your HTML page:
                                <p><b>Note</b>: No downloading or installation is required!</p>
                                <b>Embeded Code : </b><br>
                                < link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

                                    <p class="mt-5">Some Google icons:</p>
                                    <i class="material-icons">cloud</i>
                                    <i class="material-icons">favorite</i>
                                    <i class="material-icons">attachment</i>
                                    <i class="material-icons">computer</i>
                                    <i class="material-icons">traffic</i>


                                    <p class="mt-2">Styled Google icons (size, color, and shadow):</p>
                                    <i class="material-icons" style="font-size:24px;">cloud</i>
                                    <i class="material-icons" style="font-size:36px;">cloud</i>
                                    <i class="material-icons" style="font-size:48px;color:red;">cloud</i>
                                    <i class="material-icons"
                                        style="font-size:60px;color:lightblue;text-shadow:2px 2px 4px #000000;">cloud</i>
                        </div>
                    </div>
                </div>
            </div>



            <div style="height: 100vh"></div>

        </div>
    </main>
@endsection
