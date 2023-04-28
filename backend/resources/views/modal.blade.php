@extends('layouts.app')

@section('content')
    {{-- Show Demo Modal --}}
    <div class="mb-5">
        <h3>Default Modal</h3>
        <div class="p-3 border rounded-lg">
            {{-- Demo Modal --}}
            <div class="d-flex justify-content-center mb-2">
                <div style="width: 500px">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>Modal body text goes here.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            {{-- Demo Modal --}}

            <!-- Button trigger modal -->
            <div class="d-flex justify-content-center">

                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal1">
                    Click Me
                </button>
            </div>
        </div>
    </div>
    {{-- End Show Demo Modal --}}
    {{-- Show Static Backdrop Demo Modal --}}
    <div class="mb-5">
        <h3>Static Backdrop Modal</h3>
        <div class="p-3 border rounded-lg">
            {{-- Demo Modal --}}
            <div class="d-flex justify-content-center mb-2">
                <div style="width: 500px">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>Modal body text goes here.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            {{-- Demo Modal --}}

            <!-- Button trigger modal -->
            <div class="d-flex justify-content-center">


                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">
                    Click Me
                </button>

            </div>
        </div>
    </div>
    {{-- End Show Static Backdrip Demo Modal --}}
    {{-- Scrolling Long Modal --}}
    <div class="mb-5">
        <h3>Scrolling Long Modal</h3>
        <div class="p-3 border rounded-lg">
            {{-- Demo Modal --}}
            <div class="d-flex justify-content-center mb-2">
                <div style="width: 400px">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body" style="height: 500px;overflow-y: scroll">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, sequi, est hic aut illo
                                magni corrupti sapiente maiores minima molestias commodi nam, asperiores nulla optio! Dolore
                                provident laboriosam enim! Distinctio officia placeat vitae, repellat debitis commodi quis
                                laborum nemo, cum animi, rem iure consequatur quaerat! Animi ut itaque dicta dignissimos cum
                                voluptatibus autem molestias, adipisci modi ad sapiente, consequatur cupiditate totam.
                                Dolorum necessitatibus unde velit, reiciendis dolore pariatur sapiente! Illo, voluptas
                                consequatur. Nam possimus tenetur at saepe temporibus maxime eum vitae debitis modi sit
                                incidunt, voluptatibus dolor laborum autem minima inventore dicta eveniet perferendis,
                                provident id unde! Consequatur necessitatibus fugit quasi eum. Esse ad vitae laudantium
                                adipisci eum, illo ratione culpa asperiores nam aspernatur delectus totam commodi
                                necessitatibus ex sequi incidunt facere nesciunt voluptatibus accusamus enim aperiam
                                voluptas. Ex beatae ipsa cupiditate odit ullam, quae, voluptatem cumque architecto delectus,
                                veritatis laudantium quidem eius facilis quos. Nobis sequi impedit odit, doloremque ratione
                                repellat distinctio, soluta nulla illo reprehenderit atque ab in totam quam nostrum vitae
                                quaerat molestias. Inventore reprehenderit facere corrupti nesciunt necessitatibus ipsam sed
                                adipisci voluptate vel ex excepturi architecto distinctio, blanditiis voluptatum accusantium
                                laboriosam sequi praesentium commodi exercitationem. Assumenda ad iste temporibus aliquid
                                aut non, nobis optio quaerat architecto fugiat harum inventore. Consequuntur architecto
                                perferendis tempora fuga cupiditate nam ad necessitatibus impedit error totam omnis tempore,
                                beatae, unde temporibus minima culpa distinctio illo perspiciatis. Vero reiciendis rem cum.
                                Inventore quasi quidem illum quis odio! Ducimus qui laudantium nihil maiores magni est
                                possimus distinctio animi. Similique pariatur unde natus dolores blanditiis maiores
                                veritatis corrupti minima ea quae, quidem sequi dicta nam a officia deleniti? Mollitia quis
                                facere veritatis, hic minus magnam libero beatae voluptatem accusamus quaerat, eius rerum
                                tempora soluta architecto dolorum asperiores quam delectus reprehenderit. Accusantium dolore
                                corrupti illum praesentium illo rem necessitatibus esse fugiat ab, harum excepturi saepe
                                pariatur, eaque provident ut doloribus. Cupiditate voluptate adipisci ipsa illo molestiae
                                quis eos nam facere quas nemo repellat placeat perferendis, saepe quaerat magni excepturi
                                temporibus debitis at veniam ducimus enim? Maiores, molestiae inventore obcaecati ullam sed
                                vero est nobis in doloribus nisi ad cumque, laboriosam ipsam explicabo laudantium
                                praesentium? Velit eligendi sit consequatur magni laborum incidunt enim, sunt quod maiores
                                fuga. Necessitatibus ex temporibus reprehenderit, culpa harum ad possimus! Veritatis debitis
                                ut fuga. Ut beatae nam modi itaque eligendi hic nostrum fugiat libero architecto deleniti
                                ratione quidem voluptatem repellat, autem quas ea quis blanditiis eveniet, doloribus eos!
                                Commodi dolorem, asperiores neque eum doloremque quae ipsa aspernatur! Eaque veniam
                                distinctio temporibus voluptate nihil. Facilis porro facere sequi obcaecati officia ut,
                                quisquam, alias vero vel ad, debitis nostrum corporis repudiandae eaque minus exercitationem
                                fugiat explicabo eos! Exercitationem vel debitis natus esse nulla placeat asperiores sit
                                inventore quisquam voluptas, distinctio alias, sapiente quae vero perferendis excepturi
                                praesentium ipsum, illo perspiciatis! A quis ipsam aut maxime reiciendis, alias iste numquam
                                neque consequatur vel cumque sint molestias dicta at sed ad? Porro veritatis quidem debitis
                                libero deserunt quo atque hic, quaerat quos ipsum sapiente non voluptatum cum. Nobis animi
                                in libero. Quasi provident ut ea!
                            </p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            {{-- Demo Modal --}}

            <!-- Button trigger modal -->
            <div class="d-flex justify-content-center">


                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#scrollModal">
                    Click Me
                </button>

            </div>
        </div>
    </div>
    {{-- End Scrolling Long Modal --}}
    {{-- Vertical Center Modal --}}
    <div class="mb-5">
        <h3>Vertical Centered Modal</h3>
        <div class="p-3 border rounded-lg">
            {{-- Demo Modal --}}
            <div class="d-flex justify-content-center mb-2">
                <div style="width: 500px">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>Modal body text goes here.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            {{-- Demo Modal --}}

            <!-- Button trigger modal -->
            <div class="d-flex justify-content-center">

                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#verticalCenteredModal">
                    Click Me
                </button>
            </div>
        </div>
    </div>
    {{-- End Vertical Center Modal --}}


    {{-- ---------------------------------------------------------------------------------------------------------------- --}}
    <!-- Default Modal -->
    <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    {{-- End Default --}}

    {{-- Static Backdrop Modal --}}
    <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Understood</button>
                </div>
            </div>
        </div>
    </div>
    {{-- End Static Backdrop Modal --}}

    {{-- Scrolling Long Modal --}}
    <div class="modal fade" id="scrollModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nihil incidunt doloribus culpa? Sed
                    voluptate veritatis soluta. Voluptatem esse quae commodi magni tenetur vel adipisci ullam eveniet natus
                    cumque! Perspiciatis architecto saepe eius esse neque! Quia neque, quibusdam nisi sit veniam laboriosam
                    non? Beatae commodi atque tempora iure animi aut, nobis voluptates assumenda explicabo. Perferendis
                    ipsam possimus asperiores architecto sed. Rerum atque aspernatur deleniti reprehenderit quasi iure
                    exercitationem illo laudantium eos, dolore tenetur praesentium quaerat mollitia, odit animi placeat ab a
                    corporis expedita! Nostrum magnam nam rerum dolore neque, quibusdam adipisci eos placeat officiis, ipsam
                    ullam ipsum temporibus quidem minus sequi? Natus exercitationem maxime nostrum facilis? At pariatur
                    alias voluptate aperiam excepturi autem sunt exercitationem tempora. Consequuntur hic incidunt
                    necessitatibus temporibus ipsam vero, voluptatibus tenetur porro cum sint, sequi eum dolorum iusto
                    voluptatum neque unde laborum possimus fugiat ea reprehenderit quae blanditiis! Sunt in eaque ipsam
                    placeat optio dignissimos perferendis praesentium quaerat tenetur adipisci ratione, error dolorum
                    perspiciatis quo fuga voluptate quas numquam? Ad culpa repellendus asperiores facilis! Dignissimos
                    incidunt fugiat vel error adipisci soluta laboriosam, corporis quasi cupiditate, magnam voluptatem eaque
                    facere nobis maiores ipsam delectus quo. Eveniet dolore quos ipsa deserunt expedita quas, sed sapiente
                    ex? Possimus facilis nihil, laborum optio officia ullam cum nam nisi ipsa pariatur architecto laboriosam
                    velit eaque atque voluptatum natus in sint quasi nemo nesciunt impedit ducimus ea quod maxime? Illo sint
                    et, accusantium aliquam, vitae exercitationem libero eveniet velit quidem at saepe praesentium aperiam,
                    facere sequi. Illum necessitatibus ullam, eos id doloribus tempora obcaecati laborum eaque inventore quo
                    atque eligendi aperiam nostrum praesentium molestiae autem voluptas. Eos dolores, ullam vero dolore
                    assumenda id, inventore ut hic excepturi omnis voluptatum voluptatibus mollitia. Debitis, vitae. Optio
                    magni suscipit, nobis aperiam sunt officia deleniti! Consequuntur iste maxime possimus deleniti debitis
                    praesentium eligendi veritatis quia aperiam nulla error facere illum consectetur soluta nihil
                    perspiciatis illo maiores vero nostrum, eum, vel natus, minima vitae ducimus? Corrupti, voluptas
                    perspiciatis quis animi quod, exercitationem molestias placeat facere nam temporibus nostrum ad nobis et
                    porro consequatur cum doloremque, velit enim a cumque praesentium blanditiis sequi fugiat vel. Totam
                    eligendi expedita, itaque voluptatibus ullam quasi molestiae natus commodi, in odio delectus.
                    Reprehenderit, voluptatem in. Nam modi suscipit quam, repudiandae non exercitationem! Esse vitae a
                    provident odio tempore assumenda laborum nisi, libero molestias rem officiis odit quo recusandae nulla
                    quod similique possimus voluptas minus nam! Ducimus sed rem provident. Numquam, ipsam architecto
                    sapiente dolorem beatae cum, exercitationem eos unde doloremque officia molestiae libero, totam
                    aspernatur accusantium earum! Et, veniam obcaecati vitae rerum incidunt nobis placeat eligendi
                    consectetur consequatur asperiores, voluptate iusto itaque molestias voluptatibus adipisci? Nesciunt,
                    molestias assumenda! Facere assumenda suscipit animi labore aperiam expedita deleniti illo laudantium
                    quidem, reiciendis nulla blanditiis obcaecati ut sit molestiae dolores neque ducimus voluptatem ab
                    recusandae laboriosam! Suscipit cumque nulla reiciendis tenetur quam perspiciatis sequi est quaerat
                    earum a, ad cupiditate? Fuga perferendis sit nisi? Harum libero, in officiis aspernatur quam voluptate
                    ad provident? Maxime, dolorum nostrum tenetur doloribus impedit provident? Enim asperiores vel accusamus
                    expedita?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    {{-- End Scrolling Long Modal --}}

    <!-- Vertical Centered Modal -->
    <div class="modal fade" id="verticalCenteredModal" tabindex="-1" aria-labelledby="verticalCenteredModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="verticalCenteredModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    {{-- End Vertical Centered Modal --}}
@endsection
