<?php

namespace App\Http\Controllers;

use App\Models\Components;
use Illuminate\Http\Request;

class ComponentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    public function test(){
        return 'asd';
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $myfile = fopen("cubex-test.css", "w") or die("Unable to open file!");
        

        // Writing CSS File
        fwrite($myfile, "
        .cubex-box-wrapper {
            border-radius: 15px;
            padding: 20px 38px;
            display: flex;
            align-items: center;
            margin-bottom: 30px;
            width: fit-content;
            background: {$request->components['breadcrumbs']['breadcrumbBackground']};
        }
        ");
        
        fwrite($myfile, "
        .cubex-card-title {
            font-style: normal;
            font-weight: 700;
            font-size: 28px;
            line-height: 32px;
            margin: 0;
            color: {$request->components['breadcrumbs']['breadcrumbTextActive']};
        }
        .cubex-text-primary {
            color: {$request->components['breadcrumbs']['breadcrumbTextActive']};
        }
        ");
        
        fwrite($myfile, "
        .cubex-card {
            min-height: 310px;
            background: {$request->components['card']['cardBackground']};
            border-radius: 8px;
        }
        ");
        

        
        

        fclose($myfile);
        return response('success');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Components  $components
     * @return \Illuminate\Http\Response
     */
    public function show(Components $components)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Components  $components
     * @return \Illuminate\Http\Response
     */
    public function edit(Components $components)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Components  $components
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Components $components)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Components  $components
     * @return \Illuminate\Http\Response
     */
    public function destroy(Components $components)
    {
        //
    }
}
