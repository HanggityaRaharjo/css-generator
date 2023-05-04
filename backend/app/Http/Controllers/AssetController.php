<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AssetController extends Controller
{
    public function store(Request $request){
        $filename = $request->file('images')->getClientOriginalName();
        $request->file('images')->move(public_path("bootstrap-test/assets"), $filename);
        return response(['path' => 'http://localhost:8000/bootstrap-test/assets/'.$filename,'name' => $filename] ,200);
    }
}
