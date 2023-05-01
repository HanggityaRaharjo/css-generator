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

        // Check If Data None
        // Header
        $headerBackgroundColor = !empty($request->components['header']['BackgroundColor']) ? 'background:'. $request->components['header']['BackgroundColor'] .'!important;' : '';
        $headerBackgroundGradient = !empty($request->components['header']['BackgroundGradient']) ? 'background:'. $request->components['header']['BackgroundGradient'] .'!important;' : '';
        // Header Height
        $headerHeight = !empty($request->components['header']['Height']) ? 
        '
        padding-top:' . $request->components['header']['Height'] .'!important;
        padding-bottom:'. $request->components['header']['Height'] .'!important;
        ' : '';
        // Header Border
        $headerBorderColor = !empty($request->components['header']['BorderColor']) ? $request->components['header']['BorderColor'] : '';
        $headerBorder = !empty($request->components['header']['BorderWidth']) ? 'border:'. $request->components['header']['BorderWidth'] .'px solid ' . $headerBorderColor . ';' : '';
        
        // Header Box Shadow
        $headerBoxShadow = !empty($request->components['header']['Shadow']) ? 'box-shadow:'. $request->components['header']['Shadow'] .'!important;' : '';
        // Header Color
        $headerColor = !empty($request->components['header']['Color']) ? 'color:'. $request->components['header']['Color'] .'!important;' : '';

        // All Header Color
        $allHeaderColor = '
            .navbar-dark .navbar-brand,.navbar-dark .navbar-nav .nav-link{
                ' . $headerColor . '
            }
        ';

        // Sidebar
        $sidebarBackgroundColor = !empty($request->components['sidebar']['BackgroundColor']) ? 'background:'. $request->components['sidebar']['BackgroundColor'] .'!important;' : '';
        $sidebarBackgroundGradient = !empty($request->components['sidebar']['BackgroundGradient']) ? 'background:'. $request->components['sidebar']['BackgroundGradient'] .'!important;' : '';

        $sidebarColor = !empty($request->components['sidebar']['Color']) ? 'color:'. $request->components['sidebar']['Color'] .';' : '';

        // All Sidebar Color
        $allSidebarColor = '
        .sidebar .nav-link,.sidebar .nav-link .feather{
            ' . $sidebarColor . '
        }
        ';

        // Content
        $contentBackgroundColor = !empty($request->components['content']['BackgroundColor']) ? 'background:'. $request->components['content']['BackgroundColor'] .'!important;' : '';
        $contentBackgroundGradient = !empty($request->components['content']['BackgroundGradient']) ? 'background:'. $request->components['content']['BackgroundGradient'] .'!important;' : '';

        $contentColor = !empty($request->components['content']['Color']) ? 'color:'. $request->components['content']['Color'] .'!important;' : '';

        // Button Primary
        $buttonPrimaryBackgroundColor = !empty($request->components['button']['Primary']['BackgroundColor']) ? 'background:'. $request->components['button']['Primary']['BackgroundColor'] .'!important;' : '';
        $buttonPrimaryBorderColor = !empty($request->components['button']['Primary']['BackgroundColor']) ? 'border:1px solid '. $request->components['button']['Primary']['BackgroundColor'] .'!important;' : '';

        // Button Secondary
        $buttonSecondaryBackgroundColor = !empty($request->components['button']['Secondary']['BackgroundColor']) ? 'background:'. $request->components['button']['Secondary']['BackgroundColor'] .'!important;' : '';
        $buttonSecondaryBorderColor = !empty($request->components['button']['Secondary']['BackgroundColor']) ? 'border:1px solid '. $request->components['button']['Secondary']['BackgroundColor'] .'!important;' : '';

        // Button Success
        $buttonSuccessBackgroundColor = !empty($request->components['button']['Success']['BackgroundColor']) ? 'background:'. $request->components['button']['Success']['BackgroundColor'] .'!important;' : '';
        $buttonSuccessBorderColor = !empty($request->components['button']['Success']['BackgroundColor']) ? 'border:1px solid '. $request->components['button']['Success']['BackgroundColor'] .'!important;' : '';

        // Button Danger
        $buttonDangerBackgroundColor = !empty($request->components['button']['Error']['BackgroundColor']) ? 'background:'. $request->components['button']['Error']['BackgroundColor'] .'!important;' : '';
        $buttonDangerBorderColor = !empty($request->components['button']['Error']['BackgroundColor']) ? 'border:1px solid '. $request->components['button']['Error']['BackgroundColor'] .'!important;' : '';

        // Button Warning
        $buttonWarningBackgroundColor = !empty($request->components['button']['Warning']['BackgroundColor']) ? 'background:'. $request->components['button']['Warning']['BackgroundColor'] .'!important;' : '';
        $buttonWarningBorderColor = !empty($request->components['button']['Warning']['BackgroundColor']) ? 'border:1px solid '. $request->components['button']['Warning']['BackgroundColor'] .'!important;' : '';

        // Button Info
        $buttonInfoBackgroundColor = !empty($request->components['button']['Info']['BackgroundColor']) ? 'background:'. $request->components['button']['Info']['BackgroundColor'] .'!important;' : '';
        $buttonInfoBorderColor = !empty($request->components['button']['Info']['BackgroundColor']) ? 'border:1px solid '. $request->components['button']['Info']['BackgroundColor'] .'!important;' : '';


        // --------------------------------------- Modal ----------------------------------------------
        // Modal Header
        $modalHeaderBackgroundColor = !empty($request->components['modal']['modalHeader']['BackgroundColor']) ? 'background:'. $request->components['modal']['modalHeader']['BackgroundColor'] .'!important;' : '';

        // Modal Body
        $modalBodyBackgroundColor = !empty($request->components['modal']['modalBody']['BackgroundColor']) ? 'background:'. $request->components['modal']['modalBody']['BackgroundColor'] .'!important;' : '';

        // Modal Body
        $modalFooterBackgroundColor = !empty($request->components['modal']['modalFooter']['BackgroundColor']) ? 'background:'. $request->components['modal']['modalFooter']['BackgroundColor'] .'!important;' : '';

        // BG Color Primary
        $backgroundColorPrimary = !empty($request->components['themeColor']['colorPrimary']) ? 'background:'. $request->components['themeColor']['colorPrimary'] .'!important;' : '';

        // BG Color Secondary
        $backgroundColorSecondary = !empty($request->components['themeColor']['colorSecondary']) ? 'background:'. $request->components['themeColor']['colorSecondary'] .'!important;' : '';

        // BG Color Success
        $backgroundColorSuccess = !empty($request->components['themeColor']['colorSuccess']) ? 'background:'. $request->components['themeColor']['colorSuccess'] .'!important;' : '';

        // BG Color Warning
        $backgroundColorWarning = !empty($request->components['themeColor']['colorWarning']) ? 'background:'. $request->components['themeColor']['colorWarning'] .'!important;' : '';

        // BG Color Info
        $backgroundColorInfo = !empty($request->components['themeColor']['colorInfo']) ? 'background:'. $request->components['themeColor']['colorInfo'] .'!important;' : '';

        // BG Color Danger
        $backgroundColorDanger = !empty($request->components['themeColor']['colorDanger']) ? 'background:'. $request->components['themeColor']['colorDanger'] .'!important;' : '';
        
        
        
        // --------------------------------------- End Modal ----------------------------------------------
        // All Content Color
        $allContentColor = '
        main,table thead tr th,table tbody tr td{
            ' . $contentColor . '
        }
        ';

            // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            
        // Writing CSS File
        $myfile = fopen("cubex.css", "w") or die("Unable to open file!");
        fwrite($myfile, '
        .bg-dark {
            '. 
            $headerBackgroundColor.   // Header
            $headerBackgroundGradient.
            $headerBorder.
            $headerBoxShadow
         
            . ' 
        }

        .bg-primary{
            '.
            $backgroundColorPrimary  //background Primary
            .'
        }

        .bg-secondary{
            '.
            $backgroundColorSecondary  //background Secondary
            .'
        }

        .bg-success{
            '.
            $backgroundColorSuccess  //background success
            .'
        }

        .bg-warning{
            '.
            $backgroundColorWarning  //background warning
            .'
        }

        .bg-info{
            '.
            $backgroundColorInfo  //background Info
            .'
        }

        .bg-danger{
            '.
            $backgroundColorDanger  //background Danger
            .'
        }

        .navbar-brand{
            ' . $headerHeight . '

        }

        .sb-sidenav-dark{
            '.
            $sidebarBackgroundColor. // Sidebar
            $sidebarBackgroundGradient
            .
            '
        }

        ' . $allSidebarColor . '

        main{
            '.
            $contentBackgroundColor.  // Content
            $contentBackgroundGradient
            .
            '
        }

        .btn-primary{                  
            ' . 
            $buttonPrimaryBackgroundColor .  // Button Primary
            $buttonPrimaryBorderColor   
            .'
        }

        .btn-secondary{                  
            ' . 
            $buttonSecondaryBackgroundColor .  // Button Secondary
            $buttonSecondaryBorderColor   
            .'
        }

        .btn-success{                  
            ' . 
            $buttonSuccessBackgroundColor .  // Button Success
            $buttonSuccessBorderColor   
            .'
        }

        .btn-danger{                  
            ' . 
            $buttonDangerBackgroundColor .  // Button Danger
            $buttonDangerBorderColor   
            .'
        }

        .btn-warning{                  
            ' . 
            $buttonWarningBackgroundColor .  // Button Warning
            $buttonWarningBorderColor   
            .'
        }

        .btn-info{                  
            ' . 
            $buttonInfoBackgroundColor .  // Button Info
            $buttonInfoBorderColor   
            .'
        }

        .modal-header{
            '. 
            $modalHeaderBackgroundColor  //Modal Header
            .'
        }

        .modal-body{
            '. 
            $modalBodyBackgroundColor  //Modal Body
            .'
        }

        .modal-footer{
            '. 
            $modalFooterBackgroundColor  //Modal Body
            .'
        }

        ' . 
        $allContentColor.
        $allHeaderColor
        . '
        
        ');
        fclose($myfile);
       
        return response($request);
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
