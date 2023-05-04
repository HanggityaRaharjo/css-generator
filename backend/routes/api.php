<?php

use App\Http\Controllers\ComponentsController;
use App\Http\Controllers\AssetController;
use App\Http\Controllers\ZipController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/tes',[ComponentsController::class,'store']);
Route::post('/store-image',[AssetController::class,'store']);

Route::get('/download-zip',[ZipController::class,'downloadZip']);


