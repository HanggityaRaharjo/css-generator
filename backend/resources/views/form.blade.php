@extends('layouts.app')

@section('content')
    <main>
        <div class="container-fluid">
            <h1 class="mt-4">Collapse</h1>
            <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                <li class="breadcrumb-item active">Collapse</li>
            </ol>


            <div class="card mb-2">
                <div class="card-header">
                    <h3>Form</h3>
                </div>
                <div class="card-body">
                    {{-- Component --}}
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                                else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1">
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    {{-- Component --}}
                </div>
            </div>


            <div class="card mb-2">
                <div class="card-header">
                    <h3>Form Control</h3>
                </div>
                <div class="card-body">
                    {{-- Component --}}
                    <form>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1"
                                placeholder="name@example.com">
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Example select</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlSelect2">Example multiple select</label>
                            <select multiple class="form-control" id="exampleFormControlSelect2">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Example textarea</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </form>
                    {{-- Component --}}
                    {{-- Component --}}
                    <form>
                        <div class="form-group">
                            <label for="exampleFormControlFile1">Example file input</label>
                            <input type="file" class="form-control-file" id="exampleFormControlFile1">
                        </div>
                    </form>
                    {{-- Component --}}
                </div>
            </div>

            <div class="card mb-2">
                <div class="card-header">
                    <h3>Sizing Form Control</h3>
                </div>
                <div class="card-body">
                    <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg">
                    <input class="form-control" type="text" placeholder="Default input">
                    <input class="form-control form-control-sm" type="text" placeholder=".form-control-sm">
                </div>
            </div>

            <div class="card mb-2">
                <div class="card-header">
                    <h3>Read Only</h3>
                </div>
                <div class="card-body">
                    {{-- Component --}}
                    <input class="form-control mb-2" type="text" placeholder="Readonly input here..." readonly>
                    {{-- End Component --}}
                    {{-- Component --}}
                    <form>
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
                                <input type="text" readonly class="form-control-plaintext" id="staticEmail"
                                    value="email@example.com">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control" id="inputPassword">
                            </div>
                        </div>
                    </form>
                    {{-- End Component --}}
                </div>
            </div>


    </main>
@endsection
