<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use ZipArchive;

class ZipController extends Controller
{
    public function downloadZip(){

        // $zipper = new ZipArchive();
        // $filename = 'newzip.zip';
        
        // if ($zipper->open(public_path($filename), ZipArchive::CREATE === TRUE))
        // {
        //     $files = File::files(public_path('img'));        
        //     foreach($files as $key => $val){
        //        $relativeNameInZipFile = basename($val);
        //        $zipper->addFile($val, $relativeNameInZipFile);
        //     }
        //     $zipper->close();
        // }
        return response()->download(public_path('bootstrap-test'));
    }
}
