// якщо різна ширина картинок
let track = document.querySelector('.slider__track');
let slides = document.querySelectorAll('.img');
let sliderWidth = document.querySelector('.slider-main').offsetWidth;
let widthArray= [0];
let lineWidth = 0;
let offset=0;
let step=0;
let ostatok = 0;
// console.log(sliderWidth);
// for (let i = 0; i<slides.length; i++){
//     widthArray.push(slides[i].offsetWidth);
//     lineWidth += slides[i].offsetWidth;
// };
// track.style.width = lineWidth + 'px';
// console.log(widthArray);

// document.onclick = function(){
//     ostatok = lineWidth - sliderWidth - (offset + widthArray[step]);
//     if (ostatok >= 0){
//         offset = offset + widthArray[step];
//         track.style.left = -offset + 'px';

//     }
//     else{
//         track.style.left = -(lineWidth - sliderWidth) + 'px';
//         offset=0;
//         step = -1;
//     }

//     if(step + 1== slides.length ){
//         step = 0;
//         offset = 0;
//     }
//     else{
//         step++;
//     }
// }


///якщо ширина картинок однакова

const slidertrack = document.querySelector('.slider__track');

document.querySelector('.btn-next').addEventListener('click', function(){
    offset = offset + 709;
    if (offset > 1159){
        offset = 0;
    }
    track.style.left = -offset + 'px';
});

document.querySelector('.btn-prev').addEventListener('click', function(){
    offset = offset + 709;
    if (offset > 1159){
        offset = 0;
    }
    track.style.left = -offset + 'px';
});

//дата на картках

    // function zero_first_format(value){
    //     if (value < 10)
    //     {
    //         value='0'+value;
    //     }
    //     return value;
    // };
    
    // function date_time()
    // {
    //     var current_datetime = new Date();
    //     var day = zero_first_format(current_datetime.getDate());
    //     var month = zero_first_format(current_datetime.getMonth()+1);

    //     return day+"."+month;
    // }
    // document.getElementById('aside__block-pubtime').innerHTML= date_time();
    

    //дата сайдбар

    // let d = new Date();

    // let month=new Array("січня","лютого","березня","квітня","травня","червня",
    //                     "липня","серпня","вересня","жовтня","листопада","грудня");

    // let currentDate = document.write([d.getDay()]+" " +d.getDate()+ " " + month[d.getMonth()]
    //                     + " " + d.getFullYear() + " г.");
                        
    // document.getElementById('aside__block-pubtime').innerHTML= currentDate;


    function current_date(){
        let d = new Date();

        let month=new Array("січня","лютого","березня","квітня","травня","червня",
                        "липня","серпня","вересня","жовтня","листопада","грудня");

        return d.getDate()+ " " + month[d.getMonth()];
    };
    document.getElementById('aside__block-pubtime').innerHTML= current_date();


    //дата на анонсах подій

    function current_date_number(){
        let d = new Date();

        return d.getDate();
    };
    document.getElementById('date__number').innerHTML=  current_date_number();

    function current_date_month(){
        let d = new Date();

        let month = new Array("січня","лютого","березня","квітня","травня","червня",
        "липня","серпня","вересня","жовтня","листопада","грудня");

        return month[d.getMonth()] ;
    };
    document.getElementById('date__month').innerHTML=  current_date_month();
        
    function current_date_time(){

        let d = new Date();

        return d.getHours() + ":" + d.getMinutes();
    }

    document.getElementById('date__time').innerHTML=  current_date_time();


    // слайдер галерея

    $(document).ready(function(){
        $('.slider__line').slick({
            infinite: true,
            speed: 600,
            centerMode: true,
            centerPadding: '',
            slidesToShow: 3,
            adaptiveHeight: true,
            cssEase: 'linear',
            prevArrow: "<img src='../icons/slider/chevron-left-solid.svg' class='prev-slide' alt = '1'>",
            nextArrow: "<img src='../icons/slider/chevron-right-solid.svg' class='next-slide' alt = '2'>",
        });

    });