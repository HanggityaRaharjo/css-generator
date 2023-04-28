<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
   
    // $myfile = fopen("newfile.css", "w") or die("Unable to open file!");
    // fwrite($myfile, '*{');
    // fwrite($myfile, 'border:1px solid red;}');
    // fclose($myfile);

    return view('welcome');
});

Route::get('/dashboard',function(){
    return view('dashboard');
});
Route::get('/button',function(){
    return view('button');
});
Route::get('/modal',function(){
    return view('modal');
});
