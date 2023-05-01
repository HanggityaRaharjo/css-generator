<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>Dashboard - SB Admin</title>
    <link href="{{ asset('bootstrap-4/css/styles.css') }}" rel="stylesheet" />
    <link href="https://cdn.datatables.net/1.10.20/css/dataTables.bootstrap4.min.css" rel="stylesheet"
        crossorigin="anonymous" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js" crossorigin="anonymous"></script>
    <script src="{{ asset('bootstrap-4//jquery.3.5/jquery.3.5.js') }}" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="{{ asset('cubex.css') }}" />
    <style>
        code .line {
            border: 1px solid red;
        }
    </style>
</head>

<body class="sb-nav-fixed">
    <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <div class="navbar-brand" id="navbarbrand"></div>
        <!-- <a class="navbar-brand" href="index.html">Start Bootstrap</a> -->
        <button class="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#">
            <i class="fas fa-bars"></i>
        </button>
        <!-- Navbar Search-->
        <div id="navbarsearch" class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0"></div>
        <!-- Navbar-->
        <div id="navbarnav" class="navbar-nav ml-auto ml-md-0"></div>
    </nav>
    <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
            <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div class="sb-sidenav-menu" id="sidebarmenu">

                    <div class="nav">
                        <div class="sb-sidenav-menu-heading">Core</div>
                        <a class="nav-link" href="{{ url('dashboard') }}">
                            <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                            Dashboard
                        </a>
                        <div class="sb-sidenav-menu-heading">Interface</div>
                        <a class="nav-link collapsed" href="#" data-toggle="collapse"
                            data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                            Layouts
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a>
                        <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne"
                            data-parent="#sidenavAccordion">
                            <nav class="sb-sidenav-menu-nested nav">
                                <a class="nav-link" href="layout-static.html">Static Navigation</a>

                            </nav>
                        </div>
                        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                            aria-expanded="false" aria-controls="collapsePages">
                            <div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
                            Pages
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a>
                        <div class="collapse" id="collapsePages" aria-labelledby="headingTwo"
                            data-parent="#sidenavAccordion">
                            <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                <a class="nav-link collapsed" href="#" data-toggle="collapse"
                                    data-target="#pagesCollapseAuth" aria-expanded="false"
                                    aria-controls="pagesCollapseAuth">
                                    Authentication
                                    <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                </a>
                                <div class="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne"
                                    data-parent="#sidenavAccordionPages">
                                    <nav class="sb-sidenav-menu-nested nav">
                                        <a class="nav-link" href="login.html">Login</a>
                                        <a class="nav-link" href="register.html">Register</a>
                                        <a class="nav-link" href="password.html">Forgot Password</a>
                                    </nav>
                                </div>
                                <a class="nav-link collapsed" href="#" data-toggle="collapse"
                                    data-target="#pagesCollapseError" aria-expanded="false"
                                    aria-controls="pagesCollapseError">
                                    Error
                                    <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                </a>
                                <div class="collapse" id="pagesCollapseError" aria-labelledby="headingOne"
                                    data-parent="#sidenavAccordionPages">
                                    <nav class="sb-sidenav-menu-nested nav">
                                        <a class="nav-link" href="401.html">401 Page</a>
                                        <a class="nav-link" href="404.html">404 Page</a>
                                        <a class="nav-link" href="500.html">500 Page</a>
                                    </nav>
                                </div>
                            </nav>
                        </div>
                        <div class="sb-sidenav-menu-heading">Features</div>
                        <a class="nav-link collapsed" href="#" data-toggle="collapse"
                            data-target="#pagesUIFitures" aria-expanded="false" aria-controls="pagesUIFitures">
                            <div class="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
                            UI Features
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a>
                        <div class="collapse" id="pagesUIFitures" aria-labelledby="headingOne"
                            data-parent="#sidenavAccordionPages">
                            <nav class="sb-sidenav-menu-nested nav">
                                <a class="nav-link" href="{{ url('button') }}">Buttons</a>
                                <a class="nav-link" href="{{ url('pop-over') }}">Popover Confirmations</a>
                                <a class="nav-link" href="{{ url('font-icon') }}">Font Icons</a>
                                <a class="nav-link" href="{{ url('typography') }}">Typograhpy</a>
                                <a class="nav-link" href="{{ url('tab-nav') }}">Tabs Accordions & Nav</a>
                                <a class="nav-link" href="#">Tree View</a>
                                <a class="nav-link" href="#">Toastr Notification</a>
                                <a class="nav-link" href="#">Alert & Dialogs</a>
                                <a class="nav-link" href="{{ url('modal') }}">Modal</a>
                                <a class="nav-link" href="#">Extended Modal</a>
                                <a class="nav-link" href="500.html">Nested Table List</a>
                            </nav>
                        </div>
                        <a class="nav-link collapsed" href="#" data-toggle="collapse"
                            data-target="#pagesUIComponents" aria-expanded="false" aria-controls="pagesUIComponents">
                            <div class="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
                            UI Components
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a>
                        <div class="collapse" id="pagesUIComponents" aria-labelledby="headingOne"
                            data-parent="#sidenavAccordionPages">
                            <nav class="sb-sidenav-menu-nested nav">
                                <a class="nav-link" href="401.html">Datetime Pickers</a>
                                <a class="nav-link" href="404.html">Dropdowns</a>
                                <a class="nav-link" href="500.html">From Widgets & Tools</a>
                                <a class="nav-link" href="500.html">WYSIWYG Editors</a>
                                <a class="nav-link" href="500.html">Range Slider</a>
                                <a class="nav-link" href="500.html">Knob Dials</a>
                            </nav>
                        </div>
                        <a class="nav-link collapsed" href="#" data-toggle="collapse"
                            data-target="#pagesFormStuff" aria-expanded="false" aria-controls="pagesFormStuff">
                            <div class="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
                            Form Stuff
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a>
                        <div class="collapse" id="pagesFormStuff" aria-labelledby="headingOne"
                            data-parent="#sidenavAccordionPages">
                            <nav class="sb-sidenav-menu-nested nav">
                                <a class="nav-link" href="401.html">Form Control</a>
                                <a class="nav-link" href="404.html">Icheck</a>
                                <a class="nav-link" href="500.html">From Layout</a>
                                <a class="nav-link" href="500.html">Form Wizard</a>
                                <a class="nav-link" href="500.html">Form Validation</a>
                                <a class="nav-link" href="500.html">Upload Dropzone</a>
                            </nav>
                        </div>
                        <a class="nav-link collapsed" href="#" data-toggle="collapse"
                            data-target="#pagesDataTable" aria-expanded="false" aria-controls="pagesDataTable">
                            <div class="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
                            Datatable
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a>
                        <div class="collapse" id="pagesDataTable" aria-labelledby="headingOne"
                            data-parent="#sidenavAccordionPages">
                            <nav class="sb-sidenav-menu-nested nav">
                                <a class="nav-link" href="tables.html">Basic Datatable</a>
                                <a class="nav-link" href="404.html">Responsive Datatable</a>
                                <a class="nav-link" href="500.html">Editable Datatabble</a>
                                <a class="nav-link" href="500.html">Advance Datatable</a>
                            </nav>
                        </div>

                        <a class="nav-link" href="404.html">
                            <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                            Menu
                        </a>
                        <div class="sb-sidenav-menu-heading">Vendor Addons</div>


                        <a class="nav-link collapsed" href="#" data-toggle="collapse"
                            data-target="#pagesCharts" aria-expanded="false" aria-controls="pagesCharts">
                            <div class="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
                            Charts
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a>
                        <div class="collapse" id="pagesCharts" aria-labelledby="headingOne"
                            data-parent="#sidenavAccordionPages">
                            <nav class="sb-sidenav-menu-nested nav">
                                <a class="nav-link" href="401.html">Amchart</a>
                                <a class="nav-link" href="404.html">Chart Js</a>
                            </nav>
                        </div>
                        <!-- <a class="nav-link" href="tables.html">
                            <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                            Tables
                        </a> -->

                        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#pagesMaps"
                            aria-expanded="false" aria-controls="pagesMaps">
                            <div class="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
                            Maps
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a>
                        <div class="collapse" id="pagesMaps" aria-labelledby="headingOne"
                            data-parent="#sidenavAccordionPages">
                            <nav class="sb-sidenav-menu-nested nav">
                                <a class="nav-link" href="tables.html">GMAP</a>
                                <a class="nav-link" href="404.html">OSM</a>

                            </nav>
                        </div>
                    </div>
                </div>
                <div class="sb-sidenav-footer">
                    <div class="small">Logged in as:</div>
                    Start Bootstrap
                </div>
            </nav>
        </div>
        <div id="layoutSidenav_content">
            @yield('content')
            <footer class="py-4 bg-light mt-auto" id="footer"></footer>
        </div>
    </div>
    <script>
        $(function() {
            // $("#sidebarmenu").load("sidebar.html");
            $("#navbarbrand").load("navbar-brand.html");
            $("#navbarsearch").load("navbar-search.html");
            $("#navbarnav").load("navbar-nav.html");
            $("#footer").load("footer.html");
        });
    </script>

    {{-- Pop over --}}

    <script>
        $(document).ready(function() {
            $('[data-toggle="popover"]').popover({
                html: true,
            });
        });
    </script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js" crossorigin="anonymous">
    </script>
    <script src="{{ asset('bootstrap-4/js/script.js') }}"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js" crossorigin="anonymous"></script>
    <script src="{{ asset('bootstrap-4/assets/demo/chart-area-demo.js') }}"></script>
    <script src="{{ asset('bootstrap-4/assets/demo/chart-bar-demo.js') }}"></script>
    <script src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js" crossorigin="anonymous"></script>
    <script src="https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.min.js" crossorigin="anonymous"></script>
    <script src="{{ asset('bootstrap-4/assets/demo/datatables-demo.js') }}"></script>
</body>

</html>
