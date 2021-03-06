var current_slide;

function scroll_up() { 
    if ( current_slide < $('.slide').length)  {
        $('.slide-' + current_slide.toString()).css('margin-top','-100%');
        
        if ( current_slide == 1 ) {
            $('.slide-' + current_slide.toString()).delay(1000).fadeOut(1);
        }

        $('.slide-' + (current_slide + 1).toString()).fadeIn(1);
        // $('.slide-' + (current_slide - 1).toString() + ' > .content-wrap').fadeIn(1);

        current_slide ++;
    }

    get_arrow_colour();

    console.log(current_slide);
}

function scroll_down(){
    $('.slide-' + (current_slide - 1).toString()).fadeIn(1);
    // $('.slide-' + (current_slide - 1).toString() + ' > .content-wrap').fadeIn(1);
    $('.slide-' + (current_slide - 1).toString()).css('margin-top','0px');
    
    if( current_slide != 1 ) {
        $('.slide-' + current_slide.toString()).delay(1600).fadeOut(1);    
    }

    if ( current_slide > 1)  {
        current_slide --;
    }

    get_arrow_colour();

    console.log(current_slide);
}

function get_arrow_colour(){
    var arrow_colours = ["white","gold"];

    $('.scroll-arrows').css('color',arrow_colours[current_slide - 1]);
}

function define_var(){
    current_slide = 1;
}

function move(){
    var Xoffset = get_offset(event.clientX, $( window ).width())
    var Yoffset = get_offset(event.clientY, $( window ).height())

    console.log('X:' + Xoffset + ' Y:' + Yoffset);
    $('.move-image, .slide-1-text').css('transform','translate(' + Xoffset + 'px, ' + Yoffset + 'px) scale(1.04)');
    $('.content-wrap').css('transform','translate(' + Xoffset*2 + 'px, ' + Yoffset*2 + 'px)');
}

function get_offset(mouse, browser){
    return (((mouse - (browser / 2))/(browser / 2))*10) * -1;
}