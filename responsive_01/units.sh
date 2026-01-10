absolute unit
{
    fixed value
    px
    cm
    pt
    in
    mm
}


relative unit
{
    depend on parent,screen-size or any other factor or we can simply say it is relative to others
    % (percent)
    vh (viewport's height)
    vw (viewport's width)
    em    :-relative to the font size of own or its nearest ancestor(defined font-size)
    rem   :-relative to root element font size
    vmin (viewport's minimum)
    vmax (viewport's maximum)
    ch
    ex
}

viewport - it the area of the display where browser allows us to showcase our website

100vw = full viewport width

default font-size of all elements like html,body,main,section,nav,aside,footer is 16px
1rem=16px
default 1em=16px

clamp(lowerlimit, value, upperlimit)
