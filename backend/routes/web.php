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

Route::get('/pop-over',function(){
    return view('pop-over');
});

Route::get('/font-icon',function(){
    return view('font-icon');
});

Route::get('/typography',function(){
    return view('typography');
});

Route::get('/basic-table',function(){
    return view('basic-table');
});

Route::get('/tab-nav',function(){
    return view('tab-nav');
});

Route::get('/alert',function(){
    return view('alert');
});

Route::get('/badge',function(){
    return view('badge');
});

Route::get('/card',function(){
    return view('card');
});

Route::get('/collapse',function(){
    return view('collapse');
});

Route::get('/form',function(){
    return view('form');
});

Route::get('/form-layout',function(){
    return view('form-layout');
});

Route::get('/form-validation',function(){
    return view('form-validation');
});

Route::get('/input-group',function(){
    return view('input-group');
});
