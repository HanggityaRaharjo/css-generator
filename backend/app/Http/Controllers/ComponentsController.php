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

        $contentBackgroundImage = !empty($request->components['content']['BackgroundImage']) ? 'background-image: url("./../assets/'. $request->components['content']['BackgroundImage'] .'")!important;' : '';

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


        // -------------------------------------------- Table --------------------------------------
        // Button Background
        $tableBackgroundButton = !empty($request->components['table']['pageButton']['BackgroundColor']) ? 'background:'. $request->components['table']['pageButton']['BackgroundColor'] .'!important;' : '';
        $tableBorderColorButton = !empty($request->components['table']['pageButton']['BackgroundColor']) ? 'border-color:'. $request->components['table']['pageButton']['BackgroundColor'] .'!important;' : '';
        // Button Background Hover
        $tableBackgroundButtonHover = !empty($request->components['table']['pageButton']['BackgroundHover']) ? 'background:'. $request->components['table']['pageButton']['BackgroundHover'] .';' : '';
        $tableBorderColorButtonHover = !empty($request->components['table']['pageButton']['BackgroundHover']) ? 'border-color:'. $request->components['table']['pageButton']['BackgroundHover'] .';' : '';

        // --------------------------------------- Modal ----------------------------------------------
        // Modal Header
        $modalHeaderBackgroundColor = !empty($request->components['modal']['modalHeader']['BackgroundColor']) ? 'background:'. $request->components['modal']['modalHeader']['BackgroundColor'] .'!important;' : '';

        // Modal Body
        $modalBodyBackgroundColor = !empty($request->components['modal']['modalBody']['BackgroundColor']) ? 'background:'. $request->components['modal']['modalBody']['BackgroundColor'] .'!important;' : '';

        // Modal Body
        $modalFooterBackgroundColor = !empty($request->components['modal']['modalFooter']['BackgroundColor']) ? 'background:'. $request->components['modal']['modalFooter']['BackgroundColor'] .'!important;' : '';


        // ------------------------------------ End Modal ---------------------------------------------

        // --------------------------------------- Card ----------------------------------------------
        // Modal Header
        $cardHeaderBackgroundColor = !empty($request->components['card']['cardHeader']['BackgroundColor']) ? 'background:'. $request->components['card']['cardHeader']['BackgroundColor'] .'!important;' : '';

        // card Body
        $cardBodyBackgroundColor = !empty($request->components['card']['cardBody']['BackgroundColor']) ? 'background:'. $request->components['card']['cardBody']['BackgroundColor'] .'!important;' : '';

        // card Body
        $cardFooterBackgroundColor = !empty($request->components['card']['cardFooter']['BackgroundColor']) ? 'background:'. $request->components['card']['cardFooter']['BackgroundColor'] .'!important;' : '';


        // ------------------------------------ End Card ---------------------------------------------

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
        

        //------------------------------------------------------------------- BREADCRUMBS -------------------------------------------------------------------------------------
         // breadcrumbs
         $breadcrumbsBackroundColor = !empty($request->components['breadcrumbs']['backgroundColor']) ? 'background:'. $request->components['breadcrumbs']['backgroundColor'] .'!important;' : '';
        //  -------------------------------------------------------
         // breadcrumbs item
         $breadcrumbsItemColor = !empty($request->components['breadcrumbs']['breadcrumbsItem']['color']) ? 'color:'. $request->components['breadcrumbs']['breadcrumbsItem']['color'] .'!important;' : '';
         // breadcrumbs item divider
         $breadcrumbsItemDividerColor = !empty($request->components['breadcrumbs']['breadcrumbsItem']['dividerColor']) ? 'color:'. $request->components['breadcrumbs']['breadcrumbsItem']['dividerColor'] .'!important;' : '';
         // breadcrumbs item space
         $breadcrumbsItemSpace = !empty($request->components['breadcrumbs']['breadcrumbsItem']['itemSpace']) ? 'padding-left:'. $request->components['breadcrumbs']['breadcrumbsItem']['itemSpace'] .'!important;' : '';
        //  breadcrums active
         // breadcrumbs item
         $breadcrumbsItemActiveColor = !empty($request->components['breadcrumbs']['breadcrumbsItemActive']['color']) ? 'color:'. $request->components['breadcrumbs']['breadcrumbsItemActive']['color'] .'!important;' : '';

        // --------------------------------------- End Modal ----------------------------------------------
        // All Content Color
        $allContentColor = '
        main,table thead tr th,table tbody tr td{
            ' . $contentColor . '
        }
        ';

            // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            
        // Writing CSS File
        $myfile = fopen(public_path("bootstrap-test/css/cubex.css"), "w") or die("Unable to open file!");
        fwrite($myfile,'

        /* --------------------------------------------------------- Breadcrumbs -------------------------------------------------*/
        .breadcrumb{
            '. $breadcrumbsBackroundColor .'
        }
        .breadcrumb-item{
            '. $breadcrumbsItemColor.
            $breadcrumbsItemSpace
            .'
        }
        .breadcrumb-item::before{
            '. $breadcrumbsItemDividerColor
            .'
        }
        .breadcrumb-item a{
            '. $breadcrumbsItemColor
            .'
        }
        .breadcrumb-item.active{
            '. $breadcrumbsItemActiveColor
            .'
        }

        /* --------------------------------------------------------- Background -------------------------------------------------*/
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

        /* --------------------------------------------------------- End Background -------------------------------------------------*/

        /* --------------------------------------------------------- Button -------------------------------------------------*/
      
        .btn-primary{
            '.
            $backgroundColorPrimary  //background Primary
            .'
        }

        .btn-secondary{
            '.
            $backgroundColorSecondary  //background Secondary
            .'
        }

        .btn-success{
            '.
            $backgroundColorSuccess  //background success
            .'
        }

        .btn-warning{
            '.
            $backgroundColorWarning  //background warning
            .'
        }

        .btn-info{
            '.
            $backgroundColorInfo  //background Info
            .'
        }

        .btn-danger{
            '.
            $backgroundColorDanger  //background Danger
            .'
        }

        /* --------------------------------------------------------- End Button -------------------------------------------------*/

        /* --------------------------------------------------------- Navbar-------------------------------------------------*/
      
        .navbar-primary{
            '.
            $backgroundColorPrimary  //background Primary
            .'
        }

        .navbar-secondary{
            '.
            $backgroundColorSecondary  //background Secondary
            .'
        }

        .navbar-success{
            '.
            $backgroundColorSuccess  //background success
            .'
        }

        .navbar-warning{
            '.
            $backgroundColorWarning  //background warning
            .'
        }

        .navbar-info{
            '.
            $backgroundColorInfo  //background Info
            .'
        }

        .navbar-danger{
            '.
            $backgroundColorDanger  //background Danger
            .'
        }

        /* --------------------------------------------------------- End Navbar-------------------------------------------------*/
        /* --------------------------------------------------------- Alert-------------------------------------------------*/
      
        .alert-primary{
            '.
            $backgroundColorPrimary  //background Primary
            .'
        }

        .alert-secondary{
            '.
            $backgroundColorSecondary  //background Secondary
            .'
        }

        .alert-success{
            '.
            $backgroundColorSuccess  //background success
            .'
        }

        .alert-warning{
            '.
            $backgroundColorWarning  //background warning
            .'
        }

        .alert-info{
            '.
            $backgroundColorInfo  //background Info
            .'
        }

        .alert-danger{
            '.
            $backgroundColorDanger  //background Danger
            .'
        }

        /* --------------------------------------------------------- End Alert-------------------------------------------------*/
        /* --------------------------------------------------------- Text-------------------------------------------------*/
      
        .text-primary{
            '.
            $backgroundColorPrimary  //background Primary
            .'
        }

        .text-secondary{
            '.
            $backgroundColorSecondary  //background Secondary
            .'
        }

        .text-success{
            '.
            $backgroundColorSuccess  //background success
            .'
        }

        .text-warning{
            '.
            $backgroundColorWarning  //background warning
            .'
        }

        .text-info{
            '.
            $backgroundColorInfo  //background Info
            .'
        }

        .text-danger{
            '.
            $backgroundColorDanger  //background Danger
            .'
        }

        /* --------------------------------------------------------- End Text-------------------------------------------------*/

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
            $contentBackgroundGradient.
            $contentBackgroundImage
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

        .card-header{
            '. 
            $cardHeaderBackgroundColor  //card Header
            .'
        }

        .card-body{
            '. 
            $cardBodyBackgroundColor  //card Body
            .'
        }

        .card-footer{
            '. 
            $cardFooterBackgroundColor  //card Body
            .'
        }

        .page-item.active .page-link{
            '. 
            $tableBackgroundButton.  //Button page
            $tableBorderColorButton  //Button Border Color
            .'
        }

        .page-link:hover{
            '. 
            $tableBackgroundButtonHover.  //Button page Hover
            $tableBorderColorButtonHover  //Button Border Color Hover
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
